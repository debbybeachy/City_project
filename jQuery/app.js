$(document).ready(function() {

   var attachRemove = function() {
     $('.xBox').click(function(event) {
      $(event.target).parent().remove();
    });
   }

   attachRemove();

   $('form').on('submit', function(event) {
      event.preventDefault();
      var newCity = $('.type').val()
      
      if (newCity == '') {
      }

      else {
         $('.hardList').append('<li><button class="xBox">X</button>' + newCity + '</li>');
         $('.type').val('');
         attachRemove();
      }
   });

   $('.hardList').click(function(event) {
      $(event.target).toggleClass('strike');
   });
   
   $('.clearList').click(function(event) {
      event.preventDefault();
      $('ul').empty();
   });

});