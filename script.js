document.addEventListener("DOMContentLoaded", () => {

  // =============================
  // LINKS INTERNOS
  // =============================

  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(link => {

    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (targetId !== "#") {

        event.preventDefault();

        const targetElement = document.querySelector(targetId);

        if (targetElement) {

          targetElement.scrollIntoView({
            behavior: "smooth"
          });

        }

      }

    });

  });


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

      const nome =
        document.getElementById("nome").value.trim();

      const email =
        document.getElementById("email").value.trim();

      const telefone =
        document.getElementById("telefone").value.trim();

      const assunto =
        document.getElementById("assunto").value;

      const mensagem =
        document.getElementById("mensagem").value.trim();


      // WhatsApp da empresa
      const numeroWhatsApp = "553491556012";


      const texto =
`Olá! Vim pelo site da Lazarus.

*Nome:* ${nome}
*E-mail:* ${email}
*Telefone:* ${telefone || "Não informado"}
*Assunto:* ${assunto || "Não informado"}

*Mensagem:*
${mensagem}`;


      const url =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;


      window.open(url, "_blank");

    });

  }

});