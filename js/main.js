
//mousewheel 이벤트는 꼭! 라이브러리가 연결되어있어야한다.
$('#wrap .pageSoft').on('mousewheel', function (e, d) {
  //event, delta약자. 제작자가 제시한 방법 그대로 외워서 쓰기
  if (d > 0) { //스크롤을 올렸을 때

      let prv = $(this).prev().offset().top
      $('html,body').stop().animate({
          'scrollTop': prv
      });

  } else if (d < 0) { //스크롤을 내렸을 때
      let nxt = $(this).next().offset().top
      $('html,body').stop().animate({
          'scrollTop': nxt
      })
  };
});


//스크롤 부드럽게 되는거!
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


function copy_to_clipboard() {
  const copyText = document.getElementById('myInput');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("Copy");
  alert('이메일 주소가 복사되었습니다. 이메일 보내시는거 잊지마세용~^^');
};






// new Swiper (선택자, 옵션)
// new Swiper('.notice-line .swiper-container', {
//   direction: 'vertical',
//   // autoplay : true,
//   loop: true
// });
new Swiper('.project-web .swiper-container', {
  // autoplay: {
  //   delay: 5000,
  // }, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 0, // 슬라이드 사이 여백 - px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.project-web .swiper-prev', // 이전 버튼 선택자
    nextEl: '.project-web .swiper-next' // 다음 버튼 선택자
  }
});

