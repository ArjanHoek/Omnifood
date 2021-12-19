const items = document.querySelectorAll('.item');

const collapseAllItems = () =>
  items.forEach(item => item.classList.remove('open'));

const openItem = item => item.classList.add('open');

items.forEach(item => {
  const arrow = item.querySelector('.icon');
  arrow.addEventListener('click', function () {
    collapseAllItems();
    openItem(item);
  });
});
