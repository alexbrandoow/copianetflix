$(document).ready(function() {

    window.alert('SEJA MUITO BEM-VINDO!!')

    $('form#form').submit(function() {
        let inputs = $('input', $(this));

        let preencher = true;
        inputs.each(function() {
            if ($(this).val() == '') {
                preencher = false;
                $(this).addClass('erro');

               
            }
            else {
                $(this).removeClass('erro');
            }
        });

        if (!preencher) {
            if ($('div.alert', this).length == 0) {
                let div = $('<div>');
                div.addClass('alert alert-warning');
                div.html('O campo não foi preenchido');

                $('input', form).after(div);

                setTimeout(function() {
                    $('div.alert').hide('slow');
                }, 1000);
            }
        }

        return preencher;
    });
});

