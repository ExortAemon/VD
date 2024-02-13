document.getElementById('yes-btn').addEventListener('click', function() {
    window.location.href = "other_page.html";
});

const yesBtn = document.getElementById('yes-btn');

function setInitialPosition() {
    const yesBtnRect = yesBtn.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();
    const initialX = yesBtnRect.left + yesBtnRect.width / 2 - noBtnRect.width / 2;
    const initialY = yesBtnRect.bottom;
    noBtn.style.left = initialX + 'px';
    noBtn.style.top = initialY + 'px';
}

function moveRandomly() {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

// Вызываем функцию moveRandomly только при наведении на кнопку "Нет"
noBtn.addEventListener('mouseenter', () => {
    moveRandomly();
    const moveInterval = setInterval(moveRandomly, 1000);
    noBtn.addEventListener('mouseleave', () => {
        clearInterval(moveInterval);
    });
});

// Устанавливаем начальную позицию кнопки "Нет"
window.addEventListener('load', setInitialPosition);