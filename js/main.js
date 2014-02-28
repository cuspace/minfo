var ws = new WebSocket('ws://192.168.25.53:8080');

window.addEventListener("deviceorientation", function(e) {
  document.querySelector("#alpha").textContent = e.alpha;
  document.querySelector("#beta").textContent = e.beta;
  document.querySelector("#gamma").textContent = e.gamma;
  ws.send('This is message from minfo websocket client.');
}, true);
