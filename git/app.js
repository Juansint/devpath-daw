const $ = (s) => document.querySelector(s);
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* Terminal animada */
const lines = [
  ['p', 'git switch -c feature/login'], ['o', "Switched to a new branch 'feature/login'"],
  ['p', 'git commit -m "Añade formulario"'], ['o', '[feature/login 3f9a2c1] Añade formulario'],
  ['p', 'git push -u origin feature/login'], ['g', '→ Abre una Pull Request en GitHub']
];
(function type() {
  const el = $('#typer'); let i = 0;
  const next = () => {
    if (i >= lines.length) { setTimeout(() => { el.innerHTML = ''; i = 0; next(); }, 4000); return; }
    const [k, t] = lines[i++]; const d = document.createElement('div');
    d.innerHTML = k === 'p' ? '<span class="p">$</span> ' + esc(t) : '<span class="' + k + '">' + esc(t) + '</span>';
    el.appendChild(d); setTimeout(next, k === 'p' ? 900 : 500);
  };
  next();
})();

/* Capítulos */
const tiles = [['#EEF0FF', '#3730A3'], ['#ECFDF5', '#065F46'], ['#FFFBEB', '#92400E'], ['#F5F3FF', '#5B21B6']];
const chapters = [
  ['Inicio: sobre el control de versiones', 'Qué es el control de versiones, la historia de Git, instalación y tu primera configuración.', 'Básico', 1],
  ['Fundamentos de Git', 'Crear un repositorio, preparar y confirmar cambios, ver el historial y deshacer errores.', 'Básico', 1],
  ['Ramificaciones en Git', 'Crear, fusionar y gestionar ramas. Flujos de trabajo con ramas y rebase.', 'Básico', null],
  ['Git en el servidor', 'Protocolos, claves SSH, montar tu propio servidor y opciones de alojamiento.', 'Intermedio', 1],
  ['Git en entornos distribuidos', 'Flujos de trabajo en equipo, cómo contribuir a un proyecto y cómo mantenerlo.', 'Intermedio', 1],
  ['GitHub', 'Tu cuenta, forks y pull requests, mantener proyectos y trabajar en organizaciones.', 'Intermedio', 1],
  ['Herramientas de Git', 'Stash, reescribir la historia, reset a fondo, bisect, submódulos y más.', 'Avanzado', 1],
  ['Personalización de Git', 'Configuración, atributos y hooks para adaptar Git a tu equipo.', 'Avanzado', 1],
  ['Git y otros sistemas', 'Usar Git junto a otros sistemas de control de versiones y migrar a Git.', 'Avanzado', 1],
  ['Los entresijos internos de Git', 'Objetos, referencias y packfiles: cómo funciona Git por dentro.', 'Avanzado', 1]
];
let level = 'Todos';
function renderChapters() {
  $('#levels').innerHTML = ['Todos', 'Básico', 'Intermedio', 'Avanzado'].map((l) => `<button type="button" aria-pressed="${l === level}" data-l="${l}">${l}</button>`).join('');
  $('#chapters').innerHTML = chapters.map((c, i) => ({ c, i })).filter(({ c }) => level === 'Todos' || c[2] === level).map(({ c, i }) => {
    return `<a class="card chap" href="/git/capitulo/${i + 1}"><span class="tile" style="background:${tiles[i % 4][0]};color:${tiles[i % 4][1]}">${String(i + 1).padStart(2, '0')}</span><h3>${c[0]}</h3><p>${c[1]}</p><span class="foot"><span>${c[2]}</span><b>Lección interactiva →</b></span></a>`;
  }).join('');
}
$('#levels').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) { level = b.dataset.l; renderChapters(); } });
renderChapters();

/* Ruta */
const stages = [
  { t: 'Fundamentos', c: 'Cap. 1–2', g: 'Instalar y configurar Git, crear tu primer repositorio y entender el ciclo modificar → preparar → confirmar.', k: ['git config', 'git init', 'git add', 'git commit', 'git log'] },
  { t: 'Ramas', c: 'Cap. 3', g: 'Trabajar en paralelo sin romper main: crear ramas, cambiar entre ellas, fusionarlas y resolver conflictos.', k: ['git branch', 'git switch', 'git merge', 'git rebase'] },
  { t: 'Remotos', c: 'Cap. 2 y 4', g: 'Conectar tu repositorio local con uno remoto, subir y bajar cambios y entender qué pasa en el servidor.', k: ['git remote', 'git push', 'git pull', 'git fetch'] },
  { t: 'Colaboración', c: 'Cap. 5–6', g: 'Trabajar en equipo en GitHub: forks, pull requests, revisiones de código e issues.', k: ['fork', 'pull request', 'git clone', 'code review'] },
  { t: 'Nivel pro', c: 'Cap. 7–10', g: 'Reescribir historia con cuidado, guardar trabajo a medias, automatizar con hooks y entender Git por dentro.', k: ['git stash', 'git reset', 'git bisect', 'hooks'] }
];
let stage = 0;
function renderRoad() {
  $('#road').innerHTML = stages.map((s, i) => `<button type="button" data-i="${i}" aria-pressed="${i === stage}" class="${i < stage ? 'done' : i === stage ? 'on' : ''}"><span class="dot">${i < stage ? '✓' : i + 1}</span><b>${s.t}</b><small>${s.c}</small></button>`).join('');
  const s = stages[stage];
  $('#stage').innerHTML = `<div><h3>${s.t}</h3><p>${s.g}</p></div><div>${s.k.map((k) => `<code class="kbd">${k}</code>`).join('')}</div>`;
}
$('#road').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) { stage = +b.dataset.i; renderRoad(); } });
renderRoad();

/* Simulador */
const colors = ['#4F46E5', '#0E9F6E', '#D97706'];
let repo;
const hash = () => Math.random().toString(16).slice(2, 9);
function initRepo() {
  repo = {
    commits: [{ id: hash(), lane: 0, col: 0, merge: false }],
    branches: [{ name: 'main', lane: 0, head: 0, originCol: 0, parentLane: null }],
    merges: [], current: 'main', log: ['git init', 'git commit -m "Primer commit"'],
    explain: 'Este es tu repositorio: un commit en la rama main. Pulsa «git commit» para guardar otro cambio.'
  };
}
const cur = () => repo.branches.find((b) => b.name === repo.current);
const full = () => repo.commits.length >= 14 && (repo.explain = 'El historial está lleno. Pulsa «Reiniciar» para empezar otra vez.', true);
const actions = {
  commit() {
    if (full()) return;
    const b = cur(); repo.commits.push({ id: hash(), lane: b.lane, col: repo.commits.length, merge: false });
    b.head = repo.commits.length - 1; repo.log.push('git commit -m "Cambio ' + repo.commits.length + '"');
    repo.explain = 'Guardaste una instantánea del proyecto. La rama «' + b.name + '» avanza hasta el nuevo commit.';
  },
  branch() {
    const name = ['feature', 'hotfix'].find((n) => !repo.branches.some((b) => b.name === n));
    if (!name) { repo.explain = 'Ya tienes tres ramas: suficiente para practicar. Prueba «git switch» o «git merge».'; return; }
    const b = cur();
    repo.branches.push({ name, lane: repo.branches.length, head: b.head, originCol: repo.commits[b.head].col, parentLane: b.lane });
    repo.log.push('git branch ' + name);
    repo.explain = 'Creaste «' + name + '»: solo un puntero nuevo al mismo commit. Por eso crear ramas en Git es instantáneo. Ojo: sigues en «' + repo.current + '».';
  },
  switch() {
    if (repo.branches.length < 2) { repo.explain = 'Solo existe main. Crea una rama con «git branch» antes de cambiarte.'; return; }
    const i = repo.branches.findIndex((b) => b.name === repo.current);
    repo.current = repo.branches[(i + 1) % repo.branches.length].name; repo.log.push('git switch ' + repo.current);
    repo.explain = 'HEAD ahora apunta a «' + repo.current + '». Tus próximos commits se guardarán en esa rama.';
  },
  merge() {
    const b = cur();
    const other = repo.branches.find((x) => x.name !== b.name && x.head !== b.head && repo.commits[x.head].col > (x.name === 'main' ? -1 : x.originCol));
    if (!other) { repo.explain = 'No hay trabajo nuevo que fusionar. Haz commits en otra rama y vuelve aquí.'; return; }
    if (full()) return;
    const col = repo.commits.length; repo.commits.push({ id: hash(), lane: b.lane, col, merge: true });
    repo.merges.push({ col, from: other.lane, to: b.lane }); b.head = col; repo.log.push('git merge ' + other.name);
    repo.explain = 'Git combinó el trabajo de «' + other.name + '» dentro de «' + b.name + '» con un commit de fusión (el de borde grueso).';
  }
};
function renderGraph() {
  const X = (c) => 48 + c * 72, Y = (l) => 70 + l * 78; let h = '';
  const seg = (l, t, w, hh, c) => { h += `<div class="seg-l" style="left:${l}px;top:${t}px;width:${w}px;height:${hh}px;background:${c}"></div>`; };
  repo.branches.forEach((b) => {
    const cols = repo.commits.filter((c) => c.lane === b.lane).map((c) => c.col).concat(repo.merges.filter((m) => m.from === b.lane).map((m) => m.col));
    const end = cols.length ? Math.max(...cols) : b.originCol;
    if (end > b.originCol) seg(X(b.originCol), Y(b.lane) - 2, X(end) - X(b.originCol), 4, colors[b.lane]);
    if (b.parentLane !== null) seg(X(b.originCol) - 2, Y(b.parentLane), 4, Y(b.lane) - Y(b.parentLane), colors[b.lane]);
  });
  repo.merges.forEach((m) => { const a = Math.min(Y(m.from), Y(m.to)), z = Math.max(Y(m.from), Y(m.to)); seg(X(m.col) - 2, a, 4, z - a, colors[m.from]); });
  repo.commits.forEach((c) => {
    const st = c.merge ? `background:#fff;border:5px solid ${colors[c.lane]}` : `background:${colors[c.lane]};border:3px solid #fff;box-shadow:0 0 0 1px ${colors[c.lane]}`;
    h += `<div class="cm" title="commit ${c.id}" style="left:${X(c.col) - 11}px;top:${Y(c.lane) - 11}px;${st}"></div>`;
  });
  const stack = {};
  repo.branches.forEach((b) => {
    const c = repo.commits[b.head], k = c.col + '-' + c.lane, n = stack[k] || 0; stack[k] = n + 1;
    const on = b.name === repo.current;
    const st = on ? `background:${colors[b.lane]};color:#fff` : `background:#fff;color:#1F2937;border:1px solid ${colors[b.lane]}`;
    h += `<span class="tag" style="left:${X(c.col) - 12}px;top:${Y(c.lane) - 40 - n * 22}px;${st}">${on ? 'HEAD → ' : ''}${b.name}</span>`;
  });
  const g = $('#graph'); g.style.width = Math.max(640, X(Math.max(...repo.commits.map((c) => c.col))) + 160) + 'px'; g.innerHTML = h;
  $('#current').textContent = repo.current; $('#explain').textContent = repo.explain;
  const lg = $('#log'); lg.innerHTML = repo.log.map((l) => `<div><span style="color:#8B93FF">$</span> ${esc(l)}</div>`).join(''); lg.scrollTop = lg.scrollHeight;
  $('#graph').parentElement.scrollLeft = 9999;
}
document.querySelector('.actions').addEventListener('click', (e) => { const b = e.target.closest('[data-act]'); if (b) { actions[b.dataset.act](); renderGraph(); } });
$('#reset').addEventListener('click', () => { initRepo(); renderGraph(); });
initRepo(); renderGraph();

/* Chuleta */
const cmds = [
  ['git init', 'Convierte la carpeta actual en un repositorio de Git.', 2],
  ['git clone <url>', 'Descarga una copia completa de un repositorio remoto.', 2],
  ['git status', 'Muestra qué archivos han cambiado y cuáles están preparados.', 2],
  ['git add <archivo>', 'Prepara cambios para el próximo commit (staging).', 2],
  ['git commit -m "mensaje"', 'Guarda una instantánea de los cambios preparados.', 2],
  ['git log --oneline --graph', 'Muestra el historial resumido con el dibujo de ramas.', 2],
  ['git diff', 'Enseña las diferencias que aún no has preparado.', 2],
  ['git restore <archivo>', 'Descarta los cambios de un archivo y deshace lo que no querías.', 2],
  ['git branch <nombre>', 'Crea una rama nueva que apunta al commit actual.', 3],
  ['git switch <rama>', 'Cambia a otra rama (antes se usaba git checkout).', 3],
  ['git merge <rama>', 'Fusiona otra rama dentro de la rama en la que estás.', 3],
  ['git rebase <rama>', 'Reaplica tus commits encima de otra rama para un historial lineal.', 3],
  ['git remote add origin <url>', 'Conecta tu repositorio local con uno remoto, por ejemplo en GitHub.', 2],
  ['git push origin <rama>', 'Sube tus commits al repositorio remoto.', 2],
  ['git pull', 'Descarga los cambios del remoto y los fusiona en tu rama.', 2],
  ['git stash', 'Guarda tu trabajo a medias para dejar la rama limpia.', 7],
  ['git reset --soft HEAD~1', 'Deshace el último commit pero conserva los cambios.', 7]
];
function renderCmds() {
  const q = $('#buscar').value.trim().toLowerCase();
  const list = cmds.filter((c) => !q || (c[0] + ' ' + c[1]).toLowerCase().includes(q));
  $('#cmds').innerHTML = list.map((c) => `<div class="card cmd"><code title="Copiar">${esc(c[0])}</code><p>${c[1]}</p><small>Capítulo ${c[2]}</small></div>`).join('');
  $('#noresults').hidden = list.length > 0;
}
$('#buscar').addEventListener('input', renderCmds);
$('#cmds').addEventListener('click', (e) => {
  const c = e.target.closest('code'); if (!c) return;
  navigator.clipboard?.writeText(c.textContent).then(() => { const t = c.textContent; c.textContent = '¡Copiado!'; setTimeout(() => (c.textContent = t), 900); });
});
renderCmds();

/* Retos */
const quiz = [
  { cap: 2, t: '¿Qué comando lleva tus cambios al área de preparación (staging)?', o: ['git commit', 'git add', 'git push', 'git stash'], ok: 1, why: 'git add prepara los cambios; git commit los guarda después.' },
  { cap: 3, t: 'En Git, una rama es…', o: ['Una copia completa del proyecto', 'Un servidor remoto', 'Un puntero móvil a un commit', 'Un archivo de configuración'], ok: 2, why: 'Una rama es solo un puntero ligero que avanza con cada commit.' },
  { cap: 3, t: 'Estás en main y ejecutas git merge feature. ¿Qué pasa?', o: ['Se borra la rama feature', 'Los cambios de feature se integran en main', 'main se sube a GitHub', 'Se crea la rama feature'], ok: 1, why: 'merge trae el trabajo de la otra rama a la rama donde estás.' },
  { cap: 2, t: '¿Qué comando sube tus commits a GitHub?', o: ['git pull', 'git fetch', 'git push', 'git clone'], ok: 2, why: 'git push envía tus commits locales al repositorio remoto.' },
  { cap: 6, t: 'En GitHub, ¿qué es una pull request?', o: ['Una petición para fusionar tus cambios en otra rama', 'Descargar el repositorio', 'Borrar una rama remota', 'Un tipo de commit'], ok: 0, why: 'Una PR propone integrar tu rama y permite revisar y comentar el código antes.' }
];
let qi = 0, picked = null, score = 0;
function renderQuiz() {
  const q = quiz[qi], ans = picked !== null, last = qi === quiz.length - 1;
  $('#qpos').textContent = (qi + 1) + ' de ' + quiz.length; $('#score').textContent = score;
  $('#qbar').style.width = Math.round(((qi + (ans ? 1 : 0)) / quiz.length) * 100) + '%';
  $('#qmeta').textContent = 'Pregunta ' + (qi + 1) + ' · Capítulo ' + q.cap; $('#qtext').textContent = q.t;
  $('#opts').innerHTML = q.o.map((t, i) => `<button type="button" class="opt ${ans && i === q.ok ? 'ok' : ans && i === picked ? 'bad' : ''}" data-i="${i}">${esc(t)}</button>`).join('');
  $('#fb').innerHTML = ans ? `<div class="fb"><span style="flex:1 1 260px">${picked === q.ok ? '¡Correcto! ' : 'Casi. '}${q.why}</span><button class="btn primary" id="nextq">${last ? 'Volver a empezar' : 'Siguiente'}</button></div>` : '';
}
$('#opts').addEventListener('click', (e) => { const b = e.target.closest('.opt'); if (!b || picked !== null) return; picked = +b.dataset.i; if (picked === quiz[qi].ok) score++; renderQuiz(); });
$('#fb').addEventListener('click', (e) => { if (e.target.id !== 'nextq') return; if (qi === quiz.length - 1) { qi = 0; score = 0; } else qi++; picked = null; renderQuiz(); });
renderQuiz();
