// Theme utility for dark/light mode
export function setDarkMode(enabled: boolean) {
  const html = document.documentElement;
  if (enabled) {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

export function initTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark' || theme === null) {
    setDarkMode(true);
  } else {
    setDarkMode(false);
  }
} 