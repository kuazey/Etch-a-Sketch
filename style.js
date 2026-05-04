 function randomRgb (){
            Math.floor(Math.random()*256)
        }
        function gridCreate(x) {
            const container = document.querySelector(".frame");
            container.innerHTML = "";
            for (let i = 0; i < x*x; i++){
                const grid = document.createElement("div");
                grid.classList.add("cell");
                container.appendChild(grid);
                grid.addEventListener("mouseover", () => {
                    r = Math.floor(Math.random()*256);
                    g = Math.floor(Math.random()*256);
                    b = Math.floor(Math.random()*256);
                    grid.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                    
                })
                grid.style.width = "calc(100% / " + x + ")";
                
        }
        }
        gridCreate(16);
        
        document.querySelector(".amountSquares").addEventListener("click", () => {
        let userInput = prompt("Choose number of squares per side");
        if (userInput === null) {
            return;
        }
        if (userInput.trim() === "") {
            return;
        }

        userInput = Number(userInput);
        while (userInput > 100 || userInput <= 0 || Number.isNaN(userInput)) {
            alert("Input atleast 1 and max 100!");

            userInput = prompt("Choose number of squares per side");
            if (userInput === null) {
                return;
            }

            if (userInput.trim() === "") {
                return;
            }

            userInput = Number(userInput);
        }

        gridCreate(userInput);
    });
    