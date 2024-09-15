document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const handleScroll = () => {
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        el.style.opacity = 1;
        if (!el.classList.contains("animated")) {
          el.classList.add("animate__animated");
          el.classList.add(
            el.classList.contains("animate__fadeIn")
              ? "animate__fadeIn"
              : "animate__fadeIn"
          );
          el.classList.add("animated"); // Mark as animated to prevent re-animation
        }
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger on page load to handle initial visibility
});
