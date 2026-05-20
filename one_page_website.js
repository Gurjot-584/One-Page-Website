document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("lightbox");
  const modalImg = document.getElementById("lightbox-img");
  const images = document.querySelectorAll(".gallery-img");

  // Open lightbox when any image is clicked
  images.forEach(img => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.getAttribute("data-large") || this.src;
    });
  });

  // Close lightbox function
  window.closeLightbox = function () {
    modal.style.display = "none";
    modalImg.src = "";
  };

  // Close when clicking outside image
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeLightbox();
    }
  });

  // Close with ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeLightbox();
    }
  });
});