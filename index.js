document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Check for saved theme in local storage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save theme preference to local storage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const themeBtn = document.querySelector(".theme-btn");
const navBar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");
  logo.classList.toggle("active");
  themeBtn.classList.toggle("active");
  navBar.classList.toggle("active");
});
