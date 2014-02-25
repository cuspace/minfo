window.addEventListener("deviceorientation", function(e) {
  document.querySelector("#alpha").textContent = e.alpha;
  document.querySelector("#beta").textContent = e.beta;
  document.querySelector("#gamma").textContent = e.gamma;
}, true);
