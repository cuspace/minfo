var ws = new WebSocket('ws://192.168.0.21:8080');

window.addEventListener("deviceorientation", function(e) {
  document.querySelector("#alpha").textContent = e.alpha;
  document.querySelector("#beta").textContent = e.beta;
  document.querySelector("#gamma").textContent = e.gamma;
  var m = {
      type: 'mc',
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma,
  };
  ws.send(JSON.stringify(m));
}, true);
