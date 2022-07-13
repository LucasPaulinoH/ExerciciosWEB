let hor = 0, min = 0; seg = 0; mil = 0;
let intervalo;

function comecar(){
  timer();
  intervalo = setInterval(timer,10);
}

function parar(){
  clearInterval(intervalo);
}

function resetar(){
  clearInterval(intervalo);
  mil = 0;
  seg = 0; 
  min = 0;
  hor = 0;
  document.getElementById('tempo').innerHTML = '00:00:00:00'
}

function timer(){
  mil++;
  if(mil == 100){
    seg++;
    mil = 0;

    if(seg == 60){
      min++;
      seg = 0;

      if(min == 60){
        hor++;
        min = 0;
      }
    }
  }
  document.getElementById('tempo').innerHTML = `${toFormat(hor)}:${toFormat(min)}:${toFormat(seg)}:${toFormat(mil)}`;  
}

function toFormat(n){
  if(n < 10){
    return '0'+n;
  } else{
    return n;
  }
}