function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(0,0,205);
  
  circle(35,38,70);
  circle(105,38,70);
    circle(175,38,70);
  circle(245,38,70);
  circle(315,38,70);
  circle(315,38,70);
  circle(385,38,70);
  circle(35,365,70);
  circle(105,365,70);
  circle(175,365,70);
  circle(245,365,70);
  circle(315,365,70);
  circle(385,365,70);
  
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
   }
   }