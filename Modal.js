const btnInfo = document.querySelector('[data-help-btn=""]'),
  modalOverly = document.querySelector('.modal-overlay'),
  closeBtn = document.querySelector('.close-btn'),
  container = document.querySelector('.modal-container');
console.log('btnInfo', btnInfo);

btnInfo.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target) {
    modalOverly.classList.add('open-modal');
  }
  console.log('клик на модал кнопку');
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target) {
    modalOverly.classList.remove('open-modal');
  }
});

// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
modalOverly.addEventListener('click', (e) => {
  e.preventDefault();
  const some = e.target.classList.contains('common');

  if (!some) {
    modalOverly.classList.remove('open-modal');
  }
});
