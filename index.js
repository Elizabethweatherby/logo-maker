const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');

class Svg {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }
  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }
  setTextElement(text, color) {
    this.textElement = `<text x="150" y="137" font-size="40" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

const generateSVG = (letters, shapeType, textColor, bgColor) => {
  const svg = new Svg();

  svg.setTextElement(letters, textColor);

  let shape;
  if (shapeType === 'circle') {
    shape = new Circle();
  } else if (shapeType === 'square') {
    shape = new Square();
  } else if (shapeType === 'triangle') {
    shape = new Triangle();
  }

  shape.setColor(bgColor); // Set the background color for the shape
  svg.setShapeElement(shape);

  return svg.render();
};

const saveSVGToFile = (svgContent, fileName) => {
  fs.writeFileSync(fileName, svgContent, 'utf-8');
};

const main = async () => {
  const answers = await inquirer.prompt([
    { type: 'input', name: 'letters', message: 'Enter three letters:' },
    { type: 'list', name: 'shape', message: 'Select a shape:', choices: ['circle', 'square', 'triangle'] },
    { type: 'input', name: 'textColor', message: 'Enter text color:' },
    { type: 'input', name: 'bgColor', message: 'Enter background color:' },
  ]);

  const { letters, shape, textColor, bgColor } = answers;

  const svgContent = generateSVG(letters, shape, textColor, bgColor);
  saveSVGToFile(svgContent, 'logo.svg');

  console.log('Generated logo.svg');
};

main();