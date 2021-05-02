// Div with white border that surrounds everything
const slider = document.querySelector('.items');
let startX, // Where they first click down
  scrollLeft,
  isDown = false;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  // Distance from left side of document where click occurred minus space to left of draggable area
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
  // x is distance from left side of document where click occurred, minus offset of draggable area and left side, if any
  // x will be lower than startX if dragging to move right (x value (pageX is an x-coord) being lower means place mouse is now (mousedowned) over is further to the right; x-axis values increase to the right)
  // x will be higher than startX if dragging to scroll left - meaning further to left on x-axis (left side is negative); it's scrolled further to the left
  // walk will be negative if dragged to scroll right; positive if dragged to scroll back to left side
  const walk = (x - startX) * 5;
  // console.log({ x, startX, scrollLeft, walk });
  // Setting new scroll location (distance from left) to original scrollLeft (when mouse first mousedowned) minus amount moved from that spot
  // scrollLeft becomes higher than its prev value if scrolling to right because subtracting a negative number => adding a positive; lower if it's scrolled to left because subtracting a positive. Higher value means it's scrolled further right and vice versa (as intended)
  slider.scrollLeft = scrollLeft - walk;
  // console.log(slider.scrollLeft);
});
