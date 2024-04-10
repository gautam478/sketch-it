const grid = document.getElementById('grid')
const button = document.getElementById('button')
const input = document.getElementById('input')
const box = document.getElementById('box')
const pick = document.getElementById('pick')

let count = 10;
let color = "aqua";

function change() {
  grid.innerHTML = ``;

  if (input.value != "") {
    count = input.value;
  }
  var root = document.documentElement;
  root.style.setProperty('--size', `${800 / count}px`);

  for (let i = 1; i <= count; i++) {
    let string = ``;
    for (let j = 1; j <= count; j++) {
      string += `<div id="box" onclick="colorClick(this)" onmousedown="checkDown()" onmouseup="checkUp()" onmousemove="colorMove(this)"></div>`;
    }
    grid.innerHTML += `<div>${string}</div>`;
    string = ``;
  }
}

pick.addEventListener('change', function () {
  color = pick.value;
})

function colorClick(element) {
  element.style.backgroundColor = color;
}

let isMouseDown = false;

function colorMove(element) {
  if (isMouseDown) {
    element.style.backgroundColor = color;
  }
}

function checkDown() {
  isMouseDown = true;
}

function checkUp() {
  isMouseDown = false;
}

window.onload = change;
button.addEventListener('click', change)