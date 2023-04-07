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

// Wyświetlanie filtrów w oparciu o ich nazwe ID na stronie index

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