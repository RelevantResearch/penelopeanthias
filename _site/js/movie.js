document.addEventListener('DOMContentLoaded', function() {
    // Get video elements
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    
    // Get description elements
    const description1 = document.getElementById('description1');
    const description2 = document.getElementById('description2');

    // Get bullet elements
    const bullet1 = document.getElementById('bullet1');
    const bullet2 = document.getElementById('bullet2');
    
    // Add event listener for bullet1 (Video 1)
    bullet1.addEventListener('click', function() {
        video1.classList.add('active');
        video2.classList.remove('active');
        
        description1.classList.add('active');
        description2.classList.remove('active');
        
        bullet1.classList.add('selected');
        bullet2.classList.remove('selected');
    });

    // Add event listener for bullet2 (Video 2)
    bullet2.addEventListener('click', function() {
        video2.classList.add('active');
        video1.classList.remove('active');
        
        description2.classList.add('active');
        description1.classList.remove('active');
        
        bullet2.classList.add('selected');
        bullet1.classList.remove('selected');
    });
});
