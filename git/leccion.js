const $ = (s) => document.getElementById(s);
const esc = (t) => String(t).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

/* Capítulo a partir de la URL: /git/capitulo/3 */
const num = parseInt(location.pathname.split('/').filter(Boolean).pop(), 10);
const ci = num >= 1 && num <= CAPITULOS.length ? num - 1 : 0;
const cap = CAPITULOS[ci];
const S = cap.secciones;
document.title = 'Capítulo ' + (ci + 1) + ': ' + cap.t + ' — DevPath';

$('cap').innerHTML = CAPITULOS.map((c, j) => `<option value="${j + 1}" ${j === ci ? 'selected' : ''}>${j + 1}. ${esc(c.t)}</option>`).join('');
$('cap').addEventListener('change', (e) => { location.href = '/git/capitulo/' + e.target.value; });
$('captitle').textContent = cap.nivel + ' · ' + S.length + ' secciones';

const KEY = 'gitpath-c' + (ci + 1);
let i = 0, done = [];
try { done = JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { done = []; }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {} };

function render() {
  const s = S[i], isDone = done.includes(i), last = i === S.length - 1;
  $('count').textContent = 'Capítulo ' + (ci + 1) + ' · ' + done.length + '/' + S.length;
  $('bar').style.width = Math.round(done.length / S.length * 100) + '%';
  $('toc').innerHTML = S.map((x, j) => `<button type="button" data-j="${j}" aria-current="${j === i}" class="${done.includes(j) ? 'ok' : ''}"><span class="badge">${done.includes(j) ? '✓' : j + 1}</span><span>${x.n}&nbsp; ${esc(x.t)}</span></button>`).join('');
  const nextCap = ci < CAPITULOS.length - 1
    ? `<a class="btn primary" href="/git/capitulo/${ci + 2}">Capítulo ${ci + 2}: ${esc(CAPITULOS[ci + 1].t)} →</a>`
    : `<a class="btn primary" href="/git">Has terminado el libro 🎉 Volver a Git</a>`;
  $('content').innerHTML = `
    <div class="row" style="gap:8px"><span class="pill p-indigo">Capítulo ${ci + 1} · Sección ${s.n}</span><span class="pill p-green">${s.m} de lectura</span></div>
    <h1>${esc(s.t)}</h1><p>${esc(s.b)}</p>
    <div class="keys"><b>Ideas clave</b><ul>${s.k.map((k) => `<li>${esc(k)}</li>`).join('')}</ul></div>
    <div class="code"><div class="bar mono"><span>Pruébalo en tu terminal</span><span>bash</span></div><pre>${esc(s.c)}</pre></div>
    <div class="tip"><b>En clase:</b> ${esc(s.tip)}</div>
    <div class="row" style="justify-content:space-between;border-top:1px solid #F0F0F5;padding-top:18px">
      <button class="btn ghost" id="prev" ${i === 0 ? 'disabled' : ''}>← Anterior</button>
      <div class="row" style="gap:10px">
        <button class="btn ${isDone ? 'done' : 'ghost'}" id="tog" aria-pressed="${isDone}">${isDone ? '✓ Completada' : 'Marcar como completada'}</button>
        ${last ? nextCap : '<button class="btn primary" id="next">Siguiente →</button>'}
      </div>
    </div>`;
}
$('toc').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) { i = +b.dataset.j; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); } });
$('content').addEventListener('click', (e) => {
  const id = e.target.id;
  if (id === 'prev' && i > 0) i--;
  else if (id === 'next' && i < S.length - 1) { if (!done.includes(i)) { done.push(i); save(); } i++; window.scrollTo({ top: 0, behavior: 'smooth' }); }
  else if (id === 'tog') { done = done.includes(i) ? done.filter((x) => x !== i) : done.concat(i); save(); }
  else return;
  render();
});
render();
