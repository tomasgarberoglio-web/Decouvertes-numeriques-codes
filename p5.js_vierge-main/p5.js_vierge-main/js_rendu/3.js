let img;

function preload(){
img4= loadImage('img/couv_antiquite_maron-relief.JPEG'); ///corriger URL
img3= loadImage('img/couv_volcan_avec_visage.JPEG');
img6= loadImage('img/10couv_XVIII_suminagashi_bleu.JPEG');
img= loadImage('img/couv_rouge_carre_typo_central.JPEG');
img2= loadImage('img/4couv_XVII_vert_cadres_doré.JPEG');
img5= loadImage('img/1couv_renai_ornements_jaune.jpg');


}

function setup() {
  createCanvas(windowWidth,windowHeight);
  img.resize(600,windowHeight*0.9)
img2.resize(600,windowHeight*0.9)
img3.resize(600,windowHeight*0.9)
img4.resize(600,windowHeight*0.9)
img5.resize(600,windowHeight*0.9)
img6.resize(600,windowHeight*0.9)
listeImage = [img,img3,img4,img5,img6,]
   image(img2,0,0)
}   

//mousePressed est déclenché à chaque clic
function mousePressed(){
    
//calcul aléatoire des dimensions du fragment :
		let largeur = random(1,200);
		let hauteur = random(1,200);
//calcul d'un léger décalage par rapport à la souris 
		let quantiteAleatoire = 2;
    let x=mouseX+random(-quantiteAleatoire,quantiteAleatoire)
    let y=mouseY+random(-quantiteAleatoire,quantiteAleatoire)
let fragment = random(listeImage).get(mouseX,mouseY,largeur,hauteur);
 //let fragment = img3.get(mouseX,mouseY,largeur,hauteur);
//affichage à la position de la sourie
  image(fragment,mouseX,mouseY)
}