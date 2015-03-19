jQuery(document).ready(function() {

	$(function() {
		$( "#tabs" ).tabs();
	});
	actualiza("timeline.json","#tabs-1")
	
	// CUANDO PINCHO EN ALGUNA PESTAÑA ACTUALIZO ///
	$("#mytim").click(function(){	
		actualiza("mytimeline.json","#tabs-2")
	});
	$("#tim").click(function(){	
		actualiza("timeline.json","#tabs-1")
	});
	////////////////////////////////////////////////
	
	// PINCHO BOTÓN DE UPDATE.JSON //
	$("#newmsg").click(function(){	
		actualiza("update.json","#tabs-1")
	});
	/////////////////////////////////
});

// actualizar el timeline determinado
function actualiza(line,tabla){
	aux=null;
	
	compruebo = $(tabla).accordion("instance")		//iniciamos instancia de accordion 
	
	if(compruebo!=undefined){						//si ya había una, destruimos y volvemos a iniciar
		$(tabla).accordion("destroy")
		$(tabla).accordion("instance")
	}
	
	$.getJSON(line,function(data){
	
		aux=data
		
		}).done(function(){
			
			
			
			list = ""
			anterior = ""
			for(i=0;i<aux.items.length;i++){		//descargo json y preparo en formato de salida
				list = list + preparotexto(aux.items[i])
			}
			if(line=="update.json")		//si es del update, lo muestra a continuación de lo anterior
				anterior =$(tabla).html();
			
			$(tabla).html(list + anterior);
			$(tabla).accordion({active: true});
			
		})
	 
}
//función que organiza el formato de salida de cada mensaje
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
