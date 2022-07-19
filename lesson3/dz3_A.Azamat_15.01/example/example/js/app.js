const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabContent = document.querySelectorAll(".tabcontent")
console.log(tabs)
console.log(tabsParent)
console.log(tabContent)

const hideContent = () => {
    tabContent.forEach((item)=>{
        item.style.display = "none";
    });
    tabs.forEach((item) =>{
        item.classList.remove("tabheader__item_active")
    })
}

const showContent = (i = 0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active")

}
hideContent()
showContent()



    tabsParent.addEventListener("click",(event)=>{
    const target = event.target

    if (target.classList.contains("tabheader__item")){
        tabs.forEach((item, i)=>{
            if (target === item){
                console.log(i)
                hideContent()
                showContent(i)
            }
        })
    }
})



const modal = document.querySelector(".modal")
const modakTrigger =  document.querySelector(".btn_white")
const closeModalBtn = document.querySelector(".modal__close")

console.log(modal)
// console.log(modakTrigger)
// console.log(closeModalBtn)

const openModal = ()=>{
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

const closeModal = () =>{
    modal.classList.remove("show")
    modal.classList.add("hide")
    document.body.style.overflow = ""
}

closeModalBtn.addEventListener("click", closeModal)

modakTrigger.addEventListener("click", openModal)
modal.addEventListener("click", (event) =>{
    if (event.target === modal){
        closeModal()
    }
})




//Dz_Open_Modal_window_By_Scroll

onscroll = function(){
    const scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight

    );
     if(window.scrollY+1 >= document.documentElement.scrollHeight-document.documentElement.clientHeight) {
        openModal()
    }
};


//DZ_Automatic_Slider_With_SetInterval

let i = 0;
function nextImages () {
    if (i === tabContent.length -1){
        tabContent[i].style.display = 'none'
        i = 0;
        tabContent[0].style.display = 'block'
    } else  {
        tabContent[i].style.display = 'none'
        // i = 0;
        tabContent[i+1].style.display = 'block';
        i++
    }
    hideContent()
    showContent(i)

}
setInterval(nextImages, 2000)






