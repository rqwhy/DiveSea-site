const modal = document.querySelectorAll('.modal');
const modalOverlay = document.querySelector('.detail-overlay');
const btn = document.querySelectorAll('.detail__btn');

btn.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modal.forEach((el) => {
      el.classList.remove('detail-modals--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('detail-modals--visible');
    modalOverlay.classList.add('detail-overlay--visible');
  })
})

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('detail-overlay--visible');
		modal.forEach((el) => {
			el.classList.remove('detail-modals--visible');
		});
	}
});