const paymentTotal = document.getElementById('payment-total');
const btnPay = document.getElementById('btn-pay');
const buyerName = document.getElementById('buyer-name');
const buyerEmail = document.getElementById('buyer-email');

const grandTotalData = localStorage.getItem('grandTotal');

if (grandTotalData) {
    const grandTotal = parseInt(grandTotalData);
    paymentTotal.innerText = `Rp ${grandTotal.toLocaleString('id-ID')}`;
} else {
    alert("Sesi pesanan tidak ditemukan. Silakan pilih kursi terlebih dahulu.");
    window.location.href = 'seats.html';
}

btnPay.addEventListener('click', () => {
    if (buyerName.value.trim() === '' || buyerEmail.value.trim() === '') {
        alert('Mohon lengkapi Nama Lengkap dan Alamat Email Anda!');
        return;
    }

    btnPay.innerText = 'Memproses Pembayaran...';
    btnPay.setAttribute('disabled', 'true');

    setTimeout(() => {
        alert(`Berhasil! Terima kasih ${buyerName.value}, tiketmu akan dikirim ke ${buyerEmail.value}.`);
        localStorage.clear();
        window.location.href = 'seats.html';
    }, 1500);
});