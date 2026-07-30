// ==========================================================================
// LAZARUS ASSESSORIA & PROJETOS - script.js
// JavaScript puro (sem dependências externas)
// ==========================================================================

document.addEventListener("DOMContentLoaded", function () {
  /* ---------- MENU MOBILE (hambúrguer) ---------- */
  var menuToggle = document.querySelector(".menu-toggle");
  var navbar = document.querySelector(".navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", function () {
      navbar.classList.toggle("aberto");
    });
  }

  /* ---------- MARCAR LINK ATIVO DO MENU CONFORME A PÁGINA ---------- */
  var linksMenu = document.querySelectorAll(".navbar a");
  var paginaAtual = window.location.pathname.split("/").pop() || "index.html";

  linksMenu.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === paginaAtual) {
      link.classList.add("ativo");
    }
  });

  /* ---------- CARROSSEL DE LOGOS DE PARCEIROS ---------- */
  var carrosseis = document.querySelectorAll(".logos-carrossel");

  carrosseis.forEach(function (carrossel) {
    var wrapper = carrossel.parentElement;
    var setaEsquerda = wrapper ? wrapper.querySelector(".seta-esquerda") : null;
    var setaDireita = wrapper ? wrapper.querySelector(".seta-direita") : null;

    if (setaDireita) {
      setaDireita.addEventListener("click", function () {
        carrossel.scrollBy({ left: 200, behavior: "smooth" });
      });
    }
    if (setaEsquerda) {
      setaEsquerda.addEventListener("click", function () {
        carrossel.scrollBy({ left: -200, behavior: "smooth" });
      });
    }
  });

  /* ---------- FORMULÁRIO DE CONTATO ---------- */
  var formContato = document.querySelector(".form-contato");

  if (formContato) {
    formContato.addEventListener("submit", function (e) {
      e.preventDefault();
      var aviso = document.querySelector(".aviso-envio");
      if (aviso) {
        aviso.classList.add("mostrar");
        aviso.textContent =
          "Mensagem enviada com sucesso! Em breve entraremos em contato.";
      }
      formContato.reset();
    });
  }
});
