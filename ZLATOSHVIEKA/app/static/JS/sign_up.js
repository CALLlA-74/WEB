$(document).ready(function () {
    $('#idForm').submit(function (a) {
        a.prevenDefault();
        return false;
    });

    $('#idInp_login').change(function (e) {
        if (($('#idInp_login').val()).length <= 0) {
            $('#idError_login').css({ 'display': 'none' });
            $('#idDiv_name').css({ 'border': 'red solid 5px' });
            return;
        }
        $.ajax({
            url: '/check_login',
            method: 'get',
            dataType: 'json',
            data: {
                login: $('#idInp_login').val()
            },
            success: function(response){
                if (response.status == 201) {
                    $('#idError_login').css({ 'display': 'block' });
                    $('#idDiv_name').css({ 'border': 'red solid 5px' });
                }
                else {
                    $('#idError_login').css({ 'display': 'none' });
                    $('#idDiv_name').css({ 'border': 'rgb(68 211 2) solid 2px' });
                }
            }
        });
    });

    $('#idInp_email').change(function (e) {
        if (($('#idInp_email').val()).length <= 0 || /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/.test($('#idInp_email').val()) == false) {
            $('#idError_email').css({ 'display': 'none' });
            $('#idDiv_email').css({ 'border': 'red solid 5px' });
            return;
        }
        $.ajax({
            url: '/check_email',
            method: 'get',
            dataType: 'json',
            data: {
                email: $('#idInp_email').val()
            },
            success: function (response) {
                if (response.status == 201) {
                    $('#idError_email').css({ 'display': 'block' });
                    $('#idDiv_email').css({ 'border': 'red solid 5px' });
                }
                else {
                    $('#idError_email').css({ 'display': 'none' });
                    $('#idDiv_email').css({ 'border': 'rgb(68 211 2) solid 2px' });
                }
            }
        });
    });

    $('#idInp_password').change(function (e) {
        if (($('#idInp_password').val()).length < 8) {
            $('#idError_pswrd').css({ 'display': 'block' });
            $('#idInp_password').css({ 'border': 'red solid 5px' });
            $('#idError_pswrd').html('password is unsafe!');
        }
        else if (!($('#idInp_password').val() === $('#idInp_confirm_password').val())) {
            $('#idError_pswrd').css({ 'display': 'block' });
            $('#idInp_password').css({ 'border': 'red solid 5px' });
            $('#idInp_confirm_password').css({ 'border': 'red solid 5px' });
            $('#idError_pswrd').html('passwords don\'t equal!');
        }
        else {
            $('#idError_pswrd').css({ 'display': 'none' });
            $('#idInp_password').css({ 'border': 'rgb(68 211 2) solid 2px' });
            $('#idInp_confirm_password').css({ 'border': 'rgb(68 211 2) solid 2px' });
        }
    });

    $('#idInp_confirm_password').change(function (e) {
        if (($('#idInp_password').val()).length < 8) {
            $('#idError_pswrd').css({ 'display': 'block' });
            $('#idInp_password').css({ 'border': 'red solid 5px' });
            $('#idError_pswrd').html('password is unsafe!');
        }
        else if (!($('#idInp_password').val() === $('#idInp_confirm_password').val())) {
            $('#idError_pswrd').css({ 'display': 'block' });
            $('#idInp_password').css({ 'border': 'red solid 5px' });
            $('#idInp_confirm_password').css({ 'border': 'red solid 5px' });
            $('#idError_pswrd').html('passwords don\'t equal!');
        }
        else {
            $('#idError_pswrd').css({ 'display': 'none' });
            $('#idInp_password').css({ 'border': 'rgb(68 211 2) solid 2px' });
            $('#idInp_confirm_password').css({ 'border': 'rgb(68 211 2) solid 2px' });
        }
    });

});


