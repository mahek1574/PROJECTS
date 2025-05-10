// slider

const slides = [
  {
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDb1-fRHgoQxCeFE9KEAHwhNmaI06lg0UKmw&s",
    title: "Beautiful sunset",
    description:
      "A stunning sunset over the ocean, with vibranr colors in the sky",
  },
  {
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHnW1OY4SY_wlqEbzwPblYxQZFMRTB_GW8A&s",
    title: "Beautiful sunset",
    description:
      "Every sunset is a whisper of peace, a gentle lullaby to the day's end.",
  },
  {
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84wQrCR9MyaoeK4SixjOO5nKbW2xQmBTRiQ&s",
    title: "Beautiful sunset",
    description:
      "In the soft glow of the setting sun, the world seems to breathe easier.",
  },

  {
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfK5MxmZQwWtIxph6GVYqr0HBLCfZk4otRcQ&s",
    title: "Beautiful sunset",
    description:
      "The sun dips below the horizon, leaving a trail of beauty in its wake.",
  },
];
console.log(slides[0].Image);
console.log(slides[0].title);
console.log(slides[0].description);

let currentIndex = 0;

function showslide() {
  document.getElementById("img").src = slides[currentIndex].Image;
  document.getElementById("head").innerHTML = slides[currentIndex].title;
  document.getElementById("desc").innerHTML = slides[currentIndex].description;
}
showslide();
document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showslide();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showslide();
});

setInterval(() => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showslide();
}, 5000);

showslide();
