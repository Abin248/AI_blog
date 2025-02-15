const body = document.body;
const theme = localStorage.getItem('theme') || 'light';
body.classList.toggle('dark', theme === 'dark');

document.getElementById('darkModeToggle').addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});
