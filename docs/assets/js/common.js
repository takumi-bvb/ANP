(function () {
  'use strict';

  (d => {
    const toggleDrawer = () => {
      d.body.classList.toggle('is-drawer-active');
    };

    d.getElementById('drawer_btn').addEventListener('click', toggleDrawer);
    d.getElementById('drawer_shade').addEventListener('click', toggleDrawer);
  })(document);

  console.log("saa");
  // import './modules/slider'
  // import './modules/scroll'

})();
