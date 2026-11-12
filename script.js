
document.addEventListener("DOMContentLoaded", () => {

  // =============================
  // LINKS INTERNOS
  // =============================

  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(link => {
    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          event.preventDefault();

          targetElement.scrollIntoView({
            behavior: "smooth"
          });
        }
      }

    });
  });


  // =============================
  // MENU MOBILE (HAMBÚRGUER)
  // =============================

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {

    const closeMenu = () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    };

    menuToggle.addEventListener("click", () => {

      const isOpen = navLinks.classList.toggle("active");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {

      if (
        navLinks.classList.contains("active") &&
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }

    });

  }


  // =============================
  // HEADER AO ROLAR
  // =============================

  const header = document.querySelector(".header");

  if (header) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 50) {
        header.style.boxShadow =
          "0 4px 20px rgba(0, 0, 0, 0.3)";
      } else {
        header.style.boxShadow =
          "0 2px 10px rgba(0, 0, 0, 0.15)";
      }

    });

  }


  // =============================
  // FORMULÁRIO -> WHATSAPP
  // =============================

  const formContato = document.getElementById("formContato");

  if (formContato) {

    formContato.addEventListener("submit", function (event) {

      event.preventDefault();

      const nome = document.getElementById("nome")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const telefone = document.getElementById("telefone")?.value.trim();
      const assunto = document.getElementById("assunto")?.value;
      const mensagem = document.getElementById("mensagem")?.value.trim();

      // Validação dos campos obrigatórios
      if (!nome || !email || !mensagem) {
        alert("Preencha seu nome, e-mail e mensagem.");
        return;
      }

      // Número comercial da Lazarus
      const numeroWhatsApp = "5534991921790";

      // Mensagem que será enviada
      const texto = `Olá! Vim pelo site da Lazarus.

Nome: ${nome}
E-mail: ${email}
Telefone: ${telefone || "Não informado"}
Assunto: ${assunto || "Não informado"}

Mensagem:
${mensagem}`;

      // Redirecionamento para o WhatsApp
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

      window.location.href = url;

    });

  }

});
