// Function jo sabhi pages par Navbars load karega
function loadSyncedComponents() {
    // 1. TOP HEADER
    const headerHTML = `
        <header class="app-header">
            <div class="header-left">
                <button class="app-icon-box icon-bg-notif" onclick="toggleDrawer()">
                    <i class="fas fa-bars"></i>
                </button>
                <img src="logo.png" alt="RDX Ludo" class="app-logo" style="height:35px;">
            </div>
            <div class="header-right">
                <button class="app-icon-box icon-bg-notif" onclick="location.href='notifications.html'">
                    <i class="fas fa-bell"></i>
                </button>
                <button class="app-icon-box icon-bg-wallet" onclick="location.href='wallet.html'">
                    <i class="fas fa-wallet"></i>
                </button>
                <button class="app-icon-box icon-bg-refer" onclick="location.href='refer.html'">
                    <i class="fas fa-gift"></i>
                </button>
            </div>
        </header>
    `;

    // 2. SIDE DRAWER MENU
    const drawerHTML = `
        <div id="drawerOverlay" class="drawer-overlay" onclick="toggleDrawer()"></div>
        <div id="sideDrawer" class="side-drawer">
            <div class="drawer-header">
                <div>
                    <h4 style="margin:0; font-size:16px;">Jai shree shyam</h4>
                    <small style="opacity:0.8;">+917878852370</small>
                </div>
                <button onclick="toggleDrawer()" style="border:none; background:none; color:white; font-size:24px; cursor:pointer;">×</button>
            </div>
            <ul class="drawer-menu">
                <li onclick="location.href='home.html'">
                    <div class="app-icon-box icon-bg-home"><i class="fas fa-home"></i></div> Home
                </li>
                <li onclick="location.href='profile.html'">
                    <div class="app-icon-box icon-bg-profile"><i class="fas fa-user"></i></div> Profile
                </li>
                <li onclick="location.href='wallet.html'">
                    <div class="app-icon-box icon-bg-wallet"><i class="fas fa-wallet"></i></div> Wallet
                </li>
                <li onclick="location.href='refer.html'">
                    <div class="app-icon-box icon-bg-refer"><i class="fas fa-gift"></i></div> Refer & Earn
                </li>
                <li onclick="location.href='notifications.html'">
                    <div class="app-icon-box icon-bg-notif"><i class="fas fa-bell"></i></div> Notifications
                </li>
                <li onclick="location.href='support.html'">
                    <div class="app-icon-box icon-bg-support"><i class="fas fa-headset"></i></div> Support
                </li>
            </ul>
        </div>
    `;

    // 3. BOTTOM NAVIGATION
    const bottomNavHTML = `
        <nav class="bottom-nav">
            <a href="home.html" class="nav-item">
                <div class="app-icon-box icon-bg-home"><i class="fas fa-home"></i></div>
                <span>Home</span>
            </a>
            <a href="wallet.html" class="nav-item">
                <div class="app-icon-box icon-bg-wallet"><i class="fas fa-wallet"></i></div>
                <span>Wallet</span>
            </a>
            <a href="support.html" class="nav-item">
                <div class="app-icon-box icon-bg-support"><i class="fas fa-headset"></i></div>
                <span>Support</span>
            </a>
            <a href="profile.html" class="nav-item">
                <div class="app-icon-box icon-bg-profile"><i class="fas fa-user"></i></div>
                <span>Profile</span>
            </a>
        </nav>
    `;

    // HTML elements ko safely set karna
    const headerEl = document.getElementById('header-container');
    const drawerEl = document.getElementById('drawer-container');
    const bottomEl = document.getElementById('bottom-nav-container');

    if (headerEl) headerEl.innerHTML = headerHTML;
    if (drawerEl) drawerEl.innerHTML = drawerHTML;
    if (bottomEl) bottomEl.innerHTML = bottomNavHTML;
}

// Drawer Open/Close toggle function
function toggleDrawer() {
    const drawer = document.getElementById('sideDrawer');
    const overlay = document.getElementById('drawerOverlay');
    if (drawer && overlay) {
        drawer.classList.toggle('open');
        overlay.classList.toggle('open');
    }
}

// Page fully load hone par apne aap run ho
document.addEventListener('DOMContentLoaded', loadSyncedComponents);
