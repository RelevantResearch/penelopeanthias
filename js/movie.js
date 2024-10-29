document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 1; // Initialize with first video active

    // Get elements by their IDs
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const description1 = document.getElementById('description1');
    const description2 = document.getElementById('description2');
    const bullet1 = document.getElementById('bullet1');
    const bullet2 = document.getElementById('bullet2');
    const videoContainer = document.getElementById('videoSwipeContainer');

    // Show selected video function
    function showVideo(index) {
        if (index === 1) {
            video1.classList.add('active');
            video2.classList.remove('active');
            description1.classList.add('active');
            description2.classList.remove('active');
            bullet1.classList.add('selected');
            bullet2.classList.remove('selected');
            currentIndex = 1;
        } else if (index === 2) {
            video2.classList.add('active');
            video1.classList.remove('active');
            description2.classList.add('active');
            description1.classList.remove('active');
            bullet2.classList.add('selected');
            bullet1.classList.remove('selected');
            currentIndex = 2;
        }
    }

    // Bullet click events
    bullet1.addEventListener('click', function() { showVideo(1); });
    bullet2.addEventListener('click', function() { showVideo(2); });

    // Swipe detection setup
    let startX = 0;
    let endX = 0;

    videoContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    videoContainer.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    // Handle swipe functionality
    function handleSwipe() {
        const swipeDistance = endX - startX;

        if (swipeDistance > 50) {
            // Swipe right
            showVideo(currentIndex === 1 ? 2 : 1);
        } else if (swipeDistance < -50) {
            // Swipe left
            showVideo(currentIndex === 2 ? 1 : 2);
        }
    }
});
