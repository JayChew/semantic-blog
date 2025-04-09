document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  }

  themeToggle?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});

const filterInput = document.getElementById('filter');
if (filterInput) {
  filterInput.addEventListener('input', () => {
    const filterText = filterInput.value.toLowerCase();
    document.querySelectorAll('article').forEach((post) => {
      const title = post.querySelector('h2')?.textContent.toLowerCase() || '';
      const body = post.textContent.toLowerCase();
      post.style.display = title.includes(filterText) || body.includes(filterText) ? '' : 'none';
    });
  });
}