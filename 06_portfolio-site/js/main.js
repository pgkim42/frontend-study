// SCrollMagic 사용법
let spyEls = document.querySelectorAll("section.scroll-spy");

spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.15, // 화면의 15% 지점에서 보여짐
  })

    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

// 모달창 띄우기
let modalEl = document.querySelector("#modal");
let modalBtn = document.querySelectorAll(".port .btn-modal");
let closeBtn = document.querySelector("#modal .btn-close");

modalBtn[0].addEventListener("click", function () {
  modalEl.style.display = "flex";
});

modalBtn[1].addEventListener("click", function () {
  modalEl.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  modalEl.style.display = "none";
});

// 현재 연도 표시
// 날짜 정보를 가진 JS의 Date 객체를 활용
new Date().getFullYear(); // 현재 연도 정보가 숫자 데이터로 반환됨
console.log("new Date().getFullYear(): ", new Date().getFullYear());

let thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();

// 페이지 최상단으로 이동
let toTopBtn = document.querySelector("#to-top");

// 페이지에 스크롤 이벤트 감지를 추가
// window: 브라우저 창 객체
window.addEventListener("scroll", function () {
  console.log(window.scrollY);

  // 페이지 스크롤 위치가
  // 500px을 넘으면 요소를 보이고,
  // 500px을 넘지 않으면 요소 숨기기.
  if (this.window.scrollY >= 500) {
    // toTopBtn.style.display = 'flex';
    // 애니메이션 처리를 하고 싶다면
    toTopBtn.style.opacity = 1;
    toTopBtn.style.transform = "translateX(0)";
  } else {
    // toTopBtn.style.display = 'none';
    toTopBtn.style.opacity = 0;
    toTopBtn.style.transform = "translateX(100px)";
  }
});

// 모바일용 메뉴
let btnHamburger = document.querySelector(".btn-hamburger");
let navEl = document.querySelector("header nav");
let menuItems = document.querySelectorAll("header nav ul li a");

btnHamburger.addEventListener("click", function () {
  // JS로 클래스를 제어하는 메소드
  // add()/remove()/toggle()/contains()

  // if(navEl.classList.contains('active')) {
  //   navEl.classList.remove('active');
  // } else {
  //   navEl.classList.add('active');
  // }

  navEl.classList.toggle("active");
});

menuItems.forEach(function (menuItem)  {
  menuItem.addEventListener('click', function() {
    navEl.classList.remove('active');
  });
});
