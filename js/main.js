





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
  spaceBetween: 30, // 슬라이드 사이 여백 - px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.project-web .swiper-prev', // 이전 버튼 선택자
    nextEl: '.project-web .swiper-next' // 다음 버튼 선택자
  }
});

