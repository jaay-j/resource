let img;
let size = 30;
let angle = 0;

function preload() {
    img = loadImage('img/star.png')
    img2 = loadImage('img/moon.png')
}

function setup() {
    createCanvas(windowWidth, 1500);
}

function draw() {
    background('#18135e');
    angle = angle + 0.04;

    push();
        translate(100, 100);
        rotate(angle);
        image(img, -20, -20, 40, 40);
    pop();

    push();
        translate(250, 160);
        rotate(angle);
        image(img, -25, -25, 50, 50);
    pop();

    push();
        translate(400, 50);
        rotate(angle);
        image(img, -20, -20, 40, 40);
    pop();

    push();
        translate(130, 320);
        rotate(angle);
        image(img, -20, -20, 40, 40);
    pop();

    push();
        translate(70, 480);
        rotate(angle);
        image(img, -20, -20, 40, 40);
    pop();

    push();
        translate(250, 570);
        rotate(angle);
        image(img, -20, -20, 40, 40);
    pop();

    push();
        translate(340, 750);
        rotate(angle);
        image(img, -20, -20, 40, 40);
    pop();

    push();
        translate(570, 100);
        rotate(angle);
        image(img, -20, -20, 40, 40);
    pop();

    push();
        translate(750, 90);
        rotate(angle);
        image(img, -20, -20, 40, 40);
    pop();

    push();
        translate(920, 50);
        rotate(angle);
        image(img, -20, -20, 40, 40);
    pop();

    push();
        translate(110, 780);
        rotate(angle);
        image(img, -20, -20, 40, 40);
    pop();

    push();
        translate(1300, 600);
        rotate(angle);
        image(img, -20, -20, 40, 40);
    pop();

    push();
        translate(1100, 670);
        rotate(angle);
        image(img, -20, -20, 40, 40);
    pop();

    push();
        translate(40, 70);
        image(img2, 1000, -100, 500, 500);
    pop();
}


