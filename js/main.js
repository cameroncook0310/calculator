function main() {

    let display = document.querySelector(".calc-display");


    document.addEventListener("click", (e) => {
        target = e.target;

        if (target.classList.contains("number")) {
            display.textContent += target.textContent;
        }
    });
}

main();