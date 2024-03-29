// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [400, 200, 200, 400, 200, 200, 200, 400, 200, 200, 200, 200, 400];


// Detects a key press
document.addEventListener("keydown", keyDownHandler);

function keyDownHandler(event) {
    if (event.key == "1") {
        for (i=myArray.length-1; i>=0; i--) {
            if ((myArray[i] == 400)) {
                myArray.splice(i, 1)
                console.log(myArray);
            }
        }
    }

     if (event.key == "2") {
        for (i=myArray.length-1; i>=0; i--) {
            if ((myArray[i] == 200)) {
                myArray.splice(i, 1)
                console.log(myArray); 
            }
        }
    }
}




// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / myArray.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < myArray.length; i++) {
        ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
        ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);        
    }
    

    // Request another Animation Frame
    requestAnimationFrame(draw);
}