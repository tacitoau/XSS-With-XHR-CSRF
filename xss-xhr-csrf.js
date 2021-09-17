var dados;

function corpo(xhr){ 
  if (!xhr.responseType || xhr.responseType === 'text'){ 
      dados = xhr.responseText; 
     } else if (xhr.responseType === 'document'){ 
       dados = xhr.responseXML; 
     } else if (xhr.responseType === 'json'){ 
       dados = xhr.responseJSON; 
     } else{ 
       dados = xhr.response; 
     }
      return dados;
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
