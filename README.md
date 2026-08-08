# 💬 Componente Interactivo de Testimonios

Un componente web moderno, interactivo y accesible para mostrar testimonios de clientes de una tienda online de tecnología. Diseñado con HTML5 semántico, CSS3 moderno y JavaScript asíncrono (ES6+).

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen?logo=github)](https://WebsByJimenez.github.io/Testimonios-Clientes/)

<p align="center">
  <img src="img/testimonios.jpg" alt="Vista previa del componente de testimonios" width="300">
</p>

## 🌐 Demo En Vivo

Puedes probar la aplicación en tiempo real ingresando al siguiente enlace:
👉 [Ver App en GitHub Pages](https://WebsByJimenez.github.io/Testimonios-Clientes/)

## 🚀 Características Principales

- **Carga de Datos Asíncrona:** consume los datos de los testimonios dinámicamente desde un archivo `JSON` mediante `fetch()`.
- **Navegación Interactiva:** controles de navegación manual mediante flechas de desplazamiento e indicadores de posición (_dots_).
- **Autoplay Inteligente con Pausa al Cursor:** rotación automática de testimonios que se pausa al pasar el ratón (`mouseenter`) para facilitar la lectura y se reanuda al quitarlo (`mouseleave`).
- **Calificación Dinámica:** renderizado de puntuación en estrellas (1-5) según la respuesta cargada.
- **Transiciones Suaves:** efectos de animación CSS (_fade_) entre cada cambio de opinión.
- **Diseño Responsivo e Inclusivo:** maquetación adaptable a distintos dispositivos y enfocada en accesibilidad web (etiquetas semánticas, variables CSS y patrones para lectores de pantalla).

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Marcado semántico (`<main>`, `<article>`, `<blockquote>`) y atributos de accesibilidad ARIA.
- **CSS3:** Variables CSS (Custom Properties), Flexbox, CSS Grid y animaciones/transiciones.
- **JavaScript (ES6+):** Programación asíncrona (`async/await`, `Fetch API`), manipulación modular del DOM y manejo de eventos.

---

## 📁 Estructura del Proyecto

```text
.
├── css/
│   └── estilos.css       # Estilos globales, variables y animaciones
├── data/
│   └── testimonios.json  # Base de datos local en formato JSON
├── img/                  # Avatares e imágenes del proyecto
│   └── testimonios.jpg   # Imagen de vista previa
├── js/
│   └── index.js          # Lógica de interacción, temporizador y consumo de datos
├── index.html            # Estructura principal de la aplicación
└── README.md             # Documentación del proyecto
```

📝 Licencia
Este proyecto es de código abierto y está disponible bajo la licencia MIT.

🚀 Instalación y Uso Local
No requiere la instalación de dependencias ni servidores externos. Únicamente clona el repositorio u obtén los archivos y abre index.html en cualquier navegador web moderno.

## 👤 Autor

Desarrollado con 💻 por **WebsByJimenez**.
