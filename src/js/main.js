// 현재 보이는 섹션을 사이드바에 표시하는 기능
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");

  // 초기 활성화 (페이지 로드 시)
  highlightCurrentSection();

  // 스크롤 이벤트 리스너
  window.addEventListener("scroll", highlightCurrentSection);

  function highlightCurrentSection() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    // 현재 섹션에 해당하는 네비게이션 링크 활성화
    navLinks.forEach((link) => {
      link.classList.remove("active-section");
      if (link.getAttribute("data-section") === current) {
        link.classList.add("active-section");
      }
    });
  }

  // 부드러운 스크롤 기능
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

// PDF 인쇄 기능
function printResume() {
  window.print();
}
