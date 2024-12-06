window.onload = function() {
  // Get the HTML Canvas
  const canvas = document.getElementById("image_canvas");
  // Get the canvas context
  const ctx = canvas.getContext('2d');
  
  const coordinates = document.getElementById('coordinates');
  const color = document.getElementById('color');
  
  // Set this variable to any image source
  const IMAGE_SRC = "https://thumbs.dreamstime.com/b/labyrinthe-difficile-de-cercle-labirinth-cycle-dur-vecteur-noir-sur-le-fond-blanc-puzzle-d-%C3%A9ducation-avec-la-recherche-l-solution-174800977.jpg";

  // Create a new image and add it to your canvas
  const img = new Image();
  img.addEventListener('load', function() {
    ctx.drawImage(img, 0, 10);
  }, false);
  img.src = IMAGE_SRC;
  img.setAttribute('crossOrigin', '');

  // Create a variable to store the state of whether the user is over a black line
  let overBlackLine = false;

  // Add a function to the mousemove event to get pixel data
  canvas.onmousemove = function(e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    let colorData = ctx.getImageData(mouseX, mouseY, 1, 1).data;

    // Add a tolerance level to check a range of pixels for black color
    const tolerance = 50; // Tolerance range for black color

    // Check if the color is close to black (e.g. within tolerance range)
    if (colorData[0] < tolerance && colorData[1] < tolerance && colorData[2] < tolerance) {
      // The mouse is over a black line
      overBlackLine = true;
    } else {
      // If not, reset the flag
      overBlackLine = false;
    }

    // If over a black line for long enough, redirect
    if (overBlackLine) {
      // You can introduce a delay before redirection, or perform other checks here
      // For now, let's redirect immediately
      window.location = 'perdu.html';
    }


    
  }
};
