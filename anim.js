// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  {text: "Él le estaba esperando, con una flor amarilla", time: 16 },
  { text: "Ella lo estaba soñando, con la luz en su pupila", time: 24 },
  { text: "Y el amarillo del Sol, iluminaba la esquina", time: 31 },
  { text: "Lo sentia tan cercano, lo sentia desde niña", time: 40 },
  { text: "Ella sabia que el sabia, que algun dia pasaria", time: 46 },
  { text: "Que vendria a buscarla, con sus flores amarillas", time: 49 },
  { text: "No te apures, no detengas el instante del encuentro", time: 58 },
  { text: "Está dicho que es un hecho no la pierdas, no hay derecho", time: 62 },
  { text: "No te olvides que la vida, casi nunca esta dormida", time: 67 },
  { text: "En ese bar tan desierto, nos esperaba el encuentro", time: 93 },
  { text: "Ella llegó en limusina, amarilla por supuesto", time: 101 },
  { text: "Él se acercó de repente, la miro tan de frente", time: 109 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 116 },
  { text: "Ella sabia que él sabia, que algun dia pasaria", time: 122 },
  { text: "Que vendria a buscarla, con sus flores amarillas", time: 127 },
  { text: "No te apures, no detengas el instante del encuentro", time: 135 },
  { text: "Está dicho que es un hecho no la pierdas, no hay derecho", time: 139 },
  { text: "No te olvides que la vida, casi nunca esta dormida", time: 144 },
  { text: "FLORES AMARILLAS", time: 161 },
  { text: "Ella sabia que él sabia, que algún dia pasaria", time: 169 },
  { text: "Que vendria a buscarla, con sus flores amarillas", time: 173 },
  { text: "No te apures, no detengas el instante del encuentro", time: 181 },
  { text: "Está dicho que es un hecho no la pierdas, no hay derecho", time: 185 },
  { text: "No te olvides que la vida casi nunca esta dormida", time: 189 },
  { text: "Ella sabia que él sabia. Él sabia, ella sabia", time: 198 },
  { text: "Que él sabia, ella sabia y se olvidaron de sus flores amarillas", time: 203 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);