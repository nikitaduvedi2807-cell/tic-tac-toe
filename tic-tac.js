let boxes = document.querySelectorAll(".box")
let  reset= document.querySelector("#reset-btn")
let newgamebtn=document.querySelector("#new-btn")
let msgcontainer=document.querySelector(".msg-container")

let turnO=true;
let turnX=false;
let winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
const resetgame=()=>{
    turnO=true
    enablebtn()
    msgcontainer.classList.add("hide")
}
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        // console.log("button was clicked")
        if(turnO){
    
            box.innerText="O"
            turnO=false;

    
        }else{
            box.innerText="X"
            turnO=true
        }
        box.disabled=true

        checkWinner()
    })
});

const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true
    }

}
const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
    }

}
 const showwinner=(winner)=>{
    msgcontainer.innerHTML=`Congratulations Winner is ${winner}`
    disablebtn()
 }
const checkWinner=()=>{
    for(let pattern of winpattern){
       let posval1=boxes[pattern[0]].innerText
       let posval2=boxes[pattern[1]].innerText
       let posval3=boxes[pattern[2]].innerText

       if(posval1 !="" && posval2 !="" &&posval3 !=""){
        if(posval1===posval2 && posval2===posval3){
            console.log("winner",posval1)
            showwinner(posval1)
        }
       }
    }
}

newgamebtn.addEventListener("click",resetgame)
reset.addEventListener("click",resetgame)
       
       