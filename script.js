document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('table tr');
    if (rows.length > 0) {
        rows.forEach(row => {
            row.addEventListener('mouseenter', () => {
                row.style.backgroundColor = '#e0f0ff';
            });
            row.addEventListener('mouseleave', () => {
                row.style.backgroundColor = '';
            });
        });
    }
});
