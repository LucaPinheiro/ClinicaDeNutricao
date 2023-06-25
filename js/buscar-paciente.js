var botaoAdcionar = document.querySelector("#buscar-pacientes");

botaoAdcionar.addEventListener("click", function() {
    console.log("buscando pacientes");
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");
    
    xhr.addEventListener("load", function() {
        console.log(xhr.responseText);
    });

    xhr.send();
});
