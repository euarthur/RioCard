
		function submitForm( objId ) {
			var obj = document.getElementById(objId);
			if (obj){
				obj.submit();
			}					
		}
	    
		function swapDisplay( objId){
			var obj = document.getElementById(objId);

			if ( obj ){
				if ( obj.style.display == "none" ) {
					obj.style.display = "block";
				} else {
					obj.style.display = "none";
				}
			}
		}
		
