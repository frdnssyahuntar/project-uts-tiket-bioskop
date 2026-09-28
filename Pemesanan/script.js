const seatGrid = document.getElementById('seat-grid');
const seatNumbersDisplay = document.getElementById('seat-numbers');
const totalPriceDisplay = document.getElementById('total-price');
const btnNext = document.getElementById('btn-next');

const ticketPrice = 40000;
const rows = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N'];

rows.forEach(row => {
    for (let col = 1; col <= 16; col++) {
        const seatId = `${row}${col}`;
        const seatDiv = document.createElement('div');
        seatDiv.classList.add('seat');
        seatDiv.innerText = seatId;
        seatDiv.dataset.seat = seatId;

        seatGrid.appendChild(seatDiv);

        if (col === 8) {
            const aisleDiv = document.createElement('div');
            aisleDiv.classList.add('aisle');
            seatGrid.appendChild(aisleDiv);
        }
    }
});

seatGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelection();
    }
});

function updateSelection() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    const seatsIndex = [...selectedSeats].map(seat => seat.dataset.seat);
    const selectedSeatsCount = selectedSeats.length;
    const totalPrice = selectedSeatsCount * ticketPrice;

    seatNumbersDisplay.innerText = seatsIndex.length > 0 ? seatsIndex.join(', ') : '-';
    totalPriceDisplay.innerText = `Rp${totalPrice.toLocaleString('id-ID')}`;

    if (selectedSeatsCount > 0) {
        btnNext.removeAttribute('disabled');
    } else {
        btnNext.setAttribute('disabled', 'true');
    }

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    localStorage.setItem('totalPrice', totalPrice);
}

btnNext.addEventListener('click', () => {
    window.location.href = 'summary.html';
});