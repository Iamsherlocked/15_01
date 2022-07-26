// LESSON 2
// ASYNK
// SET TIMEOUT

// console.log("ok");

const hi = () => {
  // console.log("hi");
};
setTimeout(hi, 2000);

// () => {} анонимная функция

setTimeout(() => {
  // console.log("he-he");
}, 3000);

// 1000 = 1 секунда

// SET INTERVAL

setInterval(() => {
  // console.log("interval");
}, 2000);

const sayHi = () => {
  // console.log("hi, dude");
};

const interval = setInterval(sayHi, 1000);
// clearInterval(interval);

setTimeout(() => {
  // clearInterval(interval);
}, 5000);

// ========

// const init = () => {
//   let name = "OK";
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// };
// init();

// const func = (num) => {
//   const culk = () => {
//     console.log(1000 * num);
//   };
//   culk();
// };
//
// func(24);

// const funk = (n) => {
//   return function (num) {
//     return n + num;
//   };
// };
//
// const addOne = funk(1);
// const addTen = funk(10);
//
// console.log(addOne(10));
// console.log(addTen(3));

const block = document.querySelector('.block')

let positionX = 0;
let positionY = 0;

const move = () => {
  if (positionX <= 400 && positionY == 0) {
    positionX += 50;
    block.style.left = `${positionX}px`;
    setTimeout(move, 200);
  } else if (positionX >= 400 && positionY <= 400) {
    positionY += 50;
    block.style.top = `${positionY}px`;
    setTimeout(move, 200);
  } else if (positionY >= 400 && positionX != 0) {
    positionX -= 50;
    block.style.left = `${positionX}px`;
    setTimeout(move, 200);
  } else if (positionX == 0 && positionY != 0) {
    positionY -= 50;
    block.style.top = `${positionY}px`;
    setTimeout(move, 200);
  }
};

move();



