
// ======================================
// NAVEGACIÓN ENTRE SECCIONES
// ======================================

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


// ======================================
// RAZONES PARA AMARTE
// ======================================

document.querySelectorAll('.reason').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('revealed');
  });
});


// ======================================
// REGALO: PRIMERA Y SEGUNDA CAJITA
// ======================================

const gift = document.getElementById('giftBox');
const gift2 = document.getElementById('giftBox2');
const secondGift = document.getElementById('secondGift');
const letterStage = document.getElementById('letterStage');
const swipeLetter = document.getElementById('swipeLetter');
const finalGift = document.getElementById('finalGift');

let taps1 = 0;
let taps2 = 0;

function addTap(element, callback) {
  if (!element) return;

  element.addEventListener('click', callback);

  element.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  });
}

addTap(gift, () => {
  if (taps1 >= 5) return;

  taps1++;

  document.getElementById('giftCount').textContent =
    taps1 + ' / 5';

  if (taps1 === 5) {
    gift.innerHTML =
      '<span>✨💝✨</span><strong>¡SE ABRIÓ!</strong>';

    secondGift.hidden = false;

    document.getElementById('giftHint').textContent =
      '¡Sorpresa! Había otra cajita dentro. ♡';
  }
});

addTap(gift2, () => {
  if (taps2 >= 5) return;

  taps2++;

  document.getElementById('giftCount2').textContent =
    taps2 + ' / 5';

  if (taps2 === 5) {
    gift2.innerHTML =
      '<span>💌</span><strong>¡UNA CARTITA!</strong>';

    letterStage.hidden = false;
  }
});


// ======================================
// ABRIR LA CARTA DESLIZANDO
// ======================================

let startX = 0;
let startY = 0;

if (swipeLetter) {
  swipeLetter.addEventListener('touchstart', event => {
    startX = event.changedTouches[0].clientX;
    startY = event.changedTouches[0].clientY;
  }, { passive: true });

  swipeLetter.addEventListener('touchend', event => {
    const dx = event.changedTouches[0].clientX - startX;
    const dy = Math.abs(
      event.changedTouches[0].clientY - startY
    );

    if (dx > 65 && dx > dy) {
      openFinalGift();
    }
  }, { passive: true });

  swipeLetter.addEventListener('pointerdown', event => {
    if (event.pointerType === 'mouse') {
      startX = event.clientX;
    }
  });

  swipeLetter.addEventListener('pointerup', event => {
    if (
      event.pointerType === 'mouse' &&
      event.clientX - startX > 65
    ) {
      openFinalGift();
    }
  });
}

function openFinalGift() {
  if (!finalGift || !swipeLetter) return;
  if (!finalGift.hidden) return;

  finalGift.hidden = false;

  swipeLetter.innerHTML =
    '<span>💗</span><strong>¡Tu regalito está abierto!</strong>';

  finalGift.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}


// ======================================
// PROPUESTA DE MATRIMONIO 💍
// ======================================

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const proposalTitle = document.getElementById('proposalTitle');
const proposalButtons = document.getElementById('proposalButtons');
const proposalResult = document.getElementById('proposalResult');
const proposalFinalText = document.getElementById('proposalFinalText');
const proposalMeme = document.getElementById('proposalMeme');
const proposalImage = document.getElementById('proposalImage');

let noCount = 0;

function showMeme(filename) {
  if (!proposalImage || !proposalMeme) return;

  proposalImage.src = filename;
  proposalMeme.hidden = false;
}

function sayYes() {
  if (!proposalButtons || !proposalTitle || !proposalResult) return;

  proposalButtons.hidden = true;
  proposalTitle.hidden = true;
  proposalResult.hidden = false;

  if (noCount === 0) {
    proposalFinalText.textContent =
      'WEEEE, ¿QUÉ DÍA ES LA BODA? 😭💍';

  } else if (noCount === 1) {
    proposalFinalText.textContent =
      'WEEEE ESTA VEZ SABÍA QUE IBAS A DECIR QUE SÍ MALDITA 👉👈';

  } else {
    proposalFinalText.textContent =
      '¡LO SABÍA! NOS CASAMOSSSS 😭💗💍';
  }

  showMeme('49efb97ab8054f6032da0a36e526ff7c.jpg');
}

if (yesBtn) {
  yesBtn.addEventListener('click', sayYes);
}

if (noBtn) {
  noBtn.addEventListener('click', () => {
    noCount++;

    if (noCount === 1) {
      proposalTitle.textContent =
        '¿Otra vez... sí o no? 🥺';

      showMeme('01554c6247cb20861022d934604d9b93.jpg');

    } else {
      proposalTitle.textContent =
        'PULSA SÍ HIJUEPUTA JAJAJA 😭';

      showMeme('82b7d4cdd9dce6dfdb56b5dd8506dc44.jpg');

      noBtn.hidden = true;
    }
  });
}

