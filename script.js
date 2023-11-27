function mode_ch() {
    const modeSelect = document.getElementById("mode");
    const body = document.body;

    if (modeSelect.value === "dark") {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
}