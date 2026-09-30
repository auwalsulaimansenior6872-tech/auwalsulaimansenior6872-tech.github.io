// AUWAL DUAL LANGUAGE V2 - FULL TRANSLATION
const dict = {
  "MASU ZIYARA": "VISITORS",
  "GANO IP": "FIND IP",
  "KIRKIRO": "GENERATE",
  "Gano IP, wuri, ISP": "Find IP, location, ISP",
  "Soja Grade 18 chars": "Military Grade 18 chars",
  "WORLD NO.1 • 12 PREMIUM TOOLS": "WORLD NO.1 • 12 PREMIUM TOOLS",
  "IP TRACKER PRO": "IP TRACKER PRO",
  "PASSWORD VAULT": "PASSWORD VAULT",
  "N500 NO WATERMARK": "N500 NO WATERMARK"
};

let currentLang = localStorage.getItem('site_lang') || 'ha';

function translatePage(to) {
  currentLang = to;
  localStorage.setItem('site_lang', to);
  document.querySelectorAll('button, span, p, div').forEach(el => {
    if(el.children.length === 0) {
      let txt = el.textContent.trim();
      if(to === 'en' && dict[txt]) el.textContent = dict[txt];
      if(to === 'ha') {
        // Mayar da Hausa
        for(let ha in dict){ if(dict[ha] === txt) el.textContent = ha; }
      }
    }
  });
  // Maida kananan rubutu
  document.body.querySelectorAll('*').forEach(el=>{
    if(el.textContent === 'Gano IP, wuri, ISP' && to==='en') el.textContent = 'Find IP, location, ISP';
  });
  updateBtn();
}

function updateBtn(){
  let b = document.getElementById('langBtn');
  if(b) b.textContent = currentLang === 'ha'? '🌍 ENGLISH' : '🌍 HAUSA';
}

setTimeout(()=>{
  if(!document.getElementById('langBtn')){
    let btn = document.createElement('button');
    btn.id = 'langBtn';
    btn.style = 'position:fixed;top:15px;right:15px;z-index:99999;background:black;color:#00ff88;border:2px solid #00ff88;padding:10px 15px;border-radius:25px;font-weight:bold;';
    btn.onclick = ()=> translatePage(currentLang==='ha'?'en':'ha');
    document.body.appendChild(btn);
    updateBtn();
    if(currentLang==='en') translatePage('en');
  }
},1500);
