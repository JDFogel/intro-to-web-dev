function setup() {
  createCanvas(400, 400);
  strokeWeight(4);
  isGrub = true;
}

let isHonk = false;


//Momothim the Hydrophobe
function draw() {

  //HONK
  if (isHonk) {
    background(255, 0, 0);
    fill(255,255,255);
    circle(200, 200, 300);

    //eyes
    fill(0);
    circle(150,175,100);
    circle(250,150,125);

    //Beak
    fill(255,165,0);
    triangle(200, 200, 300, 300, 150, 300);

    //Text
    textAlign(LEFT, TOP);
    textSize(75);

    let rawString = "HONK!"
    rawString.fontcolor("Green")
    text(rawString, width / 2 + random(-7, 7), height / 2 + random(-7, 7));
    
isGrub = true;
} else if(isGrub) {

    background(0, 0, 225);

    fill(255,255,255);
    circle(200, 200, 300);

    //eyes
    fill(0);
    circle(250,150,75);
    circle(150,175,50);

    //Beak
    fill(255,165,0);
    triangle(200, 200, 300, 300, 150, 300);

    //Food for thought
    let foods = ['Mmm Grass', 'Yummy Insects', 'Delicious Leafy Greens'];
    let thought = random(foods);
    textSize(30);
    text(thought, 50, 50)
 isGrub = false;
} else{

}
}

//HONK State
function mousePressed() {
  isHonk = !isHonk;
}
