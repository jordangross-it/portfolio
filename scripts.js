// Grab the hamburger icon and nav links
const hamburger = document.getElementById("hamburger-icon");
const navLinks = document.getElementById("nav-links");

// Toggle 'show' class when hamburger is clicked
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close mobile menu when a link is clicked
document.querySelectorAll("#nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");
    }
  });
});

// get button
const backToTopButton = document.getElementById("backToTop");

// show button when user scrolls center length down
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// scroll to top when button clicked
backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
