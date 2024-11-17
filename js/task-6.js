function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let size = 30;
const boxes = document.querySelector('div#boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input[type="number"]');

function createBoxes(amount) {
  let markup = '';

  for (let i = 0; i < amount; i++) {
    markup += `<div style="width: ${size}px; height: ${size}px; background-color:${getRandomHexColor()}"></div>`;
    size += 10;
  }

  boxes.insertAdjacentHTML('beforeend', markup);
}

createBtn.addEventListener('click', () => {
  const count = Number(inputEl.value);
  if (count >= 1 && count <= 100) {
    createBoxes(count);
  }
  inputEl.value = null;
});

destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
  size = 30;
});
