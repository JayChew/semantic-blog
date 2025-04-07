document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Toggle Theme';
  toggleButton.style.position = 'fixed';
  toggleButton.style.top = '10px';
  toggleButton.style.right = '10px';
  toggleButton.style.padding = '10px';
  toggleButton.style.cursor = 'pointer';

  // Append the button to the body
  document.body.appendChild(toggleButton);

  // Check if the theme preference is stored in localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
  }

  // Event listener to toggle between light and dark themes
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    // Store the theme preference in localStorage
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
});
