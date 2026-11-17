const THEME_KEY = "tema";
const boton = document.getElementById("tema");

function aplicarTema(oscuro) {
  document.body.classList.toggle("oscuro", oscuro);
  boton.textContent = oscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";
}

if (boton) {
  aplicarTema(localStorage.getItem(THEME_KEY) === "oscuro");

  boton.addEventListener("click", function () {
    const oscuro = !document.body.classList.contains("oscuro");
    aplicarTema(oscuro);
    localStorage.setItem(THEME_KEY, oscuro ? "oscuro" : "claro");
  });
}
