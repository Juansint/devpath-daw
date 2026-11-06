/* Lección genérica de un tema: /tema/:slug/:capitulo */
const $ = (s) => document.getElementById(s);
const esc = (t) => String(t).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const parts = location.pathname.split('/').filter(Boolean);   // ['tema', 'sql', '2']
const slug = parts[1];
const topic = TOPICS.find((x) => x.slug === slug && !x.href);
if (!topic) { location.replace('/'); throw new Error('Tema no encontrado'); }

const s = document.createElement('script');
s.src = '/lecciones/' + slug + '.js';
s.onload = () => iniciar(LECCIONES[slug]);
s.onerror = () => { $('content').innerHTML = '<p>No se pudo cargar la lección. Recarga la página.</p>'; };
document.head.appendChild(s);

function iniciar(L) {
  const caps = L.capitulos;
  const n = parseInt(parts[2], 10);
  const ci = n >= 1 && n <= caps.length ? n - 1 : 0;
  const cap = caps[ci], S = cap.secciones, base = '/tema/' + slug;
  document.title = topic.name + ' · ' + cap.t + ' — DevPath';
  $('back').href = base; $('back').textContent = '← ' + topic.name; $('foot').href = base;
  $('cap').innerHTML = caps.map((c, j) => `<option value="${j + 1}" ${j === ci ? 'selected' : ''}>${j + 1}. ${esc(c.t)}</option>`).join('');
  $('cap').addEventListener('change', (e) => { location.href = base + '/' + e.target.value; });
  $('captitle').textContent = topic.name + ' · ' + S.length + ' secciones';

  const KEY = 'devpath-' + slug + '-c' + (ci + 1);
  let i = 0, done = [];
  try { done = JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { done = []; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {} };

  function render() {
    const x = S[i], isDone = done.includes(i), last = i === S.length - 1;
    const mode = x.v === 0 ? 'static' : (L.lang === 'html' || L.lang === 'css') ? 'live' : (L.lang === 'js' || L.lang === 'jsx') ? 'run' : 'static';
    $('count').textContent = topic.name + ' · Cap. ' + (ci + 1) + ' · ' + done.length + '/' + S.length;
    $('bar').style.width = Math.round(done.length / S.length * 100) + '%';
    $('toc').innerHTML = S.map((y, j) => `<button type="button" data-j="${j}" aria-current="${j === i}" class="${done.includes(j) ? 'ok' : ''}"><span class="badge">${done.includes(j) ? '✓' : j + 1}</span><span>${y.n}&nbsp; ${esc(y.t)}</span></button>`).join('');
    const next = ci < caps.length - 1
      ? `<a class="btn primary" href="${base}/${ci + 2}">Capítulo ${ci + 2}: ${esc(caps[ci + 1].t)} →</a>`
      : `<a class="btn primary" href="${base}">Tema completado 🎉 Ir a la práctica</a>`;
    $('content').innerHTML = `
      <div class="row" style="gap:8px"><span class="pill" style="background:${topic.bg};color:${topic.fg}">${esc(topic.name)} · ${x.n}</span><span class="pill p-green">${x.m} de lectura</span></div>
      <h1>${esc(x.t)}</h1>${[].concat(x.b).map((p) => `<p>${esc(p)}</p>`).join('')}
      <div class="keys"><b>Ideas clave</b><ul>${x.k.map((k) => `<li>${esc(k)}</li>`).join('')}</ul></div>
      ${x.a ? `<div class="attrs"><b>${esc(x.at || 'Atributos y propiedades')}</b><div class="tbl"><table><thead><tr><th>${esc(x.ah ? x.ah[0] : 'Atributo')}</th><th>${esc(x.ah ? x.ah[1] : 'Para qué sirve')}</th></tr></thead><tbody>${x.a.map((r) => `<tr><td><code class="mono">${esc(r[0])}</code></td><td>${esc(r[1])}</td></tr>`).join('')}</tbody></table></div></div>` : ''}
      ${mode === 'live'
        ? `<div class="code live"><div class="bar mono"><span>Ejemplo editable: cambia el código y mira el resultado</span><button type="button" class="reset" id="reset">Restablecer</button></div><textarea id="ed" class="mono" spellcheck="false" aria-label="Código del ejemplo">${esc(x.c)}</textarea><div class="out"><span>Resultado</span><iframe id="pv" title="Resultado del ejemplo" sandbox=""></iframe></div></div>`
        : mode === 'run'
        ? `<div class="code live"><div class="bar mono"><span>Ejemplo editable: cámbialo y ejecútalo</span><span class="row" style="gap:6px"><button type="button" class="reset" id="reset">Restablecer</button><button type="button" class="reset runb" id="run">▶ Ejecutar</button></span></div><textarea id="ed" class="mono" spellcheck="false" aria-label="Código JavaScript del ejemplo">${esc(x.c)}</textarea><div class="out"><span>Consola</span><div id="con" class="con mono"><i>Pulsa «Ejecutar» para ver la salida.</i></div>${x.dom || L.lang === 'jsx' ? `<iframe id="pv" title="Página del ejemplo" sandbox="allow-scripts" style="height:${x.h || 180}px"></iframe>` : '<iframe id="pv" title="Ejecución" sandbox="allow-scripts" hidden></iframe>'}</div></div>`
        : `<div class="code"><div class="bar mono"><span>Ejemplo</span><span>${L.lang}</span></div><pre>${esc(x.c)}</pre></div>`}
      ${x.o ? `<details class="salida"><summary>¿Qué muestra al ejecutarse? Piénsalo y pulsa para comprobarlo</summary><pre class="mono">${esc(x.o)}</pre></details>` : ''}
      ${x.e ? `<div class="warn"><b>Error común:</b> ${esc(x.e)}</div>` : ''}
      ${x.q ? `<div class="mini" id="mini"><b>Comprueba que lo has entendido</b><p>${esc(x.q.t)}</p><div class="mopts">${x.q.o.map((o, j) => `<button type="button" class="opt" data-q="${j}">${esc(o)}</button>`).join('')}</div><div id="mfb"></div></div>` : ''}
      <div class="tip"><b>En clase:</b> ${esc(x.tip)}</div>
      <div class="row" style="justify-content:space-between;border-top:1px solid #F0F0F5;padding-top:18px">
        <button class="btn ghost" id="prev" ${i === 0 ? 'disabled' : ''}>← Anterior</button>
        <div class="row" style="gap:10px">
          <button class="btn ${isDone ? 'done' : 'ghost'}" id="tog" aria-pressed="${isDone}">${isDone ? '✓ Completada' : 'Marcar como completada'}</button>
          ${last ? next : '<button class="btn primary" id="next">Siguiente →</button>'}
        </div>
      </div>`;
    const ed = $('ed');
    if (ed && mode === 'run') {
      const fit = () => { ed.style.height = 'auto'; ed.style.height = Math.max(140, ed.scrollHeight + 4) + 'px'; };
      ed.addEventListener('input', fit);
      ed.addEventListener('keydown', (ev) => {
        if (ev.key === 'Tab' && !ev.shiftKey) { ev.preventDefault(); ed.setRangeText('  ', ed.selectionStart, ed.selectionEnd, 'end'); }
        if (ev.key === 'Enter' && (ev.ctrlKey || ev.metaKey)) { ev.preventDefault(); ejecutar(); }
      });
      fit();
      if (L.lang === 'jsx') ejecutar();
    } else if (ed) {
      const fit = () => { ed.style.height = 'auto'; ed.style.height = Math.max(140, ed.scrollHeight + 4) + 'px'; };
      const draw = () => { $('pv').srcdoc = '<style>body{font-family:Inter,Arial,sans-serif;padding:14px;margin:0;line-height:1.5}table{border-collapse:collapse}td,th{border:1px solid #ccc;padding:6px 10px}img{max-width:100%}</style>' + ed.value; };
      ed.addEventListener('input', () => { fit(); draw(); });
      ed.addEventListener('keydown', (ev) => { if (ev.key === 'Tab' && !ev.shiftKey) { ev.preventDefault(); const a = ed.selectionStart; ed.setRangeText('  ', a, ed.selectionEnd, 'end'); draw(); } });
      fit(); draw();
    }
  }
  $('toc').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) { i = +b.dataset.j; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); } });
  $('content').addEventListener('click', (e) => {
    const id = e.target.id;
    if (id === 'prev' && i > 0) i--;
    else if (id === 'next' && i < S.length - 1) { if (!done.includes(i)) { done.push(i); save(); } i++; window.scrollTo({ top: 0, behavior: 'smooth' }); }
    else if (id === 'reset') { $('ed').value = S[i].c; $('ed').dispatchEvent(new Event('input')); if ($('con')) $('con').innerHTML = '<i>Pulsa «Ejecutar» para ver la salida.</i>'; return; }
    else if (id === 'run') { ejecutar(); return; }
    else if (e.target.dataset.q !== undefined) {
      const q = S[i].q, k = +e.target.dataset.q;
      $('mini').querySelectorAll('.opt').forEach((b, j) => { b.disabled = true; if (j === q.ok) b.classList.add('ok'); else if (j === k) b.classList.add('bad'); });
      $('mfb').innerHTML = `<p class="mfb">${k === q.ok ? '¡Correcto! ' : 'Casi. '}${esc(q.why)}</p>`;
      return;
    }
    else if (id === 'tog') { done = done.includes(i) ? done.filter((y) => y !== i) : done.concat(i); save(); }
    else if (e.target.closest('a.btn') && last()) { if (!done.includes(i)) { done.push(i); save(); } return; }
    else return;
    render();
  });
  const last = () => i === S.length - 1;
  /* Ejecutar JavaScript en un iframe aislado y mostrar la consola */
  let runId = 0;
  function ejecutar() {
    const con = $('con'), code = $('ed').value.replace(/<\/script/gi, '<\\/script');
    runId = Math.random().toString(36).slice(2);
    con.innerHTML = '';
    const hook = `<script>const _id='${runId}';const fmt=(v)=>{if(typeof v==='string')return v;if(v instanceof Error)return v.name+': '+v.message;try{return JSON.stringify(v,(k,x)=>x instanceof Map?Object.fromEntries(x):x instanceof Set?[...x]:x)}catch(e){return String(v)}};const send=(t,a)=>parent.postMessage({_id,t,m:a.map(fmt).join(' ')},'*');console.log=console.info=(...a)=>send('log',a);console.warn=(...a)=>{if(String(a[0]).includes('in-browser Babel'))return;send('warn',a)};console.error=(...a)=>send('err',a);console.table=(d)=>send('log',[d]);window.onerror=(m)=>{send('err',[String(m).replace('Uncaught ','')]);return true};window.onunhandledrejection=(e)=>send('err',[fmt(e.reason)]);<\/script>`;
    const css = '<style>body{font-family:Inter,Arial,sans-serif;padding:10px;margin:0}button{font:inherit;padding:6px 12px;border-radius:8px;border:1px solid #c7c7d1;background:#fff;cursor:pointer}input{font:inherit;padding:6px 8px}</style>';
    if (L.lang === 'jsx') {
      /* React 18 + Babel desde CDN para transformar JSX en el navegador */
      $('pv').srcdoc = css + hook + '<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"><\/script><script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"><\/script><script src="https://unpkg.com/@babel/standalone@7.26.4/babel.min.js"><\/script><body><div id="app"></div><script type="text/babel" data-presets="react">' + code + '<\/script></body>';
    } else {
      $('pv').srcdoc = css + hook + '<body><div id="app"></div><script>' + code + '<\/script></body>';
    }
    setTimeout(() => { if (!con.children.length && runId) con.innerHTML = '<i>(sin salida en consola)</i>'; }, L.lang === 'jsx' ? 4000 : 1500);
  }
  window.addEventListener('message', (ev) => {
    const d = ev.data; if (!d || d._id !== runId) return;
    const con = $('con'); if (!con) return;
    if (con.querySelector('i')) con.innerHTML = '';
    const line = document.createElement('div'); line.className = 'ln ' + d.t; line.textContent = d.m; con.appendChild(line);
  });
  render();
}
