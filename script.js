console.log("JS is connected 💖");

const yesButton = document.getElementById("yes");

yesButton.addEventListener("click", createHeart); 

function createHeart() {

    const emojis = ["💖", "💕", "💗", "💘", "💞"];

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        const randomIndex = Math.floor(Math.random() * emojis.length);
        heart.textContent = emojis[randomIndex];
        heart.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(heart); //apending to div to page.
    }

}

const noButton = document.getElementById("no");

noButton.addEventListener("click", moveButton);
noButton.addEventListener("mouseenter", moveButton);
 function moveButton () {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * 80 + "%";
    noButton.style.top = Math.random() * 80 + "%";
    console.log("Moving");
 }
 
