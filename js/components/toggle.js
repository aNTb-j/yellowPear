export function initThemeToggle() {
    const toggleBtn = document.getElementById("toggle_button");
    const html = document.documentElement;

    toggleBtn.addEventListener("click", () => {
        const dark = html.getAttribute("data-theme") === "dark";

        toggleBtn.textContent = dark ? "L" : "D";

        html.setAttribute(
            "data-theme",
            dark ? "light" : "dark"
        );
    });
}
