let tela = document.getElementById('tela');

function insert(p){
  tela.innerHTML += p;
}

function back(){
  tela.innerHTML = document.getElementById('tela').innerHTML.substring(0, tela.innerHTML.length - 1);
}

function allClear(){
  tela.innerHTML = '';
}

function calculate(){
  let resultado = eval(tela.innerText);
  if(tela.innerText != ''){
    tela.innerText = resultado;
    
  } else{
    alert('[ERRO] digite a expressão que deseja calcular.');
  }
}