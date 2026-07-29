/* ============================================
   ASSESSORIA CULTURAL — JavaScript
   Interatividade: header scroll, mobile menu,
   scroll reveal, parallax, form, smooth scroll
   ============================================ */

(function () {
  "use strict";

  // --- HEADER SCROLL ---
  const header = document.getElementById("header");
  const SCROLL_THRESHOLD = 60;

  function handleHeaderScroll() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // --- MOBILE MENU ---
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  menuToggle.addEventListener("click", function () {
    const isOpen = mobileMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // Close menu on link click
  document.querySelectorAll(".mobile-link, .mobile-cta").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });

  // --- SCROLL REVEAL (IntersectionObserver) ---
  const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
  );

  // Add stagger delay
  const staggerContainers = document.querySelectorAll(".stagger");
  staggerContainers.forEach(function (container) {
    const items = container.querySelectorAll(".reveal");
    items.forEach(function (item, index) {
      item.style.setProperty("--i", index);
    });
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything
    revealElements.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  // --- HERO PARALLAX ---
  const heroBg = document.getElementById("heroBg");
  const heroContent = document.getElementById("heroContent");

  function handleParallax() {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      // Parallax image
      if (heroBg) {
        heroBg.style.transform = "translateY(" + scrollY * 0.25 + "px)";
      }
      // Fade content
      if (heroContent) {
        const opacity = Math.max(0, 1 - scrollY / 500);
        const translateY = scrollY * 0.12;
        heroContent.style.opacity = opacity;
        heroContent.style.transform = "translateY(" + translateY + "px)";
      }
    }
  }

  window.addEventListener("scroll", handleParallax, { passive: true });

  // --- SMOOTH SCROLL ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // --- FORM HANDLING ---
  const contactForm = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic validation
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
      }

      // Simulate submission (replace with real backend)
      submitBtn.disabled = true;
      submitBtn.innerHTML = "Enviando...";

      setTimeout(function () {
        submitBtn.innerHTML = "Mensagem enviada!";
        contactForm.reset();
        submitBtn.disabled = false;

        setTimeout(function () {
          submitBtn.innerHTML =
            'Enviar mensagem <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
        }, 3000);
      }, 1500);
    });
  }

  // --- PHONE MASK ---
  const phoneInput = document.getElementById("phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", function (e) {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length > 11) value = value.slice(0, 11);

      if (value.length > 6) {
        value =
          "(" +
          value.slice(0, 2) +
          ") " +
          value.slice(2, 7) +
          "-" +
          value.slice(7);
      } else if (value.length > 2) {
        value =
          "(" + value.slice(0, 2) + ") " + value.slice(2);
      } else if (value.length > 0) {
        value = "(" + value;
      }

      e.target.value = value;
    });
  }
})();
