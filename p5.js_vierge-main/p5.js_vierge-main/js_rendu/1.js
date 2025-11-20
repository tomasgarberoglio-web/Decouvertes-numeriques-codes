function preload(){
img= loadImage('img/1couv_renai_ornements_jaune.jpg'); ///corriger URL
img2= loadImage('img/8couv_XVIII_noir_cuir_embosage.JPEG');

}

function setup() {
  
	  createCanvas(windowWidth*0.98,windowHeight*0.98);
    img = img.get(40*-1,80*-1,img.width,img.height-10)
    img2 = img2.get(0,0,img.width,img.height-120)
		img.resize(width*0.92,920)
    img2.resize(windowWidth*0.98,windowHeight*0.98)
      //  image(img,0,0)   
    altererImg(img,150)
         // background(255)
           //image(img2,0,0)
     image(img2,0,0)

    

    
		
}

function draw(){

  tint(random(0,255),255,random(0,255))
  image(img,0,frameCount*0.011)
   tint(random(0,255),255,random(0,255))
  image(img,frameCount*-0.011,0)
  tint(0,0,255)
  image(img,0,frameCount*-0.011) 
      tint(255,0,0)
  image(img,frameCount*0.011,0)

  
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
}

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