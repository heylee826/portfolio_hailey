const img = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('#lightbox-overlay');
const lightboxImg = lightbox.querySelector('img');

console.log(img);


for(let i = 0; i < img.length ; i++){
  img[i].addEventListener('click',function(){
    const imgNewSrc = this.getAttribute('data-lightbox');
    console.log(imgNewSrc);
    //lightboxImg의 Src의 값을 큰 이미지의 경로로 지정
    lightboxImg.setAttribute('src',imgNewSrc);

    //lightbox보이도록 visible클래스 추가
    lightbox.classList.add('visible');
  })
};

//lightbox를 클릭하면 다시 사라지도록
lightbox.addEventListener('click',function(){
  this.classList.remove('visible')
});