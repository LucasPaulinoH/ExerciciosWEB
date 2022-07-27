const nome = document.getElementById('nome');
const email = document.getElementById('email');
const enviar = document.getElementById('enviar');

enviar.addEventListener('click', function(){
  if(nome.value === '' || email.value === ''){
    return alert('Preencha os campos antes de prosseguir!');
  } else{
    
  }
});