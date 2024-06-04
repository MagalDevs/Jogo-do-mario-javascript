const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')
const gameover = document.querySelector('.gameover')
const cloud = document.querySelector('.clouds')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');


    }, 500);
}
const scoreElement = document.getElementById('score');
let score = 0;

function updateScore() {
    score++;
    scoreElement.textContent = score;
}

setInterval(updateScore, 50);

const loop = setInterval(() =>{

    const pipeposition = pipe.offsetLeft;
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudposition = +window.getComputedStyle(cloud).right.replace('px', '');

    if (pipeposition <= 120 && pipeposition > 0 && marioposition < 110){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipeposition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioposition}px`;

        mario.src = 'image/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        cloud.style.animation = 'none';
        cloud.style.right = `${cloudposition}px`
        gameover.style.visibility = 'visible'
        clearInterval(loop);

    }

},10)

document.addEventListener('keydown', jump);