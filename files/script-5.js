document.addEventListener("DOMContentLoaded", () => {
  const numberElement = document.querySelector(".number-5");
  const targetNumber = parseInt(numberElement.getAttribute("data-target-5"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        numberElement.style.animationName = "count";
        animateNumber(numberElement, targetNumber);
        observer.disconnect();
      }
    });
  });

  observer.observe(numberElement);

  function animateNumber(element, target) {
    let start = 10;
    const stepTime = Math.abs(Math.floor(1500 / (target - start)));

    const timer = setInterval(() => {
      start++;
      element.textContent = start;

      if (start === target) {
        clearInterval(timer);
      }
    }, stepTime);
  }
});
