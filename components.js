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
            <div class="header-right" style="display: flex; align-items: center; gap: 8px;">
                <button class="header-icon-btn btn-notif" onclick="window.location.href='notification.html'" style="background: #6c5ce7 !important; border: none !important; width: 40px !important; height: 40px !important; border-radius: 12px !important; color: #ffffff !important; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(108,92,231,0.4);">
                    <i class="fa-solid fa-bell" style="font-size: 17px; color: #ffffff !important;"></i>
                </button>
                
                <!-- Wallet button with icon and live total balance display across all pages -->
                <button class="header-icon-btn btn-wallet" onclick="window.location.href='wallet.html'" style="background: #00b894 !important; border: none !important; padding: 0 12px !important; height: 40px !important; border-radius: 12px !important; color: #ffffff !important; cursor: pointer; display: flex; align-items: center; gap: 6px; box-shadow: 0 2px 5px rgba(0,184,148,0.4);">
                    <i class="fa-solid fa-wallet" style="font-size: 15px; color: #ffffff !important;"></i>
                    <span id="headerWalletBalance" style="font-size: 13px; font-weight: 800; color: #ffffff !important;">₹0</span>
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
        <style>
            .drawer-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                z-index: 1050;
                display: none;
            }
            .drawer-overlay.active {
                display: block;
            }
            .drawer {
                position: fixed;
                top: 0;
                left: -280px;
                width: 280px;
                height: 100%;
                background: #ffffff;
                z-index: 1100;
                transition: left 0.3s ease;
                box-shadow: 2px 0 10px rgba(0,0,0,0.1);
                overflow-y: auto;
            }
            .drawer.active {
                left: 0;
            }
            .drawer-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 15px;
                background: #f0f9ff;
                border-bottom: 1px solid #e2e8f0;
            }
            .drawer-user {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            .drawer-avatar {
                width: 45px;
                height: 45px;
                border-radius: 50%;
                background: #e2e8f0;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
            }
            .drawer-close {
                background: #ffffff;
                border: 1px solid #cbd5e1;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                color: #64748b;
            }
            .drawer-links {
                padding: 15px 10px;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .drawer-item {
                display: flex;
                align-items: center;
                gap: 15px;
                padding: 10px 15px;
                border: none;
                background: transparent;
                width: 100%;
                text-align: left;
                cursor: pointer;
                border-radius: 10px;
                font-size: 15px;
                font-weight: 700;
                color: #334155;
            }
            .drawer-item:hover {
                background: #f8fafc;
            }
            .drawer-item-icon {
                width: 38px;
                height: 38px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                color: #ffffff !important;
            }
            
            .menu-home { background: #2563eb !important; }
            .menu-profile { background: #e17055 !important; }
            .menu-wallet { background: #00b894 !important; }
            .menu-refer { background: #e17055 !important; }
            .menu-history { background: #6c5ce7 !important; }
            .menu-notification { background: #6c5ce7 !important; }
            .menu-support { background: #00cec9 !important; }
            .menu-logout { background: #d63031 !important; }
        </style>

        <div class="drawer-overlay" id="drawerOverlay" onclick="toggleDrawer()"></div>
        <div class="drawer" id="sideDrawer">
            <div class="drawer-header">
                <div class="drawer-user">
                    <div class="drawer-avatar" id="drawerAvatar">
                        <img src="logo.png" alt="Logo" style="width: 40px; height: 40px; object-fit: contain;" onerror="this.src='https://via.placeholder.com/40'">
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

// 3. BOTTOM NAVIGATION GENERATOR ⚓
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
                font-size: 12px;
                font-weight: 600;
                gap: 4px;
            }
            .nav-icon-box {
                width: 38px;
                height: 38px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                color: #ffffff !important;
                transition: transform 0.2s ease, box-shadow 0.2s ease;
            }

            .nav-home .nav-icon-box { background: #2563eb !important; box-shadow: 0 2px 6px rgba(37,99,235,0.3); }
            .nav-wallet .nav-icon-box { background: #00b894 !important; box-shadow: 0 2px 6px rgba(0,184,148,0.3); }
            .nav-support .nav-icon-box { background: #00cec9 !important; box-shadow: 0 2px 6px rgba(0,206,201,0.3); }
            .nav-profile .nav-icon-box { background: #e17055 !important; box-shadow: 0 2px 6px rgba(225,112,85,0.3); }

            .nav-home { color: #2563eb; }
            .nav-wallet { color: #00b894; }
            .nav-support { color: #00cec9; }
            .nav-profile { color: #e17055; }

            .nav-item.active .nav-icon-box {
                transform: scale(1.1);
                box-shadow: 0 4px 10px rgba(0,0,0,0.25);
            }
            .nav-item.active span {
                font-weight: 800;
            }
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

// 4. BULLETPROOF REALTIME WALLET & USER SYNC 🔄
let globalWalletUnsubscribe = null;

async function initGlobalHeaderWallet() {
    if (typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length) return;
    
    // Sabhi possible localStorage keys ko check karega taki mobile number mil jaye
    let rawMobile = localStorage.getItem("rdxFirebaseUserId") || 
                    localStorage.getItem("rdxVerifiedMobile") || 
                    localStorage.getItem("rdxUserMobile") || 
                    localStorage.getItem("rdxMobile") || 
                    localStorage.getItem("userMobile") || 
                    localStorage.getItem("mobile") || "";

    const cleanMobile = String(rawMobile).replace(/\D/g, "");
    if (!cleanMobile) {
        console.warn("Global Header: LocalStorage me mobile number nahi mila!");
        return;
    }

    const db = firebase.firestore();
    let userRef = null;
    const mobile10Digits = cleanMobile.slice(-10);

    // 1st: Direct Document ID check karenge (jaise 917878852370, +91..., ya 10 digit)
    const possibleIds = [
        mobile10Digits,
        "91" + mobile10Digits,
        "+91" + mobile10Digits
    ];

    for (let id of possibleIds) {
        let docSnap = await db.collection("customers").doc(id).get();
        if (docSnap.exists) {
            userRef = db.collection("customers").doc(id);
            break;
        }
    }

    // 2nd: Agar direct ID nahi mili, toh 'mobile' field par query chalayenge
    if (!userRef) {
        try {
            let querySnap = await db.collection("customers").where("mobile", "==", "+91" + mobile10Digits).get();
            if (querySnap.empty) {
                querySnap = await db.collection("customers").where("mobile", "==", "91" + mobile10Digits).get();
            }
            if (querySnap.empty) {
                querySnap = await db.collection("customers").where("mobile", "==", mobile10Digits).get();
            }
            if (!querySnap.empty) {
                userRef = querySnap.docs[0].ref;
            }
        } catch (e) {
            console.error("Firestore Query Error:", e);
        }
    }

    if (!userRef) {
        console.warn("Global Header: Firebase me customer document nahi mila is mobile ke liye:", mobile10Digits);
        return;
    }

    if (globalWalletUnsubscribe) globalWalletUnsubscribe();

    globalWalletUnsubscribe = userRef.onSnapshot((doc) => {
        if (doc && doc.exists) {
            const d = doc.data();
            
            // Sabhi possible balance fields ko check karke total calculate karenge
            const deposit = Number(d.depositBalance || d.deposit || d.wallet || 0);
            const winnings = Number(d.winningBalance || d.winnings || 0);
            const totalWallet = deposit + winnings;

            const headerBalElem = document.getElementById("headerWalletBalance");
            if (headerBalElem) {
                headerBalElem.textContent = "₹" + totalWallet;
            }

            const fullName = String(d.name || d.fullName || "User").trim();
            const drawerNameElem = document.getElementById("drawerName");
            const drawerMobileElem = document.getElementById("drawerMobile");

            if (drawerNameElem) drawerNameElem.textContent = fullName;
            if (drawerMobileElem) drawerMobileElem.textContent = "+" + mobile10Digits;
        }
    }, (err) => {
        console.error("Global Header Sync Error:", err);
    });
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
    setTimeout(initGlobalHeaderWallet, 300);
});
