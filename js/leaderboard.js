// Cards are read-only — completion is driven entirely by the calendar date

/* LEADERBOARD */
let isAdmin = false;
// Change this password to whatever you like
const ADMIN_PASSWORD = 'AIApril2025';

function toggleAdmin() {
  if (isAdmin) {
    // Lock
    isAdmin = false;
    document.getElementById('admin-btn').textContent = '🔒 Admin Mode';
    document.getElementById('admin-btn').classList.remove('unlocked');
    document.getElementById('admin-status').textContent = 'Quality scores are admin-only.';
    document.getElementById('admin-status').style.color = 'var(--muted)';
    document.getElementById('qual-field').style.display = 'none';
    if (editingId !== null) { editingId = null; renderLB(); }
  } else {
    // Unlock
    const pw = prompt('Enter admin password:');
    if (pw === null) return; // cancelled
    if (pw === ADMIN_PASSWORD) {
      isAdmin = true;
      document.getElementById('admin-btn').textContent = '🔓 Admin Mode';
      document.getElementById('admin-btn').classList.add('unlocked');
      document.getElementById('admin-status').textContent = '✅ Admin unlocked — quality scores editable.';
      document.getElementById('admin-status').style.color = 'var(--lime)';
      document.getElementById('qual-field').style.display = 'flex';
    } else {
      alert('❌ Incorrect password.');
    }
  }
}

// Helper to look up photo from PLAYER_PHOTOS by name
function getPlayerPhoto(name) {
  const key = name.toLowerCase().replace(/ /g, '_').replace(/'/g, '');
  return PLAYER_PHOTOS[key] || null;
}

let players = [
  {name:'Angel Mazzucco', comp:0, qual:0},
  {name:'Ashley Mims', comp:1, qual:0},
  {name:'Bev Kelly', comp:0, qual:0},
  {name:'Calley Hood', comp:6, qual:0},
  {name:'Dalia Osorio', comp:1, qual:0},
  {name:'Eduardo Chalian', comp:0, qual:0},
  {name:'Elena Cazan', comp:0, qual:0},
  {name:'Eamonn Ward', comp:3, qual:0},
  {name:'Isabelle Puller', comp:2, qual:0},
  {name:'Jason Sherwood', comp:2, qual:0},
  {name:'Jenella Jimlani', comp:0, qual:0},
  {name:'Joseph Chan', comp:3, qual:0},
  {name:'Joy Parrish', comp:0, qual:0},
  {name:'Justin Sit', comp:2, qual:0},
  {name:'Kelly Grover', comp:2, qual:0},
  {name:'Kim Graham', comp:0, qual:0},
  {name:'Lorna Joiner', comp:7, qual:0},
  {name:'Michael Bourgeois', comp:4, qual:0},
  {name:'Morgan Gallegos', comp:1, qual:0},
  {name:'Paige Gregory', comp:3, qual:0},
  {name:'Rizwan Qureshy', comp:5, qual:0},
  {name:'Shiran Nizam', comp:0, qual:0},
  {name:'Sol Helou', comp:2, qual:0},
  {name:'Veronica John', comp:2, qual:0},
];
let editingId = null;

// Emoji racers cycled per player
const RACERS = ['🏎️','🚀','⚡','🔥','🌟','💜','🎯','🎸','🤖','🌿','🏆','💡','🎮','🎨','📊','🎶','✨','🛠️','🎤','🎭','👑','🌍','🎲','💬'];

// Lane colors for leaderboard
const LANE_COLORS = [
  '#ffd700','#c0c0c0','#cd7f32',
  '#4ade80','#4ade80','#4ade80','#4ade80','#4ade80',
  '#60a5fa','#60a5fa','#60a5fa','#60a5fa',
  '#a78bfa','#a78bfa','#a78bfa','#a78bfa',
  '#f472b6','#f472b6','#f472b6','#f472b6',
  '#facc15','#facc15','#facc15','#facc15',
];

function renderLB() {
  const sorted = [...players]
    .map((p,i) => ({...p, _orig:i}))
    .sort((a,b) => (b.comp*5+b.qual) - (a.comp*5+a.qual));

  // Assign dense rank — tied players share rank, next rank increments by 1
  sorted.forEach((p, i) => {
    if (i === 0) { p._rank = 1; }
    else {
      const prevScore = sorted[i-1].comp*5 + sorted[i-1].qual;
      const thisScore = p.comp*5 + p.qual;
      p._rank = (thisScore === prevScore) ? sorted[i-1]._rank : sorted[i-1]._rank + 1;
    }
  });

  const el = document.getElementById('race-lanes');
  if (!el) return;

  el.innerHTML = sorted.map((p, rank) => {
    const score   = p.comp*5 + p.qual;
    const pct     = Math.min(100, Math.round(p.comp/22*100));
    const isEd    = editingId === p._orig;
    const rankCls = 'lrx';
    const laneCls = '';
    const emoji   = RACERS[rank % RACERS.length];
    const color   = LANE_COLORS[Math.min(rank, LANE_COLORS.length-1)];
    const rankLabel = `<span class="${rankCls}">${p._rank}</span>`;

    // milestone ticks at 20/40/60/80%
    const ticks = [20,40,60,80].map(p =>
      `<div class="lt-tick" style="left:${p}%"></div>`).join('');

    const trackHtml = `
      <div class="lane-track">
        <div class="lt-road">
          <div class="lt-fill" style="width:${pct}%;background:${color};box-shadow:0 0 8px ${color}55"></div>
          ${ticks}
        </div>
        <div class="lt-finish"></div>
        ${pct > 0 ? `<div class="lt-racer" style="left:calc(${pct}% - 2px)">${emoji}</div>` : ''}
      </div>`;

    if (isEd) {
      return `<div class="lane editing" id="lane-${p._orig}">
        <div class="lane-rank" style="font-size:18px">${rankLabel}</div>
        <div class="lane-name"><div>${p.name}</div></div>
        <div style="flex:1;display:flex;gap:8px;align-items:center;padding:0 4px">
          <label style="font-family:'DM Mono',monospace;font-size:9px;color:var(--muted)">DONE</label>
          <input type="number" class="lb-inp-edit" id="edit-comp" value="${p.comp}" min="0" max="22" style="width:58px"/>
          ${isAdmin
            ? `<label style="font-family:'DM Mono',monospace;font-size:9px;color:var(--lime)">QUALITY 🔐</label>
               <input type="number" class="lb-inp-edit" id="edit-qual" value="${p.qual}" min="0" style="width:58px;border-color:rgba(184,255,53,.3)"/>`
            : `<span class="qual-locked">🔒 Quality (admin only)</span>`
          }
        </div>
        <div class="lane-score"><div class="ls-pts">—</div></div>
        <div class="lane-acts">
          <button class="btn-edit-row save" onclick="saveEdit(${p._orig})">✓</button>
          <button class="btn-del-row" onclick="delPlayer(${p._orig})">✕</button>
        </div>
      </div>`;
    }

    // Avatar — photo if available, else initials
    const initials = p.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
    const photo = getPlayerPhoto(p.name);
    const avatarHtml = photo
      ? `<div class="lane-avatar"><img src="${photo}" alt="${p.name}"/></div>`
      : `<div class="lane-avatar">${initials}</div>`;

    return `<div class="lane${laneCls}" id="lane-${p._orig}">
      <div class="lane-rank">${rankLabel}</div>
      ${avatarHtml}
      <div class="lane-name">
        <div>${p.name}</div>
        <div class="ln-sub">${p.comp}/22 · ${pct}%</div>
      </div>
      ${trackHtml}
      <div class="lane-score">
        <div class="ls-pts">${score}</div>
        <div class="ls-sub">${p.comp} done · ${p.qual} qual</div>
      </div>
      <div class="lane-acts">
        <button class="btn-edit-row" onclick="startEdit(${p._orig})" title="Edit scores">✏️</button>
        <button class="btn-del-row" onclick="delPlayer(${p._orig})" title="Remove">✕</button>
      </div>
    </div>`;
  }).join('');
}

function startEdit(i){ editingId=i; renderLB(); setTimeout(()=>{ const inp=document.getElementById('edit-comp'); if(inp) inp.focus(); },50); }

function saveEdit(i){
  const c=document.getElementById('edit-comp');
  if(c) players[i].comp=Math.min(22,Math.max(0,parseInt(c.value)||0));
  if(isAdmin){
    const q=document.getElementById('edit-qual');
    if(q) players[i].qual=Math.max(0,parseInt(q.value)||0);
  }
  editingId=null;
  renderLB();
}

function addPlayer(){
  const name=document.getElementById('inp-name').value.trim();
  const comp=Math.min(22,Math.max(0,parseInt(document.getElementById('inp-comp').value)||0));
  const qual=isAdmin ? Math.max(0,parseInt(document.getElementById('inp-qual')?.value)||0) : 0;
  if(!name) return;
  if(players.find(p=>p.name.toLowerCase()===name.toLowerCase())){ alert('Racer already on the track!'); return; }
  players.push({name,comp,qual});
  document.getElementById('inp-name').value='';
  document.getElementById('inp-comp').value='0';
  if(document.getElementById('inp-qual')) document.getElementById('inp-qual').value='0';
  editingId=null;
  renderLB();
}

function delPlayer(i){
  players.splice(i,1);
  if(editingId===i) editingId=null;
  renderLB();
}
