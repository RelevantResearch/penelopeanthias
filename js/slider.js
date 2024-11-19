// Function to handle arrow click
function toggleArrowAnimation(direction) {
  const leftArrow = document.querySelector('.arrows-left');
  const rightArrow = document.querySelector('.arrows-right');

  if (direction === 'left') {
    leftArrow.classList.add('active');
    rightArrow.classList.remove('active');
  } else if (direction === 'right') {
    rightArrow.classList.add('active');
    leftArrow.classList.remove('active');
  }
}

// Event listeners for each arrow
document.querySelector('.arrows-left').onclick = function() {
  toggleArrowAnimation('right');
};
document.querySelector('.arrows-right').onclick = function() {
  toggleArrowAnimation('left');
};
