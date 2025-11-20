let aleatoire,imgCopy;


function preload(){
img= loadImage('img/couv_moy_age_rouge_renard_malicieux.JPEG'); ///corriger URL
img2= loadImage('img/couv_moy_age_rouge_renard_malicieux.JPEG');

}



function setup() {
// img = img.get(0,0,windowWidth,img.height-40)
// img2 = img2.get(0,0,windowWidth,img.height-40-40)
    angleMode(DEGREES)
   createCanvas(windowWidth,windowHeight);
   background(img)
   img.resize(width*0.95,windowHeight)
   img2.resize(width,windowHeight)
   listeImage = [img2,img]
    aleatoire = random(8000)
      noSmooth()
}
let compteur=0;
    let x=0 

function draw() {

   let Largeur = 5;
   let LArgeur =2;
   let largeur =20;


//  for (let i = 0; i < img.width; i+=largeur) {
//   let frag =img.get(i,0,largeur,height)
//   image(frag,i,noise(i*10+frameCount*0.01)*200)
  
// }

 if (!mouseIsPressed) {
    imgCopy=img2.get(x+150,300,LArgeur,550)
  }

let y = 300
image(imgCopy,x+150,y)

if(x<422){
x+=LArgeur
}else{
x=0
}

  //   if(compteur<img.width){
  //       compteur+=Largeur;
  //   }else{
  //       compteur=0;
  //   }
  // let imageChoise = random(listeImage)
  //  let fragment = imageChoise.get(compteur,0,largeur,img.height)
  //  image(fragment,compteur,random(mouseY*0.1))
 
   
 



// let nbrRepetitions = 80;
// for (let i = 0; i < nbrRepetitions; i++) {
//     let x = random(width);
//     let y =random(height);
//     let fragment=  get(x,y ,5,5);
//     image(fragment,x+random(-1,1),y+random(-1,1));
// }
}

