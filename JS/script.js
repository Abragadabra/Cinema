let totalSum = 0

const rubbleSum = document.querySelector('.fee-text-sum')
const MegaArraySeats = document.querySelectorAll('.seat')

MegaArraySeats.forEach(element => {
    element.addEventListener('click', function () {
        if (element.classList.contains('closed')) {
            
        }
        else if (element.classList.contains('poked')) {
            element.classList.remove('poked')
            element.innerHTML = `<img src="img/seat.svg">`
            totalSum -= 800
        }
        else {
            element.classList.add('poked')
            element.innerHTML = `<img src="img/yellow-seat.svg">`
            totalSum += 800
        }
        updateSum()
    })
});

function updateSum() {
    rubbleSum.textContent = totalSum
}