//Sine Editor
//Eevi Rutenan

var pSlider, r1Slider, r2Slider, lSlider, sel;

function setup(){
    createCanvas(windowWidth,windowHeight).parent("canvasContainer");;
    //create sliders, assign them with a class for css and position them on the canvas
    pSlider = createSlider(10,300,200);
    pSlider.class("slider");
    pSlider.position(150,10);
    
    r1Slider = createSlider(10,300,160);
    r1Slider.class("slider");
    r1Slider.position(150,40);
    
    r2Slider = createSlider(0,300,100);
    r2Slider.class("slider");
    r2Slider.position(150,70);
    
    lSlider = createSlider(1,20,2);
    lSlider.class("slider");
    lSlider.position(150,100);
    
    //create a multiple selection box, create options, assign class and position on canvas 
    sel = createSelect();
    sel.class("selection");
    sel.position(150,130);
    sel.option("normal");
    sel.option("spiral");
    
    textAlign(LEFT,TOP);
    textSize(20);
}

function draw(){
    background(0,0,255);
    //get slider values
    var points = pSlider.value();
    var rad1 = r1Slider.value();
    var rad2 = r2Slider.value();
    var loops = lSlider.value();
    
    noStroke();
    fill(255);
    //draw text for the GUI
    text("Points: "+points, 10, 10);
    text("Radius 1: "+rad1, 10, 40);
    text("Radius 2: "+rad2, 10, 70);
    text("Loops: "+loops, 10, 100);
    text("Mode", 10, 130);
    
    fill(255,200,255);
    stroke(0,0,255);
    //move to center
    translate(width/2, height/2);
    
    //if selector value is "normal", draw shape using slider values
    
    if(sel.value() === "normal"){
    
        beginShape();
        for(var i=0; i <= points; i++ ){
            var angle = TWO_PI/points*i;
            var r = rad1 + sin(loops*angle)*rad2;
            var y = sin(angle)*r;
            var x = cos(angle)*r;
            vertex(x,y);
        }
        endShape();
    }
    
    //if selector value is "spiral", draw spiral using slider values and some additional parameters
    else if (sel.value() === "spiral") {
        beginShape();
        var grow = 0;
        var rounds = 5;
        for(var i=0; i <= points; i++ ){
            var angle = TWO_PI*rounds/points*i;
            var r = rad1 + sin(loops*angle)*rad2 + grow;
            var y = sin(angle)*r;
            var x = cos(angle)*r;
            curveVertex(x,y);
            grow+=1;
        }
        endShape(); 
    }
    
}

//Resize the canvas when window is resized
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}


