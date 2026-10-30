document.querySelectorAll('.reason').forEach(btn=>{
  btn.addEventListener('click',()=>{
    btn.classList.toggle('revealed');
  });
});
const gift=document.getElementById('giftBox'), giftMessage=document.getElementById('giftMessage');
function openGift(){giftMessage.hidden=false;gift.style.transform='scale(.85)';gift.style.opacity='.35';}
gift.addEventListener('click',openGift);gift.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openGift();}});
function sayYes(){document.getElementById('answer').hidden=false;document.getElementById('confetti').textContent='💗 ✨ 💕 🌸 💖 ✨ 💗';}
document.getElementById('yesBtn').addEventListener('click',sayYes);
document.getElementById('ofCourseBtn').addEventListener('click',sayYes);
