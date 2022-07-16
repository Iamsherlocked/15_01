const block = document.querySelector('.block');


let position = 0;

const move = () =>{
    position+= 50;
    if (position > 450){
        position = 0
        event()
    }
    block.style.left =  `${position}px`
    setTimeout(move, 200)
}
move()

let count = 0;

function event () {
    count+=50;
    if (count > 450){
        count = 0;
    }
    block.style.top = `${count}px`
}


//Второй Вариант//===

// const block = document.querySelector('.block')
//
// let positionX = 0;
// let positionY = 0;
//
// const move = () => {
//   if (positionX <= 400 && positionY == 0) {
//     positionX += 50;
//     block.style.left = `${positionX}px`;
//     setTimeout(move, 200);
//   } else if (positionX >= 400 && positionY <= 400) {
//     positionY += 50;
//     block.style.top = `${positionY}px`;
//     setTimeout(move, 200);
//   } else if (positionY >= 400 && positionX != 0) {
//     positionX -= 50;
//     block.style.left = `${positionX}px`;
//     setTimeout(move, 200);
//   } else if (positionX == 0 && positionY != 0) {
//     positionY -= 50;
//     block.style.top = `${positionY}px`;
//     setTimeout(move, 200);
//   }
// };
//
// move();