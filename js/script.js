(function($){
    
    


    var $submit_button = $('.submit');
    
    var $email_input = $('input[type="email');
    var $img = $('.img-container');
    
    function onSubmit(){
        var $email_value = $('input[type="email"').val();
        sessionStorage.setItem("email", $email_value);
        sessionStorage.setItem("verified", false);
    }
    
    $img.hover(function(){
        $(this).addClass('hovering');
    },function(){
        $(this).removeClass('hovering');
    })
    

        
    $(document).ready(function(){
        
        $submit_button.on('click', onSubmit);
        document.getElementById("email").innerHTML = sessionStorage.getItem("email"); 
    })
    

}(jQuery))


