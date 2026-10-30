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

// Regalo de varias etapas
const gift = document.getElementById('giftBox');
const gift2 = document.getElementById('giftBox2');
const secondGift = document.getElementById('secondGift');
const letterStage = document.getElementById('letterStage');
const swipeLetter = document.getElementById('swipeLetter');
const finalGift = document.getElementById('finalGift');

let taps1 = 0;
let taps2 = 0;

function addTap(element, callback) {
  element.addEventListener('click', callback);
  element.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  });
}

addTap(gift, () => {
  if (taps1 >= 5) return;
  taps1++;
  document.getElementById('giftCount').textContent = taps1 + ' / 5';

  if (taps1 === 5) {
    gift.innerHTML = '<span>✨💝✨</span><strong>¡SE ABRIÓ!</strong>';
    secondGift.hidden = false;
    document.getElementById('giftHint').textContent =
      '¡Sorpresa! Había otra cajita dentro. ♡';
  }
});

addTap(gift2, () => {
  if (taps2 >= 5) return;
  taps2++;
  document.getElementById('giftCount2').textContent = taps2 + ' / 5';

  if (taps2 === 5) {
    gift2.innerHTML = '<span>💌</span><strong>¡UNA CARTITA!</strong>';
    letterStage.hidden = false;
  }
});

// Abrir la carta deslizando hacia la derecha
let startX = 0;
let startY = 0;

swipeLetter.addEventListener('touchstart', e => {
  startX = e.changedTouches[0].clientX;
  startY = e.changedTouches[0].clientY;
}, { passive: true });

swipeLetter.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - startX;
  const dy = Math.abs(e.changedTouches[0].clientY - startY);

  if (dx > 65 && dx > dy) openFinalGift();
}, { passive: true });

swipeLetter.addEventListener('pointerdown', e => {
  if (e.pointerType === 'mouse') startX = e.clientX;
});

swipeLetter.addEventListener('pointerup', e => {
  if (e.pointerType === 'mouse' && e.clientX - startX > 65) {
    openFinalGift();
  }
});

function openFinalGift() {
  if (!finalGift.hidden) return;

  finalGift.hidden = false;
  swipeLetter.innerHTML =
    '<span>💗</span><strong>¡Tu regalito está abierto!</strong>';

  finalGift.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Sorpresa
function sayYes() {
  document.getElementById('answer').hidden = false;
  document.getElementById('confetti').textContent = '💗 ✨ 💕 🌸 💖 ✨ 💗';
}

document.getElementById('yesBtn').addEventListener('click', sayYes);
document.getElementById('ofCourseBtn').addEventListener('click', sayYes);
