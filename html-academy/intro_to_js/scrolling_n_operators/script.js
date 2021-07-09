let review = document.querySelectorAll('.review');
let submitButton = document.querySelector('.submit-button');
let error = document.querySelector('.error');

for (let i of review) {
    i.onchange = function() {
        if (i.dataset.evaluation === 'good') {
            submitButton.disabled = false;
            error.classList.remove('shown')
        } else if (i.dataset.evaluation === 'bad'){
            submitButton.disabled = true;
            error.classList.add('shown')
        }
    }
}
/*
1. У всех радиокнопок есть класс review.
2. Чтобы отслеживать переключение радиокнопок, нужно добавить обработчик событий onchange каждой радиокнопке.
3. У каждой радиокнопки есть атрибут data-evaluation. Если отзыв хороший, значение этого атрибута – 'good', а если плохой - 'bad'.
4. Кнопка отправки имеет класс submit-button. Если пользователь выбрал плохой отзыв, кнопку нужно заблокировать, а если хороший — разблокировать.
5. Чтобы показать сигнал об ошибке, элементу с классом error нужно добавить класс shown. Сигнал нужно показывать, если пользователь выбрал плохой отзыв. Если выбран хороший отзыв, сигнал об ошибке нужно спрятать.
*/
