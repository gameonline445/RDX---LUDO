// Dynamic Layout Injection Component

function renderComponents() {
    // 1. Render Header
    const headerContainer = document.getElementById("header-container");
    if (headerContainer) {
        headerContainer.innerHTML = `
        <header class="top-header">
            <div class="header-left">
                <button class="menu-btn" onclick="toggleMenu()"><i class="fa-solid fa-bars"></i></button>
                <div class="logo" onclick="window.location.replace('dashboard.html')">
                    <img src="logo.png" alt="RDX Logo">
                </div>
            </div>
            <div class="header-right">
                <button class="header-icon notification-icon" onclick="window.location.replace('notification.html')"><i class="fa-solid fa-bell"></i></button>
                <button class="header-icon wallet-icon" onclick="window.location.replace('wallet.html')"><i class="fa-solid fa-wallet"></i></button>
                <button class="header-icon gift-icon" onclick="window.location.replace('referral.html')"><i class="fa-solid fa-gift"></i></button>
            </div>
        </header>
        `;
    }

    // 2. Render Side Drawer
    const drawerContainer = document.getElementById("drawer-container");
    if (drawerContainer) {
        drawerContainer.innerHTML = `
        <div class="drawer-overlay" id="drawerOverlay" onclick="toggleMenu()"></div>
        <div class="drawer" id="sideDrawer">
            <div class="drawer-header">
                <div class="drawer-user">
                    <div class="drawer-avatar" id="drawerAvatar">
                        <img src="logo.png" alt="RDX Logo" onerror="this.style.display='none'">
                    </div>
                    <div>
                        <h4 style="font-size:14px; font-weight:900; color:#0c4a6e;" id="drawerName">User</h4>
                        <small style="color:#64748b; font-weight:700;" id="drawerMobile">+91**********</small>
                    </div>
                </div>
                <button class="drawer-close" onclick="toggleMenu()"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="drawer-links">
                <button class="drawer-item" onclick="window.location.replace('dashboard.html')"><div class="drawer-item-icon menu-home"><i class="fa-solid fa-house"></i></div><span>Home</span></button>
                <button class="drawer-item" onclick="window.location.replace('profile.html')"><div class="drawer-item-icon menu-profile"><i class="fa-solid fa-user"></i></div><span>My Profile</span></button>
                <button class="drawer-item" onclick="window.location.replace('wallet.html')"><div class="drawer-item-icon menu-wallet"><i class="fa-solid fa-wallet"></i></div><span>My Wallet</span></button>
                <button class="drawer-item" onclick="window.location.replace('referral.html')"><div class="drawer-item-icon menu-refer"><i class="fa-solid fa-gift"></i></div><span>Refer & Earn</span></button>
                <button class="drawer-item" onclick="window.location.replace('history.html')"><div class="drawer-item-icon menu-history"><i class="fa-solid fa-clock-rotate-left"></i></div><span>History</span></button>
                <button class="drawer-item" onclick="window.location.replace('notification.html')"><div class="drawer-item-icon menu-notification"><i class="fa-solid fa-bell"></i></div><span>Notifications</span></button>
                <button class="drawer-item" onclick="window.location.replace('support.html')"><div class="drawer-item-icon menu-support"><i class="fa-solid fa-headset"></i></div><span>Support</span></button>
                <button class="drawer-item" onclick="logout()"><div class="drawer-item-icon menu-logout"><i class="fa-solid fa-right-from-bracket"></i></div><span>Logout</span></button>
            </div>
        </div>
        `;
    }

    // 3. Render Bottom Navigation
    const navContainer = document.getElementById("nav-container");
    if (navContainer) {
        const activeTab = navContainer.getAttribute("data-active") || "profile";
        navContainer.innerHTML = `
        <nav class="bottom-nav">
            <button class="nav-item ${activeTab === 'home' ? 'active' : ''}" onclick="window.location.replace('dashboard.html')"><div class="nav-icon-box icon-home"><i class="fa-solid fa-house"></i></div><span>Home</span></button>
            <button class="nav-item ${activeTab === 'wallet' ? 'active' : ''}" onclick="window.location.replace('wallet.html')"><div class="nav-icon-box icon-wallet"><i class="fa-solid fa-wallet"></i></div><span>Wallet</span></button>
            <button class="nav-item ${activeTab === 'support' ? 'active' : ''}" onclick="window.location.replace('support.html')"><div class="nav-icon-box icon-support"><i class="fa-solid fa-headset"></i></div><span>Support</span></button>
            <button class="nav-item ${activeTab === 'profile' ? 'active' : ''}" onclick="window.location.replace('profile.html')"><div class="nav-icon-box icon-profile"><i class="fa-solid fa-user"></i></div><span>Profile</span></button>
        </nav>
        `;
    }
}

// Side Drawer Toggle Functionality
function toggleMenu() {
    const drawer = document.getElementById("sideDrawer");
    const overlay = document.getElementById("drawerOverlay");
    if (drawer && overlay) {
        drawer.classList.toggle("active");
        overlay.classList.toggle("active");
    }
}

// Auto Inject Components on DOM Ready
document.addEventListener("DOMContentLoaded", renderComponents);
