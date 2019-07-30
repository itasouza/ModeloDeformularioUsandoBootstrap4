var CustomSelect2 = (function () {
    return {
        init: function () {
            var scope = this;
        },
        setDefaultSingle: function () {

            $(".select2-single").select2({

                placeholder: "Selecione uma opção",//uma op��o
                theme: "bootstrap",
                width: null,
                containerCssClass: ':all:',
                language: "pt-BR",
                allowClear: true,
                inputTooShort: function () {
                    return "Você deve inserir mais caracteres.";
                }
            });

        },
        setDefaultMultiple: function () {

            $(".select2-multiple").select2({
                placeholder: "Selecione um registro", //uma op��o
                theme: "bootstrap",
                width: null,
                containerCssClass: ':all:',
                language: "pt-BR",
                inputTooShort: function () {
                    return "Você deve inserir mais caracteres.";
                }
            });

        },
       
    };

})();

$(function () {
    CustomSelect2.init();

});
