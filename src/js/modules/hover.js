const parent = document.querySelectorAll("#header__link");

const node = Array.prototype.slice.call(parent, 0);

node.forEach((element) => {
  element.addEventListener(
    "mouseover",
    () => {
      element.querySelector(".header__linkSub").classList.add("active");
    },
    false
  );
  element.addEventListener(
    "mouseout",
    () => {
      element.querySelector(".header__linkSub").classList.remove("active");
    },
    false
  );
});