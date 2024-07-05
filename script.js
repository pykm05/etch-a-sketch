const body = document.querySelector('body');
const container = document.querySelector('.container');

let count = 16;

for (let i = 0; i < count; i++) {
  for (let j = 0; j < count; j++) {
    let tile = document.createElement('div');
    tile.classList.add('tile');
    tile.style.width = 960 / count + "px";
    tile.style.height = 960 / count + "px";
    tile.addEventListener('mouseover', () => {
      tile.style.backgroundColor = "red";
    })
    container.appendChild(tile);
  }
}

body.appendChild(container);

