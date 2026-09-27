// Header Component
function loadHeader() {
    const headerHTML = `
        <div class="app-header">
            <div class="header-left">
                <button class="menu-toggle-btn" onclick="toggleMenu()">
                    <i class="fa-solid fa-bars"></i>
                </button>
                <a href="home.html" class="logo-link">
                    <img src="logo.png" alt="RDX Ludo" class="header-logo">
                </a>
            </div>
            <div class="header-right">
                <button class="header-icon-btn btn-notif" onclick="window.location.href='notifications.html'">
                    <i class="fa-solid fa-bell"></i>
                </button>
                <button class="header-icon-btn btn-wallet" onclick="window.location.href='wallet.html'">
                    <i class="fa-solid fa-wallet"></i>
                </button>
                <button class="header-icon-btn btn-refer" onclick="window.location.href='refer.html'">
                    <i class="fa-solid fa-gift"></i>
                </button>
            </div>
        </div>
    `;

    const headerElement = document.getElementById("header-container");
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }
}

// Bottom Navigation Component
function loadBottomNav() {
    const navHTML = `
        <div class="bottom-nav">
            <a href="home.html" class="nav-item">
                <i class="fa-solid fa-house"></i>
                <span>Home</span>
            </a>
            <a href="wallet.html" class="nav-item">
                <i class="fa-solid fa-wallet"></i>
                <span>Wallet</span>
            </a>
            <a href="support.html" class="nav-item">
                <i class="fa-solid fa-headset"></i>
                <span>Support</span>
            </a>
            <a href="profile.html" class="nav-item">
                <i class="fa-solid fa-user"></i>
                <span>Profile</span>
            </a>
        </div>
    `;

    const navElement = document.getElementById("bottom-nav-container");
    if (navElement) {
        navElement.innerHTML = navHTML;
    }
}

// Active Nav Link Highlight karne ke liye Helper Function
function highlightActiveNav() {
    const currentPage = window.location.pathname.split("/").pop() || "home.html";
    const navLinks = document.querySelectorAll(".bottom-nav .nav-item");
    
    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// Page load hone par saare components load karna
document.addEventListener("DOMContentLoaded", () => {
    loadHeader();
    loadBottomNav();
    highlightActiveNav();
});
