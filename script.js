function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

window.onload = () => {
    if(localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};

const darkBtn = document.querySelector(".dark-btn");

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) {
        darkBtn.innerHTML = "☀️";
    } else {
        darkBtn.innerHTML = "🌙";
    }
}