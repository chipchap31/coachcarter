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

function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
