var CustomDatePicker = (function () {
    return {
        init: function () {
            var scope = this;
        },
        setDefault: function () {

            $.fn.datepicker.dates['pt-BR'] = {
                days: ['Domingo', 'Segunda', 'Ter�a', 'Quarta', 'Quinta', 'Sexta', 'S�bado'],
                daysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S�b'],
                daysMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
                months: ['Janeiro', 'Fevereiro', 'Mar�o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                today: 'Hoje',
                monthsTitle: 'Meses',
                clear: 'Limpar',
                format: 'dd/mm/yyyy'
            };


            $('.datepicker').datepicker({
                todayBtn: "linked",
                format: 'dd/mm/yyyy',
                language: 'pt-BR',
                autoclose: true
            });
        },
        setDefaultRange: function () {

            $('input[name="daterange"]').daterangepicker({
                "locale": {
                    "format": "DD/MM/YYYY",
                    "separator": " - ",
                    "applyLabel": "Selecionar",
                    "cancelLabel": "Cancelar",
                    "fromLabel": "De",
                    "toLabel": "At�",
                    "customRangeLabel": "Custom",
                    "weekLabel": "W",
                    "daysOfWeek": [
                        "Dom",
                        "Seg",
                        "Ter",
                        "Qua",
                        "Qui",
                        "Sex",
                        "S�b"
                    ],
                    "monthNames": [
                        "Janeiro",
                        "Fevereiro",
                        "Mar�o",
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
                    "firstDay": 0
                },
                

            }, function (start, end, label) {
                console.log("Uma nova sele��o de data foi feita: " + start.format('DD-MM-YYYY') + ' to ' + end.format('DD-MM-YYYY'));
            });
        }
    };

})();

$(function () {
    CustomDatePicker.init();

});
