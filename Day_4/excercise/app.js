var normal = "#ADA480";
	var fighting = "#C22F26";
	var flying = "#B49AF6";
	var poison = "#A43FA4";
	var ground = "#DEBE63";
	var rock = "#B49E38";
	var bug = "#A8B531";
	var ghost = "#6E5391";
	var steel = "#B8B5CF";
	var fire = "#F07D33";
	var water = "#6D88F8";
	var grass = "#81CB5B";
	var electric = "#E9D436";
	var psychic = "#FF598D";
	var ice = "#9AD9DA";
	var dragon = "#723EFC";
	var dark = "#705749";
	var fairy = "#E1A4E1";


var go;
var clear;

var img;
var textId;
var textName;
var textAbility;
var textType;
var textType2;

var param;

$(function() {
  img = $('#img');
  go = $("#go");
  clear = $('#clear');
  textId = $('#text_id');
  textName = $('#text_name');
  textAbility = $('#text_ability');
  textType = $('#text_type');
	textType2 = $('#text_type2');
  param = $('#input');
});

function clearData() {
  img.attr('src', '');
  textId.html('');
  textName.html('');
  textAbility.html(''); 
  textType.html('');
	textType2.html('');
  param.val('');
}

function submit(){
  var inputValue = $.trim(param.val());
  if (inputValue === '') return;
  
  var pokeURL = "https://pokeapi.co/api/v2/pokemon/" + inputValue.val();

  $.ajax({
    type: "GET",
    url: pokeURL,
    success: function(data){ 
      ajaxSuccess(data);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
       ajaxError();
    }
  });
}

function random() {
    var number = Math.floor(Math.random() * 807) + 1;
	
	  var pokeURL = "https://pokeapi.co/api/v2/pokemon/" + number;

  $.ajax({
    type: "GET",
    url: pokeURL,
    success: function(data){ 
      ajaxSuccess(data);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
       ajaxError();
    }
  });
}

function ajaxSuccess(data){
  var imageURI = data.sprites.front_default;
  var id = data.id;  
  var name = data.name;
  var ability = data.abilities;
  var type = data.types;

  img.attr('src', imageURI);
  textId.html(id);
  textName.html(name);
  textAbility.html(ability[0].ability.name); 
	
	var type1 = type[0].type.name;
  textType.html(type1);
	getTypeColour1(type1);
	textType2.html('');
	
	if (type.length == 2) {
		let type2 = type[1].type.name;
  	textType2.html(type2);
		getTypeColour2(type2);
	}


  clear.click(function() {
    clearData();
  });
}

function ajaxError(data){
  clearData();
}

function changeBg1(name) {
	textType.css("background-color", name);
}

function changeBg2(name) {
	textType2.css("background-color", name);
}

function getTypeColour1(type) {
	var pokeType = type;
	
	switch (pokeType) {
		case "normal":
			changeBg1(normal);
    	break;
			
  	case "fighting":
    	changeBg1(fighting);
			break;
		
		case "flying":
    	changeBg1(flying);
			break;
			
		case "poison":
    	changeBg1(poison);
			break;
			
		case "ground":
    	changeBg1(ground);
			break;
			
		case "rock":
    	changeBg1(rock);
			break;
			
		case "bug":
    	changeBg1(bug);
			break;
			
		case "ghost":
    	changeBg1(ghost);
			break;
			
		case "steel":
    	changeBg1(steel);
			break;
			
		case "fire":
    	changeBg1(fire);
			break;
		
		case "water":
    	changeBg1(water);
			break;
			
		case "grass":
    	changeBg1(grass);
			break;
					
		case "electric":
    	changeBg1(electric);
			break;
					
		case "psychic":
    	changeBg1(psychic);
			break;
					
		case "ice":
    	changeBg1(ice);
			break;
					
		case "dragon":
    	changeBg1(dragon);
			break;
					
		case "fairy":
    	changeBg1(fairy);
			break;
			
		case "dark":
    	changeBg1(dark);
			break;
	}
}

function getTypeColour2(type) {
	var pokeType = type;
	
	switch (pokeType) {
		case "normal":
			changeBg2(normal);
    	break;
			
  	case "fighting":
    	changeBg2(fighting);
			break;
		
		case "flying":
    	changeBg2(flying);
			break;
			
		case "poison":
    	changeBg2(poison);
			break;
			
		case "ground":
    	changeBg2(ground);
			break;
			
		case "rock":
    	changeBg2(rock);
			break;
			
		case "bug":
    	changeBg2(bug);
			break;
			
		case "ghost":
    	changeBg2(ghost);
			break;
			
		case "steel":
    	changeBg2(steel);
			break;
			
		case "fire":
    	changeBg2(fire);
			break;
		
		case "water":
    	changeBg2(water);
			break;
			
		case "grass":
    	changeBg2(grass);
			break;
					
		case "electric":
    	changeBg2(electric);
			break;
					
		case "psychic":
    	changeBg2(psychic);
			break;
					
		case "ice":
    	changeBg2(ice);
			break;
					
		case "dragon":
    	changeBg2(dragon);
			break;
					
		case "fairy":
    	changeBg2(fairy);
			break;
					
		case "dark":
    	changeBg2(dark);
			break;
	}
}

