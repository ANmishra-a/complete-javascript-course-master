const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const hiddenStyle = document.querySelector('.hidden');
const btnShow = document.querySelectorAll('.show-modal');
const unHide = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnShow.length; i++) {
  btnShow[i].addEventListener('click', unHide);
  modal.addEventListener('click', unHide);
}
overlay.addEventListener('click', close);
closeModal.addEventListener('click', close);
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      close();
    }
  }
});
