$(function (){
  $('.menu-btn, .overlay, .sliding-panel-close').on('click touchstart', function (e) {
    $('.sidenav-mobile, .overlay').toggleClass('is-visible');
    $('body').toggleClass('mobile-sidenav-active');
    e.preventDefault();
  });
});
