
let message = "Waiting for Java...";

function setup() {
    createCanvas(400, 200);
    fetch("http://localhost:8080/api/message")
      .then(response => response.json())
      .then(data => {
        message = data.text;
      });
}

function draw() {
    background(220);
    textSize(24);
    textAlign(CENTER, CENTER);
    text(message, width / 2, height / 2);
}