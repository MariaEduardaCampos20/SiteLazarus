// =============================
// MENU MOBILE
// =============================

const menu = document.querySelector("nav");
const menuBtn = document.querySelector(".menu-mobile");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");

});

// =============================
// HEADER AO ROLAR
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    } else {

        header.style.background = "rgba(255,255,255,.95)";
        header.style.boxShadow = "none";

    }

});

// =============================
// REVEAL AO ROLAR
// =============================

const reveals = document.querySelectorAll(
    ".sobre, .servicos, .numeros, .projetos, .cta, footer"
);

function reveal() {

    const alturaTela = window.innerHeight;

    reveals.forEach(secao => {

        const topo = secao.getBoundingClientRect().top;

        if (topo < alturaTela - 120) {

            secao.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();