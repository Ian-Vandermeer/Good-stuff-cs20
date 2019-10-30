// ARRAY VISUALIZER SCALE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [];
for (n = 0; n < 50; n++) {
    myArray.push(Math.random() * 100);
}
let max = 100; // myArray values should be b/t 0 and max

// Detects a key press
document.addEventListener("keydown", keyDownHandler);

function keyDownHandler(event) {
    if (event.key == "1") {
        myArray.splice(0, 1, 40)
    }
    if (event.key == "2") {
        myArray.splice(myArray.length - 1, 1, 50)
    }

    if (event.key == "3") {
        myArray.splice(randomInt(0, myArray.length - 0.51), 1, 100)
    }

    if (event.key == "4") {
        myArray.push(randomInt(0, 100, ))
    }

    if (event.key == "5") {
        myArray.pop();
    }

    if (event.key == "6") {
        fiftyLessCount = 0;
        for (i = myArray.length - 1; i >= 0; i--) {
            if ((myArray[i] < 50)) {
                fiftyLessCount++;
            }
        }
        console.log(fiftyLessCount);
    }

    if (event.key == "7") {
        for (i = myArray.length - 1; i >= 0; i--) {
            if ((myArray[i] < 50)) {
                (myArray[i] = 50);
            }
        }
    }

    if (event.key == "8") {
        for (i = myArray.length - 1; i >= 0; i--) {
            (myArray[i] *= 1.1);
        }
    }

    if (event.key == "9") {
        for (i = myArray.length - 1; i >= 0; i--) {
            (myArray[i] /= 1.1);
        }
    }
    if (event.key == "0") {
        for (i = myArray.length - 1; i >= 0; i--) {
            if ((myArray[i] < 50)) {
                myArray.splice(i, 1)
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
        // Calculate scaled bar height based on cnv.height and canvasMax
        let barHeight = myArray[i] * (cnv.height / max);

        ctx.fillRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);
        ctx.strokeRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);
    }


    // Request another Animation Frame
    requestAnimationFrame(draw);
}


// helper function
function randomInt(low, high) {
    return Math.round(Math.random() * (high - low) + low);

}

