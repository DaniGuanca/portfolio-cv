export default function menuHamburguesa(menu, menuBtn, linkMenu){
  const $menuBtn = document.querySelector(menuBtn),
   $menu = document.querySelector(menu);

  $menuBtn.addEventListener("click", e => {
    $menuBtn.firstElementChild.classList.toggle("none");
    $menuBtn.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  document.querySelectorAll(linkMenu).forEach(element => {
    element.addEventListener("click", e => {
      $menuBtn.firstElementChild.classList.remove("none");
      $menuBtn.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
    });
  });
}