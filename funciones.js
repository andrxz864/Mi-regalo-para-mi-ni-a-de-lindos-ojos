const screens=[...document.querySelectorAll('.screen')];
function show(id){screens.forEach(s=>s.classList.toggle('active',s.id===id));window.scrollTo({top:0,behavior:'smooth'});}
document.querySelectorAll('[data-open]').forEach(btn=>btn.addEventListener('click',()=>show(btn.dataset.open)));
document.querySelectorAll('[data-home]').forEach(btn=>btn.addEventListener('click',()=>show('home')));
document.querySelectorAll('.reason').forEach(btn=>{
  const label=btn.querySelector('span'); const original=label.textContent;
  btn.addEventListener('click',()=>{
    btn.classList.toggle('revealed');
    label.textContent=btn.classList.contains('revealed')?'¡Y hay muchísimas más!':original;
  });
});
const gift=document.getElementById('giftBox'), giftMessage=document.getElementById('giftMessage');
function openGift(){giftMessage.hidden=false;gift.style.transform='scale(.85)';gift.style.opacity='.35';}
gift.addEventListener('click',openGift);gift.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openGift();}});
function sayYes(){document.getElementById('answer').hidden=false;document.getElementById('confetti').textContent='💗 ✨ 💕 🌸 💖 ✨ 💗';}
document.getElementById('yesBtn').addEventListener('click',sayYes);
document.getElementById('ofCourseBtn').addEventListener('click',sayYes);
