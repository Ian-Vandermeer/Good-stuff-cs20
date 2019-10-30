
document.getElementById("genName").addEventListener("click", nametime);


function randomDec(low, high) {
    // Return a random decimal between low (inclusive) and high (exclusive)
    return Math.random() * (high - low) + low;
  }

  let xVal = randomDec(0, 300); // Store returned value in a variable
      console.log(randomDec(1, 10)); // Pass returned value into console.log
      let circleArea = Math.PI * randomDec(1, 50) ** 2; // Use returned value in an expression
    



function nametime() {

    randlen = Math.random(3,8)
    randvow = Math.random();
    randcons = Math.random();

    //randlen = Math.floor(randlen)
    console.log(randlen)

    if (randvow <= 0.20) {
        randvow = "A"
    } else if (randvow <= 0.50) {
        randvow = "E"
    } else if (randvow <= 0.68) {
        randvow = "I"
    } else if (randvow <= 0.85) {
        randvow = "O"
    } else if (randvow <= 0.95) {
        randvow = "U"
    } else {
        randvow = "Y"
    }

    document.getElementById("name").innerHTML = randvow;

}
