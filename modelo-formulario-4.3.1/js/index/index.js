var Index = (function () {
	return {
		init: function () {
			var scope = this,
				$document = $(document);

			//Datepicker
			CustomDatePicker.setDefault();
			CustomDatePicker.setDefaultRange();

			//Select2
			CustomSelect2.setDefaultSingle();
			CustomSelect2.setDefaultMultiple();

			//Wysihtml5 - TextArea
			CustomWysihtml5.setDefault();

			//MaskInput
			CustomMaskInput.setDefaultMaskCNPJ();
			CustomMaskInput.setDefaultMaskCPF();
			CustomMaskInput.setDefaultMaskCep();
			CustomMaskInput.setDefaultMaskTelefone();
			CustomMaskInput.setDefaultMaskValor();


			$document.on("keydown", "#comentario", function (event) {
				scope.keyDownComentario();
			});

			$document.on("click", "#btn-cadastarEstado", function (event) {
				scope.clickBtnCadastrarEstado(event);
			});

			$document.on("click", "#btn-cadastrarCidade", function (event) {
				scope.clickBtnCadastrarCidade(event);
			});

			$document.on("click", "#btn-sweetAlertSuccess", function(event){
				scope.clickSweetAlertSucesso(event);
			});

			$document.on("click", "#btn-sweetAlertError", function(event){
				scope.clickSweetAlertError(event);
			});

		},
		keyDownComentario: function () {
			Framework.countCaracteres("#comentario", "#resultado", 500);
		},
		clickBtnCadastrarEstado: function (event) {
			event.preventDefault();
			Framework.showModal(".modal");
		},
		clickBtnCadastrarCidade: function (event) {
			event.preventDefault();
			Framework.showModal(".modal");
		},
		clickSweetAlertSucesso: function(event){
			event.preventDefault();
			CustomSweetAlert.setDefaultSuccess();
		},
		clickSweetAlertError: function(event){
			event.preventDefault();
			CustomSweetAlert.setDefaultError();
		}
	};

})();

$(function () {
	Index.init();

});
