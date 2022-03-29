import $ from './jquery.esm'

// スクロールの速度（ミリ秒）
const speed = 400 // ミリ秒

// #で始まるアンカーをクリックした場合に処理
$('a[href^="#"]').on('click', function () {
  // アンカーの値取得
  const href = $(this).attr("href")
  // 移動先を取得
  const $target = $(href == "#" || href == "" ? 'html' : href)
  // 移動先を数値で取得
  const position = $target.offset().top - 100
  // スムーススクロール
  $('body,html').animate({
    scrollTop: position
  }, speed, 'swing')
  return false
})
