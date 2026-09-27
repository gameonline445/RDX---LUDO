// Central Components System

// 1. TOP HEADER GENERATOR
function loadHeader() {
    const headerContainer = document.getElementById("header-container");
    if (!headerContainer) return;

    headerContainer.innerHTML = `
        <div class="top-header">
            <div class="header-left">
                <button class="menu-btn" onclick="toggleDrawer()">
                    <i class="fa-solid fa-bars"></i>
                </button>
                <div class="logo" onclick="window.location.href='dashboard.html'">
                    <img src="logo.png" alt="Logo" onerror="this.src='https://via.placeholder.com/46'">
                </div>
            </div>
            <div class="header-right">
                <button class="header-icon notification-icon" onclick="window.location.href='notifications.html'">
                    <i class="fa-solid fa-bell"></i>
                </button>
                <button class="header-icon wallet-icon" onclick="window.location.href='wallet.html'">
                    <i class="fa-solid fa-wallet"></i>
                </button>
                <button class="header-icon gift-icon" onclick="window.location.href='refer.html'">
                    <i class="fa-solid fa-gift"></i>
                </button>
            </div>
        </div>
    `;
}

// 2. SIDE DRAWER MENU GENERATOR
function loadDrawer() {
    const drawerContainer = document.getElementById("drawer-container");
    if (!drawerContainer) return;

    drawerContainer.innerHTML = `
        <div class="drawer-overlay" id="drawerOverlay" onclick="toggleDrawer()"></div>
        <div class="drawer" id="sideDrawer">
            <div class="drawer-header">
                <div class="drawer-user">
                    <div class="drawer-avatar" id="drawerAvatar">U</div>
                    <div>
                        <h4 id="drawerName" style="font-size:14px; font-weight:800;">User</h4>
                        <p id="drawerMobile" style="font-size:11px; color:#64748b;">+91**********</p>
                    </div>
                </div>
                <button class="drawer-close" onclick="toggleDrawer()"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="drawer-links">
                <button class="drawer-item" onclick="window.location.href='dashboard.html'">
                    <div class="drawer-item-icon menu-home"><i class="fa-solid fa-house"></i></div> Home
                </button>
                <button class="drawer-item" onclick="window.location.href='profile.html'">
                    <div class="drawer-item-icon menu-profile"><i class="fa-solid fa-user"></i></div> Profile
                </button>
                <button class="drawer-item" onclick="window.location.href='wallet.html'">
                    <div class="drawer-item-icon menu-wallet"><i class="fa-solid fa-wallet"></i></div> Wallet
                </button>
                <button class="drawer-item" onclick="window.location.href='history.html'">
                    <div class="drawer-item-icon menu-history"><i class="fa-solid fa-clock-rotate-left"></i></div> History
                </button>
                <button class="drawer-item" onclick="window.location.href='support.html'">
                    <div class="drawer-item-icon menu-support"><i class="fa-solid fa-headset"></i></div> Support
                </button>
                <button class="drawer-item" onclick="logout()">
                    <div class="drawer-item-icon menu-logout"><i class="fa-solid fa-right-from-bracket"></i></div> Logout
                </button>
            </div>
        </div>
    `;
}

// 3. BOTTOM NAVIGATION GENERATOR
function loadBottomNav() {
    const navContainer = document.getElementById("nav-container");
    if (!navContainer) return;

    const activePage = navContainer.getAttribute("data-active") || "home";

    navContainer.innerHTML = `
        <div class="bottom-nav">
            <button class="nav-item ${activePage === 'home' ? 'active' : ''}" onclick="window.location.href='dashboard.html'">
                <div class="nav-icon-box icon-home"><i class="fa-solid fa-house"></i></div>
                <span>Home</span>
            </button>
            <button class="nav-item ${activePage === 'wallet' ? 'active' : ''}" onclick="window.location.href='wallet.html'">
                <div class="nav-icon-box icon-wallet"><i class="fa-solid fa-wallet"></i></div>
                <span>Wallet</span>
            </button>
            <button class="nav-item ${activePage === 'support' ? 'active' : ''}" onclick="window.location.href='support.html'">
                <div class="nav-icon-box icon-support"><i class="fa-solid fa-headset"></i></div>
                <span>Support</span>
            </button>
            <button class="nav-item ${activePage === 'profile' ? 'active' : ''}" onclick="window.location.href='profile.html'">
                <div class="nav-icon-box icon-profile"><i class="fa-solid fa-user"></i></div>
                <span>Profile</span>
            </button>
        </div>
    `;
}

// TOGGLE SIDE DRAWER FUNCTION
window.toggleDrawer = function() {
    const drawer = document.getElementById("sideDrawer");
    const overlay = document.getElementById("drawerOverlay");
    if (drawer && overlay) {
        drawer.classList.toggle("active");
        overlay.classList.toggle("active");
    }
};

// AUTO RUN ON PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {
    loadHeader();
    loadDrawer();
    loadBottomNav();
});
