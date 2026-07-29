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
