var CustomMaskInput = (function () {
    return {
        init: function () {
            var scope = this;
        },
        setDefaultMaskValor: function () {
            $(".maskinput-valor").mask('#.##0,00', { reverse: true });
        },
        setDefaultMaskTelefone: function () {
            $(".maskinput-telefone").mask('(00)00000-0000')
        },
        setDefaultMaskCep: function () {
            $(".maskinput-cep").mask('00000-000');
        },
        setDefaultMaskCPF: function () {
            $(".maskinput-cpf").mask('000.000.000-00', { reverse: true });
        },
        setDefaultMaskCNPJ: function () {
            $(".maskinput-cnpj").mask('00.000.000/0000-00', { reverse: true });
        }
    };

})();

$(function () {
    CustomMaskInput.init();

});
