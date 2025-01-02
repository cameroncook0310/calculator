
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

    let currentOperator = ""
    let num1 = ""
    let num2 = ""

    document.addEventListener("click", (e) => {
        target = e.target;

        // Populates the display with the number pressed and stores number in variable
        if (target.classList.contains("number")) {
            if (currentOperator == "") {
                num1 += target.textContent
                displayContent.textContent = num1
            } else {
                num2 += target.textContent
                displayContent.textContent = num2
            }
        }

        if (target.classList.contains("operator") && target.id != "=") {
            if (currentOperator == "" || num2 == "") {
                currentOperator = target.textContent
            } else {
                num1 = operate(num1, currentOperator, num2)
                displayContent = num1
                currentOperator = target.textContent
                num2 = ""
            }
        }

        // Triggers the operate function with the current input operation if an operator is present
        if (target.id == "=") {
            if (currentOperator && num2){
                num1 = operate(num1, currentOperator, num2)
                displayContent.textContent = num1
                currentOperator = ""
                num2 = ""
            }
        }
    });
}

main();