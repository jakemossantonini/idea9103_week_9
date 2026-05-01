let img;

// One object holds everything about how the image is drawn on screen
let fit = { x: 0, y: 0, w: 0, h: 0 };

function preload() {
  img = loadImage('/assets/Mona_Lisa_by_Leonardo_da_Vinci_500_x_700.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  calculateFit();
}

function draw() {
  background(0);
  image(img, fit.x, fit.y, fit.w, fit.h);
}

// Figure out the size and position to draw the image so it fits centred on the canvas
function calculateFit() {
  let imgAspect = img.width / img.height;
  let canvasAspect = width / height;

  if (imgAspect > canvasAspect) {
    // Image is wider than canvas → fit to width, letterbox top/bottom
    fit.w = width;
    fit.h = width / imgAspect;
  } else {
    // Image is taller (or equal) → fit to height, letterbox left/right
    fit.h = height;
    fit.w = height * imgAspect;
  }
  fit.x = (width - fit.w) / 2;
  fit.y = (height - fit.h) / 2;
}