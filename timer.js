const destination = new Date("Jul 7, 2024 16:00:00").getTime(); 


let timeX = setInterval(function(){
let now = new Date().getTime();

let distance = destination - now ;

let days = Math.floor(distance / (1000* 60* 60*24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.querySelector(".counter").innerHTML = days + "d, " + hours+ "hrs: "+minutes+"m:"+seconds+"s";

if (distance < 0) {
    clearInterval(timeX);
    document.querySelector("#message").innerText = "You are out of time!";
    document.querySelector(".counter").innerText = " 0d, 00hrs :00m: 00s";
}

},1000);