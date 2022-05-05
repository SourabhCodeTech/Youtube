let htmlCode = document.getElementById('htmlCode');
let cssCode = document.getElementById('cssCode');
let button = document.getElementById('run');
let output = document.getElementById('output');

button.addEventListener('click', () => {
  let editor = `<style>${cssCode.value}</style><div class="html-code">${htmlCode.value}</div>`;
  output.innerHTML = editor;
});
