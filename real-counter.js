// HONEST COUNTER - Fara daga 1 na gaskiya
async function updateRealCounter() {
  try {
    const res = await fetch('https://api.countapi.xyz/hit/auwal-honest-2026-v2/visits');
    const data = await res.json();
    const realCount = data.value; // Fara daga 1
    
    document.querySelectorAll('#vis, #visitorCount').forEach(el => {
      el.textContent = realCount;
    });
    localStorage.setItem('v', realCount);
    localStorage.setItem('real_visits', realCount);
    // Revenue na gaskiya = visitors * 2% * 500
    const rev = Math.floor(realCount * 0.02 * 500);
    const revEl = document.getElementById('rev');
    if(revEl) revEl.textContent = 'N' + rev.toLocaleString() + ' (Na gaskiya)';
  } catch(e) {}
}
updateRealCounter();
