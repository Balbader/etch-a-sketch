const grid = document.querySelector(".grid");

const createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "black";
    });
    grid.appendChild(div);
  }
};

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

const slider = document.querySelector("#slider");
const screenValue = document.querySelector(".value");
slider.addEventListener("input", () => {
  let value = document.getElementById("slider").value;
  screenValue.textContent = value;
  removeAllChildNodes(grid);
  grid.setAttribute(
    "style",
    `grid-template-columns: repeat(${value}, 2fr); grid-template-rows: repeat(${value}, 2fr);`
  );
  for (let i = 0; i < value * value; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "black";
    });
    grid.appendChild(div);
  }
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  const value = document.querySelector("#slider").value;
  const cell = grid.children;
  for (let i = 0; i < value * value; i++) {
    cell[i].style.backgroundColor = "white";
  }
});

const rgb = document.querySelector("#RGB");
rgb.addEventListener("click", () => {
  const value = document.querySelector("#slider").value;
  const cell = grid.children;
  for (let i = 0; i < value * value; i++) {
    cell[i].addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = getRandomColor();
    });
  }
});

const black = document.querySelector("#black");
black.addEventListener("click", () => {
  const value = document.querySelector("#slider").value;
  const cell = grid.children;
  for (let i = 0; i < value * value; i++) {
    cell[i].addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "black";
    });
  }
});

const chooseColor = document.querySelector("#color");
chooseColor.addEventListener("input", () => {
  const value = document.querySelector("#slider").value;
  const newColor = document.querySelector("#color").value;
  const cell = grid.children;
  for (let i = 0; i < value * value; i++) {
    cell[i].addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = newColor;
    });
  }
});

createGrid();
