document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('form-sorteador').addEventListener('submit', function(e){
    e.preventDefault()
    let numeroMaximo = document.getElementById('numero-maximo').value
    numeroMaximo = parseInt(numeroMaximo)
    let numeroAleatorio = Math.floor(Math.random() * numeroMaximo)
  
    document.getElementById('resultado-valor').innerHTML = numeroAleatorio + 1
    document.querySelector('.resultado').style.display = 'block'
  })
})