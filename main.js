/* Modal */
const detailsButton = document.querySelectorAll('.details-btn');

const modal = document.querySelector('.modal-wrapper');

const closeBtn = document.getElementById('modal-close-btn');

const openModal = () => {
  modal.classList.add('active');
};

detailsButton.forEach((button) => {
  button.addEventListener('click', openModal);
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('active');
  }
});

/* Arrow-up */
const arrowUp = document.getElementById('arrow-up');

// Обробник події прокрутки
window.addEventListener('scroll', () => {
  if (window.scrollY >= 450) {
    arrowUp.style.opacity = '0.7';
  } else {
    arrowUp.style.opacity = '0';
  }
});

// Обробник події при наведенні миші (hover)
arrowUp.addEventListener('mouseover', () => {
  arrowUp.style.opacity = '1'; // Збільшуємо прозорість при наведенні
});

// Обробник події, коли миша покидає елемент
arrowUp.addEventListener('mouseout', () => {
  arrowUp.style.opacity = '0.7'; // Повертаємо початкове значення прозорості
});

/* Custom select bgd */

const phoneSelect = document.querySelectorAll('.phone-select');

phoneSelect.forEach((select) => {
  select.addEventListener('change', function () {
    const selectedOption = this.options[this.selectedIndex];
    const flagUrl = selectedOption.getAttribute('data-flag');
    this.style.backgroundImage = `url(${flagUrl}), url(/images/arrow-select.png)`;
  });
});
