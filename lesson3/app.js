const doHomework = (subject, callback) => {
    alert(`Starting me ${subject} homework`)
    // callback()
    callback()
}
const alertFinished = () =>{
    alert("done")
}
doHomework('math', alertFinished);

const btn = document.querySelectorAll('button');

// btn.forEach((item)=>{
//     item.addEventListener("click", (event)=>{
//         if (event.target.classList.contains("red")){
//             event.target.classList.remove("red")
//         } else{
//             event.target.classList.add("red")
//         }
//     })
// })

const newBtn = document.createElement("button");
const btns = document.querySelector(".btns");
btns.append(newBtn)
newBtn.innerText = "777"

btns.addEventListener("click", (event)=>{
    if (event.target.tagName === "BUTTON"){
        if (event.target.classList.contains("red")){
            event.target.classList.remove("red")
        } else if (event.target.classList.contains("blue")){
            event.target.classList.add("black")
        } else if (event.target.classList.contains("jock")){
            event.target.classList.add("green")
        } else {
            event.target.classList.add("red")
        }}
})

const topScroll = document.body.scrollTop

console.log(topScroll)