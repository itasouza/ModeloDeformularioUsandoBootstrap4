var Framework = (function () {
    return {
        init: function () {
            var scope = this;
        },
        countCaracteres: function (selectorInput, selectorInputResult, quantidadePermitida) {
            var caracteresDigitados = $(selectorInput).val().length;
            
            if (caracteresDigitados < quantidadePermitida) {
                var quantidadeRestante = quantidadePermitida - caracteresDigitados;
                $(selectorInputResult).html("Quantidade de carateres Restante : " + quantidadeRestante);
            }
            else {
                $(selectorInputResult).html("Quantidade de caracteres ultrapassou o limite permitido");
            }
            return true;
        },
        showModal: function (selectorModal) {
            $(selectorModal).modal();
        }
    };

})();

$(function () {
    Framework.init();

});
