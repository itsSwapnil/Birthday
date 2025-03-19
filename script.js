document.addEventListener("DOMContentLoaded", function () {
  // Function to check the password and show the main content
  window.checkPassword = function () {
      const passwordInput = document.getElementById("password").value.trim().toLowerCase();
      if (passwordInput === "love") {
          document.getElementById("login-container").style.display = "none";
          document.getElementById("main-content").style.display = "block";
      } else {
          document.getElementById("password").value = "";
          alert("Oops! Try again 😊 Hint: It's how you feel about me ❤️");
      }
  };

  // Function to show the special message when clicking "Just for U" button
  document.getElementById("justForU").addEventListener("click", function () {
      const loveMessage = document.getElementById("loveMessage");
      loveMessage.style.display = "block";
      loveMessage.style.animation = "fadeIn 1s ease-in-out";
  });

  // Initialize Swiper for the image slider
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });
});