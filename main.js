function preload(){

}

function setup(){
    canvas = createCanvas(800,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    stroke("cyan");
    strokeWeight(25);
    rect(50,50, 700, 500);
    noStroke();
    fill("lime");
    circle(50,60, 100);
    noFill();
    fill("lime");
    circle(50,525, 100);
    noFill();
    fill("lime");
    circle(735,60, 100);
    noFill();
    fill("lime");
    circle(735,525, 100);
    noFill();
    image(video, 90,90, 600,400);
}

function take_snapshot(){
save("pic.png");
}
