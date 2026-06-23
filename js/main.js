document.addEventListener('DOMContentLoaded', () => {
    // Dark / Light Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const saved = localStorage.getItem('brewTheme') || 'light';
        document.documentElement.setAttribute('data-theme', saved);
        themeToggle.checked = saved === 'dark';

        themeToggle.addEventListener('change', (e) => {
            const theme = e.target.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('brewTheme', theme);
        });
    }
});
