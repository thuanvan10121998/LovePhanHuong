document.addEventListener("DOMContentLoaded", function () {
  const boxBody = document.querySelector(".box-body");
  const container = document.querySelector(".container");

  // boxBody.addEventListener("mouseenter", function () {
    createFlowers();
  // });

  // boxBody.addEventListener("mouseleave", function () {
  //   removeFlowers();
  // });

  function createFlowers() {
    const flowerTypes = ["🌸", "🌺"];

    for (let i = 0; i < 20; i++) {
      let flower = document.createElement("div");
      flower.classList.add("flower");
      flower.innerHTML = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];

      flower.style.left = Math.random() * window.innerWidth + "px";
      flower.style.animationDuration = (Math.random() * 3 + 3) + "s"; // Ngẫu nhiên tốc độ rơi
      flower.style.fontSize = Math.random() * 10 + 15 + "px"; // Kích thước ngẫu nhiên
      flower.style.opacity = Math.random() * 0.8 + 0.2; // Độ trong suốt ngẫu nhiên

      container.appendChild(flower);
    }
  }

  function removeFlowers() {
    const flowers = document.querySelectorAll(".flower");
    flowers.forEach(flower => {
      flower.style.transition = "opacity 1s ease-out";
      flower.style.opacity = "0";
      setTimeout(() => flower.remove(), 1000); // Đợi hiệu ứng mờ dần xong mới xóa
    });
  }
});