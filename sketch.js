

var elonMusk, muskImage;
var elonCount = 3;
var ground;
var fireball, fireImage, fireballGroup;
var edges;

var platform1,platform2;
var brownie,browniesGroup;


function preload() {
    muskImage=loadImage("elon_musk-removebg-preview.png");

}
function setup() {
createCanvas(600,600);
elonMusk=createSprite(300,500,20,20);

elonMusk.addImage (muskImage);
elonMusk.scale = 0.1
ground=createSprite(300,580,600,20);

platform1= createSprite(100,300,50,10);
platform2 = createSprite(475,400,50,10);

edges= createEdgeSprites();


browniesGroup= new Group();
fireballGroup = new Group();

}

function draw() {
    background(0);

    if(keyDown("space")){
        elonMusk.velocityY=-5;
    }
    elonMusk.velocityY += 0.5;

    if(keyDown(LEFT_ARROW)){
        elonMusk.x-=5;
    }

    if(keyDown(RIGHT_ARROW)){
        elonMusk.x+=5;
    }


    if(elonMusk.isTouching(browniesGroup)){
        elonMusk.scale =0.2;


    }


    if(elonMusk.isTouching(fireballGroup)){
        elonMusk.scale -=0.05;

        if(elonMusk.scale<0.05){
            elonMusk.destroy();
            browniesGroup.destroyEach();
            fireballGroup.destroyEach();

        }


    }

    

    
    
    spawnFire();
    spawnCakes();
    fireballGroup.bounceOff(edges[0]);
    fireballGroup.bounceOff(edges[1]);
    fireballGroup.bounceOff(ground);
    browniesGroup.bounceOff(ground);
    elonMusk.collide(platform1);
    elonMusk.collide(platform2);
    elonMusk.collide(ground);
    drawSprites();
}

function spawnCakes(){
    if(frameCount%150==0){
        brownie = createSprite(200,0,30,20);
        brownie.shapeColor="brown";
        brownie.x= Math.round(random(20,580));
        brownie.velocityY = 2;


        browniesGroup.add(brownie);

    }
}

function spawnFire(){

    if(frameCount%60==0){
        fireball = createSprite(200,0,20,20);
        fireball.shapeColor ="red";
        fireball.x =Math.round(random(20,580));
        fireball.velocityY = Math.round(random(2,6));
        fireball.velocityX = Math.round(random(-3.3));
        
        fireball.lifetime=500;


        fireballGroup.add(fireball);
    }


}






