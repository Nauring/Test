// Get the id parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Populate the HTML with the appropriate data
$('#Character_Name').html(cArt[id].name);
$('#Character_Element').html(cArt[id].element);
$('#Character_Path').html(cArt[id].aion);
$('#Character_quote').html(cArt[id].quote);
$('#Character_lore').html(cArt[id].lore);
$('#Character_Basic_Attack_Name').html(cArt[id].basic_attack_name);
$('#Character_Basic_Attack_Desc').html(cArt[id].basic_attack_desc);
$('#Character_Skill_Name').html(cArt[id].skill_name);
$('#Character_Skill_Desc').html(cArt[id].skill_desc);
$('#Character_Ult_Name').html(cArt[id].ulti_name);
$('#Character_Ult_Desc').html(cArt[id].ulti_desc);
$('#Character_Tech_Name').html(cArt[id].technique_name);
$('#Character_Tech_Desc').html(cArt[id].technique_desc);
$('#Character_Talent_Name').html(cArt[id].talent_name);
$('#Character_Talent_Desc').html(cArt[id].talent_desc);
$('#Character_Splash_Art').attr('src', cArt[id].splash_art);
$('#Character_Element_Icon').attr('src', cArt[id].element_icon);
$('#Character_Path_Icon').attr('src', cArt[id].aion_icon);