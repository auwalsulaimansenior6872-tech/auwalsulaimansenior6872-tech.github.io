const T={"MASU ZIYARA":"VISITORS","GANO IP":"FIND IP","KIRKIRO":"GENERATE","DUBA":"CHECK","Gano IP, wuri, ISP":"Find IP, location, ISP","Soja Grade 18 chars":"Military Grade 18 chars","Duba Domain Info":"Check Domain Info"};
let cur=localStorage.getItem('site_lang')||'ha';
function translateAll(to){
  const dict = to==='en'? T : Object.fromEntries(Object.entries(T).map(([k,v])=>[v,k]));
  document.querySelectorAll('button,p,span,h3,div').forEach(el=>{
    if(el.children.length===0){
      let txt=el.innerText.trim();
      if(dict[txt]) el.innerText=dict[txt];
    }
  });
  // kananan
  document.body.innerHTML = document.body.innerHTML.replaceAll('Gano IP, wuri, ISP', to==='en'?'Find IP, location, ISP':'Gano IP, wuri, ISP').replaceAll('Soja Grade 18 chars', to==='en'?'Military Grade 18 chars':'Soja Grade 18 chars');
  cur=to;localStorage.setItem('site_lang',to);
  document.getElementById('langBtn').innerText=to==='ha'?'🌍 ENGLISH':'🌍 HAUSA';
}
setTimeout(()=>{
  let btn=document.getElementById('langBtn');
  if(!btn){btn=document.createElement('button');btn.id='langBtn';btn.style='position:fixed;top:10px;right:10px;z-index:999999;background:#000;color:#0f8;border:2px solid #0f8;padding:8px 14px;border-radius:20px';document.body.appendChild(btn);}
  btn.innerText=cur==='ha'?'🌍 ENGLISH':'🌍 HAUSA';
  btn.onclick=()=>{translateAll(cur==='ha'?'en':'ha'); location.reload();};
  if(cur==='en') translateAll('en');
},1000);
