document.addEventListener('click', function (e) {
  if (!e.target.classList.contains('qty-btn')) return;

  const action = e.target.dataset.action;
  const input = e.target.closest('.quantity-box').querySelector('.qty-input');
  let value = parseInt(input.value, 10);

  if (action === 'increase') value++;
  if (action === 'decrease' && value > 1) value--;

  input.value = value;
});
