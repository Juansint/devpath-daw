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
    $('count').textContent = topic.name + ' · Cap. ' + (ci + 1) + ' · ' + done.length + '/' + S.length;
    $('bar').style.width = Math.round(done.length / S.length * 100) + '%';
    $('toc').innerHTML = S.map((y, j) => `<button type="button" data-j="${j}" aria-current="${j === i}" class="${done.includes(j) ? 'ok' : ''}"><span class="badge">${done.includes(j) ? '✓' : j + 1}</span><span>${y.n}&nbsp; ${esc(y.t)}</span></button>`).join('');
    const next = ci < caps.length - 1
      ? `<a class="btn primary" href="${base}/${ci + 2}">Capítulo ${ci + 2}: ${esc(caps[ci + 1].t)} →</a>`
      : `<a class="btn primary" href="${base}">Tema completado 🎉 Ir a la práctica</a>`;
    $('content').innerHTML = `
      <div class="row" style="gap:8px"><span class="pill" style="background:${topic.bg};color:${topic.fg}">${esc(topic.name)} · ${x.n}</span><span class="pill p-green">${x.m} de lectura</span></div>
      <h1>${esc(x.t)}</h1><p>${esc(x.b)}</p>
      <div class="keys"><b>Ideas clave</b><ul>${x.k.map((k) => `<li>${esc(k)}</li>`).join('')}</ul></div>
      <div class="code"><div class="bar mono"><span>Ejemplo</span><span>${L.lang}</span></div><pre>${esc(x.c)}</pre></div>
      <div class="tip"><b>En clase:</b> ${esc(x.tip)}</div>
      <div class="row" style="justify-content:space-between;border-top:1px solid #F0F0F5;padding-top:18px">
        <button class="btn ghost" id="prev" ${i === 0 ? 'disabled' : ''}>← Anterior</button>
        <div class="row" style="gap:10px">
          <button class="btn ${isDone ? 'done' : 'ghost'}" id="tog" aria-pressed="${isDone}">${isDone ? '✓ Completada' : 'Marcar como completada'}</button>
          ${last ? next : '<button class="btn primary" id="next">Siguiente →</button>'}
        </div>
      </div>`;
  }
  $('toc').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) { i = +b.dataset.j; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); } });
  $('content').addEventListener('click', (e) => {
    const id = e.target.id;
    if (id === 'prev' && i > 0) i--;
    else if (id === 'next' && i < S.length - 1) { if (!done.includes(i)) { done.push(i); save(); } i++; window.scrollTo({ top: 0, behavior: 'smooth' }); }
    else if (id === 'tog') { done = done.includes(i) ? done.filter((y) => y !== i) : done.concat(i); save(); }
    else if (e.target.closest('a.btn') && last()) { if (!done.includes(i)) { done.push(i); save(); } return; }
    else return;
    render();
  });
  const last = () => i === S.length - 1;
  render();
}
