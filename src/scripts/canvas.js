// import Blob from '../mainPlayer.js';

// let mainPlayer;

let randomColor;
// const getRandomColor = () => {
//   let r = random(255); // r is a random number between 0 - 255
//   let g = random(100, 200); // g is a random number betwen 100 - 200
//   let b = random(100); // b is a random number between 0 - 100
//   // a = random(200,255); // a is a random number between 200 - 255

//   return color(r, g, b);
// }



function Blob(x, y, r) {
  this.pos = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0)
  this.r = r;

  this.show = function() {
    circle(this.pos.x, this.pos.y, this.r * 2);
    noStroke();
  }

  //  velocity = change in distance / time
  //  accel = change in velocity / time

  this.move = function() {
    let newVelocity = createVector((mouseX - width/2), (mouseY - height/2));
    newVelocity.setMag(4);
    this.velocity.lerp(newVelocity, 0.3);
    this.pos.add(this.velocity);
    
    // this.velocity.add(this.acceleration)
    // debugger;

    // if (this.r >= (1.1 * this.r)) {
    //   debugger
    //   let newAcceleration = createVector((mouseX - width/2), (mouseY - height/2));
    //   newAcceleration.setMag(1);
    //   this.acceleration.lerp(newAcceleration, 0.3);
    //   this.velocity.sub(this.acceleration);
    // }
  
  }
    
  
    this.eats = function(something) {
      // the sum of 2 radii needs to be greater than the distance between them
      // the eater needs to be at least 1.5x the size of the eaten 
      // gains size after eating => radius does NOT inc, AREA inc
      let distance = p5.Vector.dist(this.pos, something.pos);
      // A = r^2 * pi
      // r = sqrt (A / pi)
      if (distance < (this.r + something.r) && this.r >= (1.75 * something.r)) {
        // A1 + A2
        let combinedSize = ((this.r ** 2) * PI)  + (0.5 * (something.r ** 2) * PI) 
        this.r = sqrt(combinedSize / PI);
        
        if (this.r >= (1.02 * this.r)) {
        // debugger
        let newAcceleration = createVector((mouseX - width/2), (mouseY - height/2));
        newAcceleration.setMag(1);
        this.acceleration.lerp(newAcceleration, 0.3);
        this.velocity.sub(this.acceleration);
        debugger
    }

        if (food.includes(something)) {
          let x = random(-width * 4, width * 4)
          let y = random(-height * 4, height * 4)
          food.push(new Blob(x, y, 10));
        }
        
      return true;
    } else {
      return false;
    }  
  }

}


let player;
let food = [];

function setup () {
  const canvas = createCanvas(1200, 900);
  canvas.parent("container");
  player = new Blob(0, 0, 40);

  for (let i = 0; i < 700; i++) {
    let x = random(-width * 4, width * 4)
    let y = random(-height * 4, height * 4)
    food[i] = new Blob(x, y, 10)
  }
  randomColor = color(random(255), random(255), random(255))
  fill(randomColor)
}

function draw() {
  background(220);

  // 1. translate respect to center
  translate(width/2, height/2);


  // 2. scale the frame accordingly to the size of the player
  // => original size relative to new size
 
  scale(lerp(1, (40 / player.r), 0.1 ))

  // 3. translate respect to player position
  translate(-player.pos.x, -player.pos.y);
  

  player.show();
  player.move();



  for (let i = food.length-1; i >= 0; i--) {
    if (player.eats(food[i])) {
      food.splice(i, 1);
    }
    food[i].show();
  }
  

  console.log(`current radius: ${player.r}`)
  console.log(`player speed: ${player.velocity.mag()}`)
  console.log(`food count: ${food.length}`);
}
