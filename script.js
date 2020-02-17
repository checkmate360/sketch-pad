const gridButton = document.querySelector('.gridButton');
const container = document.querySelector('.container');
gridButton.addEventListener('click', (e) => {
  resetGrid(e,container);
});
var initgridSize = prompt('What grid size?');
drawGrid(initgridSize, container);

function resetGrid(e,container) {
  var gridSize = prompt('What grid size?');
  //resetGrid
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
  drawGrid(gridSize, container);

}
function drawGrid(gridSize, container) {
  const containerSize = container.offsetWidth;
  var gs = parseInt(gridSize);
  const totalSize = gs * gs;
  for(let i=0; i<totalSize; i++) {
    var gridDiv = document.createElement('div');
    gridDiv.classList.add('box');
    gridDiv.style.width = Math.floor(containerSize / gs) + 'px';
    gridDiv.style.height = gridDiv.style.width;
    gridDiv.style.backgroundColor = 'white';
    container.appendChild(gridDiv);
    gridDiv.addEventListener('mouseover', changeColor);
  }
}
function changeColor(e) {
    e.target.style.backgroundColor = random_rgba();
    //Darken Color if the color is NOT white
}
function random_rgba() {
    var o = Math.round;
    var r = Math.random;
    var s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 1 + ')';
  }
