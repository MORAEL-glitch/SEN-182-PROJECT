// Ensure script safely attaches events regardless of active HTML view context
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Mobile Sidebar Navigation System Interaction ---
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");

    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", () => {
            sidebar.classList.toggle("active-sidebar");
            
            // Adjust label display dynamically based on view status
            if (sidebar.classList.contains("active-sidebar")) {
                menuToggle.innerText = "✕ Close";
            } else {
                menuToggle.innerText = "☰ Menu";
            }
        });
    }

    // --- 2. Modal Popup Dialog Interaction System ---
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const announcementModal = document.getElementById("announcementModal");

    // Defensive check to run modal scripts exclusively on index.html layout instances
    if (openModalBtn && closeModalBtn && announcementModal) {
        
        // Open Modal state mapping
        openModalBtn.addEventListener("click", () => {
            announcementModal.classList.add("show-modal");
        });

        // Close Modal via structural element target configuration
        closeModalBtn.addEventListener("click", () => {
            announcementModal.classList.remove("show-modal");
        });

        // Close Modal instantly if user clicks back window drop canvas area bounds
        announcementModal.addEventListener("click", (e) => {
            if (e.target === announcementModal) {
                announcementModal.classList.remove("show-modal");
            }
        });
    }
});