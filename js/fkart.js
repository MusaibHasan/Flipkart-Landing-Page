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
        const dropdown = navItem.querySelector('.nav-dropdown');

        // Prevent taps during animation
        dropdown.classList.add('animating');

        // Close other open accordions
        document.querySelectorAll('.nav-item.open').forEach(item => {
            if (item !== navItem) item.classList.remove('open');
        });

        // Toggle current
        navItem.classList.toggle('open');

        // Remove lock after animation completes
        setTimeout(() => {
            dropdown.classList.remove('animating');
        }, 260); // slightly > CSS transition duration
    });
});

// Close all accordions when offcanvas closes
const offcanvasEl = document.getElementById('offcanvasNavbar');

offcanvasEl.addEventListener('hidden.bs.offcanvas', () => {
    document.querySelectorAll('.nav-item.open').forEach(item => {
        item.classList.remove('open');
    });
});
