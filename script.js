document.addEventListener("mousemove", function(e) {
  document.body.style.background =
    `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, #ffffff 0%, #f5f4f1 40%)`;
});