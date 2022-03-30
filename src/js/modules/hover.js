const consul = document.querySelectorAll('#header__link-c');
const second = document.querySelectorAll('#header__link-s');

const node = Array.prototype.slice.call(consul, 0);
const nodeSecond = Array.prototype.slice.call(second, 0);

node.forEach((element) => {
  element.addEventListener(
    'mouseover',
    () => {
      document.querySelector('.header__linkSub').classList.add('active');
    },
    false
  );
  element.addEventListener(
    'mouseout',
    () => {
      document.querySelector('.header__linkSub').classList.remove('active');
    },
    false
  );
});

nodeSecond.forEach((element) => {
  element.addEventListener(
    'mouseover',
    () => {
      document.querySelector('.header__linkSub2').classList.add('active');
    },
    false
  );
  element.addEventListener(
    'mouseout',
    () => {
      document.querySelector('.header__linkSub2').classList.remove('active');
    },
    false
  );
});