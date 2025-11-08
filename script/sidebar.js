console.log("Sidebar script loaded.");

document.addEventListener("DOMContentLoaded", () => {
    fetch('../components/sidebar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sidebar-placeholder').innerHTML = data;

        const currentPage = window.location.pathname.split("/").pop();
        document.querySelectorAll(".nav-item a").forEach(link => {
        if (link.getAttribute("href") == currentPage) {
          link.classList.add("active");
        }
      });
    })
    .catch(err => console.error("Error loading sidebar:", err));  
});
