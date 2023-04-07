// Funkcja obsłgująca przełączanie między przyciskami na stronie character_info

$(document).ready(function() {
    // show initial tab and tab content
    $('.box-tab:first-child').addClass('active');
    $('.box-tab-content:first-child').addClass('active');
    
    // listen for click event on box-tabs
    $('.box-tab').click(function() {
      // remove active class from all box-tabs
      $('.box-tab').removeClass('active');
      // add active class to clicked box-tab
      $(this).addClass('active');
      
      // hide all box-tab-content
      $('.box-tab-content').removeClass('active');
      
      // show corresponding box-tab-content
      var tab = $(this).data('tab');
      $('.box-tab-content[data-tab="' + tab + '"]').addClass('active');
    });
  });

// Funkcja obsługująca modal na stronie character_info


$(document).ready(function() {
    $('.skill-image img').click(function() {
      var modal = $('#myModal');
      var modalImg = $('.modal-content');
      modal.css('display', 'block');
      modalImg.attr('src', $(this).attr('src'));
  
      modal.animate({opacity: 1}, 300, function() {
        modalImg.css('display', 'block');
      });
    });
  
    $('.close').click(function() {
      var modal = $('#myModal');
      var modalImg = $('.modal-content');
      modal.animate({opacity: 0}, 300, function() {
        modalImg.css('display', 'none');
        modal.css('display', 'none');
      });
    });
  
    $(window).click(function(event) {
      var modal = $('#myModal');
      if (event.target == modal[0]) {
        $('.close').click();
      }
    });
  });
  