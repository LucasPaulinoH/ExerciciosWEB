const nome = document.getElementById('nome');
const email = document.getElementById('email');
const enviarButton = document.getElementById('enviar');
const lista = document.querySelector('.lista');

enviarButton.addEventListener('click', function(){
  if(nome.value === '' || nome.value === ''){
    return alert('Por favor, preencha os campos solicitados!');
  } else {
    const li = document.createElement('li');
    li.classList = 'lista';
    li.innerHTML = `Nome: ${nome.value}<br/>Email: ${email.value}`;
    console.log(li);

    lista.appendChild(li);
  }

  nome.value = '';
  email.value = '';
});