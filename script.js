document.querySelectorAll('.box').forEach(box => {
  const options = box.querySelector('.options');

  box.addEventListener('click', () => {
    box.classList.toggle('expanded');
    options.classList.toggle('hidden');
  });

  box.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      box.style.backgroundColor = btn.dataset.color;
    });
  });

  box.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      box.style.fontSize = btn.dataset.size === 'large' ? '20px' : '14px';
    });
  });
});
