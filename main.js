

let pointx = 400
let pointy = 400

let message = "Waiting for Java...";
let centx = 200
let centy = 200

let velx = 150
let vely = 250

// creates a class that will be used to create and draw arrows, makes storing of functions much easier
class Arrow {
    // defines base variables
    constructor(x1, y1, x2, y2, color) {
        this.x1 = x1
        this.y1 = y1 
        this.x2 = x2 
        this.y2 = y2 
        this.color = color
    }
    
    // the draw functions that will create the arrow
    draw() {
        let offset = 10;
        stroke(this.color);
        line(this.x1, this.y1, this.x2, this.y2);
        // Start new drawing state
        push(); 
        // Gets the angle of the line
        var angle = atan2(this.y1 - this.y2, this.x1 - this.x2); 
        // Translates to the destination vertex
        translate(this.x2, this.y2);
        // Rotates the arrow point
        rotate(angle - HALF_PI);
        // Draws the arrow point as a triangle
        triangle(-offset * 0.6, offset * 1.5, offset * 0.6, offset * 1.5, 0, 0); 
        pop();
    }
}

let arrows = []
let arrow1 = new Arrow(pointx, pointy, centx, centy, [0,0,0])
arrows.push(arrow1)
let arrow2 = new Arrow(pointx, pointy, velx, vely, [0,0,0])
arrows.push(arrow2)


function drawArrows() {
    for (let i = 0; i < arrows.length; i++) {
        arrows[i].draw()
    }
}


function setup() {
    createCanvas(500, 500);


    fetch("http://localhost:8080/api/message")
      .then(response => response.json())
      .then(data => {
        message = data.text;
        centx = data.number;
        centy = data.number;

        velx = data.number;
        vely = data.number;


      });
    
}

function draw() {
    background(220);
    textSize(24);
    textAlign(CENTER, CENTER);
    text(message, 210, 25);

    arrow1.draw()
    arrow2.draw()

    fill(0)
    circle(pointx, pointy, 30)

}


