// source/scripts/index.js
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".header__toggle-iconline");
  const menu = document.querySelector(".main-navigation");
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("main-navigation--open");
    menu.classList.toggle("main-navigation--closed");
    menuToggle.classList.toggle("header__toggle-iconline--opened");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const sliderItems = document.querySelectorAll(".slider__item");
  const paginationIndicators = document.querySelectorAll(".slider__indicator");
  const prevArrow = document.querySelector(".slider__arrow--left");
  const nextArrow = document.querySelector(".slider__arrow--right");
  let currentSlideIndex = 0;
  function updateSlider() {
    sliderItems.forEach((item) => {
      item.classList.remove("slider__item--current");
    });
    paginationIndicators.forEach((indicator) => {
      indicator.classList.remove("slider__indicator--active");
    });
    sliderItems[currentSlideIndex].classList.add("slider__item--current");
    paginationIndicators[currentSlideIndex].classList.add("slider__indicator--active");
  }
  prevArrow.addEventListener("click", () => {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      updateSlider();
    }
  });
  nextArrow.addEventListener("click", () => {
    if (currentSlideIndex < sliderItems.length - 1) {
      currentSlideIndex++;
      updateSlider();
    }
  });
  paginationIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentSlideIndex = index;
      updateSlider();
    });
    indicator.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        currentSlideIndex = index;
        updateSlider();
      }
    });
  });
  updateSlider();
});
var rangeSlider = document.getElementById("range-slider");
var inputMin = document.getElementById("range-min");
var inputMax = document.getElementById("range-max");
if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 900],
    connect: true,
    range: {
      min: 0,
      max: 1040
    },
    cssPrefix: "noui-"
  });
  const inputs = [inputMin, inputMax];
  rangeSlider.noUiSlider.on("update", (values, handle) => {
    inputs[handle].value = Math.round(values[handle]);
  });
  inputs.forEach((input, index) => {
    input.addEventListener("change", function() {
      const value = Number(this.value);
      const values = [null, null];
      values[index] = value;
      rangeSlider.noUiSlider.set(values);
    });
  });
}
//# sourceMappingURL=index.js.map
