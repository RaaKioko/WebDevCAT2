document.addEventListener('DOMContentLoaded', () => {
    // 1. Dark / Light Mode Toggle
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

    // 2. Menu Category Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                menuItems.forEach(item => {
                    item.closest('.col-md-4').style.display =
                        (filter === 'all' || item.dataset.category === filter) ? 'block' : 'none';
                });
            });
        });
    }
});
