
// Navegación del menú
const screens = document.querySelectorAll('.screen');

document.querySelectorAll('[data-open]').forEach(button => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.open);
    if (!target) return;
    screens.forEach(screen => screen.classList.remove('active'));
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

document.querySelectorAll('[data-home]').forEach(button => {
  button.addEventListener('click', () => {
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById('home').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Corazones
document.querySelectorAll('.reason').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('revealed');
  });
});

// Regalo
const gift = document.getElementById('giftBox');
const giftMessage = document.getElementById('giftMessage');

function openGift() {
  giftMessage.hidden = false;
  gift.style.transform = 'scale(.85)';
  gift.style.opacity = '.35';
}

gift.addEventListener('click', openGift);
gift.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openGift();
  }
});

// Sorpresa
function sayYes() {
  document.getElementById('answer').hidden = false;
  document.getElementById('confetti').textContent = '💗 ✨ 💕 🌸 💖 ✨ 💗';
}

document.getElementById('yesBtn').addEventListener('click', sayYes);
document.getElementById('ofCourseBtn').addEventListener('click', sayYes);
