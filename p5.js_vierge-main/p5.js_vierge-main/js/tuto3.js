function preload(){
img= loadImage('img/flor.jpg'); ///corriger URL
}



function setup() {
    background(255)
   createCanvas(windowWidth,windowHeight);
	 img.resize(width,0)


     img.loadPixels(); // charge les pixels du canvas
  for (let i = 0; i < img.pixels.length; i += 4) {
   let r =img.pixels[i] 
    let v =img.pixels[i+1]
    let b =img.pixels[i+2]
    let a =img.pixels[i+3]
   
    if(v<60)
   img.pixels[i+3] = 0
  
  }
  img.updatePixels(); // applique les modifs


  background(250,20,15)
 //image(img,0,0)

}

function draw(){
   let img2 =img.get()
    altererImg(img2,mouseY)
image(img2,0,0)
}

function altererImg(img,treshold){
   img.loadPixels(); // charge les pixels du canvas
  for (let i = 0; i < img.pixels.length; i += 4) {
   let r =img.pixels[i] 
    let v =img.pixels[i+1]
    let b =img.pixels[i+2]
    let a =img.pixels[i+3]

    if((r+v+b)/3<treshold){
        img.pixels[i+3]=0
        //face.pixels[i]=0
    }
  }
  img.updatePixels(); // applique les modifs
}