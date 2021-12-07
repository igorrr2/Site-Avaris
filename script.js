import Countdown from "./countdown.js"

const tempoParaLancamento = new Countdown("01 February 2022 15:00:00 GMT-0300");  
const tempos = document.querySelectorAll("[data-time]"); 
function mostrarTempo(){
  tempos.forEach((tempo, index)=>{
  tempo.innerHTML = tempoParaLancamento.total[index];

})
}
mostrarTempo();
setInterval(mostrarTempo,1000);