const $ = (s) => document.querySelector(s);
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const slug = location.pathname.split('/').filter(Boolean).pop();
const t = TOPICS.find((x) => x.slug === slug && !x.href);
if (!t) { location.replace('/'); throw new Error('Tema no encontrado'); }

document.title = t.name + ' — DevPath';
$('#tabs').innerHTML = TOPICS.map((x) => `<a href="${x.href || '/tema/' + x.slug}" ${x.slug === t.slug ? 'aria-current="page"' : ''}>${x.slug === 'git' ? 'Git' : x.name}</a>`).join('');
$('#badge').textContent = t.badge; $('#badge').style.cssText = `background:${t.bg};color:${t.fg}`;
$('#area').textContent = t.area; $('#area').style.cssText = `background:${t.bg};color:${t.fg}`;
$('#name').textContent = t.name; $('#desc').textContent = t.desc;
$('#ext').href = t.url; $('#ext').textContent = 'Ampliar en ' + t.site + ' ↗';
$('#ptitle').textContent = t.practiceTitle;
$('#ctitle').textContent = 'Chuleta de ' + t.name;

/* Lecciones: los 4 pasos de la ruta son capítulos con secciones */
function renderSteps(L) {
  let total = 0, hechos = 0;
  const caps = L ? L.capitulos : t.steps.map((s) => ({ t: s[0], d: s[1], secciones: [] }));
  $('#stitle').textContent = 'Lecciones · ' + caps.length + ' capítulos';
  $('#steps').innerHTML = caps.map((c, i) => {
    const n = c.secciones.length;
    let d = [];
    try { d = JSON.parse(localStorage.getItem('devpath-' + t.slug + '-c' + (i + 1)) || '[]'); } catch (e) { d = []; }
    total += n; hechos += Math.min(d.length, n);
    const ok = n && d.length >= n;
    const desc = c.d || (t.steps[i] ? t.steps[i][1] : '');
    return `<a class="paso${ok ? ' ok' : ''}" href="/tema/${t.slug}/${i + 1}"><span class="n">${ok ? '✓' : i + 1}</span><span><b>${esc(c.t)}</b><small>${esc(desc)}</small><em>${n ? Math.min(d.length, n) + ' de ' + n + ' secciones' : 'Lección'} · Abrir →</em></span></a>`;
  }).join('');
  $('#scount').textContent = total ? hechos + ' de ' + total + ' secciones' : '';
  $('#sbar').style.width = total ? Math.round(hechos / total * 100) + '%' : '0%';
}
renderSteps(null);
const ls = document.createElement('script');
ls.src = '/lecciones/' + t.slug + '.js';
ls.onload = () => renderSteps(LECCIONES[t.slug]);
document.head.appendChild(ls);

/* Prácticas */
const P = $('#practice');
const practices = {
  flex() {
    const st = { 'flex-direction': 'row', 'justify-content': 'flex-start', 'align-items': 'stretch' };
    const groups = { 'flex-direction': ['row', 'column'], 'justify-content': ['flex-start', 'center', 'space-between', 'space-around'], 'align-items': ['stretch', 'flex-start', 'center', 'flex-end'] };
    P.innerHTML = `<div class="prac"><div class="card ctrl">${Object.keys(groups).map((g) => `<div><div class="mono" style="font-size:13px;margin-bottom:8px">${g}</div><div class="pills" data-g="${g}">${groups[g].map((o) => `<button type="button" data-o="${o}">${o}</button>`).join('')}</div></div>`).join('')}</div>
      <div class="view"><div class="flexbox" id="fbox"><div style="height:56px;background:#4F46E5">1</div><div style="height:88px;background:#0E9F6E">2</div><div style="height:40px;background:#B45309">3</div></div><pre class="darkpre mono" id="fcode"></pre></div></div>`;
    const draw = () => {
      const box = $('#fbox'); Object.keys(st).forEach((k) => box.style.setProperty(k, st[k]));
      box.querySelectorAll('div').forEach((d) => { d.style.height = st['align-items'] === 'stretch' ? 'auto' : d.dataset.h || d.style.height; });
      P.querySelectorAll('.pills').forEach((p) => p.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', st[p.dataset.g] === b.dataset.o)));
      $('#fcode').textContent = `.contenedor {\n  display: flex;\n  flex-direction: ${st['flex-direction']};\n  justify-content: ${st['justify-content']};\n  align-items: ${st['align-items']};\n  gap: 12px;\n}`;
    };
    $('#fbox').querySelectorAll('div').forEach((d) => (d.dataset.h = d.style.height));
    P.addEventListener('click', (e) => { const b = e.target.closest('.pills button'); if (b) { st[b.parentElement.dataset.g] = b.dataset.o; draw(); } });
    draw();
  },
  sql() {
    const C = { DAW1: 'Elena', DAW2: 'Raúl' };
    const A = [[1, 'Ana', 'DAW1', 8.5], [2, 'Luis', 'DAW1', 6], [3, 'Marta', 'DAW2', 9.2], [4, 'Javi', 'DAW2', 4.8], [5, 'Sara', 'DAW1', 7.1]];
    const Q = [
      { q: 'SELECT * FROM alumnos;', cols: ['id', 'nombre', 'curso', 'nota'], rows: A, note: 'El asterisco trae todas las columnas.' },
      { q: 'SELECT nombre, nota\nFROM alumnos\nWHERE nota >= 7;', cols: ['nombre', 'nota'], rows: A.filter((a) => a[3] >= 7).map((a) => [a[1], a[3]]), note: 'WHERE deja solo las filas que cumplen la condición.' },
      { q: 'SELECT nombre, nota\nFROM alumnos\nORDER BY nota DESC\nLIMIT 3;', cols: ['nombre', 'nota'], rows: A.slice().sort((a, b) => b[3] - a[3]).slice(0, 3).map((a) => [a[1], a[3]]), note: 'ORDER BY DESC ordena de mayor a menor y LIMIT corta el resultado.' },
      { q: 'SELECT curso, COUNT(*) AS total,\n       ROUND(AVG(nota), 1) AS media\nFROM alumnos\nGROUP BY curso;', cols: ['curso', 'total', 'media'], rows: ['DAW1', 'DAW2'].map((c) => { const g = A.filter((a) => a[2] === c); return [c, g.length, Math.round(g.reduce((x, a) => x + a[3], 0) / g.length * 10) / 10]; }), note: 'GROUP BY junta las filas de cada curso y calcula agregados.' },
      { q: 'SELECT a.nombre, c.tutor\nFROM alumnos a\nJOIN cursos c ON c.codigo = a.curso\nWHERE a.nota >= 7;', cols: ['nombre', 'tutor'], rows: A.filter((a) => a[3] >= 7).map((a) => [a[1], C[a[2]]]), note: 'JOIN une cada alumno con su curso (tabla cursos: DAW1 → Elena, DAW2 → Raúl).' },
      { q: 'SELECT nombre, nota\nFROM alumnos\nWHERE nota > (SELECT AVG(nota) FROM alumnos);', cols: ['nombre', 'nota'], rows: A.filter((a) => a[3] > A.reduce((s, x) => s + x[3], 0) / A.length).map((a) => [a[1], a[3]]), note: 'La subconsulta calcula la media (7.12) y el WHERE compara cada nota con ella.' },
      { q: "ALTER TABLE alumnos\n  ADD COLUMN email VARCHAR(150);\nSELECT id, nombre, email FROM alumnos;", cols: ['id', 'nombre', 'email'], rows: A.map((a) => [a[0], a[1], 'NULL']), note: 'ALTER TABLE añade la columna a la tabla existente; las filas que ya había quedan con NULL.' }
    ];
    let sel = 0;
    P.innerHTML = `<div class="prac"><div class="card ctrl" style="gap:10px"><span style="font-size:13px;color:var(--muted)">Elige una consulta sobre la tabla <code class="mono" style="color:#3730A3">alumnos</code>:</span><div id="qlist" style="display:flex;flex-direction:column;gap:10px"></div></div><div class="view"><pre class="darkpre mono" id="sq" style="font-size:14px"></pre><div class="tbl"><table id="st"></table></div><span id="sn" style="font-size:13px;color:var(--muted)"></span></div></div>`;
    const draw = () => {
      $('#qlist').innerHTML = Q.map((x, i) => `<button type="button" class="qbtn" data-i="${i}" aria-pressed="${i === sel}">${esc(x.q.replace(/\s+/g, ' '))}</button>`).join('');
      const x = Q[sel]; $('#sq').textContent = x.q; $('#sn').textContent = x.note;
      $('#st').innerHTML = `<thead><tr>${x.cols.map((c) => `<th>${c}</th>`).join('')}</tr></thead><tbody>${x.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody>`;
    };
    P.addEventListener('click', (e) => { const b = e.target.closest('.qbtn'); if (b) { sel = +b.dataset.i; draw(); } });
    draw();
  },
  html() {
    const S = {
      'Título': '<h1>Hola, DAW</h1>\n<p>Este es mi primer párrafo.</p>',
      'Lista': '<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>',
      'Formulario': '<form>\n  <label for="email">Correo</label>\n  <input id="email" type="email" placeholder="tu@correo.com">\n  <button type="submit">Enviar</button>\n</form>',
      'Enlace e imagen': '<a href="https://developer.mozilla.org/es/">Documentación MDN</a>\n<br>\n<img src="https://placehold.co/240x120?text=Imagen" alt="Imagen de ejemplo">'
    };
    P.innerHTML = `<div class="prac"><div class="card ctrl" style="gap:10px"><span style="font-size:13px;color:var(--muted)">Elige un ejemplo y edítalo:</span><div class="pills" id="hp">${Object.keys(S).map((k) => `<button type="button" data-k="${k}">${k}</button>`).join('')}</div>
      <label for="hcode" style="font-size:13px;font-weight:600">Tu código HTML</label><textarea id="hcode" class="mono" spellcheck="false" style="min-height:200px;background:var(--dark);color:#E5E7F5;border:0;border-radius:14px;padding:16px;font-size:13px;line-height:1.7;resize:vertical"></textarea></div>
      <div class="view preview"><div class="bar">Vista previa</div><iframe id="hview" title="Vista previa del HTML" sandbox="" style="width:100%;height:320px;border:0;background:#fff"></iframe></div></div>`;
    let cur = 'Título';
    const draw = () => {
      $('#hview').srcdoc = '<style>body{font-family:Georgia,serif;padding:20px}</style>' + $('#hcode').value;
      $('#hp').querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', b.dataset.k === cur));
    };
    $('#hp').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) { cur = b.dataset.k; $('#hcode').value = S[cur]; draw(); } });
    $('#hcode').addEventListener('input', draw);
    $('#hcode').value = S[cur]; draw();
  },
  code() {
    P.innerHTML = `<div class="prac"><div class="editor"><div class="bar mono"><span>${t.file}</span><button type="button" class="run" id="run">▶ Ejecutar</button></div><pre class="mono" style="margin:0;padding:18px;color:#E5E7F5;font-size:14px;line-height:1.8;white-space:pre-wrap">${esc(t.code)}</pre></div>
      <div class="card out"><b style="font-size:13px">Salida</b><div id="outbox"><span style="font-size:14px;color:var(--muted);line-height:1.6">Antes de ejecutar: ¿qué crees que va a salir? Piénsalo y pulsa «Ejecutar».</span></div></div></div>`;
    $('#run').addEventListener('click', () => {
      $('#outbox').innerHTML = `<pre class="mono">${esc(t.output)}</pre><p style="font-size:14px;color:#374151;line-height:1.6;margin:10px 0 0">${esc(t.why)}</p>`;
    });
  }
};
practices[t.practice]();

/* Chuleta */
function renderCheats() {
  const q = $('#buscar-chuleta').value.trim().toLowerCase();
  const list = t.cheats.filter((c) => !q || (c[0] + ' ' + c[1]).toLowerCase().includes(q));
  $('#cheats').innerHTML = list.length ? list.map((c) => `<div class="card cmd" style="padding:14px 16px"><code title="Copiar">${esc(c[0])}</code><p style="margin:0">${esc(c[1])}</p></div>`).join('') : '<p style="color:var(--muted)">Nada coincide. Prueba con otra palabra.</p>';
}
$('#buscar-chuleta').addEventListener('input', renderCheats);
$('#cheats').addEventListener('click', (e) => {
  const c = e.target.closest('code'); if (!c || !navigator.clipboard) return;
  const txt = c.textContent; navigator.clipboard.writeText(txt).then(() => { c.textContent = '¡Copiado!'; setTimeout(() => (c.textContent = txt), 900); });
});
renderCheats();

/* Retos */
let qi = 0, picked = null, score = 0;
function renderQuiz() {
  const q = t.quiz[qi], ans = picked !== null, last = qi === t.quiz.length - 1;
  $('#qmeta').textContent = 'Reto ' + (qi + 1) + ' de ' + t.quiz.length + ' · ' + t.name; $('#score').textContent = score;
  $('#qtext').textContent = q.t;
  $('#opts').innerHTML = q.o.map((o, i) => `<button type="button" class="opt ${ans && i === q.ok ? 'ok' : ans && i === picked ? 'bad' : ''}" data-i="${i}">${esc(o)}</button>`).join('');
  $('#fb').innerHTML = ans ? `<div class="fb"><span style="flex:1 1 260px">${picked === q.ok ? '¡Correcto! ' : 'Casi. '}${esc(q.why)}</span><button class="btn primary" id="nextq">${last ? 'Volver a empezar' : 'Siguiente'}</button></div>` : '';
}
$('#opts').addEventListener('click', (e) => { const b = e.target.closest('.opt'); if (!b || picked !== null) return; picked = +b.dataset.i; if (picked === t.quiz[qi].ok) score++; renderQuiz(); });
$('#fb').addEventListener('click', (e) => { if (e.target.id !== 'nextq') return; if (qi === t.quiz.length - 1) { qi = 0; score = 0; } else qi++; picked = null; renderQuiz(); });
renderQuiz();
