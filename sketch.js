function preload() {
  img = loadImage("https://res.cloudinary.com/dzemreenm/image/upload/v1652089266/icon_pzdilf.png");
}

function setup() {
    createCanvas(700, 500);
    
    capture = createCapture(VIDEO);
    capture.hide();
    
    tint_color = "";
}
  
function draw() {
    tint(tint_color);
    image(capture, 0, 0, 700, 500);
    image(img, 250, 25, 200, 100);
    fill(150, 75, 0);
    stroke(150, 75, 0);
    circle(0, 0, 150);
    circle(700, 0, 150);
    circle(0, 500, 150);
    circle(700, 500, 150);
    rect(0, 0, 30, 700);
    rect(671, 0, 30, 700);
    rect(0, 0, 700, 30);
    rect(0, 471, 700, 30);
}
  
function snap() {
    save("img.png");
}
  
function apply() {
    tint_color = document.getElementById("filterc").value;
}