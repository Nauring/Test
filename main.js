// Filters on index.html. There are 2 groups of them !

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

    // Reset Button
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

// Load images of Tags in index.html


$(document).ready(function(){
  $(".tag").each(function(){
      var id = $(this).attr("id");
      if (id in cArt) {
          $(this).css({
              "content": "url('" + cArt[id].path + "')",
              "name": cArt[id].name
          });
      }
  });
});

// Display images of Filters in index.html

const filterIcon = {
  Physical: 'Element/Element_Physical64.webp',
  Fire: 'Element/Element_Fire64.webp',
  Ice: 'Element/Element_Ice64.webp',
  Lighting: 'Element/Element_Lighting64.webp',
  Wind: 'Element/Element_Wind64.webp',
  Quantum: 'Element/Element_Quantum64.webp',
  Imaginary: 'Element/Element_Imaginary64.webp',
  Destruction: 'Path/Path_The_Destruction64.webp',
  Hunt: 'Path/Path_The_Hunt64.webp',
  Erudition: 'Path/Path_The_Erudition64.webp',
  Harmony: 'Path/Path_The_Harmony64.webp',
  Nihility: 'Path/Path_The_Nihility64.webp',
  Preservation: 'Path/Path_The_Preservation64.webp',
  Abundance: 'Path/Path_The_Abundance64.webp'
};


$(document).ready(function(){
  $(".tag-filter").each(function(){
      var id = $(this).attr("id");
      if (id in filterIcon) {
          $(this).css({
              "content": "url('" + filterIcon[id]+ "')",
          });
      }
  });
});

// This is to ensure, that when user clicks tag on index.html and is loaded to new page, coresponding content is shown.

function redirectToMenu(id) {
  const url = 'character_info.html?id=' + id;
  window.location.href = url;
}