difference=0;
leftwristX=0;
rightwristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(420,420);
    canvas=createCanvas(420,420);
    canvas.position(700, 185);
    video.position(100,185);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
    textk=document.getElementById("inputt").value;
    background("#310047");
    textSize(difference);
    fill("white");
    text(textk, 100,100);
}
function modelLoaded(){
    console.log("The model is ready to go!")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=leftwristX-rightwristX;
    }
}