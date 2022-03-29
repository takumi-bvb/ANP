(function () {
  'use strict';

  (d => {
    const toggleDrawer = () => {
      d.body.classList.toggle('is-drawer-active');
    };

    d.getElementById('drawer_btn').addEventListener('click', toggleDrawer);
    d.getElementById('drawer_shade').addEventListener('click', toggleDrawer);
  })(document);

  // イージング関数
  const Ease = {
    easeInOut: function (t) {
      return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
  }; // アニメーションの Duration の設定

  const duration = 500;
  window.addEventListener('DOMContentLoaded', function () {
    // スムーススクロールのトリガーを取得（IE11はNodeListでforEachが使えないので、[].slice.call()により配列に変換）
    const smoothScrollTriggers = [].slice.call(document.querySelectorAll('a[href^="#"]'));
    smoothScrollTriggers.forEach(function (smoothScrollTrigger) {
      // トリガーをクリックした時に実行
      smoothScrollTrigger.addEventListener('click', function (e) {
        // href属性の値を取得
        const href = smoothScrollTrigger.getAttribute('href'); // 現在のスクロール位置を取得（クロスブラウザに対応）

        const currentPostion = document.documentElement.scrollTop || document.body.scrollTop; // スクロール先の要素を取得

        const targetElement = document.getElementById(href.replace('#', ''));
        const targetElementTop = document.getElementById(href.replace('#pcTop', '')); // スクロール先の要素が存在する場合はスムーススクロールを実行

        if (targetElement) {
          // デフォルトのイベントアクションをキャンセル
          e.preventDefault();
          e.stopPropagation(); // スクロール先の要素の位置を取得

          const targetPosition = window.pageYOffset + targetElement.getBoundingClientRect().top - 70; // headerと余白の分だけずらす
          // スタート時点の時間を取得

          const startTime = performance.now(); // アニメーションのループを定義

          const loop = function (nowTime) {
            // スタートからの経過時間を取得
            const time = nowTime - startTime; // duration を1とした場合の経過時間を計算

            const normalizedTime = time / duration; // duration に経過時間が達していない場合はアニメーションを実行

            if (normalizedTime < 1) {
              // 経過時間とイージングに応じてスクロール位置を変更
              window.scrollTo(0, currentPostion + (targetPosition - currentPostion) * Ease.easeInOut(normalizedTime)); // アニメーションを継続

              requestAnimationFrame(loop); // duration に経過時間が達したら、アニメーションを終了
            } else {
              window.scrollTo(0, targetPosition);
            }
          }; // アニメーションをスタート


          requestAnimationFrame(loop);
        }

        if (targetElementTop) {
          // デフォルトのイベントアクションをキャンセル
          e.preventDefault();
          e.stopPropagation(); // スクロール先の要素の位置を取得

          const targetPosition = window.pageYOffset + targetElement.getBoundingClientRect().top; // headerと余白の分だけずらす
          // スタート時点の時間を取得

          const startTime = performance.now(); // アニメーションのループを定義

          const loop = function (nowTime) {
            // スタートからの経過時間を取得
            const time = nowTime - startTime; // duration を1とした場合の経過時間を計算

            const normalizedTime = time / duration; // duration に経過時間が達していない場合はアニメーションを実行

            if (normalizedTime < 1) {
              // 経過時間とイージングに応じてスクロール位置を変更
              window.scrollTo(0, currentPostion + (targetPosition - currentPostion) * Ease.easeInOut(normalizedTime)); // アニメーションを継続

              requestAnimationFrame(loop); // duration に経過時間が達したら、アニメーションを終了
            } else {
              window.scrollTo(0, targetPosition);
            }
          }; // アニメーションをスタート


          requestAnimationFrame(loop);
        }
      });
    });
  });

  const parent = document.querySelectorAll("#header__link");
  const node = Array.prototype.slice.call(parent, 0);
  node.forEach(element => {
    element.addEventListener("mouseover", () => {
      element.querySelector(".header__linkSub").classList.add("active");
    }, false);
    element.addEventListener("mouseout", () => {
      element.querySelector(".header__linkSub").classList.remove("active");
    }, false);
  });

})();
