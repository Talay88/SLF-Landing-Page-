// about mail popup

const modalopen = document.getElementById("modalopen");
const closemodal = document.querySelector("#modal-close-btn");
const modal = document.querySelector(".about-modal");

modalopen.addEventListener("click", (_) => {
  modal.classList.toggle("modal-active");
});

closemodal.addEventListener("click", (_) => {
  modal.classList.toggle("modal-active");
});

//contact form popup

const contactopen = document.getElementById("open-contact-btn");
const contactclose = document.getElementById("close-contact-btn");
const contactmodal = document.querySelector(".contact-modal");

contactopen.addEventListener("click", (_) => {
  contactmodal.classList.toggle("contact-active");
});

contactclose.addEventListener("click", (_) => {
  contactmodal.classList.toggle("contact-active");
});
