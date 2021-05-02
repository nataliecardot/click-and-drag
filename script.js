// Div with white border that surrounds everything
const slider = document.querySelector('.items');
let startX, // Where they first click down
  scrollLeft,
  isDown = false;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  // Distance from left side of document minus space to left of slider enclosing box/draggable area
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  const x = e.pageX - slider.offsetLeft;
  // For every pixel moved, scroll slider 5 pixels
  const walk = (x - startX) * 5;
  console.log({ x, startX, scrollLeft, walk });
  // Setting new scroll location (distance from left) to original scrollLeft (when mouse first pushed) minus amount moved from that spot
  slider.scrollLeft = scrollLeft - walk;
});
