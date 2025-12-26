document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const storedTheme = localStorage.getItem('theme');

    // Apply saved theme on load
    if (storedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleBtn.textContent = 'Light Mode';
    }

    document.getElementById("themeToggleBtn").addEventListener("click", function (e) {
        e.preventDefault(); // stops reload no matter what
        document.body.classList.toggle("dark-mode");

        // Save preference
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = 'Light Mode';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = '🌙';
        }
    });
});
