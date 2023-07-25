Status="";
function preload(){

}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.size(380,380);
    webcam.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object:"
}

function modelLoaded(){
    console.log("Model Loaded");
    Status=true;
}

function draw(){
    image(webcam,0,0,380,380);


}