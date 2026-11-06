const $ = (s) => document.querySelector(s);
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
let area = 'Todas';

function renderTopics() {
  const q = $('#buscar-tema').value.trim().toLowerCase();
  const list = TOPICS.filter((t) => (area === 'Todas' || t.area === area) &&
    (!q || (t.name + ' ' + t.keys + ' ' + t.desc).toLowerCase().includes(q)));
  $('#areas').innerHTML = ['Todas', 'Frontend', 'Backend', 'Datos', 'Herramientas']
    .map((a) => `<button type="button" aria-pressed="${a === area}" data-a="${a}">${a}</button>`).join('');
  $('#topics').innerHTML = list.map((t) => `
    <a class="card topic" href="${t.href || '/tema/' + t.slug}">
      <span class="head"><span class="badge48" style="background:${t.bg};color:${t.fg}">${esc(t.badge)}</span>
      <span class="pill" style="background:${t.bg};color:${t.fg}">${t.area}</span></span>
      <h3>${t.name}</h3><p>${t.desc}</p>
      <span class="tags"><span>Lecciones</span><span>${t.practiceTag}</span><span>Chuleta</span><span>Retos</span></span>
      <span class="foot"><span>Recurso: ${t.site}</span><b>Abrir →</b></span>
    </a>`).join('');
  $('#notopics').hidden = list.length > 0;
}
$('#areas').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) { area = b.dataset.a; renderTopics(); } });
$('#buscar-tema').addEventListener('input', renderTopics);
renderTopics();

/* Ruta con progreso guardado */
const ORDER = ['HTML', 'CSS', 'JavaScript', 'Git', 'SQL', 'Java', 'PHP', 'React'];
let done = [];
try { done = JSON.parse(localStorage.getItem('devpath-ruta') || '[]'); } catch (e) { done = []; }
function renderPath() {
  $('#path').innerHTML = ORDER.map((l, i) => `<button type="button" data-l="${l}" aria-pressed="${done.includes(l)}"><small>Paso ${i + 1}</small><b>${done.includes(l) ? '✓ ' : ''}${l}</b></button>`).join('');
  $('#pcount').textContent = done.length + ' de ' + ORDER.length + ' temas';
  $('#pbar').style.width = Math.round(done.length / ORDER.length * 100) + '%';
}
$('#path').addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b) return;
  const l = b.dataset.l; done = done.includes(l) ? done.filter((x) => x !== l) : done.concat(l);
  try { localStorage.setItem('devpath-ruta', JSON.stringify(done)); } catch (err) {}
  renderPath();
});
renderPath();

$('#res').innerHTML = RESOURCES.map((r) => `<a href="${r[2]}" target="_blank" rel="noopener"><b>${r[0]}</b><span>${r[1]} ↗</span></a>`).join('');
