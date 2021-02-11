const handSec = document.querySelector(".hand.sec")
const handMin = document.querySelector(".hand.min")
const handHour = document.querySelector(".hand.hour")

function setDate(){
    const now = new Date();
    const sec = now.getSeconds();
    const secDeg = ((sec/60)*360) + 90 ;
    const min = now.getMinutes();
    const minDeg = ((min/60)*360) + 90 ;
    const hour = now.getHours();
    const hourDeg = ((hour/12)*360) + 90 ;
    handSec.style.transform = `rotate(${secDeg}deg)`;
    handMin.style.transform = `rotate(${minDeg}deg)`;
    handHour.style.transform = `rotate(${hourDeg}deg)`;
}

const bgVideo = document.getElementById("bgVideo");
setInterval(setDate, 1000)