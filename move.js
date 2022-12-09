
let enviarB = document.querySelector("button")
let input = document.querySelector("input")



function cargarCiudad(){
    let city = input.value
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=95176c8edea30e33338e0eaddd53a916", function(data) {
        document.querySelector(".container").style.visibility = "visible"
        document.querySelector("#ciudad").textContent = data.name
        let kelvin = data.main.temp
        let celsius = Math.round(kelvin - 273.15)
        document.querySelector("#temperatura").textContent = celsius
        document.querySelector("#grados").innerHTML = "<sup>°C</sup>"
        document.getElementById("wicon").src="http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        document.querySelector("#descripcion").textContent = data.weather[0].description
    }).fail(function() {
        alert("Ciudad no encontrada");
      }) 
}

enviarB.addEventListener("click", function(){
    if(document.getElementById("clean").value != 0){
        cargarCiudad()
        document.getElementById("clean").value = "";
    }
    else{
        alert("DEBE ESCRIBIR UN LUGAR")
    }
})
