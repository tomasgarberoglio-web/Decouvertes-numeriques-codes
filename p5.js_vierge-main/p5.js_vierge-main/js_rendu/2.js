let aleatoire,imgCopy;


function preload(){
img4= loadImage('img/couv_antiquite_maron-relief.JPEG'); ///corriger URL
img3= loadImage('img/couv_volcan_avec_visage.JPEG');
img6= loadImage('img/10couv_XVIII_suminagashi_bleu.JPEG');
img= loadImage('img/couv_rouge_carre_typo_central.JPEG');
img2= loadImage('img/couv_rouge_carre_typo_central.JPEG');
img5= loadImage('img/1couv_renai_ornements_jaune.jpg');
}



function setup() {
// img = img.get(0,0,windowWidth,img.height-40)
// img2 = img2.get(0,0,windowWidth,img.height-40-40)
    angleMode(DEGREES)
   createCanvas(windowWidth,windowHeight);
   //background(img5)
   img5.resize(random(90000),800) //important ici changer la taille de l'image pour faire soit des degrades de couleur ou une visualisation de l'image plus reel (ex ilvre et typo qui defile)
   img2.resize(width,windowHeight)
   listeImage = [img2]
    aleatoire = random(8000)
      noSmooth()
}
let compteur=0;
    let x=0 

function draw() {

   let Largeur = 5;
   let LArgeur =20;
   let largeur = 25;
 if (!mouseIsPressed) {
    imgCopy=random(listeImage).get(x+150,300,LArgeur,680)
    for (let i = 0; i < img.width; i+=largeur) {
  let frag =img5.get(x,0,largeur,height)
 image(frag,i,noise(i+frameCount*0.02)*200)
}
  }

let y = 165
//image(imgCopy,x+150,y)


if(x<9000){ // iic modifier chifres pour longeur du scant avant reset
x+=Largeur

}else{
x=0

// let nbrRepetitions = 80;
// for (let i = 0; i < nbrRepetitions; i++) {
//     let x = random(width);
//     let y =random(height);
//     let fragment=  get(x,y ,500,500);
//     image(fragment,x+random(-1,1),y+random(-1,1));
// }
}

  //   if(compteur<img.width){
  //       compteur+=Largeur;
  //   }else{
  //       compteur=0;
  //   }
  // let imageChoise = random(listeImage)
  //  let fragment = imageChoise.get(compteur,0,largeur,img.height)
  //  image(fragment,compteur,random(mouseY*0.1))
 
}
