$(document).ready(function(){
   
   //Attach evet listener to input for keyup.
   $( ".type" ).click(function() {
      //alert( "Handler for .click() called." );
     $(keydown)(function(event) {
        if (event.which ==33) {
           addItem();
        };
        
     });
   });
   
   
}); //end of .ready event
