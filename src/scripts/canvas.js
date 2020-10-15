import Blob from '../mainPlayer.js';

// let mainPlayer;

let blob;

let blobs = [];

function setup () {
    debugger;
  const canvas = createCanvas(600, 600)
  canvas.parent("container")
  blob = new Blob(width/2, height/2, 64);
  for (let i = 0; i < 20; i++) {
    blobs[i] = new Blob(random(width), random(height), 16)
  }
}

function draw() {
  background(220);
  blob.show();
  for (let i = 0; i < blobs.length; i++) {
    blobs[i].show();
  }
}
