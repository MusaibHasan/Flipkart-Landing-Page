// document.addEventListener('DOMContentLoaded', () => {
//     const themeToggleBtn = document.getElementById('themeToggleBtn');
//     const storedTheme = localStorage.getItem('theme');

//     // Apply saved theme on load
//     if (storedTheme === 'dark') {
//         document.body.classList.add('dark-mode');
//         themeToggleBtn.textContent = 'Light Mode';
//     }

//     document.getElementById("themeToggleBtn").addEventListener("click", function (e) {
//         e.preventDefault(); // stops reload no matter what
//         document.body.classList.toggle("dark-mode");

//         // Save preference
//         if (document.body.classList.contains('dark-mode')) {
//             localStorage.setItem('theme', 'dark');
//             themeToggleBtn.textContent = 'Light Mode';
//         } else {
//             localStorage.setItem('theme', 'light');
//             themeToggleBtn.textContent = '🌙';
//         }
//     });
// });

const btn = document.getElementById("themeToggleBtn");
const icon = document.getElementById("themeIcon");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    icon.textContent = "☀️";
    btn.setAttribute("data-label", "Light Mode");
} else {
    icon.textContent = "🌙";
    btn.setAttribute("data-label", "Dark Mode");
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        icon.textContent = "☀️";
        btn.setAttribute("data-label", "Light Mode");
        localStorage.setItem("theme", "dark");
    } else {
        icon.textContent = "🌙";
        btn.setAttribute("data-label", "Dark Mode");
        localStorage.setItem("theme", "light");
    }
});

document.querySelectorAll('.dropdown-toggle-mobile').forEach(toggle => {
    toggle.addEventListener('click', function (e) {
        if (window.innerWidth >= 992) return; // desktop → ignore

        e.preventDefault();

        const navItem = this.closest('.nav-item');

        // Close other open accordions
        document.querySelectorAll('.nav-item.open').forEach(item => {
            if (item !== navItem) item.classList.remove('open');
        });

        // Toggle current
        navItem.classList.toggle('open');
    });
});
