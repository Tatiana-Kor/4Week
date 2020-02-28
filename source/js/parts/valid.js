export default function validEmail() {
    $('.js-email-valid').on('blur', function() {

        if (this.validity.valueMissing) {
            
            if ($(this).hasClass('form__email--success')) {$(this).removeClass('form__email--success')};

            $(this).addClass('form__email--error');
            $('.form-error').removeClass('hidden');

        } else {

            if (this.validity.patternMismatch) {

                if ($(this).hasClass('form__email--success')) {$(this).removeClass('form__email--success')};

                $(this).addClass('form__email--error');
                $('.form-error').removeClass('hidden');

            } else {

                if ($(this).hasClass('form__email--error')) {$(this).removeClass('form__email--error')};

                $(this).addClass('form__email--success');
                $('.form-error').addClass('hidden');

            }
        }
    });
    
}