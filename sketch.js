// filipino facts
let info = [{
  fact: "after the spanish-american war, americans claimed the philippines as theirs in an undisclosed agreement with the spanish"
}, {
  fact: "filipinos were massacred in their own homeland for seeking independence, wondering why americans were there in the first place"
}, {
  fact: "the filipino-american 'war' actually lasted about 46 years as they continued to fight for their independence"
}, {
  fact: "filipinos were racially profiled as short people, close to the ground, but were 'perfect for harvesting crops'"
}, {
  fact: "filipinos were racially profiled as 'dirty savages' because of our skintones and our participation in the world's fair expo"
}, {
  fact: "filipinos were either too dark to be asian but too light to be african-american that it was difficult to 'fit in' in many places"
}, {
  fact: "filipinos were unwelcomed at various buildings, that it was hard for them to find places just to sleep for the night"
}, {
  fact: "filipinas were rare to find in the states because mostly only men came to the states for farm work and education"
}, {
  fact: "little manilas were created to act as a space of liminality for filipinos, essentially creating their own communities"
}, {
  fact: "pinoys worked day and night harvesting crops like lettuce, celery, tomatoes, peaches, sugar*, and asparagus*"
}, {
  fact: "pinays worked day and night as employees of shops, hotels, and clubs (some even as 'taxi dancers')"
}, {
  fact: "filipinos created the first major agricultural strike after WW2, known as the 'asparagus strike'"
}, {
  fact: "there were anti-miscegenation laws that forbid filipinos to have any romantic relationships with white men or women"
}, {
  fact: "stockton's little manila was the largest ethnoburb in california, ultimately becoming the heart of filipino america"
}, {
  fact: "stockton's little manila began to crumble as many buildings were torn down for freeways"
}, {
  fact: "the filipino repatriation act of 1934 allowed filipinos a free one-way passage back to the philippines"
}, {
  fact: "the tydings-mcduffie act of 1934 prevented filipinos from returning the states, only allowing 50 to enter the u.s. per year"
}];

let randomIndex;
let animating = false;

let vis = [];
let imageCounter = 0;
let randomVis;

let fontA;
let fontB;

let button;
let cnv;

function preload() {
  fontA = loadFont('fonts/autumn.ttf');
  fontB = loadFont('fonts/bebas.ttf');

  for (let i = 0; i <= 16; i++) {
    vis[i] = loadImage("jpgs/fact_" + i + ".jpg")
  }
}

function setup() {
  cnv = createCanvas(800, 450);
  cnv.parent("#canvasDiv");

  frameRate(8);

  background(loadImage('jpgs/flag.jpg', img => {
    image(img, 0, 0);

    fill(255);
    textSize(50);
    textFont(fontA);
    text("in the 1900s . . .", width * .35, height / 2);
  }));

  button = select("#randoButt");
  button.mousePressed(buttonPressed);
  button.class("daButt");

}


function draw() {
  if (animating == true) {
    clear();
    image(vis[imageCounter], 0, height * .1);

    if (imageCounter < vis.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }
}

function randomizer() {
  animating = false;

  if (info[0]) {
    clear();
    randomIndex = int(random(info.length));
    randomVis = int(random(vis.length));

    image(random(vis), 0, height * .1);
    vis.splice(randomVis, 1);

    fill(0);
    textSize(15);
    textFont(fontB);
    text(info[randomIndex].fact, width * .05, height * .05)
    info.splice(randomIndex, 1);

  } else {
    background(random(200, 255));
    text("thank you for your cooperation in learning about filipinos in the u.s.", width / 2, height / 2);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}
