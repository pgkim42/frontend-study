// SCrollMagic 사용법
let spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl) {
  new ScrollMagic.Scene ({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 
  })

  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});

// 모달창 띄우기
let modalEl = document.querySelector('#modal');
let modalBtn = document.querySelectorAll('.port .btn-modal');
let closeBtn = document.querySelector('#modal .btn-close');

console.log(modalBtn);
console.log(modalBtn[0]);
console.log(modalBtn[1]);

modalBtn[0].addEventListener('click', function() {
  modalEl.style.display = 'flex';
});

modalBtn[1].addEventListener('click', function() {
  modalEl.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
  modalEl.style.display = 'none';
})

