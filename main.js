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

let audio = document.getElementById("audio");
let sliderDeRango = document.getElementById("sliderDeRango");
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
}

function Posterior() {
  currentIndex = (currentIndex + 1) % songs.length;
  Cargar();
  Play();
}

function Atrasar() {
  audio.currentTime = Math.max(0, audio.currentTime - 15);
}

function Adelantar() {
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 15);
}

function coordinar() {
  audio.currentTime = sliderDeRango.value;
}

function actualizarBarra() {
  sliderDeRango.max = Math.floor(audio.duration);
  sliderDeRango.value = Math.floor(audio.currentTime);
}

setInterval(actualizarBarra, 250);

document.getElementById("toggleSidebar").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open"); // Toggle the "open" class
});