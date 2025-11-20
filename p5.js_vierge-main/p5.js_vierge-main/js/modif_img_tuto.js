let img;
let img2;
let listeImage;
function preload() {

img = loadImage('img/flor.jpg');
img2 = loadImage('img/landsacape.jpg');

}
function setup() {

   createCanvas(windowWidth, windowHeight);
   listeImage = [img,img2]
   img.resize(0,height/2)
   img2.resize(0,height/2)
   noSmooth()
// tint(0,0,250)
// image(img,0,0)
// noTint()

}

let compteur=0;

function draw() {
if(compteur<img.width){

compteur+=5;

    }
    else{

compteur=0;

    }
   let imageChoise = random(listeImage)
    let fragment = imageChoise.get(compteur,10,22,img.height)
    image(fragment*2,compteur,random(mouseY*0.1))

//let imgCopy = img.get()
//let resolution = mouseY
//if(resolution< 1){

// resolution=1

//}

//imgCopy.resize(0,resolution)
//image(imgCopy,0,0,img.width,img.height)


}


// function mouseDragged(){

//     if(frameCount%8==0){

//     let quantiteAleatoire = 80
//     let x=mouseX+random(-quantiteAleatoire,quantiteAleatoire)
//     let y=mouseY+random(-quantiteAleatoire,quantiteAleatoire)
//     let fragment = img.get(x,y,random(1,250),random(1,250));
//     image(fragment,mouseX,mouseY)
//      tint(random(255),random(255),random(255),x)

//     }

// }


 