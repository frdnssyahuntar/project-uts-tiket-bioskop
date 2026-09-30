const selectedSeatsData = localStorage.getItem('selectedSeats');
const subtotalData = localStorage.getItem('totalPrice');
const serviceFeePerTicket = 4000;

if (selectedSeatsData && subtotalData) {
    const seatsArray = JSON.parse(selectedSeatsData);
    const count = seatsArray.length;
    const ticketPrice = 40000;

    document.getElementById('ticket-count').innerText = count;
    document.getElementById('seat-list').innerText = seatsArray.join(', ');
    document.getElementById('ticket-calc').innerText = `Rp${ticketPrice.toLocaleString('id-ID')} × ${count}`;
    document.getElementById('service-calc').innerText = `Rp${serviceFeePerTicket.toLocaleString('id-ID')} × ${count}`;

    const grandTotal = parseInt(subtotalData) + (serviceFeePerTicket * count);
    document.getElementById('grand-total').innerText = `Rp${grandTotal.toLocaleString('id-ID')}`;
} else {
    window.location.href = 'seats.html';
}

let timeRemaining = 7 * 60;
const timerElement = document.getElementById('timer');

const countdown = setInterval(() => {
    timeRemaining--;
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;

    timerElement.innerText = `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;

    if (timeRemaining <= 0) {
        clearInterval(countdown);
        alert("sesi telah berakhir, mohon maaf pembayaran telah digagalkan");
        localStorage.clear();
        window.location.href = 'seats.html';
    }
}, 1000);

document.getElementById('btn-pay').addEventListener('click', () => {
    alert('Pembayaran Berhasil Disimulasikan!');
    clearInterval(countdown);
    localStorage.clear();
    window.location.href = 'seats.html';
});