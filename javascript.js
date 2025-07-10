document.addEventListener("DOMContentLoaded", () => {
    function createGrid(count) {
        let square = count * count;
        let squareWidth = 0;
        squareWidth = Math.floor(500/count);
        for (grid = 0; grid < square; grid++) {
            const gridSquares = document.createElement("div");
            gridSquares.setAttribute("id", "gridSquares");
            containerGrid.append(gridSquares);

            gridSquares.style.width = squareWidth+"px";
            gridSquares.style.height = squareWidth+"px";
            gridSquares.style.backgroundColor = randomColor();
            
        }
    }

    function randomColor(){
        let red = Math.floor(Math.random()*255);
        let green = Math.floor(Math.random()*255);
        let blue = Math.floor(Math.random()*255);
        ;
        return `rgb(${red}, ${green}, ${blue})`;
    }
    const container = document.querySelector(".container");

    const inputNumber = document.createElement("div");
    container.append(inputNumber);
    inputNumber.setAttribute("class", "inputNumber");

    const inputBox = document.createElement("input");
    inputBox.type = Text;
    inputBox.placeholder = "Enter a value between 1 to 100.....";
    inputNumber.append(inputBox);

    const containerGrid = document.createElement("div");
    container.append(containerGrid);
    containerGrid.setAttribute("class", "containerGrid");





    createGrid(10);





})

