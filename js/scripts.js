const buttons = document.querySelector("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("a");
    });
});