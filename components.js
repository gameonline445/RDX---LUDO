// Function to load all components on any page
function loadNavigationComponents(activePage) {
    // 1. Top Header HTML
    const headerHTML = `
        <header class="app-header">
            <div class="header-left">
                <button class="app-icon-box icon-bg-notif" onclick="toggleDrawer()">
                    <i class="fas fa-bars"></i>
                </button>
                <img src="logo.png" alt="RDX Ludo" class="app-logo">
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

    // 2. Side Drawer Menu HTML
    const drawerHTML = `
        <div id="drawerOverlay" class="drawer-overlay" onclick="toggleDrawer()"></div>
        <div id="sideDrawer" class="side-drawer">
            <div class="drawer-header">
                <div class="user-info">
                    <img src="avatar.png" alt="User" class="user-avatar">
                    <div>
                        <h4>Jai shree shyam</h4>
                        <p>+917878852370</p>
                    </div>
                </div>
                <button class="close-btn" onclick="toggleDrawer()">×</button>
            </div>
            <ul class="drawer-menu">
                <li onclick="location.href='home.html'">
                    <span class="app-icon-box icon-bg-home"><i class="fas fa-home"></i></span> Home
                </li>
                <li onclick="location.href='profile.html'">
                    <span class="app-icon-box icon-bg-profile"><i class="fas fa-user"></i></span> My Profile
                </li>
                <li onclick="location.href='wallet.html'">
                    <span class="app-icon-box icon-bg-wallet"><i class="fas fa-wallet"></i></span> My Wallet
                </li>
                <li onclick="location.href='refer.html'">
                    <span class="app-icon-box icon-bg-refer"><i class="fas fa-gift"></i></span> Refer & Earn
                </li>
                <li onclick="location.href='history.html'">
                    <span class="app-icon-box icon-bg-notif"><i class="fas fa-history"></i></span> History
                </li>
                <li onclick="location.href='notifications.html'">
                    <span class="app-icon-box icon-bg-notif"><i class="fas fa-bell"></i></span> Notifications
                </li>
                <li onclick="location.href='support.html'">
                    <span class="app-icon-box icon-bg-support"><i class="fas fa-headset"></i></span> Support
                </li>
                <li onclick="location.href='logout.html'">
                    <span class="app-icon-box icon-bg-profile"><i class="fas fa-sign-out-alt"></i></span> Logout
                </li>
            </ul>
        </div>
    `;

    // 3. Bottom Navigation Bar HTML
    const bottomNavHTML = `
        <nav class="bottom-nav">
            <a href="home.html" class="nav-item ${activePage === 'home' ? 'active' : ''}">
                <div class="app-icon-box icon-bg-home">
                    <i class="fas fa-home"></i>
                </div>
                <span>Home</span>
            </a>
            <a href="wallet.html" class="nav-item ${activePage === 'wallet' ? 'active' : ''}">
                <div class="app-icon-box icon-bg-wallet">
                    <i class="fas fa-wallet"></i>
                </div>
                <span>Wallet</span>
            </a>
            <a href="support.html" class="nav-item ${activePage === 'support' ? 'active' : ''}">
                <div class="app-icon-box icon-bg-support">
                    <i class="fas fa-headset"></i>
                </div>
                <span>Support</span>
            </a>
            <a href="profile.html" class="nav-item ${activePage === 'profile' ? 'active' : ''}">
                <div class="app-icon-box icon-bg-profile">
                    <i class="fas fa-user"></i>
                </div>
                <span>Profile</span>
            </a>
        </nav>
    `;

    // Render into containers
    if(document.getElementById('header-container')) {
        document.getElementById('header-container').innerHTML = headerHTML;
    }
    if(document.getElementById('drawer-container')) {
        document.getElementById('drawer-container').innerHTML = drawerHTML;
    }
    if(document.getElementById('bottom-nav-container')) {
        document.getElementById('bottom-nav-container').innerHTML = bottomNavHTML;
    }
}

// Drawer Toggle Function
function toggleDrawer() {
    const drawer = document.getElementById('sideDrawer');
    const overlay = document.getElementById('drawerOverlay');
    if(drawer && overlay) {
        drawer.classList.toggle('open');
        overlay.classList.toggle('open');
    }
}
