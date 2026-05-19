document.addEventListener("DOMContentLoaded", () => {
  const nav = document.createElement("nav");

  nav.className = "tai-nav";

  nav.innerHTML = `
    <a class="tai-logo" href="index.html">🏠 TAILoquitos</a>

    <button class="tai-menu-btn" type="button" aria-label="Abrir menú">
      ☰
    </button>

    <div class="tai-links">
      <a href="index.html">Inicio</a>
      <a href="cuestionarios.html">Cuestionarios</a>
      <a href="relacionar-conceptos.html">Relacionar</a>
      <a href="clasifica-o-muere.html">Clasifica o muere</a>
    </div>
  `;

  document.body.prepend(nav);

  const menuBtn = nav.querySelector(".tai-menu-btn");
  const links = nav.querySelector(".tai-links");

  menuBtn.addEventListener("click", () => {
    links.classList.toggle("tai-open");
  });
});

