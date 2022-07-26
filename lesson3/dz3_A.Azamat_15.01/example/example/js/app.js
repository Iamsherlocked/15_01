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
const modalTrigger =  document.querySelector(".btn_white")
const closeModalBtn = document.querySelector(".modal__close")

console.log(modal)
console.log(modalTrigger)
console.log(closeModalBtn)

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

modalTrigger.addEventListener("click", openModal)
modal.addEventListener("click", (event) =>{
    if (event.target === modal){
        closeModal()
    }
})
console.log(modal)




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

// console.log(document.documentElement.scrollHeight)
// console.log(document.documentElement.clientHeight)


//DZ_Automatic_Slider_With_SetInterval


let i = 0;
function nextImages () {
    if (i === tabContent.length -1 ){
        showContent()
        i = 0;
    } else {
        i++
    }
    hideContent()
    showContent(i)

}
setInterval(nextImages, 2000)
console.log( tabContent.length -1)


const form = document.querySelectorAll("form")

form.forEach((item)=>{
    postData(form)
});

const message = {
    loading: 'Идет загрузка!',
    succses: 'Спасибо, скоро свяжемся!',
    fail: 'Что-то пошло не так'
}

function postData(form){
    form.addEventListener("submit", (e) =>{
        e.preventDefault();

    const messageBlock = document.createElement('div')
    messageBlock.textContent = message.loading
        form.append(messageBlock)

        const request = new  XMLHttpRequest()
        request.open("POST", "server.php")
        request.setRequestHeader("Content-type", "application/json");

        const formData = new FormData(form)
        const object = {}

        formData.forEach((item, i) =>{
            object[i] = i;

        });
        const json = JSON.stringify(object)
        request.send(json)
        request.addEventListener("load", ()=>{
            if (request.status === 200){
                console.log(request.response)
                messageBlock.textContent = message.succses
            } else {
                messageBlock.textContent = message.fail
            }
        })
    })
}




