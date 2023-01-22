const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = date.getHours().toString().padStart(2,"0");
    const minuets = date.getMinutes().toString().padStart(2,"0");
    const seconds = date.getSeconds().toString().padStart(2,"0");
    clock.innerText = `${hours}:${minuets}:${seconds}`;
}

getClock(); // 새로고침했을때 1초 대기 방지
setInterval(getClock, 1000);