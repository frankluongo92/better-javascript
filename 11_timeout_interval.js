// Generate random color
// // RGB 0-255
// Apply to dom
// update color on event

const generateColorValue = () => Math.floor(Math.random() * 256);

const createColor = () => {
  const red = generateColorValue();
  const green = generateColorValue();
  const blue = generateColorValue();
  return `rgb(${red}, ${green}, ${blue})`;
};

const applyColorToBody = color => {
  return (document.body.style.backgroundColor = color);
};

const addRandomColorToBg = () => {
  const color = createColor();
  return applyColorToBody(color);
};

addRandomColorToBg();

const newColors = document.getElementById("new-colors");
newColors.addEventListener("click", addRandomColorToBg);

// Set Interval VS Set Timeout

const log = () => console.log("time!!");

// Must be wrapped in a function expression
// This executes once
// Set Timeout runs bu the app doesn't wait for it
//setTimeout(log, 3000);

const interval = setInterval(addRandomColorToBg, 2000);

newColors.addEventListener("click", () => clearInterval(interval));
