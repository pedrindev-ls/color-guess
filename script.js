//https://pt.stackoverflow.com/questions/59915/como-chamar-uma-vari%C3%A1vel-do-js-para-um-h1-do-html

let numeroDeAcertos = 0 //novo

window.onload = function(){
    let numero = document.getElementById('numero-acertos')
    const armazenamento = localStorage.getItem('acertos')
    if (armazenamento){
        numeroDeAcertos = +armazenamento
    }
    numero.innerText = numeroDeAcertos
}


let cores = document.getElementById('rgb-color')
cores.innerText = '(0, 0, 0)'

let botao = document.getElementById('reset-game');
let ganhador = 0;


function storage(){//novo
    let numero = document.getElementById('numero-acertos')
    numeroDeAcertos = numeroDeAcertos + 1
    numero.innerText = numeroDeAcertos
}

function roletandoCores(event){
    let corQueGanha = Math.floor(Math.random()*7);
    ganhador = corQueGanha
    let grupo = document.getElementsByClassName('ball')
    let comemo = document.getElementById('answer')
    //comemo.innerText = 'Escolha uma cor'
        for(let i = 0; i < grupo.length; i++){
            let cor1 = Math.floor(Math.random()*255)+1;
            let cor2 = Math.floor(Math.random()*255)+1;
            let cor3 = Math.floor(Math.random()*255)+1;
            grupo[i].style.backgroundColor = 'rgb(' + cor1 + ', ' + cor2 + ', ' + cor3 + ')'
                if (i === ganhador){
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
    let comemo = document.getElementById('answer')
    let numero = document.getElementById('numero-acertos')
    if(altA === grupo[ganhador]){
        comemo.innerText = 'Acertou!'
        roletandoCores(); //https://pt.stackoverflow.com/questions/52162/if-else-com-fun%C3%A7%C3%B5es
        storage()
    } else {
        comemo.innerText = 'Errou! Tente novamente!'
        roletandoCores();
    }
    localStorage.removeItem('acertos')
    localStorage.setItem('acertos', numero.innerText)
})

altB.addEventListener('click', function(event){
    let grupo = document.getElementsByClassName('ball')
    let comemo = document.getElementById('answer')
    let numero = document.getElementById('numero-acertos')
    if(altB === grupo[ganhador]){
        comemo.innerText = 'Acertou!'
        roletandoCores();
        storage();
    } else {
        comemo.innerText = 'Errou! Tente novamente!'
        roletandoCores();
    }
    localStorage.removeItem('acertos')
    localStorage.setItem('acertos', numero.innerText)
})

altC.addEventListener('click', function(event){
    let grupo = document.getElementsByClassName('ball')
    let comemo = document.getElementById('answer')
    let numero = document.getElementById('numero-acertos')
    if(altC === grupo[ganhador]){
        comemo.innerText = 'Acertou!'
        roletandoCores();
        storage();
    } else {
        comemo.innerText = 'Errou! Tente novamente!'
        roletandoCores();
    }
    localStorage.removeItem('acertos')
    localStorage.setItem('acertos', numero.innerText)
})

altD.addEventListener('click', function(event){
    let grupo = document.getElementsByClassName('ball')
    let comemo = document.getElementById('answer')
    let numero = document.getElementById('numero-acertos')
    if(altD === grupo[ganhador]){
        comemo.innerText = 'Acertou!'
        roletandoCores();
        storage();
    } else {
        comemo.innerText = 'Errou! Tente novamente!'
        roletandoCores();
    }
    localStorage.removeItem('acertos')
    localStorage.setItem('acertos', numero.innerText)
})

altE.addEventListener('click', function(event){
    let grupo = document.getElementsByClassName('ball')
    let comemo = document.getElementById('answer')
    let numero = document.getElementById('numero-acertos')
    if(altE === grupo[ganhador]){
        comemo.innerText = 'Acertou!'
        roletandoCores();
        storage();
    } else {
        comemo.innerText = 'Errou! Tente novamente!'
        roletandoCores();
    }
    localStorage.removeItem('acertos')
    localStorage.setItem('acertos', numero.innerText)
})

altF.addEventListener('click', function(event){
    let grupo = document.getElementsByClassName('ball')
    let comemo = document.getElementById('answer')
    let numero = document.getElementById('numero-acertos')
    if(altF === grupo[ganhador]){
        comemo.innerText = 'Acertou!'
        roletandoCores();
        storage();
    } else {
        comemo.innerText = 'Errou! Tente novamente!'
        roletandoCores();
    }
    localStorage.removeItem('acertos')
    localStorage.setItem('acertos', numero.innerText)
})