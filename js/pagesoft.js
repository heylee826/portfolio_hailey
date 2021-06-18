

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



// let winHeight = $(window).height();

// $(window).on('resize', function () {
//     winHeight = $(window).height();
// });

// $(window).on('scroll', function () {

//     let scr = $(window).scrollTop();
//     //   window가 얼마나 스크롤됐는지 계산해서 저장

//     if (scr >= winHeight * 0 && scr < winHeight * 1) {
//         $('.gnb li').removeClass('on')
//         $('.gnb li').eq(0).addClass('on')
//     }
//     if (scr >= winHeight * 1 && scr < winHeight * 2) {
//         $('.gnb li').removeClass('on')
//         $('.gnbli').eq(1).addClass('on')
//     }
//     if (scr >= winHeight * 2 && scr < winHeight * 3) {
//         $('.gnb li').removeClass('on')
//         $('.gnb li').eq(2).addClass('on')
//     }
//     if (scr >= winHeight * 3 && scr < winHeight * 4) {
//         $('.gnb li').removeClass('on')
//         $('.gnb li').eq(3).addClass('on')
//     }

//     if (scr >= winHeight * 0 && scr < winHeight * 1) {
//         $('.sub li').removeClass('on')
//         $('.sub li').eq(0).addClass('on')
//     }
//     if (scr >= winHeight * 1 && scr < winHeight * 2) {
//         $('.sub li').removeClass('on')
//         $('.sub li').eq(1).addClass('on')
//     }
//     if (scr >= winHeight * 2 && scr < winHeight * 3) {
//         $('.sub li').removeClass('on')
//         $('.sub li').eq(2).addClass('on')
//     }

//     for (i = 0; i < $('.sub li').length; i++) {
//         if (scr >= winHeight * i && scr < winHeight * (i + 1)) {
//             $('.sub li').removeClass('on')
//             $('.sub li').eq(i).addClass('on')
//         }
//     }
// });



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