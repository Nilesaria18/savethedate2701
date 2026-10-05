// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

document.addEventListener("DOMContentLoaded", () => {
  // 1. GSAP ScrollTrigger Animation: Taxi along the S-Curve Road
  gsap.to("#taxi", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5 // Smooth motion catching up to scroll
    },
    motionPath: {
      path: "#roadPath",
      align: "#roadPath",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    },
    ease: "none"
  });

  // 2. Dynamic Countdown Timer to Jan 25, 2027
  const weddingDate = new Date("January 25, 2027 00:00:00").getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
      document.getElementById("timer").innerHTML = "<h3>The Celebration Has Begun!</h3>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
  }

  setInterval(updateTimer, 1000);
  updateTimer();

  // 3. RSVP Modal Toggle Controls
  const modal = document.getElementById("rsvpModal");
  const openBtn = document.getElementById("openRsvpBtn");
  const closeBtn = document.getElementById("closeRsvpBtn");

  openBtn.addEventListener("click", () => {
    modal.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});
