// Działanie Filtrowania

$(document).ready(function() {
  $(".tag-filter").click(function() {
    // Get the data-filter value of the clicked button
    var filterValue = $(this).attr("data-filter");
    
    // Check if the clicked button is active or not
    if ($(this).hasClass("active")) {
      // Remove the active class from the clicked button
      $(this).removeClass("active");
    } else {
      // Add the active class to the clicked button
      $(this).addClass("active");
    }
    
    // Get all active filter values in each group
    var activeFilters1 = [];
    var activeFilters2 = [];
    $("#filter-container1 .tag-filter.active").each(function() {
      activeFilters1.push($(this).attr("data-filter"));
    });
    $("#filter-container2 .tag-filter.active").each(function() {
      activeFilters2.push($(this).attr("data-filter"));
    });

    // Reset
    $("#reset-btn").click(function() {
      $(".tag-filter").removeClass("active");
      $(".tag").show(300);
    });
    
    if (activeFilters1.length === 0 && activeFilters2.length === 0) {
      // Show all items if no filters are active
      $(".tag").show(300);
    } else if (activeFilters1.length > 0 && activeFilters2.length === 0) {
      // Show only items that match any of the active filters in the first group
      $(".tag").hide().filter("." + activeFilters1.join(",.")).show(300);
    } else if (activeFilters1.length === 0 && activeFilters2.length > 0) {
      // Show only items that match any of the active filters in the second group
      $(".tag").hide().filter("." + activeFilters2.join(",.")).show(300);      
    } else {
      // Show all items that match any of the active filters in the first group
      // Then refine the selection to only those that also match the active filters in the second group
      $(".tag").hide().filter("." + activeFilters1.join(",.")).filter("." + activeFilters2.join(".")).show(300);
    }
  });
});

//New

function redirectToMenu(id) {
  const url = 'character_info.html?id=' + id;
  window.location.href = url;
}