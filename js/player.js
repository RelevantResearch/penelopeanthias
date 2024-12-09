let currentVideoIndex = 1;

function navigateVideo(direction) {
    const videos = document.querySelectorAll('.video-wrapper');
    const descriptions = document.querySelectorAll('.description-text');
    const bullets = document.querySelectorAll('.bullet');

    // Remove active class from current elements
    videos[currentVideoIndex - 1].classList.remove('active');
    descriptions[currentVideoIndex - 1].classList.remove('active');
    bullets[currentVideoIndex - 1].classList.remove('selected');

    // Update the current video index
    currentVideoIndex += direction;

    // Ensure the index is within bounds
    if (currentVideoIndex > videos.length) currentVideoIndex = videos.length;
    if (currentVideoIndex < 1) currentVideoIndex = 1;

    // Add active class to the new elements
    videos[currentVideoIndex - 1].classList.add('active');
    descriptions[currentVideoIndex - 1].classList.add('active');
    bullets[currentVideoIndex - 1].classList.add('selected');

    // Control the visibility of the arrows
    document.getElementById('leftArrow').style.display = currentVideoIndex === 1 ? 'none' : 'inline';
    document.getElementById('rightArrow').style.display = currentVideoIndex === videos.length ? 'none' : 'inline';
}

// Initial visibility for arrows
document.getElementById('leftArrow').style.display = 'none';
