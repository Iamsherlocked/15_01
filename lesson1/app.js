// let string = prompt('tell me ur name')
//
// let regExp = /a/i;
// console.log(string.match(regExp))

// const letter = 'abDcadAcDBasb'
// const regExp = /a/gi;
// console.log(letter.match(regExp))

// const letter = "1111sda2222dss3333dsa4444dsa555666"
// const regExp = /\d/g;
// console.log(letter.match(regExp))
// console.log(letter.replace(regExp, '+'))
// console.log(letter)


// const letter = "1111sda2222dss3333dsa4444dsa555666"
// const regExp = /\w/g;
// console.log(letter.match(regExp))
// // console.log(letter.replace(regExp, '+'))
// console.log(letter)


// const phoneInput = document.querySelector('.phoneInput');
// const phoneCheck = document.getElementsByClassName("phoneCheck");
// const phoneResult = document.querySelector('.phoneResult')
// console.log(phoneCheck[0], "PhoneCheck");
// console.log(phoneInput, "PhoneInput");

// const phoneRegExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/
//
// phoneCheck[0].addEventListener("click", () =>{
//     if (phoneRegExp.test(phoneInput.value)){
//         phoneResult.innerText = 'Ok'
//         phoneResult.style.color = 'green'
//     } else {
//         phoneResult.innerText = 'not ok'
//         phoneResult.style.color= 'red'
//     }
// })

// let num = 0;
//
// const count = () =>{
//     num++;
//     console.log(num)
//     if (num <= 150){
//         count();
//     }
// }
// count()



const people = {
  John: {
      age: 25,
      parents: {
          Kelly: {
              age: 45,
              parents: {
                  Melany: {
                      age: 22,
                      parents: {
                          Lily: {
                              age: 22
                          }
                      }
                  }
              },
              Tony: {
                  age: 45,
                  parents: {
                      Keany : {
                          age: 33
                      }
                  }
              },
          },
      },
      Sam: {
          age: 15,
          parents: {
              Jean: {
                  age: 35,
                  parents : {
                      Jessy : {
                          age: 111,
                      }
                  }
              },
          },
      },
  }}

const parentList = (obj) =>{
    if (obj.parents){
        for (let key in obj.parents){
            console.log(key);
            parentList(obj.parents[key]);
        }
    }
}

for (let key in people){
    parentList(people[key])
}




