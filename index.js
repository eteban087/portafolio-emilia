const hamburguesa = document.getElementById("hamburguesa");
const container_header = document.getElementById("container_header");

// HAMBURGUESA PARA MOSTRAR Y OCULTAR MENU
hamburguesa.addEventListener("click", () => {
  container_header.classList.toggle("show");
});

// IMAGENES ALETORIAS
const imgs = [
  (img1 = "/img/imagen1.jpg"),
  (img2 = "/img/imagen2.jpg"),
  (img3 = "/img/imagen3.jpg"),
];
const imgRandom = () => {
  const img = Math.floor(Math.random() * imgs.length);
  return img;
};
const parallax = document.getElementById("parallax");
parallax.style.backgroundImage = `url("${imgs[imgRandom()]}")`;
