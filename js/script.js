/* ---------------------------- */
/* humberger
/* ---------------------------- */
$(function(){
  $('#burger-btn,.nav-item>a::before,.nav-menu').on('click',function(){
    $('#burger-btn').toggleClass('-active');
    $('.nav').toggleClass('-active');
    $('body').toggleClass('overflow-hidden');  //スクロール固
  });
});

/* ---------------------------- */
/* slick
/* ---------------------------- */
$(document).ready(function(){
  var slider = $('.work-img-slider').slick({
    autoplay: false, //自動再生
    speed: 500,  //スライドするスピード
    dots: true,  //スライドしたのドット
    arrows: false,  //左右の矢印
    infinite: true,  //スライドのループ
    pauseOnHover: false,//ホバーしたときにスライドを一時停止しない　
    centerMode: true,
    centerPadding:0,
  });
  $('input[name="work-item"]').change(function(){
    slider.slick('setPosition');
  });
  $(window).on('load', function () {
    $('.slick-cloned a').removeAttr('data-lightbox');
  });
});

/* ---------------------------- */
/* top-scroll
/* ---------------------------- */
$(document).ready(function(){
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    let speed = 400; // ミリ秒で記述
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - 50; //「 - 固定ヘッダー高さ(px)」
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});

/* ---------------------------- */
/* ligntbox2
/* ---------------------------- */
$(document).ready(function(){
  lightbox.option({
    'resizeDuration': 100,
    'wrapAround': true,
    'disableScrolling':true,
    'alwaysShowNavOnTouchDevices':true,
    'fitImagesInViewport':true,
    'showImageNumberLabel':false,
  });
});

  /* ---------------------------- */
  /* 画像差し替え
  /* ---------------------------- */
$(document).ready(function(){
  var $elem = $('.replace_img');
  var sp = '_sp.';
  var pc = '_pc.';
  var tab = '_tab.';
  var replaceTab = 768; //ブレイクポイント指定
  var replaceSp = 480; //ブレイクポイント指定
  function imageSwitch() {
    var windowWidth = parseInt($(window).width()); //ウィンドウサイズ取得
    $elem.each(function () {
      var $this = $(this);
      if (windowWidth <= replaceTab) {
        $this.attr('href', $this.attr('href').replace(pc, tab));
        if (windowWidth <= replaceSp){
          $this.attr('href', $this.attr('href').replace(tab, sp))
        } else {
          $this.attr('href', $this.attr('href').replace(sp, tab));
        }
      } else {
        $this.attr('href', $this.attr('href').replace(tab, pc));
      }
    });
  }
  imageSwitch();

  // リサイズの実行タイミング設定
  var delayStart;
  var delayTime = 200;
  $(window).on('resize', function () {
    clearTimeout(delayStart);
    delayStart = setTimeout(function () {
      imageSwitch();
    }, delayTime);
  });
});
