// Exemplo de JavaScript inicial para desabilitar submissões de formulários se houver campos inválidos
(function () {
  'use strict'

   
  window.addEventListener('load', function () {
   // Busque todos os formulários nos quais queremos aplicar estilos de validação personalizados do Bootstrap
    var forms = document.getElementsByClassName('needs-validation')

    // Faça um loop sobre eles e impeça a submissão
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
}())

