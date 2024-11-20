// Triangle Area

function calculateTriangleArea(){
  const base = getInputById('triangle-base');
  const height = getInputById('triangle-height');
  const area = `Area of Triangle is: ${0.5 * base * height}`;
  setResultById('calculate-result', area)
}

// Rectangle Area

function calculateRectangleArea(){
  const length = getInputById('rectangle-length');
  const width = getInputById('rectangle-width');
  const area = `Area of Rectangle is: ${length * width}`;
  setResultById('calculate-result', area)
}

// Parallelogram Area

function calculateParallelogramArea(){
  const base = getInputById('parallelogram-base')
  const height = getInputById('parallelogram-height')
  const area = `Area of Parallelogram is: ${base * height}`;
  setResultById('calculate-result', area)
}

// Rhombus Area

function calculateRhombusArea(){
  const diagonal1 = getInputById('rhombus-diagonals-1')
  const diagonal2 = getInputById('rhombus-diagonals-2')
  const area = `Area of Rhombus is: ${0.5 * diagonal1 * diagonal2}`
  setResultById('calculate-result', area)
}

// Pentagon Area

function calculatePentagonArea(){
  const perimeter = getInputById('pentagon-perimeter')
  const apothem = getInputById('pentagon-apothem')
  const area = `Area of Pentagon is: ${0.5 * perimeter * apothem}`
  setResultById('calculate-result', area)
}

// Ellipse Area

function calculateEllipseArea(){
  const major = getInputById('ellipse-major-axis')
  const minor = getInputById('ellipse-minor-axis')
  const area = `Area of Ellipse is: ${3.14 * major * minor}`
  setResultById('calculate-result', area)
}