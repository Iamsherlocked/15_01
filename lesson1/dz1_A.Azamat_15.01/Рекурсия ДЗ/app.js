const block = document.querySelector('.block');
const click = document.querySelector('.click');

let position = 0;

click.addEventListener("click", () =>{
    position+= 50;
    if (position > 450){
        position = 0
        event()
    }
    block.style.left =  `${position}px`

})


let count = 0;

function event () {
    count+=50;
    if (count > 450){
        count = 0;
    }
    block.style.top = `${count}px`

}

