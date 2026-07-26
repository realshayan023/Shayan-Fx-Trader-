document.addEventListener("DOMContentLoaded", function () {
    console.log("Shayan FX Trader Loaded");

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {
        btn.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
        });

        btn.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
