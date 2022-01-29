const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setCurrentMode(newMode) {
    activateButton(newMode)
    currentMode = newMode;
}

const colorPicker = document.getElementById('colorPicker');
const grid = document.getElementById('grid');
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn')
const eraserBtn = document.getElementById('eraserBtn')
const clearBtn = document.getElementById('clearBtn')


colorPicker.onchange = (e) => setCurrentColor(etarget.value);
colorBtn.onclick = () => setCurrentColor('color');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
eraserBtn.onclick = () => setCurrentMode('eraser');
clearBtn.onclick = () => reloadGrid();

function reloadGrid() {
    clearGrid()
    setUpGrid(currentSize);
}

function clearGrid() {
    grid.innerHTML = '';
}

function setUpGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRow = `repeat(${size}, 1fr)`

    for (let i =0; i < size * size; i++){
        const gridElement = document.createElement('div')
        gridElement.addEventListener('mouseover',changeColor)
        grid.appendChild(gridElement);
    }
};

function changeColor(e) {
    if (currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#fefefe'
    }
}

function activateButton(newMode){    
    if (currentMode === 'rainbow') {
    rainbowBtn.classList.remove('active')
    } else if (currentMode === 'color') {
    colorBtn.classList.remove('active')
    } else if (currentMode === 'eraser') {
    eraserBtn.classList.remove('active')
    }

    if (newMode === 'rainbow') {
    rainbowBtn.classList.add('active')
    } else if (newMode === 'color') {
    colorBtn.classList.add('active')
    } else if (newMode === 'eraser') {
    eraserBtn.classList.add('active')
    }
}

window.onload = () => {
    setUpGrid(DEFAULT_SIZE)
}