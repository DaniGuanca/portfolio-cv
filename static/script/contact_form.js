export default function contactForm(form, loader, modalResponse) {
  const $form = document.querySelector(form),
   $loader = document.querySelector(loader),
   $response = document.querySelector(modalResponse);

  $form.addEventListener("submit", e => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/dany12rp13@gmail.com", {
      method: "POST",
      body: new FormData(e.target)
    })
    .then(
      res => res.ok ? res.json() : Promise.reject(res)
    )
    .then(json => {        
        $form.reset();
        $response.querySelector(".icon-ok").classList.remove("none");
        $response.querySelector(".icon-error").classList.add("none");
    })
    .catch(error => {
      let message = error.statusText || "Ocurrio un error al enviar, intenta nuevamente";
      $response.querySelector("h3").innerHTML = `Error ${error.status}: ${message}`;
      $response.querySelector(".icon-error").classList.remove("none");
      $response.querySelector(".icon-ok").classList.add("none");
    })
    .finally(() => {
      $loader.classList.add("none");
      $response.classList.add("modal-active");
      setTimeout(() => {
        $response.classList.remove("modal-active");
      }, 2500);
    });
  });
}