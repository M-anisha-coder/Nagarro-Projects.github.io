$(document).ready(function () {
    $('#usernamevalidation').hide();
    $('#emailvalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();

    var user_error = true;
    var email_error = true;
    var password_error = true;
    var confirm_password_error = true;

    //validation for username
    $('#username').keyup(function () {
        username_validation();
    });

    //function for username
    function username_validation() {
        var username_val = $('#username').val();
        if (username_val.length == "") {
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username cannot be empty');
            $('#usernamevalidation').css('color', 'red');
            user_error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();
        }

        if (username_val.length<3|| username_val.length>10){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Invaild username');
            $('#usernamevalidation').css('color', 'red');
            user_error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();
        }

    }

    //validation of email.id
    $('#email').keyup(function () {
        emailid_validation();
    });

    //function for emailid validation
    function  emailid_validation(){
        var emailregex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        var email_val=$('#email').val();
        if (emailregex.test(email_val)){
            $('#emailvalidation').hide();
        }
        else{
            $('#emailvalidation').show();
            $('#emailvalidation').html("Invalid email id");
            $('#emailvalidation').css('color','red');
            email_error=false;
            return false;

        }

    }

    //validation of password
    $('#password').keyup(function () {
        password_validation();
    });

    //function for password validation
    function  password_validation(){
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        var password_val=$('#password').val();
        if (strongRegex.test(password_val)){
            $('#passwordvalidation').hide();
        }
        else{
                $('#passwordvalidation').show();
                $('#passwordvalidation').html("password cannot be empty");
                $('#passwordvalidation').css('color','red');
        
            password_error=false;
            return false;

        }

    }
    //validation of confirm password
    $('#confirmpassword').keyup(function () {
        confirmpassword_validation();
    });

    function  confirmpassword_validation(){
        var confirm_password_val =$('#confirmpassword').val();
        var password_val=$('#password').val();
        if(confirm_password_val!=password_val || confirm_password_val.length==""){
        
                $('#confirmpasswordvalidation').show();
                $('#confirmpasswordvalidation').html("password did not matched");
                $('#confirmpasswordvalidation').css('color','red');
        
            confirm_password_error=false
            return false;
        }
        else{
            $('#confirmpasswordvalidation').hide();
        }

    }

    // during form submitting
    $('#submitvalidation').click(function(){
        username_validation();
        emailid_validation();
        password_validation();
        confirmpassword_validation();
        if(user_error==true && email_error==true && password_error==true && confirm_password_error==true){
            return true;
        }
        else{
            return false;
        }

    });


});