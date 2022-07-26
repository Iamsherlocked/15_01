// const obj = {
//     name: "John",
//     age: 32
// }
// // const data = JSON.stringify(obj); //делает object - обычная строка
//
// console.log(obj)
// console.log(data)
// console.log(JSON.parse(data))
//
const btn = document.querySelector('.btn');
const name = document.querySelector('.name');
const age = document.querySelector('.age');
//
btn.addEventListener("click", () => {
    const request = new XMLHttpRequest();// Создание запроса
    request.open("GET", "data.json");// объявление метода запроса
    request.setRequestHeader("Content-type", "application/json");//Задали тип данных
    request.send(); //Отправка запроса
    request.addEventListener("load", ()=>{
        const data = JSON.parse(request.response)
        console.log(data)
        document.querySelector(".name").innerHTML = data.name
        document.querySelector(".age").innerHTML = data.age
    })
})


// const obj = {
//     name: "John",
//     age: 32
// }
//
// obj2 = {...obj}
// obj2.name = "Aza"
//
// console.log(obj)
// console.log(obj2)

// const requestUrl = 'https://jsonplaceholder.typicode.com/posts'
//
// const xhr  = new XMLHttpRequest()
// xhr.open("GET", requestUrl)
// xhr.responseType = 'json'
//
// xhr.onload = () => {
//     console.log(xhr.response)
// }
//
// xhr.send();
// console.log(xhr);

