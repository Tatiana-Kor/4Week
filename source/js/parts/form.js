export default function handleFormSubmit() {

    $('.js-form').on('submit', e => {
        e.preventDefault();

        const $form = $(e.target);

        const params = {
            formData: $form.serializeArray()
        };

        const callbackSuccess = () => {
            $('.contact-us__form').addClass('contact-us__form--success');
            $('.form-success').removeClass('hidden');
        }

        const callbackError = errors => {
            console.group('Ошибка');
            errors.forEach(error => {
                console.log(`${ error.fieldName }: ${ error.message}`)
            });
            console.groupEnd();
        };

        window.API.onFormSubmit(params, callbackSuccess, callbackError)
    });
}
