jQuery(document).ready(function() {

	$(function() {
		$( "#tabs" ).tabs();
	});
	
	$("#mytim").click(function(){	//ASÍ CAMBIO CONTENIDO
		$("#tabs-2").text("CARA PREPUCIO")
	});
	$("#tim").click(function(){	//ASÍ CAMBIO CONTENIDO
		actualiza("timeline.json")
	});

});

function actualiza(line){
	aux=null;
	$.getJSON(line,function(data){
	
		aux=data
		
		}).done(function(){
		
			list = "<ul>"
			for(i=0;i<aux.items.length;i++){
				list = list + "<li>" + aux.items[i].Autor + "</li>"
			}
			list = list + "</ul>"
			$("#tabs-1").html(list);
			
		})
	
}
