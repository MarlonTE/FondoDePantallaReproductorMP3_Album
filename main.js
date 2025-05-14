/* funciones debugger */
function song01() {audio.setAttribute('src','musica/whirr/01Mellow.mp3'); Cargar(); Play(); indice=0;}
function song02() {audio.setAttribute('src','musica/whirr/02Wavelength.mp3'); Cargar(); Play(); indice=1;}
function song03() {audio.setAttribute('src','musica/whirr/03YoungerThanYou.mp3'); Cargar(); Play(); indice=2;}
function song04() {audio.setAttribute('src','musica/whirr/04RoseCold.mp3'); Cargar(); Play(); indice=3;}
function song05() {audio.setAttribute('src','musica/whirr/05BeforeYouHeadOff.mp3'); Cargar(); Play(); indice=4;}
function song06() {audio.setAttribute('src','musica/whirr/06HowTimeStretches.mp3'); Cargar(); Play(); indice=5;}
function song07() {audio.setAttribute('src','musica/whirr/07Rental.mp3'); Cargar(); Play(); indice=6;}
function song08() {audio.setAttribute('src','musica/whirr/08Vividly.mp3'); Cargar(); Play(); indice=7;}
function song09() {audio.setAttribute('src','musica/whirr/09PlayTheSlowOnes.mp3'); Cargar(); Play(); indice=8;}
function song10() {audio.setAttribute('src','musica/whirr/10UnderTheSameName.mp3'); Cargar(); Play(); indice=-1;}
/* ruta de canciones *//* ruta de canciones *//* ruta de canciones */
/* ruta de canciones *//* ruta de canciones *//* ruta de canciones */
/* ruta de canciones *//* ruta de canciones *//* ruta de canciones */
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
]
/* Elementos *//* Elementos *//* Elementos *//* Elementos *//* Elementos */
/* Elementos *//* Elementos *//* Elementos *//* Elementos *//* Elementos */
/* Elementos *//* Elementos *//* Elementos *//* Elementos *//* Elementos */
let sliderDeRango = document.getElementById("sliderDeRango");
let audio = document.getElementById("audio");
let barraPersonalizable = document.getElementById("barraPersonalizable");
/* variables *//* variables *//* variables *//* variables *//* variables */
/* variables *//* variables *//* variables *//* variables *//* variables */
/* variables *//* variables *//* variables *//* variables *//* variables */
let indice = 0;
/* Funciones *//* Funciones *//* Funciones *//* Funciones *//* Funciones */
/* Funciones *//* Funciones *//* Funciones *//* Funciones *//* Funciones */
/* Funciones *//* Funciones *//* Funciones *//* Funciones *//* Funciones */
function Cargar() {audio.load();}
function coordinar() {audio.currentTime = sliderDeRango.value;}
function Play() {audio.play();}
function Pause() {audio.pause();}
function PlayPause() {
    if (audio.paused == true) {
        Play();
    } else {
        Pause();
    }
}
function Anterior() {
    indice--;
    Lista();
}
function Posterior() {
    indice++;
    Lista();
}
function Atrasar() {
    if (audio.currentTime > 20) {
        audio.currentTime = audio.currentTime - 15;   
    } else {
        audio.currentTime = 0;
    }
}
function Adelantar() {
    if (audio.currentTime < audio.duration - 20) {
        audio.currentTime = audio.currentTime + 15;   
    } else {
        audio.currentTime = audio.duration - 5;
    }
}
function Lista() {
    switch (indice) {
        case -1:
            if (checkbox.checked == true) {
                indice = songs.length - 1;
            } else {
               alert("Active el bucle");
               indice = 0;
            }
            break;
        case songs.length:
            if (checkbox.checked == true) {
                indice = 0;
            } else {
                alert("Active el bucle");
                indice = songs.length - 1;
            }
        default:
            break;
    }
    audio.src = songs[indice];
    Cargar();
    Play();
}
function actualizarBarra() {
    sliderDeRango.setAttribute("max",Math.floor(audio.duration));
    sliderDeRango.setAttribute("value",Math.floor(audio.currentTime));
    barraPersonalizable.style.width = (100/audio.duration)*(document.getElementById("Contenedor").clientWidth/100)*audio.currentTime + "px";
}
setInterval(actualizarBarra, 250);

document.getElementById("toggleSidebar").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open"); // Toggle the "open" class
});