 

// Document is ready
$(document).ready(function () {
	
    // Validate Username
        $('#nameValid').hide();	
        let usernameError = true;
        $('#inputName').keyup(function () {
            validateUsername();
        });

        $('#emailValid').hide();	
        let emailError = true;
        $('#inputEmail').keyup(function () {
            validateEmail();
        });

        $('#placeValid').hide();	
        let placeError = true;
        $('#inputPlace').keyup(function () {
            validatePlace();
        });


        $('#phoneValid').hide();	
        let phoneError = true;
        $('#inputPhone').keyup(function () {
            validatePhone();
        });

        $('#messageValid').hide();	
        let messageError = true;
        $('#inputMessage').keyup(function () {
            validateMessage();
        });
        
    function validateUsername() {
        let usernameValue = $('#inputName').val();
        var pattern = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/
        if (usernameValue.length == '') {
            $('#nameValid').show();
            $('#nameValid').html
            ("Enter your name");
            usernameError = false;
            return false;
            }
        else if(!usernameValue.match(pattern)){
            $('#nameValid').show();
            $('#nameValid').html
            ("Characters only");
            usernameError = false;
            return false;
        }
        else {
            $('#nameValid').hide();
            usernameError = true;
            return true;
            }
        }
    
    
    
    function validateEmail(){
        let email = $('#inputEmail').val();
        var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/
        
        if (email.length == '') 
        {
            $('#emailValid').show();
            $('#emailValid').html
            ("Enter your mail")
            emailError = false;
            return false;
        }
        else if(!email.match(pattern))
        {
            $('#emailValid').show();
            $('#emailValid').html
            ("Please enter your email");
            emailError = false;
            return false;
        }
        else {
            $('#emailValid').hide();
            emailError = true;
            return true;
        }
    }

    function validatePlace(){
        let place = $('#inputPlace').val();
        var pattern = /^[a-z A-z 0-9\s]*$/;
        
        if (place.length == '') {
            $('#placeValid').show();
            $('#placeValid').html
            ("Please enter your place");
            placeError = false;
            return false;
        }
        else if(!place.match(pattern))
        {
            $('#placeValid').show();
            $('#placeValid').html
            ("Please enter your place");
            placeError = false;
            return false;
        }
        else {
            $('#placeValid').hide();
            placeError = true;
            return true;
        }
    }



    function validatePhone(){
        let phone = $('#inputPhone').val();
        var pattern = /^\d{10}$/;
        
        if (phone.length == '') {
            $('#phoneValid').show();
            $('#phoneValid').html
            ("Please enter your phone number");
            phoneError = false;
            return false;
        }
        else if(!phone.match(pattern)){
            $('#phoneValid').show();
            $('#phoneValid').html
            ("Please enter digits only");
            phoneError = false;
            return false;
        }
        else {
            $('#phoneValid').hide();
            phoneError = true;
            return true;
        }
    }

    function validateMessage(){
        let message = $('#inputMessage').val();
        
        
        if (message.length == '') {
            $('#messageValid').show();
            $('#messageValid').html
            ("Please enter your message");
            messageError = false;
            return false;
        }
        else {
            $('#messageValid').hide();
            messageError = true;
            return true;
        }
    }
        

            

        
    // Submitt button
        $('#submit_btn').click(function () {
            validateUsername();
            validateEmail();
            validateMessage();
            validatePlace();
            validatePhone();
            if ((usernameError == true) &&
                (emailError == true) &&  
                (placeError == true) &&           
                (phoneError == true) &&
                (messageError == true)) {
                return true;
            } else {
                alert("Please fill the details")
                return false;
            }
        });
    });
    
