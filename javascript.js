document.addEventListener("DOMContentLoaded", () => {
     //saves the user input into a variable and limits the input between 1 to 100
    function saveInput() {
        const input = Number(document.getElementById("inputSave").value);
        if (input < inputBox.min || input > inputBox.max) {
            alert("Please enter a number between 1 and 100.");
        }
        else {
            return input;
        }

    }
    
    function createGrid() {
        const count = saveInput();
        let square = count * count;
        let squareWidth = 0;
        squareWidth = Math.floor(500 / count);
        containerGrid.innerHTML = "";
        for (grid = 0; grid < square; grid++) {
            const gridSquares = document.createElement("div");
            gridSquares.setAttribute("id", "gridSquares");
            containerGrid.append(gridSquares);

            gridSquares.style.width = squareWidth + "px";
            gridSquares.style.height = squareWidth + "px";
            gridSquares.addEventListener("mouseover", () => {

            gridSquares.style.backgroundColor = randomColor();
            
            gridSquares.style.opacity = opacityChange();
                
            });
        }
    }
    //increases opacity by 0.1 up to 1 then repeats
    let op = 0;
    function opacityChange() {
        
        if (op <= 1) {
            op += 0.1;
        }
        else {
            op = 0;
        }
        return op.toFixed(1);
    }
    // produces random color
    function randomColor() {
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        ;
        return `rgb(${red}, ${green}, ${blue})`;

        //for testing if opacity is working
        // return `rgb(0, 0, 0)`; 
    }
   
    const container = document.querySelector(".container");

    //creates titleEtch div
    const titleEtch = document.createElement("div");
    container.append(titleEtch);
    titleEtch.setAttribute("class", "titleEtch");
    titleEtch.innerText = "Etch-A-Sketch Kunohay";
    
    //creates inputNumber div under container div
    const inputNumber = document.createElement("div");
    container.append(inputNumber);
    inputNumber.setAttribute("class", "inputNumber");
  
    //creates borderGrid div under container div
    const borderGrid = document.createElement("div");
    container.append(borderGrid);
    borderGrid.setAttribute("class", "borderGrid");

    //creates containerGrid div under borderGrid div
    const containerGrid = document.createElement("div");
    borderGrid.append(containerGrid);
    containerGrid.setAttribute("class", "containerGrid");

    //creates inputBox input under inputNumber div
    const inputBox = document.createElement("input");
    inputBox.type = "number";
    inputBox.min = 1;
    inputBox.max = 100;
    inputBox.id = "inputSave";
    inputBox.placeholder = "Enter a value between 1 to 100.....";
    inputNumber.append(inputBox);

    //creates generateButton button
    const generateButton = document.createElement("Button");
    generateButton.innerText = "Generate";
    inputNumber.append(generateButton);
    generateButton.addEventListener("click", createGrid);

   

})

