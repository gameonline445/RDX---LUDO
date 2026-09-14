function renderHeader() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <header class="top-header">
                <div class="header-left">
                    <button class="menu-btn" onclick="toggleMenu()">☰</button>
                    <div class="logo">RDX</div>
                </div>
                <div class="header-right">
                    <span class="header-icon">🔔</span>
                </div>
            </header>
        `;
    }
}

// Page load hote hi Header render karein
document.addEventListener('DOMContentLoaded', renderHeader);
