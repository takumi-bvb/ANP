import $ from './jquery.esm'

$('#header__link').hover(function () {
  $(this).toggleClass('active');
  $(this).next('#header__linkSub').slideToggle();
});
