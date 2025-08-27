document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const backToTop = document.getElementById("backToTop");
  const feedback = document.getElementById("formFeedback");
  const form = document.getElementById("contactForm");

  // Year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Dark mode toggle
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // Back to top button
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) backToTop.style.display = "block";
    else backToTop.style.display = "none";
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Simple form validation
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      feedback.textContent = "All fields are required!";
      return;
    }
    feedback.textContent = "Message sent successfully (demo)!";
    form.reset();
  });
});
