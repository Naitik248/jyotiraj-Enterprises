const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; });

// 3D hero stage. The restrained values keep the movement tactile and calm.
const stage = document.getElementById('heroStage');
const device = stage.querySelector('.hero-device');

stage.addEventListener('pointermove', event => {
  const bounds = stage.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - .5;
  const y = (event.clientY - bounds.top) / bounds.height - .5;

  device.style.transform = `translate3d(${x * 20}px, ${y * 14}px, 90px) rotateX(${-y * 8}deg) rotateY(${x * 10}deg) rotateZ(18deg)`;
  stage.style.setProperty('--pointer-x', `${50 + x * 12}%`);
  stage.style.setProperty('--pointer-y', `${50 + y * 12}%`);
});

stage.addEventListener('pointerleave', () => {
  device.style.transform = '';
  stage.style.setProperty('--pointer-x', '50%');
  stage.style.setProperty('--pointer-y', '50%');
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const filters = document.getElementById('filters');
document.getElementById('filterButton').addEventListener('click', () => { filters.style.display = filters.style.display === 'flex' ? 'none' : 'flex'; });
filters.addEventListener('click', event => {
  if (event.target.tagName !== 'BUTTON') return;
  document.querySelectorAll('.filters button').forEach(button => button.classList.toggle('active', button === event.target));
  const filter = event.target.dataset.filter;
  document.querySelectorAll('.product-card').forEach(card => { card.style.display = filter === 'all' || card.dataset.category === filter ? 'flex' : 'none'; });
  document.getElementById('filterButton').firstChild.textContent = event.target.textContent + ' ';
});
