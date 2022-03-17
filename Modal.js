// const btnInfo = document.querySelector('[data-help-btn=""]'),
//   modalOverly = document.querySelector('.modal-overlay'),
//   closeBtn = document.querySelector('.close-btn'),
//   container = document.querySelector('.modal-container');
// console.log('btnInfo', btnInfo);

// btnInfo.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (e.target) {
//     modalOverly.classList.add('open-modal');
//   }
//   console.log('клик на модал кнопку');
// });

// closeBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (e.target) {
//     modalOverly.classList.remove('open-modal');
//   }
// });

// // when user clicks modal-btn add .open-modal to modal-overlay
// // when user clicks close-btn remove .open-modal from modal-overlay
// modalOverly.addEventListener('click', (e) => {
//   e.preventDefault();
//   const some = e.target.classList.contains('common');

//   if (!some) {
//     modalOverly.classList.remove('open-modal');
//   }
// });

//======================================================
const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalButtonsClose = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

console.log('modalButtons', modalButtons);

//Кнопки открыть модалку
modalButtons.forEach((item) => {
  item.addEventListener('click', (e) => {
    const modalId = e.target.dataset.modalButton;

    const findModalElement = document.querySelector('#' + modalId);

    findModalElement.classList.remove('hidden');

    //Ещё один варинат закрытия по фейду
    // findModalElement
    //   .querySelector('.modal-window')
    //   .addEventListener('click', (e) => {
    //     e.stopPropagation();
    //   });
  });
});

//Кнопки закрыть модалку
modalButtonsClose.forEach((item) => {
  item.addEventListener('click', (e) => {
    const modalIdClose = e.target
      .closest('[data-modal]')
      .classList.add('hidden');
    //console.log('modalIdClose', modalIdClose);
  });
});

// Закрытие модалки по фейду
allModals.forEach((item) => {
  item.addEventListener('click', (e) => {
    const fadeBlocClick = e.target.classList.contains('fade-block');

    if (fadeBlocClick) {
      e.target.classList.add('hidden');
    } else if (!fadeBlocClick) {
      return;
    }
  });
});
// looseCart();
export function looseCart() {
  allModals[1].classList.remove('hidden');

  setTimeout(() => allModals[1].classList.add('hidden'), 10000);
}
