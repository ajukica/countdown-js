const daniEl = document.getElementById ('dani');
const satiEl = document.getElementById ('sati');
const minuteEl = document.getElementById ('minute');
const sekundeEl = document.getElementById ('sekunde');



const solin = '1 Oct 2021';

function odbrojavnaje () {
    const datumSolina = new Date (solin);
    const trenutniDatum = new Date();

    const ukupnesekunde = (datumSolina - trenutniDatum) / 1000;

    const dani = Math.ceil (ukupnesekunde / 3600 / 24);
    const sati = Math.ceil (ukupnesekunde / 3600) % 24;
    const minute = Math.ceil (ukupnesekunde / 60) % 60;
    const sekunde = Math.ceil (ukupnesekunde % 60);


daniEl.innerHTML = dani;  
satiEl.innerHTML = sati;
minuteEl.innerHTML = minute;
sekundeEl.innerHTML = sekunde;
}




odbrojavnaje();

setInterval(odbrojavnaje,1000);

