let testimonios = [];
let indiceActual = 0;
let intervaloId = null;
const TIEMPO_CAMBIO = 7000; // 7 segundos

// Elementos del DOM
const tarjeta = document.getElementById("tarjeta-testimonio");
const imgEl = document.getElementById("avatar");
const estrellasEl = document.getElementById("estrellas");
const textoEl = document.getElementById("texto");
const autorEl = document.getElementById("autor");
const cargoEl = document.getElementById("cargo");
const dotsContainer = document.getElementById("dots-container");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

// Cargar datos desde el JSON externo
async function cargarTestimonios() {
  try {
    const respuesta = await fetch("./data/testimonios.json");
    if (!respuesta.ok) throw new Error("Error al cargar los testimonios");
    testimonios = await respuesta.json();

    crearDots();
    mostrarTestimonio(indiceActual);
    iniciarAutoplay();
  } catch (error) {
    console.error("Error:", error);
    textoEl.textContent = "No se pudieron cargar los testimonios en este momento.";
  }
}

// Renderizar indicador de puntos
function crearDots() {
  dotsContainer.innerHTML = "";
  testimonios.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.classList.add("dot");
    dot.setAttribute("aria-label", `Ir al testimonio ${index + 1}`);
    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      cambiarTestimonioDirecto(index);
    });

    dotsContainer.appendChild(dot);
  });
}

// Mostrar el testimonio con efecto de transición (Fade)
function mostrarTestimonio(index) {
  const { nombre, cargo, estrellas, fotoUrl, texto } = testimonios[index];

  // Aplicar efecto Fade Out
  textoEl.classList.add("fade-out");

  setTimeout(() => {
    imgEl.src = fotoUrl;
    imgEl.alt = `Foto de perfil de ${nombre}`;
    estrellasEl.innerHTML = "★".repeat(estrellas) + "☆".repeat(5 - estrellas);
    textoEl.textContent = `"${texto}"`;
    autorEl.textContent = nombre;
    cargoEl.textContent = cargo;

    actualizarDots(index);

    // Quitar Fade Out
    textoEl.classList.remove("fade-out");
  }, 200);
}

function actualizarDots(index) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function siguienteTestimonio() {
  indiceActual = (indiceActual + 1) % testimonios.length;
  mostrarTestimonio(indiceActual);
}

function anteriorTestimonio() {
  indiceActual = (indiceActual - 1 + testimonios.length) % testimonios.length;
  mostrarTestimonio(indiceActual);
}

function cambiarTestimonioDirecto(index) {
  indiceActual = index;
  mostrarTestimonio(indiceActual);
  reiniciarAutoplay();
}

// Control del Autoplay y Pausa con Hover
function iniciarAutoplay() {
  if (!intervaloId) {
    intervaloId = setInterval(siguienteTestimonio, TIEMPO_CAMBIO);
  }
}

function detenerAutoplay() {
  clearInterval(intervaloId);
  intervaloId = null;
}

function reiniciarAutoplay() {
  detenerAutoplay();
  iniciarAutoplay();
}

// Event Listeners
btnNext.addEventListener("click", () => {
  siguienteTestimonio();
  reiniciarAutoplay();
});

btnPrev.addEventListener("click", () => {
  anteriorTestimonio();
  reiniciarAutoplay();
});

// Pausar rotación al pasar el ratón por encima de la tarjeta
tarjeta.addEventListener("mouseenter", detenerAutoplay);
tarjeta.addEventListener("mouseleave", iniciarAutoplay);

// Inicialización
document.addEventListener("DOMContentLoaded", cargarTestimonios);
