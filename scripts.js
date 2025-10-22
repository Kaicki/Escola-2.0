// Simple interactivity: mobile menu, year update, contact form simulation
document.addEventListener('DOMContentLoaded', function(){
  // Year in footer
  const y = new Date().getFullYear();
  const ids = ['year','year2','year3','year4'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });

  // Mobile menu toggle
  const btns = document.querySelectorAll('.menu-toggle');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = document.querySelector('.nav');
      if(nav.style.display === 'flex') nav.style.display = '';
      else nav.style.display = 'flex';
    });
  });

  // Simple contact form submit (client-side demo)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const status = document.getElementById('formStatus');
      status.textContent = 'Enviando...';
      setTimeout(() => {
        status.textContent = 'Mensagem enviada com sucesso (demo). Para funcionar de verdade, configure um endpoint no servidor.';
        form.reset();
      }, 900);
    });
  }
});
