let codigo1 = Math.floor(Math.random()*255)+1;
let codigo2 = Math.floor(Math.random()*255)+1;
let codigo3 = Math.floor(Math.random()*255)+1;

let cores = document.getElementById('rgb-color')

//https://pt.stackoverflow.com/questions/59915/como-chamar-uma-vari%C3%A1vel-do-js-para-um-h1-do-html

cores.innerText = '(0, 0, 0)'

let botao = document.getElementById('reset-game');
let corQueGanha = Math.floor(Math.random()*7);

function roletandoCores(event){
    let grupo = document.getElementsByClassName('ball')
    for(let i = 0; i < grupo.length; i++){
    let cor1 = Math.floor(Math.random()*255)+1;
    let cor2 = Math.floor(Math.random()*255)+1;
    let cor3 = Math.floor(Math.random()*255)+1;
    grupo[i].style.backgroundColor = 'rgb(' + cor1 + ', ' + cor2 + ', ' + cor3 + ')'
    if (i === corQueGanha){
        cores.innerText = '(' + cor1 + ', ' + cor2 + ', ' + cor3 + ')'
    }
    }
}

botao.addEventListener('click', roletandoCores)

let altA = document.getElementById('cor1')
let altB = document.getElementById('cor2')
let altC = document.getElementById('cor3')
let altD = document.getElementById('cor4')
let altE = document.getElementById('cor5')
let altF = document.getElementById('cor6')

altA.addEventListener('click', function(event){
    let grupo = document.getElementsByClassName('ball')
    let comemo = document.getElementById('legenda')
    if(opcoes === grupo[corQueGanha]){
        comemo.innerText = 'Acertou!Novas Cores!'
    } else {
        comemo.innerText = 'Errou! Tente Denovo!'
    }
})