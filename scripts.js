// navbar script scroll down 

$(document).ready(function(){
  $("a.scroll-to").on('click', function(event) {

    if (this.hash !== "#background-carousel") {
      event.preventDefault();

      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});
