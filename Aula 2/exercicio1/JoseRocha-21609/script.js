function atualizaTexto(){
   var texto =  document.getElementById( "inputTexto").value;

   if(!texto.length) alert("Algo de errado não está certo");
    document.getElementById( "texto").innerText = texto;

    }