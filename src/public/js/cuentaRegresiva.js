const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds');

//Fecha a futuro
const countdownDate = new Date('08 30, 2023 00:00:00').getTime();

let interval = setInterval(function(){
    //Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //Obtener las distancias entre ambas fechas
    let distance = countdownDate - now;

    //Calculos a dias-horas-minutos-segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 

    //Escribimos resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;


    //Cuando llegue a 0
    if(distance < 0){
        clearInterval(interval);
       
    }
}, 1000);