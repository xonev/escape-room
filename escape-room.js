const canvasWidth = 1200;
const canvasHeight = 927;
const MILLISECONDS_IN_SECOND = 1000;

let abandonedMineImage;
let framesPerSecond;
let frames = 0;
let startTime = new Date;


function preload() {
    abandonedMineImage = loadImage("art/creepy-abandoned-house.jpg");
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    let currentTime = new Date;
    frames += 1;

    renderBackgroundImage();
    renderFramesPerSecond(currentTime);
}

function renderBackgroundImage() {
    image(abandonedMineImage, 0, 0);
}

function renderFramesPerSecond(currentTime) {
    let elapsedTimeSeconds = (currentTime - startTime) / MILLISECONDS_IN_SECOND;
    let framesPerSecond = frames / elapsedTimeSeconds;
    textSize(32);
    fill(255, 255, 255);
    text(`${framesPerSecond.toFixed(2)} fps`, 50, 50);
}