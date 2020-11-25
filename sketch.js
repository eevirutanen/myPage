//Creative Computation for VCD: Final Project
//Your Name
//Project Name
//Date
//Description of the project
//Description of the code
//References and links
//(no need to reference course examples)

function setup(){
    /* DON'T EDIT THIS LINE */
    createCanvas(windowWidth,windowHeight).parent('canvasContainer');
    /* this helps with positioning the canvas */
    
    background(0);
}
function draw(){
    fill(100);
    ellipse(mouseX,mouseY,100);
}

//Resize the canvas when window is resized
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}