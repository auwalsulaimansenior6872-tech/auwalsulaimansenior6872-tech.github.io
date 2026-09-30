// DUAL LANGUAGE - Hausa / English
const translations = {
  ha: { visitors: "MASU ZIYARA", tools: "TOOLS", noWater: "NO WATERMARK", findIp: "GANO IP", create: "KIRKIRO" },
  en: { visitors: "VISITORS", tools: "TOOLS", noWater: "NO WATERMARK", findIp: "FIND IP", create: "GENERATE" }
};
let lang = localStorage.getItem('lang') || 'ha';
function switchLang(){
  lang = lang === 'ha'? 'en' : 'ha';
  localStorage.setItem('lang', lang);
  location.reload();
}
function applyLang(){
  document.body.innerHTML = document.body.innerHTML.replace(/MASU ZIYARA/g, translations[lang].visitors).replace(/GANO IP/g, translations[lang].findIp).replace(/KIRKIRO/g, translations[lang].create);
}
// Add Button
setTimeout(()=>{
  const btn = document.createElement('button');
  btn.innerHTML = lang === 'ha'? '🌍 ENGLISH' : '🌍 HAUSA';
  btn.style = 'position:fixed;top:10px;right:10px;z-index:9999;background:#000;color:#0f0;border:1px solid #0f0;padding:8px 12px;border-radius:20px;';
  btn.onclick = switchLang;
  document.body.appendChild(btn);
},1000);
