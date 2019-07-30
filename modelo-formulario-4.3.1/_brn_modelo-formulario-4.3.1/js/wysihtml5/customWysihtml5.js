var CustomWysihtml5 = (function () {
	return {
		init: function () {
			var scope = this;
		},
		setDefault: function () {

			$('.textarea').wysihtml5({
				toolbar: {
					fa: true
				}
			});
		}
	};

})();

$(function () {
	CustomWysihtml5.init();

});
