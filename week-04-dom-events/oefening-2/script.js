const boxes = document.querySelectorAll('.box');

for (let box of boxes) {
    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });
}