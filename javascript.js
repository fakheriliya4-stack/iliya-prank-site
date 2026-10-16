const button = document.getElementById("darkBtn");
const title = document.getElementById("title");
const message = document.getElementById("message");
const eyebrow = document.querySelector(".eyebrow");
const note = document.querySelector(".tiny-note");
const stickers = document.querySelector(".stickers");

button.addEventListener("click", function () {
    document.body.classList.add("pranked");

    eyebrow.textContent = "😂 گیر افتادی!";
    title.textContent = "بعید بود گول بخوری...";
    message.textContent = "مارمولک کجا بود آخه؟ 🦎💨";
    stickers.textContent = "🦎 🤡 ✨";

    button.remove();
    note.remove();
});
