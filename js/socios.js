jQuery(document).ready(function() {

	$(function() {
		$( "#tabs" ).tabs();
	});
	
	$("#mytim").click(function(){	//ASÍ CAMBIO CONTENIDO
		actualiza("mytimeline.json","#tabs-2")
	});
	$("#tim").click(function(){	//ASÍ CAMBIO CONTENIDO
		actualiza("timeline.json","#tabs-1")
	});

});

function actualiza(line,tabla){
	aux=null;
	
	compruebo = $(tabla).accordion("instance")
	
	if(compruebo!=undefined){
		$(tabla).accordion("destroy")
		$(tabla).accordion("instance")
	}
	
	$.getJSON(line,function(data){
	
		aux=data
		
		}).done(function(){
		
			list = ""
			for(i=0;i<aux.items.length;i++){
				list = list + preparotexto(aux.items[i])
			}
			
			$(tabla).html(list);
			$(tabla).accordion({active: true});
			
		})
	 
}

function preparotexto(item){
	
	texto = null;
	list = "<ul>"
	list = list + "<li>" + "<img class ='avatar' src="+item.Avatar+">" + "</li>"
	list = list + "<li>" + item.Autor + "</li>"
	list = list + "<li>" + item.Titulo + "</li></ul>"
	
	list2 = "<ul>"
	list2 = list2 + "<li>" + item.Fecha + "</li>"
	list2 = list2 + "<li>" + item.Contenido + "</li></ul>"
	texto = "<h3>"+list+"</h3><div><p>" + list2 +"</p></div>"
	
	return texto
	
}
