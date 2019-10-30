

document.getElementById("randomName").addEventListener("click", randName);
document.getElementById("allName").addEventListener("click", allName);

let nicknames;
fetch("names.txt").then(convertData).then(processData);
function convertData(rawData) {
  return rawData.text(); // convert file contents to string
}

function processData(data) {
  nicknames = data.split("\r\n"); // Split string by end of line
}


function randName() {
  let fstName = String(document.getElementById("firstName").value);
  let lstName = String(document.getElementById("lastName").value);
  randInteger = randomInteger(0, nicknames.length);
  document.getElementById("results").innerHTML = fstName + " " + (nicknames[randInteger]) + " " + lstName;
}

function allName() {
  document.getElementById("results").innerHTML = ""
  let fstName = String(document.getElementById("firstName").value);
  let lstName = String(document.getElementById("lastName").value);
  for (i = 0; i < nicknames.length; i++) {
    document.getElementById("results").innerHTML += fstName + " " + (nicknames[i]) + " " + lstName + "<br>";
  }
}



// Helper Functions
function randomInteger(low, high) {
  // Return a random decimal between low (inclusive) and high (exclusive)
  return Math.floor(Math.random() * (high - low) + low);
}