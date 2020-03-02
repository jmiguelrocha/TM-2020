var numeros = [];

function adicionar(){

    numeros.push(document.getElementById("input").value);

    document.getElementById("adicionados").innerHTML = "Adicionados: ";

    for(var i = 0; i < numeros.length; i++){
        document.getElementById("adicionados").innerHTML = document.getElementById("adicionados").innerHTML.concat(numeros[i]).concat(" ");
    }
    document.getElementById("input").value = "";
}

function somar(){

    if(numeros.length > 4){
        document.getElementById("maior").innerHTML = "Maior número: " + Math.max.apply(Math, numeros);
    }
    else{
        alert("string ajudinhas: INTRODUZA 5 NUMEROS");
    }
}