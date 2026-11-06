const S = [
  { n: '3.1', t: '¿Qué es una rama?', m: '6 min', b: 'Cada vez que haces un commit, Git guarda una instantánea del proyecto y un puntero al commit anterior. Una rama no es una copia de tus archivos: es simplemente un puntero ligero que señala a uno de esos commits y avanza solo cuando confirmas cambios. La rama por defecto suele llamarse main.', k: ['Una rama es un puntero móvil a un commit.', 'Crear una rama es instantáneo: no copia archivos.', 'HEAD es un puntero especial que indica en qué rama estás.'], c: 'git branch testing      # crea la rama\ngit log --oneline --decorate\ngit switch testing      # mueve HEAD a testing', tip: 'dibujad en la pizarra tres commits y mover un post-it llamado «main». Eso es una rama.' },
  { n: '3.2', t: 'Procedimientos básicos de ramificación y fusión', m: '8 min', b: 'El flujo típico: creas una rama para una tarea, haces commits en ella y, cuando está lista, vuelves a main y la fusionas. Si main no ha avanzado, Git solo mueve el puntero (fast-forward). Si ambas ramas tienen trabajo nuevo, crea un commit de fusión. Cuando dos personas tocan las mismas líneas aparece un conflicto que debes resolver a mano.', k: ['Fast-forward: Git solo adelanta el puntero.', 'Fusión de tres vías: Git crea un commit de fusión.', 'Un conflicto se resuelve editando el archivo, git add y git commit.'], c: 'git switch -c iss53\ngit commit -am "Arregla el issue 53"\ngit switch main\ngit merge iss53', tip: 'provocad un conflicto a propósito en parejas editando la misma línea del README.' },
  { n: '3.3', t: 'Gestión de ramas', m: '4 min', b: 'Con git branch puedes listar tus ramas, ver el último commit de cada una y saber cuáles ya están fusionadas. Borrar una rama fusionada es seguro; Git te avisará si intentas borrar una con trabajo que no se ha integrado.', k: ['git branch -v muestra el último commit de cada rama.', '--merged y --no-merged filtran ramas fusionadas o no.', 'git branch -d borra una rama ya fusionada.'], c: 'git branch -v\ngit branch --merged\ngit branch -d iss53', tip: 'limpiad las ramas viejas antes de entregar un proyecto.' },
  { n: '3.4', t: 'Flujos de trabajo ramificados', m: '5 min', b: 'Muchos equipos mantienen ramas de larga duración (por ejemplo main estable y develop para lo próximo) y ramas puntuales para cada funcionalidad o arreglo. Las ramas puntuales viven poco: se crean, se trabajan y se fusionan.', k: ['Ramas de larga duración: niveles de estabilidad.', 'Ramas puntuales: una por tarea o funcionalidad.', 'Todo es local hasta que lo subes al remoto.'], c: 'git switch -c feature/menu\n# ...trabajo...\ngit switch develop\ngit merge feature/menu', tip: 'acordad en el grupo un nombre para las ramas: feature/, fix/, docs/.' },
  { n: '3.5', t: 'Ramas remotas', m: '7 min', b: 'Las ramas remotas (como origin/main) son referencias al estado de las ramas en el servidor. Se actualizan cuando te comunicas con él. Con push subes tu rama, con fetch descargas lo nuevo y con pull descargas y fusionas a la vez.', k: ['origin/main refleja el remoto la última vez que hablaste con él.', 'git push -u origin rama sube y deja la rama vinculada.', 'git pull = git fetch + git merge.'], c: 'git push -u origin feature/menu\ngit fetch origin\ngit pull', tip: 'antes de empezar a trabajar cada día: git pull.' },
  { n: '3.6', t: 'Reorganizar el trabajo (rebase)', m: '7 min', b: 'Rebase toma tus commits y los vuelve a aplicar encima de otra rama, dejando un historial lineal y más limpio. Regla de oro del libro: no hagas rebase de commits que ya has compartido y de los que otras personas dependen.', k: ['Rebase reescribe commits para crear una línea recta.', 'El resultado final es igual que con merge; cambia el historial.', 'Nunca hagas rebase de commits ya publicados.'], c: 'git switch experiment\ngit rebase main\ngit switch main\ngit merge experiment', tip: 'usad merge en el repo compartido de clase y rebase solo en vuestras ramas locales.' },
  { n: '3.7', t: 'Recapitulación', m: '2 min', b: 'Ya sabes crear ramas, cambiar entre ellas, fusionarlas, compartirlas en un servidor y reorganizar tu trabajo con rebase. Con esto puedes trabajar en paralelo con tu equipo sin pisaros.', k: ['branch, switch, merge: el día a día.', 'push, fetch, pull: trabajar con el remoto.', 'rebase: historial limpio, con cuidado.'], c: 'git log --oneline --graph --all', tip: 'haced el reto del simulador en la página principal para repasar.' }
];
const esc = (t) => String(t).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
let i = 0, done = [];
try { done = JSON.parse(localStorage.getItem('gitpath-c3') || '[]'); } catch (e) { done = []; }
const save = () => { try { localStorage.setItem('gitpath-c3', JSON.stringify(done)); } catch (e) {} };
function render() {
  const s = S[i], isDone = done.includes(i);
  document.getElementById('count').textContent = 'Capítulo 3 · ' + done.length + '/' + S.length;
  document.getElementById('bar').style.width = Math.round(done.length / S.length * 100) + '%';
  document.getElementById('toc').innerHTML = S.map((x, j) => `<button type="button" data-j="${j}" aria-current="${j === i}" class="${done.includes(j) ? 'ok' : ''}"><span class="badge">${done.includes(j) ? '✓' : j + 1}</span><span>${x.n}&nbsp; ${x.t}</span></button>`).join('');
  document.getElementById('content').innerHTML = `
    <div class="row" style="gap:8px"><span class="pill p-indigo">Sección ${s.n}</span><span class="pill p-green">${s.m} de lectura</span></div>
    <h1>${s.t}</h1><p>${s.b}</p>
    <div class="keys"><b>Ideas clave</b><ul>${s.k.map((k) => `<li>${esc(k)}</li>`).join('')}</ul></div>
    <div class="code"><div class="bar mono"><span>Pruébalo en tu terminal</span><span>bash</span></div><pre>${esc(s.c)}</pre></div>
    <div class="tip"><b>En clase:</b> ${s.tip}</div>
    <div class="row" style="justify-content:space-between;border-top:1px solid #F0F0F5;padding-top:18px">
      <a href="https://git-scm.com/book/es/v2" target="_blank" rel="noopener" style="font-size:14px;font-weight:600">Leer el capítulo completo en Pro Git ↗</a>
      <div class="row" style="gap:10px"><button class="btn ghost" id="prev" ${i === 0 ? 'disabled' : ''}>← Anterior</button>
      <button class="btn ${isDone ? 'done' : 'ghost'}" id="tog" aria-pressed="${isDone}">${isDone ? '✓ Completada' : 'Marcar como completada'}</button>
      <button class="btn primary" id="next" ${i === S.length - 1 ? 'disabled' : ''}>Siguiente →</button></div>
    </div>`;
}
document.getElementById('toc').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) { i = +b.dataset.j; render(); } });
document.getElementById('content').addEventListener('click', (e) => {
  const id = e.target.id;
  if (id === 'prev' && i > 0) i--;
  else if (id === 'next' && i < S.length - 1) { if (!done.includes(i)) { done.push(i); save(); } i++; window.scrollTo({ top: 0, behavior: 'smooth' }); }
  else if (id === 'tog') { done = done.includes(i) ? done.filter((x) => x !== i) : done.concat(i); save(); }
  else return;
  render();
});
render();
