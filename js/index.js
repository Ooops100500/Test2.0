jQuery(function() {
	$('.form').validate({
		rules: {
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			email: {
				required: 'Поле обязательно для заполнения'
			}
		}
	})

	$('.burger').click( () => {
		$('.header__menu').toggleClass('active')
	})
})