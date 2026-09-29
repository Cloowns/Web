const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");


// =====================================================
// LOAD DATA MUSIK TERAKHIR
// =====================================================

const savedTime = localStorage.getItem("musicTime");
const musicPlaying = localStorage.getItem("musicPlaying");


// Kembalikan posisi lagu
if (savedTime) {
    music.currentTime = parseFloat(savedTime);
}


// =====================================================
// MUSIC BUTTON
// =====================================================

function updateMusicButton() {
    if (musicPlaying === "true") {
        musicButton.textContent = "♫ Music ON";
        musicButton.classList.add("playing");
    } else {
        musicButton.textContent = "♫ Music OFF";
        musicButton.classList.remove("playing");
    }
}

updateMusicButton();


// =====================================================
// PLAY / PAUSE
// =====================================================

musicButton.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        localStorage.setItem("musicPlaying", "true");

        musicButton.textContent = "♫ Music ON";
        musicButton.classList.add("playing");

    } else {

        music.pause();

        localStorage.setItem("musicPlaying", "false");

        musicButton.textContent = "♫ Music OFF";
        musicButton.classList.remove("playing");
    }

});


// =====================================================
// SIMPAN POSISI LAGU
// =====================================================

setInterval(() => {

    if (!music.paused) {

        localStorage.setItem(
            "musicTime",
            music.currentTime
        );

    }

}, 1000);


// =====================================================
// SIMPAN SEBELUM PINDAH PAGE
// =====================================================

window.addEventListener("beforeunload", () => {

    localStorage.setItem(
        "musicTime",
        music.currentTime
    );

    localStorage.setItem(
        "musicPlaying",
        !music.paused
    );

});