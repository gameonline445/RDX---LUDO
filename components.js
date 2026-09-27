// ==========================================
// Centralized Components System (components.js)
// ==========================================

// 1. TOP HEADER GENERATOR 🔝
function loadHeader() {
    const headerContainer = document.getElementById("header-container");
    if (!headerContainer) return;

    headerContainer.innerHTML = `
        <header class="top-header">
            <div class="header-left">
                <button class="menu-btn" onclick="toggleDrawer()">
                    <i class="fa-solid fa-bars"></i>
                </button>
                <div class="logo" onclick="window.location.href='dashboard.html'">
                    <img src="logo.png" alt="Logo" onerror="this.src='https://via.placeholder.com/46'">
                </div>
            </div>
            <div class="header-right">
                <button class="header-icon-btn btn-notif" onclick="window.location.href='notification.html'">
                    <i class="fa-solid fa-bell"></i>
                </button>
                <button class="header-icon-btn btn-wallet" onclick="window.location.href='wallet.html'">
                    <i class="fa-solid fa-wallet"></i>
                </button>
                <button class="header-icon-btn btn-refer" onclick="window.location.href='referral.html'">
                    <i class="fa-solid fa-gift"></i>
                </button>
            </div>
        </header>
    `;
}

// 2. SIDE DRAWER MENU GENERATOR 📱
function loadDrawer() {
    const drawerContainer = document.getElementById("drawer-container");
    if (!drawerContainer) return;

    drawerContainer.innerHTML = `
        <div class="drawer-overlay" id="drawerOverlay" onclick="toggleDrawer()"></div>
        <div class="drawer" id="sideDrawer">
            <div class="drawer-header">
                <div class="drawer-user">
                    <div class="drawer-avatar" id="drawerAvatar">
                        <img src="logo.png" alt="Logo" onerror="this.style.display='none'">
                    </div>
                    <div>
                        <h4 id="drawerName" style="font-size:14px; font-weight:900; color:#0c4a6e;">User</h4>
                        <p id="drawerMobile" style="font-size:11px; color:#64748b; font-weight:700;">+91**********</p>
                    </div>
                </div>
                <button class="drawer-close" onclick="toggleDrawer()"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="drawer-links">
                <button class="drawer-item" onclick="window.location.href='dashboard.html'">
                    <div class="drawer-item-icon menu-home"><i class="fa-solid fa-house"></i></div>
                    <span>Home</span>
                </button>
                <button class="drawer-item" onclick="window.location.href='profile.html'">
                    <div class="drawer-item-icon menu-profile"><i class="fa-solid fa-user"></i></div>
                    <span>My Profile</span>
                </button>
                <button class="drawer-item" onclick="window.location.href='wallet.html'">
                    <div class="drawer-item-icon menu-wallet"><i class="fa-solid fa-wallet"></i></div>
                    <span>My Wallet</span>
                </button>
                <button class="drawer-item" onclick="window.location.href='referral.html'">
                    <div class="drawer-item-icon menu-refer"><i class="fa-solid fa-gift"></i></div>
                    <span>Refer & Earn</span>
                </button>
                <button class="drawer-item" onclick="window.location.href='history.html'">
                    <div class="drawer-item-icon menu-history"><i class="fa-solid fa-clock-rotate-left"></i></div>
                    <span>History</span>
                </button>
                <button class="drawer-item" onclick="window.location.href='notification.html'">
                    <div class="drawer-item-icon menu-notification"><i class="fa-solid fa-bell"></i></div>
                    <span>Notifications</span>
                </button>
                <button class="drawer-item" onclick="window.location.href='support.html'">
                    <div class="drawer-item-icon menu-support"><i class="fa-solid fa-headset"></i></div>
                    <span>Support</span>
                </button>
                <button class="drawer-item" onclick="handleLogout()">
                    <div class="drawer-item-icon menu-logout"><i class="fa-solid fa-right-from-bracket"></i></div>
                    <span>Logout</span>
                </button>
            </div>
        </div>
    `;
}

// 3. BOTTOM NAVIGATION GENERATOR ⚓
function loadBottomNav() {
    const navContainer = document.getElementById("nav-container");
    if (!navContainer) return;

    // Current page URL se page name nikalna
    const pathName = window.location.pathname.split("/").pop() || "dashboard.html";

    navContainer.innerHTML = `
        <nav class="bottom-nav">
            <button class="nav-item ${pathName === 'dashboard.html' ? 'active' : ''}" onclick="window.location.href='dashboard.html'">
                <div class="nav-icon-box icon-home"><i class="fa-solid fa-house"></i></div>
                <span>Home</span>
            </button>
            <button class="nav-item ${pathName === 'wallet.html' ? 'active' : ''}" onclick="window.location.href='wallet.html'">
                <div class="nav-icon-box icon-wallet"><i class="fa-solid fa-wallet"></i></div>
                <span>Wallet</span>
            </button>
            <button class="nav-item ${pathName === 'support.html' ? 'active' : ''}" onclick="window.location.href='support.html'">
                <div class="nav-icon-box icon-support"><i class="fa-solid fa-headset"></i></div>
                <span>Support</span>
            </button>
            <button class="nav-item ${pathName === 'profile.html' ? 'active' : ''}" onclick="window.location.href='profile.html'">
                <div class="nav-icon-box icon-profile"><i class="fa-solid fa-user"></i></div>
                <span>Profile</span>
            </button>
        </nav>
    `;
}

// TOGGLE DRAWER FUNCTIONS 🔄
window.toggleDrawer = function() {
    const drawer = document.getElementById("sideDrawer");
    const overlay = document.getElementById("drawerOverlay");
    if (drawer && overlay) {
        drawer.classList.toggle("active");
        overlay.classList.toggle("active");
    }
};

window.toggleMenu = window.toggleDrawer;

// SAFE LOGOUT HANDLER 🚪
window.handleLogout = function() {
    if (typeof window.logout === "function") {
        window.logout();
    } else {
        if (confirm("Kya aap Logout karna chahte hain?")) {
            localStorage.clear();
            sessionStorage.clear();
            window.location.replace("index.html");
        }
    }
};

// AUTO RUN ON PAGE LOAD 🚀
document.addEventListener("DOMContentLoaded", () => {
    loadHeader();
    loadDrawer();
    loadBottomNav();
});
