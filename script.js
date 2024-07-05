const body = document.querySelector('body');
const container = document.querySelector('.container');

let count = 16;

let draw = (count) => {
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
      let tile = document.createElement('div');
      tile.classList.add('tile');
      tile.style.width = 960 / count + 'px';
      tile.style.height = 960 / count + 'px';
      tile.style.backgroundColor = 'white';
      tile.addEventListener('mouseover', () => {
        tile.style.backgroundColor = 'red';
      })
     container.appendChild(tile);
    }
  }
}

let redraw = (count) => {
  if (count >= 100) {
    count = 100;
  }
  else if (count <= 0) {
    count = 16;
  }
  while(container.firstChild) container.removeChild(container.firstChild);
  draw(count);
}

const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click', () => {
  count = input.value;
  redraw(count);
  console.log(count);
})

input.focus();
draw(count);
body.appendChild(container);

