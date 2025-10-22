document.addEventListener("DOMContentLoaded", () => {
  const mailbtnpop = document.querySelector("#mail-btn-popup");
  const closepopup = document.querySelector("#mail-close-btn");
  const mailpopup = document.querySelector(".newsletter-popup");

  mailbtnpop.addEventListener("click", (_) => {
    mailpopup.classList.toggle("mail-active");
  });

  closepopup.addEventListener("click", (_) => {
    closepopup.classList.toggle("mail-active");
    mailpopup.classList.toggle("mail-active");
  });
});
