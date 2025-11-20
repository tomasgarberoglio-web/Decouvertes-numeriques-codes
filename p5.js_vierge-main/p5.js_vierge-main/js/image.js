let img;
let compteur=0;

let taille = 20;
let step = 1

function preload(){
img= loadImage('img/couv_perturbante_trous_blanc_noir.JPEG'); ///corriger URL
}

function setup() {
   createCanvas(windowWidth,windowHeight);
	 img.resize(width/2,0)
	 image(img,0,0) 
   sliderAutomatique(10,50,20,'step', 1); 
   sliderAutomatique(10,50,20,'taille', 1);
}

function draw() {
let nbrRepetitions = 50; //actions répétées x fois
for (let i = 0; i < nbrRepetitions; i++) { 
    let x = random(width)
    let y =random(height)
		let fragment=  get(x,y ,taille,25) //get tout seul découpe un morceau du canvas
		//on l'affiche à une position légèrement différente
    let step =taille;
    image(fragment,x+random(-step,step),y+random(-step,step))
}

print(taille)
}

function keyPressed(){

if(key === 'b'){
noLoop()
}

}

function mouseDragged(){
  step = curseurListe["step"].value();
  taille = curseurListe["taille"].value();
}