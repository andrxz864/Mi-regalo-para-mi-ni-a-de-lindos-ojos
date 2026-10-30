// Navegación entre pantallas
const screens = document.querySelectorAll('.screen');
const menuButtons = document.querySelectorAll('[data-screen]');

menuButtons.forEach(button => {
  button.addEventListener('click', () => {
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(button.dataset.screen).classList.add('active');
  });
});

document.querySelectorAll('[data-home]').forEach(button => {
  button.addEventListener('click', () => {
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById('home').classList.add('active');
  });
});

// Propuesta de matrimonio JAJAJA
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
  proposalImage.src = filename;
  proposalMeme.hidden = false;
}

function sayYes() {
  proposalButtons.hidden = true;
  proposalTitle.hidden = true;
  proposalResult.hidden = false;

  if (noCount === 0) {
    proposalFinalText.textContent = 'WEEEE, ¿QUÉ DÍA ES LA BODA? 😭💍';
  } else if (noCount === 1) {
    proposalFinalText.textContent = 'WEEEE ESTA VEZ SABÍA QUE IBAS A DECIR QUE SÍ MALDITA 👉👈';
  } else {
    proposalFinalText.textContent = '¡LO SABÍA! NOS CASAMOSSSS 😭💗💍';
  }

  showMeme('49efb97ab8054f6032da0a36e526ff7c.jpg');
}

yesBtn.addEventListener('click', sayYes);

noBtn.addEventListener('click', () => {
  noCount++;

  if (noCount === 1) {
    proposalTitle.textContent = '¿Otra vez... sí o no? 🥺';
    showMeme('01554c6247cb20861022d934604d9b93.jpg');
  } else {
    proposalTitle.textContent = 'PULSA SÍ HIJUEPUTA JAJAJA 😭';
    showMeme('82b7d4cdd9dce6dfdb56b5dd8506dc44.jpg');
    noBtn.hidden = true;
  }
});
