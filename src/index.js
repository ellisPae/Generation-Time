// import './styles/index.css';
// import Blob from './mainPlayer';
// import p5 from 'p5';




// // let mainPlayer;

// let blob;

// let blobs = [];

// const setup = () => {
//   createCanvas(600, 600);
//   blob = new Blob(width/2, height/2, 64);
//   for (let i = 0; i < 20; i++) {
//     blobs[i] = new Blob(random(width), random(height), 16)
//   }
// }

// const draw = () => {
//   background(220);
//   blob.show();
//   for (let i = 0; i < blobs.length; i++) {
//     blobs[i].show();
//   }
// }


// setup();
// draw();




// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext("2d");


// function getRandomColor() {
//   let letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// const createFood = () => {
//   for (let i = 0 ; i < 100; i++) {

//     let xPos = Math.random() * canvas.width;
//     var yPos = Math.random() * canvas.height;
//     ctx.moveTo(xPos, yPos);
//     ctx.arc(xPos,yPos, 7, 0, Math.PI * 2);
//     ctx.fillStyle = getRandomColor();
//     ctx.fill();
//   }
  
// }

// createFood();

// let food = [];

// const createFood = (radius, num, arr) => {
//   for (let i = 0; i < num; i++) {
//     let xPos = Math.floor(Math.random() * canvas.width)
//     let yPos = Math.floor(Math.random() * canvas.height)
    
//     let color = getRandomColor();
    
//     let food = {
//       x: xPos,
//       y: yPos,
//       r: radius,
//       color: color
//     }
//     arr.push(food);
//   }
// }

// createFood(5, 150, food);


// const populateFood = (ctx, foodArr) => {
//   for (let food of foodArr) {
//     ctx.beginPath();
//     ctx.arc(food.x, food.y, food.r, 0, 2 * Math.PI, food.color);
//     ctx.fillStyle = food.color;
//     ctx.fill();
//   }
// }

// populateFood(ctx, food);



// function setRandomColor() {
//   $("#colorpad").css("background-color", getRandomColor());
// }


// const createBacteria = (ctx, bactArr) => {
//   for (const circle of circlesArr) {
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI,                 
//     circle.color);
//     ctx.fillStyle = circle.color;
//     ctx.fill();
//   }
// }

