
function setup() {
createCanvas(windowWidth, windowHeight);
rectMode(CENTER) // l'origine est le centre
background(255,255,255)
}

let variable;//cette variable doit être placée à l'extérieure de toute fonction

function mouseDragged(){
//variable peut ensuite être appliqué à partout ! 
  variable = curseurListe["scale"].value(10);

}

function draw() {

if (frameCount<36){
//code exécuté si frameCount est plus petit que 2
random(0,10) //renvoit une valeur aléatoire entre min et max
random(10)//renvoit une valeur aléatoire entre max et 0

let quantiteAleatoire = 10;
let r = random(-quantiteAleatoire,quantiteAleatoire);
let s = 10 + random(windowWidth) // s vaut 10+un peu d'aléatoire
s =s+random(0) // on ajoute un peu d'aléatoire à s


square(windowWidth/2+r*10, windowHeight/2+r*10, frameCount*20)
fill(255,255,255,0)// tous les prochains dessins seront remplis 
stroke(0,0,0,s)// tous les prochains dessins auront un contour
strokeWeight(4)//épaisseur du contour

sliderAutomatique(0,0,0,"couleur");
sliderAutomatique(0,0,0,"scale");
sliderAutomatique(0,0,0,"trans");
sliderAutomatique(0,0,0,"x");
sliderAutomatique(0,0,0,"y");
//r = quantité de rouge 0-255
//g = quantité de vert 0-255
//b = quantité de bleu 0-255
//a = transparence 0-255

}
}

