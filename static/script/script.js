import menuHamburguesa from "./menu_hamburguesa.js";
import contactForm from "./contact_form.js";
import modal from "./modal.js";

document.addEventListener("DOMContentLoaded", e => {
  menuHamburguesa(".menu", ".menu-btn", ".menu a");
  contactForm(".contact-form", ".contact-form-loader", ".modal-response")

  let i = 1;
  document.querySelectorAll(".experience-card").forEach(element => {
    i<4 && modal(`#trabajo-${i}`,`#${element.id}`)
    i++;
  });
  // modal("#trabajo-1", "#link-trabajo-1");
});