function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(445, 300);
    video=createCapture(VIDEO);
    video.hide();
    cor="";
}

function draw(){
    image(video,0, 0, 640, 480);
    tint(cor);
    fill(cor);
    stroke(cor);
    circle(20, 20, 40);
    circle(60, 20, 40);
    circle(100, 20, 40);
    circle(140, 20, 40);
    circle(180, 20, 40);
    circle(220, 20, 40);
    circle(260, 20, 40);
    circle(300, 20, 40);
    circle(340, 20, 40);
    circle(380, 20, 40);
    circle(420, 20, 40);
    circle(460, 20, 40);
    circle(500, 20, 40);
    circle(540, 20, 40);
    circle(580, 20, 40);
    circle(620, 20, 40);
    circle(20, 460, 40);
    circle(60, 460, 40);
    circle(100, 460, 40);
    circle(140, 460, 40);
    circle(180, 460, 40);
    circle(220, 460, 40);
    circle(260, 460, 40);
    circle(300, 460, 40);
    circle(340, 460, 40);
    circle(380, 460, 40);
    circle(420, 460, 40);
    circle(460, 460, 40);
    circle(500, 460, 40);
    circle(540, 460, 40);
    circle(580, 460, 40);
    circle(620, 460, 40);
    rect(0, 0, 20, 480);
    rect(620, 0, 20, 480);
    rect(0, 0, 640, 20);
    rect(0, 460, 640, 20);
    


}

function filter_tint(){
    cor=document.getElementById("cn").value;
}

function take_snapshot(){
    save('foto.png');
}



