$(document).ready(function(){

//validation part
    $('#Usernamevalidation').hide();
    $('#emailvalidation').hide()
    var user_error = true;
    var email_error = true;


    //username validation
    $('#username').keyup(function () {
        username_validation();
    });

    //function for username validation
    function username_validation() {
        var username_val = $('#username').val();
        if (username_val.length == "") {
            $('#Usernamevalidation').show();
            $('#Usernamevalidation').html('Username cannot be empty');
            $('#Usernamevalidation').css('color', 'red');
            user_error=false;
            return false;
        }
        else{
            $('#Usernamevalidation').hide();
        }

        if (username_val.length<3|| username_val.length>10){
            $('#Usernamevalidation').show();
            $('#Usernamevalidation').html('Invaild username');
            $('#Usernamevalidation').css('color', 'red');
            user_error=false;
            return false;
        }
        else{
            $('#Usernamevalidation').hide();
        }

    }


    //email validation
    $('#email').keyup(function () {
        emailid_validation();
    });

    //function for email validation
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

    //submission validation
    $('#submittvalidation').click(function(){
        username_validation();
        emailid_validation();

        if(user_error==true && email_error==true ){
            return true;
        }
        else{
            return false;
        }

    });


//validation end


//click button
var count=1;
$('.clicks').on('click',function(){
    if (count%2!=0){
        $('#box').addClass('show');
        count=count+1
    }
    else{
        $('#box').removeClass('show');
        count=count-1
    }
    
});


$('.submission').on('click',function(){
    $('#box').addClass('show');


});

//xmark function
$('.xmark').on('click',function(){
    $('#box').removeClass('show');
});

});
