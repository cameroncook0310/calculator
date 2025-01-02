function main() {

    let displayContent = document.querySelector(".display-content");


    document.addEventListener("click", (e) => {
        target = e.target;

        if (target.classList.contains("number")) {
            displayContent.textContent += target.textContent;
        }
    });
}

main();