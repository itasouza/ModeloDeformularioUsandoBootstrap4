$(document).ready(function () {

    definirDatePicker();
    $('.campovalor').mask('#.##0,00', { reverse: true });
    $('.telefone').mask('(00)00000-0000');
    $('.cep').mask('00000-000');
    $('.cpf').mask('000.000.000-00', { reverse: true });
    $('.cnpj').mask('00.000.000/0000-00', { reverse: true });

    // Adicione o seguinte código se você quiser que o nome do arquivo apareça em select
    $(".custom-file-input").on("change", function () {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });

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

 

    $(".select2-single, .select2-multiple").select2({
        placeholder: "Selecione um registro",
        theme: "bootstrap",
        width: null,
        containerCssClass: ':all:',
        language: "pt-BR",
        inputTooShort: function () {
            return "Você deve inserir mais caracteres ...";
        }
    });

   


});

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

//limpar select2
function LimparSelect2(idselect){
    $(idselect).val([]).trigger('change');
}

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

//personalizar a listagem de dados
function addClassesListagem(){
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




