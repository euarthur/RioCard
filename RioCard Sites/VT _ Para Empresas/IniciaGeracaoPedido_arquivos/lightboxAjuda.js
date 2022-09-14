/*
    Lightbox JS: Fullsize Image Overlays 
    by Lokesh Dhakar - http://www.huddletogether.com
    For more information on this script, visit:
    http://huddletogether.com/projects/lightbox/
    Licensed under the Creative Commons Attribution 2.5 License - http://creativecommons.org/licenses/by/2.5/
    (basically, do anything you want, just leave my name and link)
*/

// Returns array with x,y page scroll values.
// Core code from - quirksmode.org
function getPageScroll1() {
	var yScroll;

	if (self.pageYOffset) {
		yScroll = self.pageYOffset;
	} else if (document.documentElement && document.documentElement.scrollTop){	 // Explorer 6 Strict
		yScroll = document.documentElement.scrollTop;
	} else if (document.body) {// all other Explorers
		yScroll = document.body.scrollTop;
	}

	arrayPageScroll = new Array('',yScroll) 
	return arrayPageScroll;
}

// Returns array with page width, height and window width, height
// Core code from - quirksmode.org
// Edit for Firefox by pHaez
function getPageSize1() {
	var xScroll, yScroll;
	
	if (window.innerHeight && window.scrollMaxY) {	
		xScroll = document.body.scrollWidth;
		yScroll = window.innerHeight + window.scrollMaxY;
	} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
		xScroll = document.body.scrollWidth;
		yScroll = document.body.scrollHeight;
	} else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
		xScroll = document.body.offsetWidth;
		yScroll = document.body.offsetHeight;
	}
	
	var windowWidth, windowHeight;
	if (self.innerHeight) {	// all except Explorer
		windowWidth = self.innerWidth;
		windowHeight = self.innerHeight;
	} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
		windowWidth = document.documentElement.clientWidth;
		windowHeight = document.documentElement.clientHeight;
	} else if (document.body) { // other Explorers
		windowWidth = document.body.clientWidth;
		windowHeight = document.body.clientHeight;
	}	
	
	// for small pages with total height less then height of the viewport
	if(yScroll < windowHeight) {
		pageHeight = windowHeight;
	} else { 
		pageHeight = yScroll;
	}

	// for small pages with total width less then width of the viewport
	if(xScroll < windowWidth) {	
		pageWidth = windowWidth;
	} else {
		pageWidth = xScroll;
	}

	arrayPageSize = new Array(pageWidth, pageHeight, windowWidth, windowHeight); 
	return arrayPageSize;
}

// Pauses code execution for specified time. Uses busy code, not good.
// Code from http://www.faqts.com/knowledge_base/view.phtml/aid/1602
function pause(numberMillis) {
	var now = new Date();
	var exitTime = now.getTime() + numberMillis;
	while (true) {
		now = new Date();
		if (now.getTime() > exitTime)
			return;
	}
}

// Preloads images. Pleaces new image in lightbox then centers and displays.
function ajuda(referencia) {
	
	var boxHeight1 = 580;
	var boxWidth1 = 780;
	var objBody = document.getElementsByTagName("body").item(0);
	
	// create overlay div and hardcode some functional styles (aesthetic styles are in CSS file)
	var objOverlay = document.createElement("div");
	objOverlay.setAttribute('id','fundo');
	objOverlay.onclick = function () { fecha(); return false; }
	objOverlay.style.display = 'none';
	objOverlay.style.position = 'absolute';
	objOverlay.style.top = '0';
	objOverlay.style.left = '0';
	objOverlay.style.zIndex = '90';
 	objOverlay.style.width = '100%'; 	
	objBody.insertBefore(objOverlay, objBody.firstChild);
	
	
	
	
	var arrayPageSize = getPageSize1();
	var arrayPageScroll = getPageScroll1();
	
	
	
	// create lightbox div, same note about styles as above
	var objLightbox = document.createElement("iframe");
		
	objLightbox.setAttribute('id','ajuda');
	objLightbox.setAttribute('class','ajudaBox');		
	objLightbox.style.display = 'none';
	objLightbox.style.position = 'absolute';
	objLightbox.style.zIndex = '100';
	objLightbox.style.width = boxWidth1;
	objLightbox.style.height = boxHeight1;
	objBody.insertBefore(objLightbox, objOverlay.nextSibling);
	
	// prep objects
	var objOverlay = document.getElementById('fundo');
	var objLightbox = document.getElementById('ajuda');	
	
	objLightbox.src = "../../visitante/ajuda/ajuda_popup.jsp?r=" + referencia.substring(0,3) + "#" + referencia;
	//var objCaption = document.getElementById('lightboxCaption');
	//var objImage = document.getElementById('lightboxImage');
	var objLoadingImage = document.getElementById('loadingImage');
	//var objLightboxDetails = document.getElementById('lightboxDetails');
	
	
	
	var arrayPageSize = getPageSize1();
	var arrayPageScroll = getPageScroll1();

	// center loadingImage if it exists
	if (objLoadingImage) {
		objLoadingImage.style.top = (arrayPageScroll[1] + ((arrayPageSize[3] - 35 - objLoadingImage.height) / 2) + 'px');
		objLoadingImage.style.left = (((arrayPageSize[0] - 20 - objLoadingImage.width) / 2) + 'px');
		objLoadingImage.style.display = 'block';
	}

	
	// set height of Overlay to take up whole page and show
	objOverlay.style.height = (arrayPageSize[1] + 'px');
	objOverlay.style.display = 'block';

	// center lightbox and make sure that the top and left values are not negative
		// and the image placed outside the viewport
		var lightboxTop = arrayPageScroll[1] + ((arrayPageSize[3] - 35 - boxHeight1) / 2);
		var lightboxLeft = ((arrayPageSize[0] - 20 - boxWidth1) / 2);
		objLightbox.style.top = (lightboxTop < 0) ? "0px" : lightboxTop + "px";
		objLightbox.style.left = (lightboxLeft < 0) ? "0px" : lightboxLeft + "px";

		// A small pause between the image loading and displaying is required with IE,
		// this prevents the previous image displaying for a short burst causing flicker.
		if (navigator.appVersion.indexOf("MSIE")!=-1) {
			pause(250);
		} 

		if (objLoadingImage) {	
		  objLoadingImage.style.display = 'none'; 
        }

		// Hide select boxes as they will 'peek' through the image in IE
		selects = document.getElementsByTagName("select");
        for (i = 0; i != selects.length; i++) {
            selects[i].style.visibility = "hidden";
        }
	
		objLightbox.style.display = 'block';

		// After image is loaded, update the overlay height as the new image might have
		// increased the overall page height.
		arrayPageSize = getPageSize1();
		objOverlay.style.height = (arrayPageSize[1] + 'px');
		
		var divFecha = document.getElementById('fechaAjuda');
		divFecha.style.display = 'block';
		divFecha.style.zIndex = '999';
		divFecha.style.width = (boxWidth1 + 5) + "px";
		divFecha.style.top = (lightboxTop - 30) + "px";
		divFecha.style.left = lightboxLeft + "px";
		divFecha.onclick = function() {
			divFecha.style.display = 'none';
			fecha();
		}
		
}

function fecha() {
	// get objects
	objOverlay = document.getElementById('fundo');
	objLightbox = document.getElementById('ajuda');

	// hide lightbox and overlay
	objOverlay.style.display = 'none';
	objLightbox.style.display = 'none';

	// make select boxes visible
	selects = document.getElementsByTagName("select");
    for (i = 0; i != selects.length; i++) {
		selects[i].style.visibility = "visible";
	}

	// disable keypress listener
	document.onkeypress = '';
}



//Preloads images. Pleaces new image in lightbox then centers and displays.
function msgTrocaSenha(referencia) {
	
	var boxHeight1 = 60;
	var boxWidth1 = 300;
	var objBody = document.getElementsByTagName("body").item(0);
	
	// create overlay div and hardcode some functional styles (aesthetic styles are in CSS file)
	var objOverlay = document.createElement("div");
	objOverlay.setAttribute('id','fundo');
	objOverlay.onclick = function () { fechaTrocaSenha(); return false; }
	objOverlay.style.display = 'none';
	objOverlay.style.position = 'absolute';
	objOverlay.style.top = '0';
	objOverlay.style.left = '0';
	objOverlay.style.zIndex = '90';
 	objOverlay.style.width = '100%'; 	
	objBody.insertBefore(objOverlay, objBody.firstChild);
	
	var arrayPageSize = getPageSize1();
	var arrayPageScroll = getPageScroll1();

	// create lightbox div, same note about styles as above
	var objLightbox = document.createElement("div");
		
	objLightbox.setAttribute('id','msgTrocaSenha');
	objLightbox.setAttribute('class','msgTrocaSenha');
	objLightbox.style.display = 'none';
	objLightbox.style.position = 'absolute';
	objLightbox.style.zIndex = '100';
	
	objLightbox.style.width = boxWidth1 + "px";
	objLightbox.style.height = boxHeight1 + "px";
	objBody.insertBefore(objLightbox, objOverlay.nextSibling);
	
	// prep objects
	var objOverlay = document.getElementById('fundo'); 
	var objLightbox = document.getElementById('msgTrocaSenha');	
	
	objLightbox.innerHTML = "<div class='txt_msg'><img src='../comum/imagens/confirm.gif' />Sua senha foi alterada com sucesso</div><br /><input type='image' onclick='fechaTrocaSenha()' name='imageField' src='../comum/imagens/botoes/botaozinho_ok.gif' class='button'>";
	var objLoadingImage = document.getElementById('loadingImage');
	
	var arrayPageSize = getPageSize1();
	var arrayPageScroll = getPageScroll1();

	// center loadingImage if it exists
	if (objLoadingImage) {
		objLoadingImage.style.top = (arrayPageScroll[1] + ((arrayPageSize[3] - 35 - objLoadingImage.height) / 2) + 'px');
		objLoadingImage.style.left = (((arrayPageSize[0] - 20 - objLoadingImage.width) / 2) + 'px');
		objLoadingImage.style.display = 'block';
	}

	
	// set height of Overlay to take up whole page and show
	objOverlay.style.height = (arrayPageSize[1] + 'px');
	objOverlay.style.display = 'block';

	// center lightbox and make sure that the top and left values are not negative
		// and the image placed outside the viewport
		var lightboxTop = arrayPageScroll[1] + ((arrayPageSize[3] - 35 - boxHeight1) / 2);
		var lightboxLeft = ((arrayPageSize[0] - 20 - boxWidth1) / 2);
		objLightbox.style.top = (lightboxTop < 0) ? "0px" : lightboxTop + "px";
		objLightbox.style.left = (lightboxLeft < 0) ? "0px" : lightboxLeft + "px";

		// A small pause between the image loading and displaying is required with IE,
		// this prevents the previous image displaying for a short burst causing flicker.
		if (navigator.appVersion.indexOf("MSIE")!=-1) {
			pause(250);
		} 

		if (objLoadingImage) {	
		  objLoadingImage.style.display = 'none'; 
        }

		// Hide select boxes as they will 'peek' through the image in IE
		selects = document.getElementsByTagName("select");
        for (i = 0; i != selects.length; i++) {
            selects[i].style.visibility = "hidden";
        }
	
		objLightbox.style.display = 'block';

		// After image is loaded, update the overlay height as the new image might have
		// increased the overall page height.
		arrayPageSize = getPageSize1();
		objOverlay.style.height = (arrayPageSize[1] + 'px');
}

function fechaTrocaSenha() {
	
	window.location='../home/CarregarHome.do';
	
	// get objects
	objOverlay = document.getElementById('fundo');
	objLightbox = document.getElementById('msgTrocaSenha');

	// hide lightbox and overlay
	objOverlay.style.display = 'none';
	objLightbox.style.display = 'none';

	// make select boxes visible
	selects = document.getElementsByTagName("select");
    for (i = 0; i != selects.length; i++) {
		selects[i].style.visibility = "visible";
	}

	// disable keypress listener
	document.onkeypress = '';
	
	
}



