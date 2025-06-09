const buttons = document.querySelectorAll('.tab-btn');
const card = document.getElementById('profileCard');
const tabs = document.querySelectorAll('.tab-content');

buttons.forEach(btn => {
  const targetId = btn.dataset.target;
  const target = document.getElementById(targetId);

  btn.addEventListener('mouseenter', () => {
    card.classList.add('shifted');
    tabs.forEach(tab => tab.classList.remove('active'));
    target.classList.add('active');
  });
});

tabs.forEach(tab => {
  tab.addEventListener('mouseleave', () => {
    tab.classList.remove('active');
    card.classList.remove('shifted');
  });
});
