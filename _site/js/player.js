document.addEventListener("DOMContentLoaded", function () {
  const videoCards = document.querySelectorAll(
    ".custom-video-thumbnail-container"
  );
  const modal = document.getElementById("customVideoModal");
  const videoPlayer = document.getElementById("customVideoPlayer");
  const closeModalBtn = document.querySelector(".custom-close-btn");

  videoCards.forEach((card) => {
    card.addEventListener("click", function () {
      const videoId = this.getAttribute("data-video-id");
      videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      modal.style.display = "flex";
    });
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
    videoPlayer.src = "";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      videoPlayer.src = "";
    }
  });
});
