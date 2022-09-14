var tt_div;
var tt_combo;
var tt_undefined;
var tt_timeoutID;
var tt_x;
var tt_y;


function show() 
{
	
	/*var str = "";
	for (i in tt_div)
		str += i + " = " + eval ("tt_div." + i) + "\n";
	alert( str );*/


	tt_div.style.visibility = "visible";
	
	tt_div.style.position = "absolute";
	tt_div.style.zIndex = "999";
	if ( tt_combo )
	{
 		tt_combo.style.visibility = "hidden";
 	}
	if (tt_div != null) 
	{
		var posX = tt_x - 120;
		var posY = tt_y - 80;
					
		if ( posX < 0 )
		{
			posX = 0;
		}
		tt_div.style.left = ( posX ) + "px";
		tt_div.style.top  = ( posY ) + "px";
	}// fim if

}

function hide() 
{
	clearTimeout (tt_timeoutID);
	if (tt_div == tt_undefined)
		return;			
	tt_div.style.visibility = "hidden";
	if ( tt_combo )
	{
		tt_combo.style.visibility = "visible";
	}
	tt_div = tt_undefined;
	tt_combo = tt_undefined;
}

/*
 * Mostra uma determinada mensagem em um Tooltip
 * e torna o combo invisivel para n?o sobrepor o tooltip
 */
function mensagemCombo( msg, id, idCombo )
{
	
	tt_div = document.getElementById( id );
	tt_combo = document.getElementById( idCombo ); 
	show();
	tt_div.innerHTML = '<table cellpadding="0" cellspacing="0" bgcolor="#FFFFF9" style="border: 1px solid;border-color: #97B7DB;"><tr height="60px"><td></td><td>' + msg + '</td></tr></table>';
	
}

function mensagem (msg, id)
{
	clearTimeout (tt_timeoutID);
	tt_timeoutID = setTimeout ("mostra('" + msg + "', '" + id + "');", 600);
}

/*
 * Mostra uma determinada mensagem em um Tooltip
 */		 
function mostra( msg, id )
{
	tt_div = document.getElementById( id );
	/*var str = "";
	for (i in tt_div)
		str += i + " = " + eval ("tt_div." + i) + "\n";
	alert( str );*/
	tt_combo = tt_undefined;
	show();
	tt_div.innerHTML = '<table cellpadding="0" cellspacing="0" bgcolor="#FFFFF9" style="border: 1px solid;border-color: #97B7DB;"><tr height="60px"><td></td><td>' + msg + '</td></tr></table>';
}


window.document.onmousemove = function update(e) 
							  {
							  		
								tt_x = (document.all) ? window.event.x + document.body.scrollLeft : e.pageX;
 								tt_y = (document.all) ? window.event.y + document.body.scrollTop  : e.pageY;

								if (tt_div != null) {
									var posX = tt_x - 120;
									var posY = tt_y - 80;
									
									if ( posX < 0 )
									{
										posX = 0;
									}
									
									
									tt_div.style.left = ( posX ) + "px";
									tt_div.style.top  = ( posY ) + "px";
								}// fim if
	
							  }// fim
