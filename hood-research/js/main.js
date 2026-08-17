// Hood Research - Optional JS logic / interactivity
document.addEventListener("DOMContentLoaded", () => {
    // Highlight active link in navigation automatically if desired
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });
});
