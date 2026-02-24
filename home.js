document.addEventListener("mousemove", function(e) {
  const image = document.querySelector(".image-container img");

  let x = (window.innerWidth / 2 - e.pageX) / 50;
  let y = (window.innerHeight / 2 - e.pageY) / 50;

  image.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
});