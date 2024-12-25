document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement; // <html>
    const toggleButton = document.querySelector("header button"); // Botão no cabeçalho

    // Verificar o tema salvo no localStorage
    const isDarkMode = localStorage.getItem("theme") === "dark";
    if (isDarkMode) {
        html.classList.add("dark");
    } else {
        html.classList.remove("dark");
    }

    // Alternar tema ao clicar no botão
    toggleButton.addEventListener("click", () => {
        html.classList.toggle("dark");
        const isDark = html.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
});
