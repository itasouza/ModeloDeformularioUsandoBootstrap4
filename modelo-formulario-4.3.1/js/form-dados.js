"use strict";


$(document).ready(function () {

    definirDatePicker();

    //usando jquery.mask para markara de campos
    $('.campovalor').mask('#.##0,00', { reverse: true });
    $('.telefone').mask('(00)00000-0000');
    $('.cep').mask('00000-000');
    $('.cpf').mask('000.000.000-00', { reverse: true });
    $('.cnpj').mask('00.000.000/0000-00', { reverse: true });


    //usando jquery.payment para markara de cartão de crédito
    $('input.numero-cartao').payment('formatCardNumber');
    $('input.expiracao-cartao').payment('formatCardExpiry');
    $('input.codigo-cartao').payment('formatCardCVC');
    $('input.numerico').payment('restrictNumeric');



    // Adicione o seguinte código se você quiser que o nome do arquivo apareça em select
    $(".custom-file-input").on("change", function () {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });

    //habilitar popover e tooltip
    $(function () {
        $('[data-toggle="popover"]').popover();
        $('[data-toggle="tooltip"]').tooltip();
    })


    // Adicionar classes ao carregar o documento
    addClasses();
    addClassesListagem();

    $(window).resize(function () {
        // Adicionar sempre que a tela for redimensionada
        addClasses();
        addClassesListagem();
    });


    //usado no select2
    $(".select2-single, .select2-multiple").select2({
        placeholder: "Selecione um registro",
        theme: "bootstrap",
        width: null,
        containerCssClass: ':all:',
        language: "pt-BR",
        allowClear: true,
        inputTooShort: function () {
            return "Você deve inserir mais caracteres ...";
        }
    });



    //usado ClassicEditor
     ClassicEditor.create( document.querySelector('#editor'),{
        language:"pt-br",
     })

     .then( editor => {

             console.log( editor );
             editor.setData( '<p>texto aqui!.</p>' );


             let tamanhoTexto = editor.getDate().length;
             console.log(tamanhoTexto);
     } )
     .catch( error => {
            // console.error( error );
     } );

});

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


$("#editor").on('change keyup paste', function() {
    console.log("ok");
});

//contagem de caracteres 
function QtdCaracteresCampo() {
    var txt = document.getElementById("editor").value;
    var n = txt.length;
    var TotalCaracteresPermitido = 500;
    if (n < 500) {
        // console.log("Quantidade de Carateres: " + n)
        var Total = TotalCaracteresPermitido - n;
        document.getElementById("resultado").innerHTML = "Quantidade de Carateres Restante : " + Total;
        return true;
    }
    alert("Quantidade de Caracteres ultrapassou o limite permitido");
    return false;
}


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//visualizar os nome dos arquivos selecionados no file Multiplo
$(".fileMultiplo").change(function() {
  readURL(this);
});

function readURL(input) {
  if (input.files && input.files[0]) {
      for (let i = 0; i < input.files.length; i++){
          console.log(input.files[i].name)
      }
  }
}


//validar a quantidade de arquivos enviados 
$('.fileMultiplo').change(function(){
    var files = this.files; // selecionar os arquivos
    var qtde = files.length; // conta a quantidade

    if(qtde > 5) { //verificar se é maior que 5
       swal({
            position: 'top-end',
            showConfirmButton: false,
            toast: true,
            timer: 3000,
            type: 'error',
            title: 'Não é permitido enviar mais do que 5 arquivos.'
        });
       	$(this).val("");
       	return false;
    } else { // se não for mais que 5, deixa continuar.
       	return true;
    }
});



//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function mensagemToast(){
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "showDuration": "200",
        "hideDuration": "500",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }

      toastr["success"]("Tudo certo", "Registro gravado com sucesso");
      toastr["info"]("Não esqueça", "você tem uma nova mensagem");
      toastr["warning"]("Cuidado", "Ocorreu um erro no processo de expedição");
      toastr["error"]("Não deu certo", "O registro não foi gravado corretamente");
}


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
   
    //usando sweetalert2
    function GravacaoSucessoSweetalert(){
        swal({
            position: 'top-end',
            showConfirmButton: false,
            toast: true,
            timer: 3000,
            type: 'success',
            title: 'Registro foi gravado com sucesso'
        });   
    }

    function GravacaoErroSweetalert(){
        swal({
            position: 'top-end',
            showConfirmButton: false,
            toast: true,
            timer: 3000,
            type: 'error',
            title: 'Registro não foi gravado'
        });   
    }

    //usando sweetalert2
    document.getElementById('btnSalvar').onclick = function () {
        swal({
            position: 'top-end',
            showConfirmButton: false,
            toast: true,
            timer: 3000,
            type: 'success',
            title: 'Registro foi gravado com sucesso'
        });
    };


	  document.getElementById('btn-sweetAlertError').onclick = function () {
        swal({
                title: 'Erro!',
                text: "Operação não foi realizada com sucesso.",
                type: 'error',
                showCancelButton: false,
                confirmButtonColor: '#dc3545',
                confirmButtonText: 'Ok'
        });
    };
	
	 document.getElementById('btn-sweetAlertSuccess').onclick = function () {
        swal({
                title: 'Sucesso!',
                text: "Operação realizada com sucesso.",
                type: 'success',
                showCancelButton: false,
                confirmButtonColor: '#28a745',
                confirmButtonText: 'Ok'
        });
    };
	

    document.getElementById('btn-sweetAlertOpcao').onclick = function () {
        swal({
            title: 'Você está certo disso?',
            text: "Está operação vai mudar a agenda!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, tenho certeza!',
            cancelButtonText: 'Não Tenho certeza...'
        }).then((result) => {
            if (result.value) {
                GravacaoSucessoSweetalert();
            }
        })
    };

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function MostrarModal() {
    $(".modal").modal();
}


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
function LimparSelect2(idSelect){
    $(idSelect).val([]).trigger('change');
}

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//configuração do datepicker
function definirDatePicker() {
    $.fn.datepicker.dates['pt-BR'] = {
        days: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        daysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        daysMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
        months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        today: 'Hoje',
        monthsTitle: 'Meses',
        clear: 'Limpar',
        format: 'dd/mm/yyyy'
    };

    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
        language: 'pt-BR'
    });

}


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//personalizar o botão para o tamanho da janela
function addClasses() {
    $(".bg-light").each(function () {
        var scre = $("body").width();
        if (scre <= 768) {
            $(".btnPersonalizado").addClass("btn-block");
        } else {
            $(".btnPersonalizado").removeClass("btn-block");
        }

    });
}

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


//personalizar a listagem de dados
function addClassesListagem() {
    $(".bg-light").each(function () {
        var scre = $("body").width();
        if (scre >= 768) {
            $("#listagem").addClass("p-5");
            $("#listagem").removeClass("p-3");
        } else {
            $("#listagem").removeClass("p-5");
            $("#listagem").addClass("p-3");
        }

    });
}

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//jscolor para selecionar cor na página
function update(jscolor) {
    document.getElementById('receberCor').style.backgroundColor = '#' + jscolor
}


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//daterangepicker para seleção de intervalo de data
$(function () {
    $('input[name="daterange"]').daterangepicker({
        "locale": {
            "format": "DD/MM/YYYY",
            "separator": " - ",
            "applyLabel": "Gravar",
            "cancelLabel": "Cancelar",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
                "Dom",
                "Seg",
                "Ter",
                "Qua",
                "Qui",
                "Sex",
                "Sáb"
            ],
            "monthNames": [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro"
            ],
            "firstDay": 1
        },
        opens: 'left',

    }, function (start, end, label) {
        console.log("Uma nova seleção de data foi feita: " + start.format('DD-MM-YYYY') + ' to ' + end.format('DD-MM-YYYY'));
    });

});

//limpar campo intervalo de data
$('#intervalodata').on('cancel.daterangepicker', function (ev, picker) {
    $('#intervalodata').val('');
});

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
