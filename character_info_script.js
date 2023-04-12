$(document).ready(function() {
  // hide box-content initially
  $('.box-content').hide();
  
  // listen for click event on box-tabs
  $('.box-tab').click(function() {
    var clickedTab = $(this);
    
    if (clickedTab.hasClass('active')) {
      // if clicked tab is already active, hide the content and remove active class
      clickedTab.removeClass('active');
      $('.box-tab-content').removeClass('active');
      $('.box-content').animate({width: 'hide'}, 'fast');
    } else {
      // remove active class from all box-tabs
      $('.box-tab').removeClass('active');
      // add active class to clicked box-tab
      clickedTab.addClass('active');

      // hide all box-tab-content
      $('.box-tab-content').removeClass('active');

      // show corresponding box-tab-content
      var tab = clickedTab.data('tab');
      $('.box-tab-content[data-tab="' + tab + '"]').addClass('active');

      // show box-content
      $('.box-content').animate({width: 'show'}, 'fast');
    }
  });
});