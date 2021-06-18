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
// 그대로 복사해왔는데, '$('#wrap .pageSoft')' 이렇게 하면 첫번째 페이지만 스크롤 되고,
// 그 뒤로는 안됨. 그래서 #wrap을 지워봤더니 이제야 다 되는데, 
// 마지막 페이지 갔을때 스크롤을하면 첫번째 페이지로 올라가버림.. 
// 이게 대체 뭔일이야...제발좀 알려줘 제발..ㅜㅜㅜ 여기는 id선택자가 넘 많아서 그른가?ㅠㅜ
// 우씨ㅠㅠㅠㅠ해답찾음 ㅠㅠㅠ html구조 수정하면서 태그 몇개가 잘못되어있었음 ㅠㅠㅠ 
// p태그 시작해서 div태그로 닫혀잇었음 ㅠㅠㅠ 그래도 이유알아서 다행이다 감사합니다 ㅠㅠㅠㅠ
// 왜 왜왜왜 왜 이런건 안짚어주고ㅠㅠㅠ 콘솔열어도 엉뚱한 소리만하냐고오오 ㅠㅠ 멀쩡한 js애들 왜 잘못됐다하냐고ㅠㅠㅠ  

//스크롤 부드럽게 넘어가는거!
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// 스크롤 하면 헤더 투명하게
$("document").ready(function () {
  $(window).scroll(function () {
    var position = $(window).scrollTop();
    // 현재 스크롤바의 위치값을 반환합니다.
    if (position >= 100) {
      $('#header').addClass('opa')
      $('#header .gnb li a').addClass('color')
    } else {
      $('#header').removeClass('opa')
      $('#header .gnb li a').removeClass('color')
    }
  });
});




// // 슬릭 슬라이더
// $('.slider').slick({
//   // infinite: true,
//   // slidesToShow: 1,
//   // slidesToScroll: 1,
//   // autoplay: false,
//   // autoplaySpeed: 1000,
//   // arrows: true,
//   // dots: true,
//   // speed: 1000,
//   // pauseOnHover: true,
//   // vertical: false,
//   // centeredSlides: true,
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear',
//   autoplay: true,
//   autoplaySpeed: 1000,
// });


// // new Swiper (선택자, 옵션)
// // new Swiper('.notice-line .swiper-container', {
// //   direction: 'vertical',
// //   // autoplay : true,
// //   loop: true
// // });
new Swiper('.mySwiper', {
  // autoplay: {
  //   delay: 5000,
  // }, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  slidesPerView: 1, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 0, // 슬라이드 사이 여백 - px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.home-wrap .swiper-button-prev', // 이전 버튼 선택자
    nextEl: '.home-wrap .swiper-button-next' // 다음 버튼 선택자
  }
});