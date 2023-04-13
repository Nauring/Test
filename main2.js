// Box and button functionality on chracter_info.html

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

// Animate Name and Icons

$(document).ready(function() {
  $("#character-info").hide().slideDown(500).fadeIn(500);
});

// Back Button

$(document).ready(function() {
  // Check if there is history to go back to
  if (history.length > 1) {
    // Show the back button
    $('#backButton').css('display', 'block');
  }

  // Add click event to the back button
  $('#backButton').click(function() {
    // Go back to the previous page
    window.history.back();
  });
});