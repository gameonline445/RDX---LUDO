/* Color Palette & Icon Sync */
.icon-bg-home    { background-color: #6c5ce7 !important; color: #ffffff !important; }
.icon-bg-wallet  { background-color: #00b894 !important; color: #ffffff !important; }
.icon-bg-support { background-color: #0984e3 !important; color: #ffffff !important; }
.icon-bg-profile { background-color: #e17055 !important; color: #ffffff !important; }
.icon-bg-notif   { background-color: #6c5ce7 !important; color: #ffffff !important; }
.icon-bg-refer   { background-color: #e17055 !important; color: #ffffff !important; }

/* Icon Box Styling */
.app-icon-box {
    width: 42px !important;
    height: 42px !important;
    border-radius: 12px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    border: none !important;
    box-shadow: 0 3px 6px rgba(0,0,0,0.1) !important;
    cursor: pointer;
}

.app-icon-box i {
    font-size: 18px !important;
    color: #ffffff !important;
}

/* Base Body Style */
body {
    margin: 0;
    padding: 0;
    background-color: #f4f7fe;
    font-family: Arial, sans-serif;
}

/* FIXED HEADER (Top navigation screen par fix rahegi) */
.app-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 65px;
    background: #ffffff !important; /* Solid background taaki niche ka content scroll hote hue na dikhe */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    z-index: 1000; /* Buttons content ke upar rahenge */
}

/* FIXED BOTTOM NAV (Bottom navigation screen par fix rahegi) */
.bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    background: #ffffff !important; /* Solid background */
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.08);
    z-index: 1000;
}

/* MAIN CONTENT AREA (Content navigation ke peeche se scroll hoga) */
.main-content {
    padding-top: 75px !important;    /* Header ke liye top margin */
    padding-bottom: 85px !important; /* Bottom nav ke liye bottom margin */
    min-height: 100vh;
    box-sizing: border-box;
    overflow-y: auto;                 /* Normal Scrolling Enabled */
}

.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #666;
    font-size: 11px;
    font-weight: 600;
}

.nav-item span {
    margin-top: 4px;
}
