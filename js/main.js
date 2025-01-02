
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

    let currentOperator = "";
    let num1 = "";
    let num2 = "";

    document.addEventListener("click", (e) => {
        target = e.target;

        // Stores number inputs as a variable and 
        if (target.classList.contains("number")) {
            if (currentOperator == "") {
                num1 += target.textContent;
                displayContent.textContent = num1;
            } else {
                num2 += target.textContent;
                displayContent.textContent = num2
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
    });
}

main();