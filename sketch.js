// cats i have loved before
let cats = [{
  name: "momo",
  color: "grey tabby"
}, {
  name: "tora",
  color: "porcupine tabby"
}, {
  name: "snowball",
  color: "white calico"
}, {
  name: "wednesday",
  color: "rainbow calico"
}, {
  name: "trowa",
  color: "grey bombay"
}, {
  name: "luna",
  color: "black bombay"
}];

let randomIndex;
let animating = false;

function setup() {
  createCanvas(400, 400);
  background(200);
  textSize(32);

  text("click to randomize", 50, 50);


}


function draw() {
  if (animating == true){
    fill(random(255), random(255), random(255));
    ellipse(random(width), random(height), random(50, 150));
  }

}

function randomizer(){
  animating = false;

  if (cats[0]){
    // displays a random name and splices it out of the array
    background(random(200, 255));
    randomIndex = int(random(cats.length));
    text(`${cats[randomIndex].name} is a
      ${cats[randomIndex].color}`, 50, 50);
    // same as above
        // text(cats[randomIndex].name + "'s color and breed is " + cats[randomIndex].color, 50, 50);

    cats.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!", 50, 50);
  }
}

function mousePressed() {
  animating = true();
  setTimout(randomizer, 2000);

}


// NOTES:
    // pop kicks out the item that was last
    // push adds an item in place of what was popped out
    // shift kicks out the item that was first
    // unshift adds an item in place of what was shifted out
    // splice (index, number)
        // (2, 2) gets rid of the second, then gets rid of another (hence 2)
        // (4, 1) gets rid of the fourth, and only the fourth
    // how you access object properties:
        // console.log(cats[2].color);
    // calling a random integer:
        // console.log(cats[int(random(5))]);
        // random will never return the top most number, will round (decimals)
        // cats is the array
    // .length = length of the array

    // setInterval = every second
    // setTimeout = once (if in function, acts like interval)

    // = assigning
    // == checking
