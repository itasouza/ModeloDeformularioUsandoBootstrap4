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


    //editor de texto
    $('.textarea').wysihtml5({
        toolbar: {
          fa: true
        }
    });



});

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

    //usando sweetalert2
    document.getElementById('btnGravar').onclick = function () {
        swal({
            title: 'Você está certo disso?',
            text: "Está operação vai gravar os dados!",
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

//contagem de caracteres 
function QtdCaracteresCampo() {
    var txt = document.getElementById("comentario").value;
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
