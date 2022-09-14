oldDropDown = '';
oldMenu = '';
dropDownAberto = false;
abriuDropDown = false;

function menuOn(qualMenu) {
	if (qualMenu != 'none') {
		menu = document.getElementById('menu_' + qualMenu);
		menu.style.backgroundPosition = '0 0';
	}
}

function menuOff(qualMenu) {
	if (qualMenu != 'none') {
		menu = document.getElementById('menu_' + qualMenu);
		if (document.getElementsByTagName('body')[0].className == qualMenu) {
			menu.style.backgroundPosition = '0 0';
		} else {
			menu.style.backgroundPosition = '0 32px';
		}
	}
}

function menuOver(qualMenu) {
	menuOn(qualMenu);	
}

function menuOut(qualMenu) {
	if (!dropDownAberto) {
		menuOff(qualMenu);
	}
}


function hideDropDown(qualDropDown) {
	if ((qualDropDown != '') && (qualDropDown != 'none')) {
		dropDown = document.getElementById('dropdown_' + qualDropDown);
		dropDown.style.display = 'none';
	}
}

function showIt(qualDropDown) {
	if (qualDropDown != 'none') {
		document.getElementById('dropdown_' + qualDropDown).style.display = 'block';
	}
}

function showDropDown(qualDropDown, qualEvento, qualMenu) {
	if (!qualMenu) {
		qualMenu = qualDropDown;
	}
	if (qualEvento == 'click') {
		if (dropDownAberto) {
		} else {
			showIt(qualDropDown);
			menuOn(qualMenu);
			oldDropDown = qualDropDown;
			oldMenu = qualMenu;
			abriuDropDown = true;
		}
	} else if (qualEvento == 'over') {
		if (dropDownAberto) {
			showIt(qualDropDown);
			menuOn(qualMenu);
			if (oldDropDown != qualDropDown) {
				hideDropDown(oldDropDown);
				menuOff(oldMenu);
			}
			oldDropDown = qualDropDown;
			oldMenu = qualMenu;
		} else {
			
		}
	}	
}

document.onclick = function() {
	if (dropDownAberto) {
		hideDropDown(oldDropDown);
		menuOff(oldMenu);
		dropDownAberto = false;
	}
	
	if (abriuDropDown) {
		dropDownAberto = true;
		abriuDropDown = false;
	}
}


var isIE;
if (parseInt(navigator.appVersion.charAt(0)) >= 4) {
	isIE = (navigator.appName.indexOf("Microsoft") != -1) ? true : false;
}

function onlyNumAndComma( element, event ) {
			
	if ( !element || !event ) return false;
	
	var text = new String( element.value );
	var rExp = /,/g;
	var result = text.search( rExp );
	var hasComma = ( result > -1 );

	if ( hasComma ){
		return onlyNum(event);
	}
    else {
    	var keyNumber = (isIE) ? event.keyCode : event.which;
		if ( keyNumber != 44 ){
			return onlyNum(event);
		}						
    }
	
}

function onlyNum( event ) {
	if ( !event ) return false;
	var keyNumber = (isIE) ? event.keyCode : event.which;

	if ( ( ( keyNumber < 48 ) || ( keyNumber > 57 ) ) && ( keyNumber != 13 ) && ( keyNumber != "0" ) && ( keyNumber != 8 ) && ( !event.ctrlKey ) ){
    	if ( isIE ) event.keyCode = 0;
    		return false;
	}
}

function onlyNum(event, valorCampo) {

	if (valorCampo === '3') {
		return true;
	}

	if (!event) return false;
	var keyNumber = (isIE) ? event.keyCode : event.which;

	if (( ( keyNumber < 48 ) || ( keyNumber > 57 ) ) && ( keyNumber != 13 ) && ( keyNumber != "0" ) && ( keyNumber != 8 ) && ( !event.ctrlKey )) {
		if (isIE) event.keyCode = 0;
		return false;
	}
}

function mascararMoeda( element ){
	if (!element || element.value == "") return false;
	
	//Transformo o valor do input em um objeto String para ser possível utilizar o método replace.
	var strValue = new String(element.value);

	if (strValue == ","){
		strValue = "0";
	}
	
	//Crio uma variavel para guardar o valor float do input.
	var numericValue = parseFloat(strValue.replace(/,/g,"."));

	//Fixo o número de casas decimais em 2.
	numericValue = numericValue.toFixed(2);

	//Transformo o valor do input em um objeto String para ser possível utilizar o método replace.
	strValue = new String(numericValue);

	//Faço a mascara do número trocando '.' por ','
	strValue = strValue.replace(/\./g,",");

	element.value = strValue;  
	
	 
}

function isNumericField( objField, event, idObjSelect, valueOfNumericField ) {

	if ( !objField || !event || !idObjSelect || idObjSelect == "" || !valueOfNumericField || valueOfNumericField == "" ) return false; 
	
	var objSelect = document.getElementById(idObjSelect);
		
	if ( !objSelect ) return false;

	//Verifica se o campo é numérico
	if ( objSelect.value == valueOfNumericField ){
		//Chama funções diferentes de acordo com o evento que disparou a função.
		if ( event.type == "keypress" ){
			return onlyNum( event );
		} else{
			removeNonNumberCharacters( objField );
		}
	}
}


function addEvent( obj, type, fn ) {
	  if ( obj.attachEvent ) {
	    obj['e'+type+fn] = fn;
	    obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
	    obj.attachEvent( 'on'+type, obj[type+fn] );
	  } else
	    obj.addEventListener( type, fn, false );
}

function trim(str) {
	return str.replace(/^\s+|\s+$/g,"");
}
