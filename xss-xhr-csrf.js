var data;

function read_body(xhr){ 
  if (!xhr.responseType || xhr.responseType === 'text'){ 
      data = xhr.responseText; 
     } else if (xhr.responseType === 'document'){ 
       data = xhr.responseXML; 
     } else if (xhr.responseType === 'json'){ 
       data = xhr.responseJSON; 
     } else{ 
       data = xhr.response; 
     }
      return data;
}
 
var xhr = new XMLHttpRequest(); 

xhr.onreadystatechange = function(){  
  if (xhr.readyState == XMLHttpRequest.DONE){ 
     console.log(read_body(xhr)); 
  } 
} 
 
var dadosFormulario = new FormData(); 
var importar = 'phpinfo'; 
var falha = new Falha([importar], {type: 'tipo de aplicacao'}); 
dadosFormulario.append('arquivo de usuario', falha, 'pagina'); 
dadosFormulario.append('url', 'http://'); 
console.log(dadosFormulario);  
 
xhr.open('POST', 'url', true); 
    
xhr.send(dadosFormulario);
