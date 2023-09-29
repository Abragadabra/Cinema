// rubbleSum - элемента с суммой
// ticketPrice - цена одного билета
// MegaArraySeats - массив сидений
// MegaArrayIMG - массив изображений сидений
// burgerButton - кнопка бургер-меню
const rubbleSum = document.querySelector('.fee-text-sum');
const ticketPrice = 500;
const MegaArraySeats = document.querySelectorAll('.seat');
const MegaArrayIMG = document.querySelectorAll('.seat img');
const burgerButton = document.querySelector('.m-menu');
const burgerMenu = document.querySelector('.menu');

// totalSum - итоговая сумма
let totalSum = 0;

// Перебор массива изображений и выдача им атрибута draggable false
MegaArrayIMG.forEach(element => {
    element.setAttribute('draggable', 'false')
})

// Перебор массива сидений
// Если у сидения класс closed, то ничего не делаем
// Если у сидения класс poked, то меняем сидение на обычно и вычитаем сумму
// Иначе мы делаем сидение жёлтым и добавляем сумму
MegaArraySeats.forEach(element => {
    element.addEventListener('click', function () {
        if (element.classList.contains('closed')) {
            
        }
        else if (element.classList.contains('poked')) {
            element.classList.remove('poked');
            element.innerHTML = `<img src="img/seats/seat.svg">`;
            totalSum -= ticketPrice;
        }
        else {
            element.classList.add('poked');
            element.innerHTML = `<img src="img/seats/yellow-seat.svg">`;
            totalSum += ticketPrice;
        }
        // Обновляем элемент с суммой
        updateSum();
    });
});

// Событие при нажатии на кнопку бургер
burgerButton.addEventListener('click', function () {
    burgerMenu.classList.toggle('is-open');
});

// Функция обновления элемента с суммой, которая заменяем текст на сумму
function updateSum() {
    rubbleSum.textContent = totalSum;
}