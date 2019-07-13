$(document).ready(function () {

    definirDatePicker();
    $('.campovalor').mask('#.##0,00', { reverse: true });
    $('.telefone').mask('(00)00000-0000');
    $('.cep').mask('00000-000');

    // Adicione o seguinte código se você quiser que o nome do arquivo apareça em select
    $(".custom-file-input").on("change", function () {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });

    $(function () {
        $('[data-toggle="popover"]').popover()
    })

});

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




