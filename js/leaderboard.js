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

let players = [
  {name:'Angel Mazzucco', comp:0, qual:0, photo:'assets/photos/angel_mazzucco.jpg'},
  {name:'Ashley Mims', comp:0, qual:0, photo:'assets/photos/ashley_mims.jpg'},
  {name:'Bev Kelly', comp:0, qual:0, photo:'assets/photos/bev_kelly.jpg'},
  {name:'Calley Hood', comp:2, qual:0, photo:'assets/photos/calley_hood.jpg'},
  {name:'Dalia Osorio', comp:1, qual:0, photo:'assets/photos/dalia_osorio.jpg'},
  {name:'Eduardo Chalian', comp:0, qual:0, photo:'assets/photos/eduardo_chalian.jpg'},
  {name:'Elena Cazan', comp:0, qual:0, photo:'assets/photos/elena_cazan.jpg'},
  {name:'Eamonn Ward', comp:2, qual:0, photo:'assets/photos/eamonn_ward.jpg'},
  {name:'Isabelle Puller', comp:0, qual:0, photo:'assets/photos/isabelle_puller.jpg'},
  {name:'Jason Sherwood', comp:0, qual:0, photo:'assets/photos/jason_sherwood.jpg'},
  {name:'Jenella Jimlani', comp:0, qual:0, photo:'assets/photos/jenella_jimlani.jpg'},
  {name:'Joseph Chan', comp:2, qual:0, photo:'assets/photos/joseph_chan.jpg'},
  {name:'Joy Parrish', comp:0, qual:0, photo:'assets/photos/joy_parrish.jpg'},
  {name:'Justin Sit', comp:1, qual:0, photo:'assets/photos/justin_sit.jpg'},
  {name:'Kelly Grover', comp:1, qual:0, photo:'assets/photos/kelly_grover.jpg'},
  {name:'Kim Graham', comp:0, qual:0, photo:'assets/photos/kim_graham.jpg'},
  {name:'Lorna Joiner', comp:2, qual:0, photo:'assets/photos/lorna_joiner.jpg'},
  {name:'Michael Bourgeois', comp:1, qual:0, photo:'assets/photos/michael_bourgeois.jpg'},
  {name:'Morgan Gallegos', comp:0, qual:0, photo:'assets/photos/morgan_gallegos.jpg'},
  {name:'Paige Gregory', comp:1, qual:0, photo:'assets/photos/paige_gregory.jpg'},
  {name:'Rizwan Qureshy', comp:2, qual:0, photo:'assets/photos/rizwan_qureshy.jpg'},
  {name:'Shiran Nizam', comp:0, qual:0, photo:'assets/photos/shiran_nizam.jpg'},
  {name:'Sol Helou', comp:1, qual:0, photo:'assets/photos/sol_helou.jpg'},
  {name:'Veronica John', comp:2, qual:0, photo:'assets/photos/veronica_john.jpg'},
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

  // Assign true rank — tied players get the same rank number
  let trueRank = 0;
  sorted.forEach((p, i) => {
    if (i === 0) { p._rank = 1; trueRank = 1; }
    else {
      const prevScore = sorted[i-1].comp*5 + sorted[i-1].qual;
      const thisScore = p.comp*5 + p.qual;
      p._rank = (thisScore === prevScore) ? sorted[i-1]._rank : i + 1;
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
    const avatarHtml = p.photo
      ? `<div class="lane-avatar"><img src="${p.photo}" alt="${p.name}"/></div>`
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
