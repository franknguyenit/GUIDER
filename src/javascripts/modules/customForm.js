import $ from 'jquery';
export default class customForm {
	constructor(element) {
		this.element = $(element);
		this.customForm();
	}

	customForm(){
		var $val =  $(".form-group-v2 .form-control:not(.selectpicker)");
		$val.focus(function(event) {
			$val.each(function() {
				if ($(this).val().length<1) {
					$(this).parents('.form-group-v2').removeClass('active-focus');
				}
			});	
			$(this).parents('.form-group-v2').addClass('active-focus');
		});

		$val.change(function() {
			$val.each(function() {
				if ($(this).val().length<1) {
					$(this).parents('.form-group-v2').removeClass('active-focus');
				}
			});	
			$(this).parents('.form-group-v2').addClass('active-focus');
		});

		$val.each(function() {
			if ($(this).val().length) {
				$(this).parents('.form-group-v2').addClass('active-focus');
			}
		});	

		$('.form-group-v2 .bootstrap-select.form-control').click(function(event) {
			$(this).parents('.form-group-v2').addClass('active-select');
		});

		$(document).click(function(event){
			if(!$(event.target).is(".form-group-v2 .form-control, .form-group-v2 .form-control*")){
				$val.each(function(index, el) {
					if ($(this).val().length<1) {
						$(this).parents('.form-group-v2').removeClass('active-focus');
					}
				});	
			}
		});
	}

}