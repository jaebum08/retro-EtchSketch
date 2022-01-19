const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

const grid = document.getElementById('grid');

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
    if (currentMode === 'raindbow') {
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

window.onload = () => {
    setUpGrid(DEFAULT_SIZE)
}