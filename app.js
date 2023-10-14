function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function drawGrids(gridSize) {
  const gridContainer = document.querySelector("#grid-container");
  if (gridContainer.firstChild)
    gridContainer.removeChild(gridContainer.firstChild);

  const container = document.createElement("div");
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    gridCell.addEventListener("mouseenter", () => {
      gridCell.style.backgroundColor = getRandomColor();
    });
    gridCell.addEventListener("mouseleave", () => {
      gridCell.style.backgroundColor = "lightgray";
    });
    container.appendChild(gridCell);
  }
  container.classList.add("container");
  container.style.gridTemplateColumns = `repeat(${gridSize} , 1fr)`;
  gridContainer.appendChild(container);
}

btn = document.createElement("button");
btn.classList.add("btn1");
btn.textContent = "Generate";
btn.addEventListener("click", function () {
  const gridSize = window.prompt("enter the size for one side");
  drawGrids(gridSize);
});
btn.style.cssText = "width: 150px; height: 60px; font-size: 16px; margin:20px";
topDiv = document.querySelector("#top-div");
topDiv.appendChild(btn);
