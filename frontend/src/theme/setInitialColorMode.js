//frontend\src\theme\setInitialColorMode.js.
export function setInitialColorMode() {
    const storedPreference = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const theme = storedPreference || (prefersDark ? "dark" : "light");

    const html = document.documentElement;
    if (theme === "dark") {
        html.classList.add("dark");
    } else {
        html.classList.remove("dark");
    }
}
