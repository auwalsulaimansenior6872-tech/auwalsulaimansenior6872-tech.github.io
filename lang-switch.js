// FINAL LANGUAGE FIX V3 - WORKS 100%
const T = {
  "MASU ZIYARA": "VISITORS",
  "GANO IP": "FIND IP",
  "KIRKIRO": "GENERATE",
  "Gano IP, wuri, ISP": "Find IP, location, ISP",
  "Soja Grade 18 chars": "Military Grade 18 chars",
  "Shigar da Link": "Paste Link",
  "SAUKE": "DOWNLOAD",
  "SAUKE VIDEO": "DOWNLOAD VIDEO"
};

let lang = localStorage.getItem('site_lang') || 'ha';

function doTranslate(target){
  lang = target;
  localStorage.setItem('site_lang', target);
  // Bincika kowane element
  const all = document.querySelectorAll('button, span, p, div, small, h3');
  all.forEach(el=>{
    if(el.children.length === 0 || el.tagName === 'BUTTON'){
      let original = el.innerText? el.innerText.trim() : '';
      if(!original) return;
      if(target === 'en'){
        if(T[original]) el.innerText = T[original];
        // Karamin rubutu
        if(original.includes('Gano IP')) el.innerText = T["Gano IP, wuri, ISP"];
        if(original.includes('Soja Grade')) el.innerText = T["Soja Grade 18 chars"];
      } else {
        for(let ha in T){
          if(T[ha] === original) el.innerText = ha;
          if(original === T["Gano IP, wuri, ISP"]) el.innerText = "Gano IP, wuri, ISP";
          if(original === T["Soja Grade 18 chars"]) el.innerText = "Soja Grade 18 chars";
        }
      }
    }
  });
  document.getElementById('langBtn').innerText = target === 'ha'? '🌍 ENGLISH' : '🌍 HAUSA';
}

setTimeout(()=>{
  let btn = document.getElementById('langBtn');
  if(!btn){
    btn = document.createElement('button');
    btn.id = 'langBtn';
    btn.style = 'position:fixed;top:12px;right:12px;z-index:999999;background:#000;color:#0f8;border:2px solid #0f8;padding:8px 14px;border-radius:20px;font-weight:bold;';
    document.body.appendChild(btn);
  }
  btn.onclick = ()=> doTranslate(lang==='ha'?'en':'ha');
  btn.innerText = lang==='ha'?'🌍 ENGLISH':'🌍 HAUSA';
  if(lang==='en') doTranslate('en');
},1000);
