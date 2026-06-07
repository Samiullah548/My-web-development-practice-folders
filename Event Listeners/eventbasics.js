const button = document.getElementById('myButton');
const message = document.getElementById('message');

function showEventInfo(event) {
  event.preventDefault();

  const type = event.type;
  const target = event.target;
  const currentTarget = event.currentTarget;
  const timeStamp = event.timeStamp;
  const clientX = event.clientX;
  const clientY = event.clientY;
  const screenX = event.screenX;
  const screenY = event.screenY;
  const altKey = event.altKey;
  const ctrlKey = event.ctrlKey;
  const shiftKey = event.shiftKey;
  const keyCode = event.keyCode;

  message.textContent = `Event: ${type}. ` +
    `target=${target.tagName}, currentTarget=${currentTarget.tagName}, ` +
    `time=${Math.round(timeStamp)}ms, ` +
    `client=(${clientX},${clientY}), screen=(${screenX},${screenY}), ` +
    `alt=${altKey}, ctrl=${ctrlKey}, shift=${shiftKey}, keyCode=${keyCode}`;
}

button.addEventListener('click', showEventInfo);

button.addEventListener('mouseover', event => {
  event.preventDefault();
  button.style.backgroundColor = '#e0f0ff';
});

button.addEventListener('mouseout', event => {
  event.preventDefault();
  button.style.backgroundColor = '';
});

window.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    message.textContent = 'You pressed Enter!';
  }
});
