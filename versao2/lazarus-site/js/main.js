// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
}

// Formulário de contato (sem backend por enquanto — abre o e-mail do usuário)
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const assunto = encodeURIComponent('Contato pelo site - ' + nome);
    const corpo = encodeURIComponent(mensagem + '\n\nE-mail para retorno: ' + email);
    window.location.href = `mailto:contato@lazarusassessoria.com.br?subject=${assunto}&body=${corpo}`;
  });
}

// Animação de entrada ao rolar a página (progressive enhancement:
// só ativa o estado "escondido" se o navegador suportar IntersectionObserver)
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('js');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => observer.observe(el));
}
