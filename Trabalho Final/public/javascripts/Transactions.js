				
//MAIN FUNCTION					
function SendToIndexjs (url,fn){
	$(document).ready(function() {
		   		$.ajax({ 
            		url: url
           		 }).then(function(data) {
	              fn(data);              });
});
}
