function preload(){
img= loadImage('img/couv_volcan_lave_mec.JPEG'); ///corriger URL
img2= loadImage('img/couv_volcan_avec_visage.JPEG');
img5= loadImage('img/1couv_renai_ornements_jaune.jpg');
img3= loadImage('img/couv_renai_noir_embossage.JPEG');

}

function setup() {
  
	  createCanvas(windowWidth*0.98,windowHeight*0.98);
    img = img.get(0,30,img.width,img.height-80)
    img.resize(width,windowHeight)
    img5 = img5.get(0,30,img.width,img.height-100)
    img5.resize(width,windowHeight)
    img3 = img5.get(0,30,img.width,img.height-100)
    img3.resize(width,windowHeight)
    img2.resize(700,windowHeight)
      //  image(img,0,0)  
          image(img2,0,0) 
    altererImg(img,220)
     altererImg(img5,220)
      altererImg(img3,200)
         // background(255)
           //image(img2,0,0)

//  noTint()
//        	noSmooth()//activer ou désactiver cette ligne
//     let imgCopy = img2.get() //duppliquer l'image dans une autre variable
//     imgCopy.resize(0,mouseX) // redimensionner la copie
//     //afficher la copie en l'étirant aux dimensions de l'original:
//     image(imgCopy,0,0,img.width,img.height)

    

    
		
}
    let x=0 
function draw(){

   let Largeur = 50;
     let largeur = 25;

//    for (let i = 0; i < img.width; i+=largeur) {
//   let frag =img.get(x,0,largeur,height)
//  image(frag,i,noise(i+frameCount*0.02)*200)
// }
  if(x<1500){ // iic modifier chifres pour longeur du scant avant reset
x+=Largeur
}

else{
x=0
     tint(random(150,255),50,0)
  image(img,0,frameCount*0.8,0)

  x+=Largeur
   tint(random(100,150),0,0)
  image(img5,0,frameCount*-2,0)

   tint(random(150,250),0,80)
  image(img3,0,0,frameCount*1)
  }
}

  // tint(0,0,255)
  // image(img,0,frameCount*-0.011) 
  //     tint(255,0,0)
  // image(img,frameCount*0.011,0)

  
//     noTint()
//     let nbrRepetitions = 2; //actions répétées x fois
// for (let i = 0; i < nbrRepetitions; i++) { 
//     let x = random(width)
//     let y =random(height)
// 		let fragment=  img2.get(mouseX,mouseY ,50,50) //get tout seul découpe un morceau du canvas
// 		//on l'affiche à une position légèrement différente
//     image(fragment,x+random(-1,1),y+random(-1,1))
// }
// noTint()
//     let nbrRepetitions = 200; //actions répétées x fois
// for (let i = 0; i < nbrRepetitions; i++) { 
//     let x = random(width)
//     let y =random(height)
// 		let fragment=  img.get(x,y ,25,25) //get tout seul découpe un morceau du canvas
// 		//on l'affiche à une position légèrement différente
//     image(fragment,x+random(-1,1),y+random(-1,1))
// }


//même code que précédemment mais dans une fonction
function altererImg(img,seuil){ //ajout d'un paramètre seuil
   img.loadPixels(); // charge les pixels du canvas
  for (let i = 0; i < img.pixels.length; i += 4) {
   let r =img.pixels[i];
    let v =img.pixels[i+1];
    let b =img.pixels[i+2];
    let a =img.pixels[i+3];

    if(r<seuil){ // on compare une couche à ce seuil 
        img.pixels[i+3]=random(0); //rendre les pixels transparents
    }
  }
  img.updatePixels(); // applique les modifs

}