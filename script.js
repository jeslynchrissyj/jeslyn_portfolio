document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section h2");
  sections.forEach((heading, index) => {
    heading.style.opacity = 0;
    heading.style.transform = "translateY(20px)";
    setTimeout(() => {
      heading.style.transition = "all 0.6s ease";
      heading.style.opacity = 1;
      heading.style.transform = "translateY(0)";
    }, 300 * index);
  });
});