export default function modal(modal, link) {
  const $modal = document.querySelector(modal);

  document.addEventListener("click", e => {
    if($modal && e.target.matches(link) || e.target.matches(`${link} *` )){
      e.preventDefault();
      $modal.classList.add("modal-active");
    }

    if(e.target.matches(`${modal} .modal-close`) || e.target.matches(`${modal} .modal-close *`)){
      e.preventDefault();
      $modal.classList.remove("modal-active");
    }
  });  
}