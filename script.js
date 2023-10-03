// script.js
const colors = ["red", "gold", "green","black"];
let currentIndex = 0;

function changeColor() {
    const changingColorText = document.querySelector(".content h1"); // Menggunakan querySelector untuk memilih elemen h1
    changingColorText.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeColor, 1000);

