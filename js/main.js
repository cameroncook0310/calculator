
function operate(num1, operator, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    if (operator == "+") {
        return (num1 + num2).toString();
    }
    if (operator == "-") {
        return (num1 - num2).toString();       
    }
    if (operator == "x") {
        return (num1 * num2).toString();      
    }
    if (operator == "/") {
        return (num1 / num2).toString();
    }
}

function main() {

    let displayContent = document.querySelector(".display-content");

    let isNewOperation = true; // Tracks if current number should reset or be appended to upon new number being entered
    let currentOperator = "";
    let num1 = "";
    let num2 = "";

    document.addEventListener("click", (e) => {
        let target = e.target;

        // Stores number inputs as a variable and 
        if (target.classList.contains("number")) {
            if (currentOperator == "") {
                if (isNewOperation) {
                    num1 = "";
                    isNewOperation = false;
                }
                num1 += target.textContent;
                displayContent.textContent = num1;
            } else {
                num2 += target.textContent;
                displayContent.textContent = num2;
            }
        }

        // Handles a new operator being pressed, triggers the operate function if an operator and num2 are already present
        if (target.classList.contains("operator") && target.id != "=") {
            if (currentOperator == "" || num2 == "") {
                currentOperator = target.textContent;
            } else {
                num1 = operate(num1, currentOperator, num2);
                displayContent.textContent = num1;
                currentOperator = target.textContent;
                num2 = "";
            }
        }

        // Triggers the operate function with the current input operation if an operator and num2 is present
        if (target.id == "=") {
            if (currentOperator && num2){
                num1 = operate(num1, currentOperator, num2);
                displayContent.textContent = num1;
                currentOperator = "";
                num2 = "";
                isNewOperation = true;
            }
        }

        //  Clears the calculator display and variables
        if (target.id == "AC") {
            num1 = "";
            num2 = "";
            currentOperator = "";
            displayContent.textContent = "";
        }

        // Clears the last number entered
        if (target.id == "C") {
            if (currentOperator == "") {
                num1 = num1.slice(0, -1);
                displayContent.textContent = num1;
            } else {
                num2 = num2.slice(0, -1);
                displayContent.textContent = num2;
            }
        }

        // Converts the current number into the decimal equavilant to its percentage
        if (target.id == "%") {
            if (currentOperator == "") {
                num1 = (Number(num1) / 100).toString();
                displayContent.textContent = num1;
            } else {
                num2 = (Number(num2) / 100).toString();
                displayContent.textContent = num2;
            }
        }


        //if (displayContent.textContent.length > 12) {
        //    displayContent.textContent = "Overflow";
        //}
    });

    document.addEventListener("mousedown", (e) => {
        let target = e.target;

        if (target.classList.contains("number") || target.classList.contains("function") || target.id == "=") {
            target.style.filter = "brightness(1.2)";
        }
    });
}

main();