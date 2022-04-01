const schedule = document.querySelector(".schedule");
const flower = document.querySelector(".schedule-flower");
const rooster = document.querySelector(".schedule-rooster");
const line = document.querySelector(".schedule-line");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  let scheduleTop = schedule.offsetTop;
  let momentMove = scroll - scheduleTop;
  let moveX = momentMove - 380;
  let opacityLine = (scroll - scheduleTop)*0.0025;
  


  if (momentMove === 0 || momentMove < 1) {
    flower.style.transform = `translateY(0px)`;
    rooster.style.transform = `translateX(380px)`;
    line.style.opacity = `0`;
    line.style.transform = `scale(0, 0)`;
  } else if (momentMove >= 380) {
    flower.style.transform = `translateY(380px)`;
    rooster.style.transform = `translateX(0px)`;
    line.style.opacity = `1`;
    line.style.transform = `scale(1, 1)`;
  } else if (momentMove >= 1 || momentMove <= 379) {
    flower.style.transform = `translateY(${momentMove}px)`;
    rooster.style.transform = `translateX(${-moveX}px)`;
    line.style.opacity = `${opacityLine}`;
    line.style.transform = `scale(${opacityLine}, ${opacityLine})`;
  }
});

