// ==========================================
// Centralized Components System (components.js)
// ==========================================

// 1. TOP HEADER GENERATOR 🔝
function loadHeader() {
    const headerContainer = document.getElementById("header-container");
    if (!headerContainer) return;

    headerContainer.innerHTML = `
        <header class="top-header" style="display: flex; justify-content: space-between; align-items: center; padding: 10px 15px; background: #ffffff !important; box-shadow: 0 2px 10px rgba(0,0,0,0.08); position: fixed; top: 0; left: 0; right: 0; z-index: 1000;">
            <div class="header-left" style="display: flex; align-items: center; gap: 10px;">
                <button class="menu-btn" onclick="toggleDrawer()" style="background: #ff7675 !important; border: none !important; width: 40px !important; height: 40px !important; border-radius: 12px !important; color: #ffffff !important; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(255,118,117,0.4);">
                    <i class="fa-solid fa-bars" style="font-size: 18px; color: #ffffff !important;"></i>
                </button>
                <div class="logo" onclick="window.location.href='dashboard.html'" style="display: flex; align-items: center; cursor: pointer;">
                    <img src="logo.png" alt="Logo" style="width: 42px !important; height: 42px !important; object-fit: contain; display: block;" onerror="this.src='https://via.placeholder.com/42'">
                </div>
            </div>
            <div class="header-right" style="display: flex; align-items: center; gap: 10px;">
                <button class="header-icon-btn btn-notif" onclick="window.location.href='notification.html'" style="background: #6c5ce7 !important; border: none !important; width: 40px !important; height: 40px !important; border-radius: 12px !important; color: #ffffff !important; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(108,92,231,0.4);">
                    <i class="fa-solid fa-bell" style="font-size: 17px; color: #ffffff !important;"></i>
                </button>
                <button class="header-icon-btn btn-wallet" onclick="window.location.href='wallet.html'" style="background: #00b894 !important; border: none !important; width: 40px !important; height: 40px !important; border-radius: 12px !important; color: #ffffff !important; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(0,184,148,0.4);">
                    <i class="fa-solid fa-wallet" style="font-size: 17px; color: #ffffff !important;"></i>
                </button>
                <button class="header-icon-btn btn-refer" onclick="window.location.href='referral.html'" style="background: #e17055 !important; border: none !important; width: 40px !important; height: 40px !important; border-radius: 12px !important; color: #ffffff !important; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(225,112,85,0.4);">
                    <i class="fa-solid fa-gift" style="font-size: 17px; color: #ffffff !important;"></i>
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
                        <img src="logo.png" alt="Logo" style="width: 40px; height: 40px; object-fit: contain;" onerror="this.style.display='none'">
                    </div>
                    <div>
                        <h4 id="drawerName" style="font-size:14px; font-weight:900; color:#0c4a6e; margin:0;">User</h4>
                        <p id="drawerMobile" style="font-size:11px; color:#64748b; font-weight:700; margin:0;">+91**********</p>
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

// 3. BOTTOM NAVIGATION GENERATOR ⚓ (Har Button ka Alag Active Color)
function loadBottomNav() {
    const navContainer = document.getElementById("nav-container");
    if (!navContainer) return;

    const pathName = window.location.pathname.split("/").pop() || "dashboard.html";

    navContainer.innerHTML = `
        <style>
            .bottom-nav {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                height: 65px;
                background: #ffffff;
                display: flex;
                justify-content: space-around;
                align-items: center;
                box-shadow: 0 -2px 10px rgba(0,0,0,0.08);
                z-index: 1000;
                padding: 0 5px;
            }
            .nav-item {
                background: transparent;
                border: none;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                flex: 1;
                text-decoration: none;
                color: #64748b;
                font-size: 12px;
                font-weight: 600;
                gap: 4px;
            }
            .nav-icon-box {
                width: 38px;
                height: 38px;
                border-radius: 12px;
                background: #f1f5f9;
                color: #475569;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                transition: all 0.2s ease;
            }

            /* 🔵 Home Button Active Color (Blue) */
            .nav-item.nav-home.active { color: #2563eb; }
            .nav-item.nav-home.active .nav-icon-box { background: #2563eb !important; color: #ffffff !important; box-shadow: 0 3px 8px rgba(37,99,235,0.4); }

            /* 🟢 Wallet Button Active Color (Green) */
            .nav-item.nav-wallet.active { color: #00b894; }
            .nav-item.nav-wallet.active .nav-icon-box { background: #00b894 !important; color: #ffffff !important; box-shadow: 0 3px 8px rgba(0,184,148,0.4); }

            /* 🟣 Support Button Active Color (Purple) */
            .nav-item.nav-support.active { color: #6c5ce7; }
            .nav-item.nav-support.active .nav-icon-box { background: #6c5ce7 !important; color: #ffffff !important; box-shadow: 0 3px 8px rgba(108,92,231,0.4); }

            /* 🟠 Profile Button Active Color (Orange) */
            .nav-item.nav-profile.active { color: #e17055; }
            .nav-item.nav-profile.active .nav-icon-box { background: #e17055 !important; color: #ffffff !important; box-shadow: 0 3px 8px rgba(225,112,85,0.4); }
        </style>
        <nav class="bottom-nav">
            <button class="nav-item nav-home ${pathName === 'dashboard.html' || pathName === 'index.html' || pathName === '' ? 'active' : ''}" onclick="window.location.href='dashboard.html'">
                <div class="nav-icon-box"><i class="fa-solid fa-house"></i></div>
                <span>Home</span>
            </button>
            <button class="nav-item nav-wallet ${pathName === 'wallet.html' ? 'active' : ''}" onclick="window.location.href='wallet.html'">
                <div class="nav-icon-box"><i class="fa-solid fa-wallet"></i></div>
                <span>Wallet</span>
            </button>
            <button class="nav-item nav-support ${pathName === 'support.html' ? 'active' : ''}" onclick="window.location.href='support.html'">
                <div class="nav-icon-box"><i class="fa-solid fa-headset"></i></div>
                <span>Support</span>
            </button>
            <button class="nav-item nav-profile ${pathName === 'profile.html' ? 'active' : ''}" onclick="window.location.href='profile.html'">
                <div class="nav-icon-box"><i class="fa-solid fa-user"></i></div>
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
