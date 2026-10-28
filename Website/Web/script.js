document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "Index.html";

  document.querySelectorAll(".nav-btn, .nav-cta").forEach((link) => {
    const target = link.getAttribute("href");
    if (target === currentPage) {
      link.classList.add("active");
    }
  });
});
