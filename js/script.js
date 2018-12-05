(function($){
    
    


    var $submit_button = $('.submit');
    
    var $email_input = $('input[type="email');
    
    function onSubmit(){
        var $email_value = $('input[type="email"').val();
        sessionStorage.setItem("email", $email_value);
        sessionStorage.setItem("verified", false);
    }
   
    

        
    $(document).ready(function(){
        
        $submit_button.on('click', onSubmit);
        document.getElementById("email").innerHTML = sessionStorage.getItem("email"); 
    })
    
}(jQuery))


