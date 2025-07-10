document.addEventListener("DOMContentLoaded", () => {
    function createGrid() {
        const count = saveInput();
        let square = count * count;
        let squareWidth = 0;
        squareWidth = Math.floor(500/count);
        let runtime=0;
        if (runtime<1){
            for (grid = 0; grid < square; grid++) {
                const gridSquares = document.createElement("div");
                gridSquares.setAttribute("id", "gridSquares");
                containerGrid.append(gridSquares);

                gridSquares.style.width = squareWidth+"px";
                gridSquares.style.height = squareWidth+"px";
                gridSquares.addEventListener("mouseover",()=>gridSquares.style.backgroundColor = randomColor());
            }
            return runtime++;
        }
        else{
            return console.log("poopie");
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


    const containerGrid = document.createElement("div");
    container.append(containerGrid);
    containerGrid.setAttribute("class", "containerGrid");

    const inputBox = document.createElement("input");
    inputBox.type = "number";
    inputBox.min = 1;
    inputBox.max = 100;
    inputBox.id = "inputSave";
    inputBox.placeholder = "Enter a value between 1 to 100.....";
    inputNumber.append(inputBox);

    const generateButton = document.createElement("Button");
    generateButton.innerText = "Generate";
    inputNumber.append(generateButton);
    generateButton.addEventListener("click",createGrid);

    function saveInput(){
        const input = Number(document.getElementById("inputSave").value); 
       if (input < inputBox.min || input > inputBox.max){
        alert("Please enter a number between 1 and 100.");
       }
        else {
            return input;
        }

    }

    // createGrid(2);

   

})

