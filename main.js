function preload(){
    clown_nose_image=loadImage("https://i.postimg.cc/PxVXqyQf/clown-nose-removebg-preview.png");
}
nosex=0;
nosey=0;
function setup(){
    canvas=createCanvas(350,350);
    canvas.position(200,200);
    webcam_video=createCapture(VIDEO);
    webcam_video.hide();
    pose_net=ml5.poseNet(webcam_video,modelLoaded);
    pose_net.on('pose',gotPoses)
}
function draw(){ 
    image(webcam_video,0,0,350,350);
    fill(252,15,3);
    stroke(252,211,3);
    circle(nosex,nosey,30);
    image(clown_nose_image,nosex-10,nosey-10,30,30);
}
function take_snapshot(){
    save('mypic.png');
}
function modelLoaded(){
    console.log('posenet model is loaded');
}
function gotPoses(results){
    if(results.length>0){
       nosex=results[0].pose.nose.x;
       nosey=results[0].pose.nose.y;
       // console.log(results)
        console.log('nose x=',results[0].pose.nose.x);
    console.log('nose y=',results[0].pose.nose.y);
    }
}