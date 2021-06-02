var winHeight = $(window).height();

$(window).on('resize', function () {
    winHeight = $(window).height();
});

$('.gnb li').on('click', function () {
    var i = $(this).index();
    $('html,body').animate({
        'scrollTop': winHeight * i
    });
});

function scrollPage() {
    var scr = $(window).scrollTop();
    for (i = 0; i < $('.gnb li').length; i++) {
        if (scr >= winHeight * i && scr < winHeight * (i + 1)) {
            $('.gnb li').removeClass('on')
            $('.gnb li').eq(i).addClass('on')
        }
    }
} //function
$(window).on('scroll', scrollPage);
scrollPage();

//mousewheel 이벤트는 꼭! 라이브러리가 연결되어있어야한다.
$('#wrap .pageSoft').on('mousewheel', function (e, d) {
    //event, delta약자. 제작자가 제시한 방법 그대로 외워서 쓰기
    if (d > 0) { //스크롤을 올렸을 때

        var prv = $(this).prev().offset().top
        $('html,body').stop().animate({
            'scrollTop': prv
        });

    } else if (d < 0) { //스크롤을 내렸을 때
        var nxt = $(this).next().offset().top
        $('html,body').stop().animate({
            'scrollTop': nxt
        })
    };
});




$(window).on('scroll', function () {

    var scr = $(window).scrollTop();
    //   window가 얼마나 스크롤됐는지 계산해서 저장

    if (scr >= winHeight * 0 && scr < winHeight * 1) {
        $('.gnb li').removeClass('on')
        $('.gnb li').eq(0).addClass('on')
    }
    if (scr >= winHeight * 1 && scr < winHeight * 2) {
        $('.gnb li').removeClass('on')
        $('.gnbli').eq(1).addClass('on')
    }
    if (scr >= winHeight * 2 && scr < winHeight * 3) {
        $('.gnb li').removeClass('on')
        $('.gnb li').eq(2).addClass('on')
    }
    if (scr >= winHeight * 3 && scr < winHeight * 4) {
        $('.gnb li').removeClass('on')
        $('.gnb li').eq(3).addClass('on')
    }

    if (scr >= winHeight * 0 && scr < winHeight * 1) {
        $('.sub li').removeClass('on')
        $('.sub li').eq(0).addClass('on')
    }
    if (scr >= winHeight * 1 && scr < winHeight * 2) {
        $('.sub li').removeClass('on')
        $('.sub li').eq(1).addClass('on')
    }
    if (scr >= winHeight * 2 && scr < winHeight * 3) {
        $('.sub li').removeClass('on')
        $('.sub li').eq(2).addClass('on')
    }

    for (i = 0; i < $('.sub li').length; i++) {
        if (scr >= winHeight * i && scr < winHeight * (i + 1)) {
            $('.sub li').removeClass('on')
            $('.sub li').eq(i).addClass('on')
        }
    }
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