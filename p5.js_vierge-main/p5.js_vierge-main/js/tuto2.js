let img
let img2
let img3

function preload(){
img= loadImage('img/1couv_renai_ornements_jaune.jpg');
img2= loadImage('img/6couv_XVII_rouje_blason.JPEG'); ///corriger URL
img3= loadImage('img/9couv_XVIII_negatif.JPEG');
}

function setup() {
   createCanvas(windowWidth,windowHeight,WEBGL);
	 img.resize(windowWidth,windowHeight)
     img2.resize(windowWidth+215,windowHeight+80)
     translate(-width/2-165,-height/2-40)
     image(img2,0,0)

    img = img.get(0,0,img.width,img.height-30)
}

function draw(){
trace(500,0.005)
    trace(500)
    trace(55000)

}

function trace(seed, lissage) {
translate(-width/2,-height/2)
let x = noise(seed+200+frameCount*lissage*4)*width
let y = noise(seed+200+frameCount*lissage*4)*height
    noStroke()

//points
//     let frag = img.get(x,y,200,200);
// texture(frag)
// ellipse(120,150,y/5,y/5)

//     let frag3 = img2.get(x,y,200,200);
// texture(frag3)
// ellipse(900,450,y/5,y/5)


//diagonales
 let frag = img.get(x,y,200,200);
texture(frag)
let yConveti = map(y,0,height,200,10)
ellipse(x/2+500,x/2+500,yConveti,yConveti)



let frag2 = img3.get(x,y,200,200);
texture(frag2) 
let yConveti2 = map(x,y,height,10,200)
ellipse(yConveti2+500,x/2+500,yConveti,yConveti)


    let frag3 = img2.get(x,y,200,200);
texture(frag3)
ellipse(900,450,y/5,y/5)



}