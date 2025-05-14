const songs = [
  "musica/whirr/01Mellow.mp3",
  "musica/whirr/02Wavelength.mp3",
  "musica/whirr/03YoungerThanYou.mp3",
  "musica/whirr/04RoseCold.mp3",
  "musica/whirr/05BeforeYouHeadOff.mp3",
  "musica/whirr/06HowTimeStretches.mp3",
  "musica/whirr/07Rental.mp3",
  "musica/whirr/08Vividly.mp3",
  "musica/whirr/09PlayTheSlowOnes.mp3",
  "musica/whirr/10UnderTheSameName.mp3",
];

const songTitles = [
  "Mellow",
  "Wavelength",
  "Younger Than You",
  "Rose Cold",
  "Before You Head Off",
  "How Time Stretches",
  "Rental",
  "Vividly",
  "Play The Slow Ones",
  "Under The Same Name"
];

let audio = document.getElementById("audio");
let sliderDeRango = document.getElementById("sliderDeRango");
let progressBarContainer = document.getElementById("progressBarContainer");
let progressBar = document.getElementById("progressBar");

let currentIndex = 0;

function Cargar() {
  audio.src = songs[currentIndex];
  audio.load();
}

function Play() {
  audio.play();
}

function Pause() {
  audio.pause();
}

function PlayPause() {
  audio.paused ? Play() : Pause();
}

function Anterior() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  Cargar();
  Play();
  updateNowPlaying();
}

function Posterior() {
  currentIndex = (currentIndex + 1) % songs.length;
  Cargar();
  Play();
  updateNowPlaying();
}

function Atrasar() {
  audio.currentTime = Math.max(0, audio.currentTime - 15);
}

function Adelantar() {
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 15);
}

// Seek the audio when the slider is moved
function coordinar() {
  audio.currentTime = sliderDeRango.value; // Set the audio's current time to the slider's value
}

// Update the slider as the audio plays
function actualizarBarra() {
  const progress = (audio.currentTime / audio.duration) * 100; // Calculate progress percentage
  progressBar.style.width = `${progress}%`; // Update the width of the progress bar
  sliderDeRango.max = Math.floor(audio.duration); // Set the slider's max value to the audio's duration
  sliderDeRango.value = Math.floor(audio.currentTime); // Update the slider's value to the current playback time
}

// Seek the audio when the progress bar is clicked
progressBarContainer.addEventListener("click", function (e) {
  const rect = progressBarContainer.getBoundingClientRect(); // Get the position of the container
  const offsetX = e.clientX - rect.left; // Calculate the click position relative to the container
  const newTime = (offsetX / rect.width) * audio.duration; // Calculate the new time
  audio.currentTime = newTime; // Update the audio's current time
});

// Add an event listener to update the progress bar every 250ms
audio.addEventListener("timeupdate", actualizarBarra);

// Add an event listener to update the slider every 250ms
setInterval(actualizarBarra, 250);

function selectSong(index) {
  currentIndex = index; // Set the selected song index
  Cargar();
  Play(); // Automatically play the selected song
  updateNowPlaying(); // Update the "Now Playing" title
}

function updateNowPlaying() {
  const nowPlayingElement = document.getElementById("nowPlaying");
  nowPlayingElement.textContent = songTitles[currentIndex]; // Set only the song title
}

// Sidebar toggle functionality
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open"); // Toggle the "open" class
}

document.getElementById("toggleSidebar").addEventListener("click", toggleSidebar);