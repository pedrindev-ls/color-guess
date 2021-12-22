//https://pt.stackoverflow.com/questions/59915/como-chamar-uma-vari%C3%A1vel-do-js-para-um-h1-do-html
let cores = document.getElementById('rgb-color')
cores.innerText = '(0, 0, 0)'

let botao = document.getElementById('reset-game');
let ganhador = 0;



function roletandoCores(event){
    let corQueGanha = Math.floor(Math.random()*7);
    ganhador = corQueGanha
    let grupo = document.getElementsByClassName('ball')
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
    let comemo = document.getElementById('legenda')
    if(altA === grupo[ganhador]){
        comemo.innerText = 'Acertou!'
        roletandoCores(); //https://pt.stackoverflow.com/questions/52162/if-else-com-fun%C3%A7%C3%B5es
    } else {
        comemo.innerText = 'Errou!'
        roletandoCores();
    }
})

altB.addEventListener('click', function(event){
    let grupo = document.getElementsByClassName('ball')
    let comemo = document.getElementById('legenda')
    if(altB === grupo[ganhador]){
        comemo.innerText = 'Acertou!'
        roletandoCores();
    } else {
        comemo.innerText = 'Errou!'
        roletandoCores();
    }
})

altC.addEventListener('click', function(event){
    let grupo = document.getElementsByClassName('ball')
    let comemo = document.getElementById('legenda')
    if(altC === grupo[ganhador]){
        comemo.innerText = 'Acertou!'
        roletandoCores();
    } else {
        comemo.innerText = 'Errou!'
        roletandoCores();
    }
})

altD.addEventListener('click', function(event){
    let grupo = document.getElementsByClassName('ball')
    let comemo = document.getElementById('legenda')
    if(altD === grupo[ganhador]){
        comemo.innerText = 'Acertou!'
        roletandoCores();
    } else {
        comemo.innerText = 'Errou!'
        roletandoCores();
    }
})

altE.addEventListener('click', function(event){
    let grupo = document.getElementsByClassName('ball')
    let comemo = document.getElementById('legenda')
    if(altE === grupo[ganhador]){
        comemo.innerText = 'Acertou!'
        roletandoCores();
    } else {
        comemo.innerText = 'Errou!'
        roletandoCores();
    }
})

altF.addEventListener('click', function(event){
    let grupo = document.getElementsByClassName('ball')
    let comemo = document.getElementById('legenda')
    if(altF === grupo[ganhador]){
        comemo.innerText = 'Acertou!'
        roletandoCores();
    } else {
        comemo.innerText = 'Errou!'
        roletandoCores();
    }
})