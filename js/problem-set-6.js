/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {

  let helloDrawing = document.getElementById('canvas1').getContext('2d');
  helloDrawing.font = '48px sans-serif';
  helloDrawing.strokeText('Hello, World!', 10, 50);

}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {

  let rectangle = document.getElementById('canvas2');
  let context = rectangle.getContext('2d');
  context.clearRect(0, 0, rectangle.width, rectangle.height);

  let userInputHeight;
  do {
    userInputHeight = Number(prompt('Please enter a reasonable height.'));
  } while (userInputHeight < 1 || !Number.isInteger(userInputHeight));

  let userInputWidth;
  do {
    userInputWidth = Number(prompt('Please enter a reasonable width.'));
  } while (userInputWidth < 1 || !Number.isInteger(userInputWidth));

  let userInputX;
  do {
    userInputX = Number(prompt('Please enter an X-Coordinate'));
  } while (userInputX < 5 || !Number.isInteger(userInputX));

  let userInputY;
  do {
    userInputY = Number(prompt('Please enter a Y-Coordinate'));
  } while (userInputY < 5 || !Number.isInteger(userInputY));

  if (userInputHeight > canvas2.height || userInputWidth > canvas2.width) {
    alert('Sorry! The height and/or width you inputted is/are too large to fit into the canvas.');
    context.clearRect(0, 0, rectangle.width, rectangle.height);
  }

  if (userInputX > canvas2.width || userInputY > canvas2.height) {
    alert('Sorry! The x- and/or y-coordinates you inputted is/are too large to fit into the canvas.');
    context.clearRect(0, 0, rectangle.width, rectangle.height);
  }

  context.strokeRect(userInputX, userInputY, userInputWidth, userInputY);

}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {

  let rectangleDrawing = document.getElementById('canvas3');
  let context = rectangleDrawing.getContext('2d');
  context.clearRect(0, 0, rectangleDrawing.width, rectangleDrawing.height);

  let color;
  while(true) {
    color = prompt("Please type a color; black, blue, green, orange, purple, red, and yellow are the only accepted fill values.");
    if(color=="black" || color=="blue" || color=="green" || color=="orange" || color=="purple" || color=="red" || color=="yellow") {
      context.fillStyle = color;
      context.fillRect(10, 10, 100, 50);

      break;
    } else {
      window.alert(`${color} is not a supported color.`);
      context.clearRect(0, 0, rectangleDrawing.width, rectangleDrawing.height);

      break;
    }
  }
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {

  let triangleDrawing = document.getElementById('canvas4');
  let context = triangleDrawing.getContext('2d');
  context.clearRect(0, 0, triangleDrawing.width, triangleDrawing.height);

  let side1 = Number(prompt('Please enter a value for side 1.'));
  let side2 = Number(prompt('Please enter a value for side 2.'));
  let side3 = Number(prompt('Please enter a value for side 3.'));

  if (isNaN(side1) || isNaN(side2) || isNaN(side3) == true) {
    alert('One or more of your values is not a valid integer.');
  } else if ((side1 * side1) + (side2 * side2) != (side3 * side3)) {
    alert('The values you have inputted do not make a valid right triangle!');
  } else if (side1 > canvas4.height || side2 > canvas4.width) {
    alert('The triangle is too big to fit on the canvas.');
  } else {
    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(10, 10 + side1);
    context.lineTo(10 + side2, 10 + side1);
    context.closePath();
    context.stroke();
  }

}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {

  let smileyFace = document.getElementById('canvas5');
  let context = smileyFace.getContext('2d');
  context.clearRect (0, 0, smileyFace.width, smileyFace.height);

  let radius = Number(prompt('Please enter a valid radius.'));
  if ((radius * 2) + 10 > canvas5.width || (radius * 2) + 10 > canvas5.height) {
    alert('Sorry! The width and/or height does not fit on the canvas!');
  } else {
    //draw
    context.beginPath();
    //circle
    context.arc(radius + 10, radius + 10, radius, 0, 2 * Math.PI);
    //left eye
    context.moveTo((radius * 0.7) + 10 + (radius * 0.1), (radius * 0.6) + 30);
    context.arc((radius * 0.7) + 10, (radius * 0.6) + 30, radius * 0.1, 0, 2 * Math.PI);
    //right eye
    context.moveTo((radius * 1.3) + 10 + (radius * 0.1), (radius * 0.6) + 30);
    context.arc((radius * 1.3) + 10, (radius * 0.6) + 30, (radius * 0.1), 0, 2 * Math.PI);
    //mouth
    context.moveTo((radius + 10) + (radius * 0.7), radius + 20);
    context.arc(radius + 10, radius + 20, radius * 0.7, 0, 1 * Math.PI);
    //draw
    context.stroke();
  }

}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {

  let drawStar = document.getElementById('canvas6');
  let context = drawStar.getContext('2d');
  context.clearRect (0, 0, drawStar.width, drawStar.height);

  let outerRadius = Number(prompt('Please enter a value for the outer radius. (Must be greater than inner radius)'));
  let innerRadius = Number(prompt('Please enter a value for the inner radius. (Must be greater than outer radius)'));
  if (isNaN(outerRadius) == true || isNaN(innerRadius) == true) {
    alert('Sorry! One or both of your values are not valid integers.');
  } else if (innerRadius > outerRadius) {
    alert('The outer radius must be greater than the inner radius.');
  } else if (outerRadius < 2) {
    alert('The ouer radius is too small!');
  } else if (innerRadius < 1) {
    alert('The inner radius is too small!');
  } else {
    context.beginPath();
    context.moveTo(125, 125 - outerRadius);

    let deg = 0;
    for (let i=0; i<=5; i++) {
        context.lineTo(125 + Math.round((Math.cos(Math.PI * (deg - 90) / 180) * outerRadius)), 125 + Math.round((Math.sin(Math.PI * (deg - 90) / 180) * outerRadius)));
        deg += 36;
        context.lineTo(125 + Math.round((Math.cos(Math.PI * (deg - 90) / 180) * innerRadius)), 125 + Math.round((Math.sin(Math.PI * (deg - 90) / 180) * innerRadius)));
        deg += 36;
      }
      context.stroke();
      context.closePath();
    }

  }

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {

  let drawStopSign = document.getElementById('canvas7');
  let context = drawStopSign.getContext('2d');
  context.clearRect (0, 0, drawStopSign.width, drawStopSign.height);

  //defining variables
  let sideLength = 80;
  let stopLocation = Number((80/Math.sqrt(2)).toFixed(0));
  let a = 70;
  let b = 10;

  //drawing Sign
  context.beginPath();
  context.moveTo(a, b);
  context.lineTo(a + sideLength, b);
  context.lineTo(a + sideLength + stopLocation, b + stopLocation);
  context.lineTo(a + sideLength + stopLocation, b + sideLength + stopLocation);
  context.lineTo(a + sideLength, b + sideLength + stopLocation + stopLocation);
  context.lineTo(a, b + sideLength + stopLocation + stopLocation);
  context.lineTo(a - stopLocation, b + sideLength + stopLocation);
  context.lineTo(a - stopLocation, b + stopLocation);
  context.lineTo(a, b);
  context.fillStyle = "red";
  context.fill();
  context.closePath();

  //creating STOP
  context.fillStyle = "white";
  context.font = "65px sans-serif";
  context.fillText("STOP", 22, 133);

}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {

  let drawPyramid = document.getElementById('canvas8');
  let context = drawPyramid.getContext('2d');
  context.clearRect (0, 0, drawPyramid.width, drawPyramid.height);

  let length = Number(prompt('Please enter a length for each side of the blocks.'));
  if (isNaN(length) == true) {
    alert('Sorry, that value is not a number!');
  } else if (length > 100) {
    alert('Sorry, that value is too large to fit on to the canvas!');
  } else {
    //drawing the pyramid
    context.beginPath();
    let xCoord = 10;
    let xCoordPrev = 10;
    let yCoord = canvas8.height - 10 - length;
    let b;
    let a;
    for (b = 0; b < 5; b++) {
    for (a = 0; a < 5 - b; a++) {
      context.moveTo(xCoord, yCoord);
      context.rect(xCoord, yCoord, length, length);
      xCoord += length;
      }
      yCoord -= length;
      xCoordPrev += length / 2;
      xCoord = xCoordPrev;
    }
      context.lineWidth = 1;
      context.stroke()
  }
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {

  let drawHouse = document.getElementById('canvas9');
  let context = drawHouse.getContext('2d');
  context.clearRect(0, 0, drawHouse.width, drawHouse.height);

  //user input
  let houseColor = prompt('Enter a valid color for the house.');
  let doorColor = prompt('Enter a valid color for the door.');
  if ((houseColor == "blue" || houseColor == "brown" || houseColor == "green" || houseColor == "orange" || houseColor == "red" || houseColor == "yellow" || doorColor == "blue" || doorColor == "brown" || doorColor == "green" || doorColor == "orange" || doorColor == "red" || doorColor == "yellow")) {

    let houseHeight = (canvas9.height / 5) * 3;
    let houseWidth = canvas9.width - 300;
    context.rect(150, canvas9.height - 10 - houseHeight, houseWidth, houseHeight)

    //drawing house
    context.fillStyle = houseColor;
    context.fill();
    context.strokeStyle = 'black';
    context.stroke();
    context.beginPath();
    context.moveTo(512, 10);
    context.lineTo(151, 294);
    context.lineTo(873, 294);
    context.closePath();

    //roof
    context.fillStyle = 'gray';
    context.fill();

    //drawing door
    context.fillStyle = doorColor;
    context.fillRect(450, 540, 124, 210);
    context.strokeRect(450, 540, 124, 210);
    context.beginPath();
    context.moveTo(568, 645);
    context.arc(560, 645, 8, 0, Math.PI * 2);
    context.stroke();

    //door knob
    context.fillStyle = 'gold';
    context.fill();

    //drawing windows
    context.fillStyle = 'lightBlue';
    context.fillRect(250, 367, 100, 100);
    context.strokeRect(250, 367, 100, 100);
    context.fillRect(250, canvas9.height - 185, 100, 100);
    context.strokeRect(250, canvas9.height - 185, 100, 100);
    context.fillRect(674, 367, 100, 100);
    context.strokeRect(674, 367, 100, 100);
    context.fillRect(674, canvas9.height - 185, 100, 100);
    context.strokeRect(674, canvas9.height - 185, 100, 100);
  } else {
    alert('Sorry, one of your colors is invalid.');
  }

}
