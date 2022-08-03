const aleatorios = document.querySelector(".numeros-a-adivinar");
const start = document.querySelector(".boton-start");
const startbtn = document.getElementById("start");
const botones = document.querySelectorAll(".boton");
const consola = document.querySelector(".consolita");
const btnOk = document.querySelector(".boton-check");
const puntos = document.querySelector(".puntos");




const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let campana = false;

botones.forEach(boton => {
    boton.addEventListener('click', (evnt) => {
        if (campana == true) {
            consola.innerHTML += boton.value;
        }
    });
});


const asteriscos = () => {
    aleatorios.innerHTML = "*****";
    campana = true;
}


let cuentaRandoms = 0;
let nroSecreto = 0;

startbtn.addEventListener('click', (evnt) => {
    let minimo = 1;
    let maximo = 9;
    for (i = 0; i <= cuentaRandoms; i++) {
        minimo = minimo * 10;
        maximo = maximo * 10;
    }
    aleatorios.innerHTML = random(minimo, maximo);
    nroSecreto = aleatorios.innerHTML;
    if (cuentaRandoms <= 5) {
        const timeOut = setTimeout(asteriscos, 3000);
    } else {
        const timeOut = setTimeout(asteriscos, 5000);
    }
    cuentaRandoms++;
});


let puntaje = 0;

btnOk.addEventListener('click', (evnt) => {
    if ((consola.innerHTML != nroSecreto) || (consola.innerHTML == "")) {
        cuentaRandoms = 0;
        puntaje = 0;
        puntos.innerHTML = `Puntos: ${puntaje}`;
        startbtn.disabled = false;
    }  else {
        puntaje += 10;
        puntos.innerHTML = `Puntos: ${puntaje}`;
        startbtn.disabled = false;
        start.click();
    }
    consola.innerHTML = "";
    campana = false;
});