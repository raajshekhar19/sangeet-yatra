let containermovie = document.querySelector(".containermovie");
let seats = document.querySelectorAll(".row .seats:not(.occupied)");
let count  =  document.getElementById('count');
let total = document.getElementById('total');
let movieSelect = document.getElementById('movie');
//+ converts string to number
let ticketPrice =  +movieSelect.value;

//update total and cnt
function updateSelectedSeats(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount*ticketPrice;
}

//movie selector
movieSelect.addEventListener("change",(eve)=>{
    ticketPrice = +eve.target.value;
    deselectSeats();
    updateSelectedSeats();
})

// Deselect all selected seats
function deselectSeats() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    selectedSeats.forEach(seat => {
        seat.classList.remove('selected');
    });
}


containermovie.addEventListener("click",(event)=>{
    if(event.target.classList.contains('seat') && !event.target.classList.contains('occupied')){
        event.target.classList.toggle('selected');
    }
    updateSelectedSeats();
});
