let done = new Set();
let currentView = 'week';
let activeWeek  = 0;

function todayMidnight() {
  const d = new Date(); d.setHours(0,0,0,0); return d;
}

function getDayStatus(day) {
  const today = todayMidnight();
  const cd = CHALLENGE_DATES[day];
  if (!cd) return 'future';
  const cdm = new Date(cd); cdm.setHours(0,0,0,0);
  if (cdm.getTime() === today.getTime()) return 'today';
  if (cdm < today) return 'past';
  return 'future';
}

function seedDatesFromCalendar() {
  CHS.forEach(c => {
    if (getDayStatus(c.day) === 'past') done.add(c.day);
  });
}

function tt(k){return`<span class="tt ${k}">${TL[k]}</span>`;}
function diffs(n){return'<div class="diff">'+Array.from({length:5},(_,i)=>`<div class="dd${i<n?' on':''}"></div>`).join('')+'</div>';}

function updateProgress(){
  const n=done.size,tot=22,pct=Math.round(n/tot*100);
  document.getElementById('kpi-done').textContent=n;
  document.getElementById('prog-fill').style.width=pct+'%';
  document.getElementById('prog-label').textContent=`${n} / ${tot} completed`;
  document.getElementById('prog-pct').textContent=pct+'%';
}

function cardHtml(c,t){
  const isDone   = done.has(c.day);
  const status   = getDayStatus(c.day);
  const isToday  = status === 'today';
  const isMand   = !!c.mandatory;

  let cls = 'card';
  if (isDone)    cls += ' done';
  if (c.vibe)    cls += ' vibe';
  if (isToday)   cls += ' today';
  if (isMand)    cls += ' mandatory';

  const weekDows = c.week === 1 ? DOW_WEEK1 : c.week === 5 ? ['MON','TUE','WED','THU'] : DOW_FULL;
  const dowLabel = weekDows[(c.dow||1)-1];
  const chipContent = isToday
    ? `<div style="display:flex;align-items:center;gap:7px;">
        <div class="c-chip" style="color:${t.color};border-color:${t.bd};background:${t.bg}">${t.icon} ${dowLabel}</div>
        <span class="today-badge">\ud83d\udd25 Today</span>
       </div>`
    : `<div class="c-chip" style="color:${isMand?'var(--pink)':''+t.color};border-color:${isMand?'rgba(255,45,120,.3)':t.bd};background:${isMand?'rgba(255,45,120,.08)':t.bg}">${isMand?'\ud83d\udd34':''}${dowLabel}</div>`;

  return`<div class="${cls}" id="card-${c.day}">
    <div class="cbar" style="background:${isToday?'var(--lime)':isMand?'var(--pink)':t.color}"></div>
    <div class="cghost">${c.day}</div>
    <div class="c-top">
      ${chipContent}
      <div class="c-right">
        ${isDone ? '<div class="ck-done">\u2713</div>' : ''}
        ${isMand ? '<span class="mandatory-badge">Mandatory</span>' : '<span class="optional-badge">Optional</span>'}
      </div>
    </div>
    <span class="c-emoji">${c.emoji}</span>
    <div class="c-title">${c.title}</div>
    <div class="c-desc">${c.desc}</div>
    <div class="c-foot">
      <div class="ttags">${c.tools.map(tt).join('')}</div>
      ${diffs(c.diff)}
    </div>
  </div>`;
}

function renderWeekView(){
  const root=document.getElementById('challenges-root');
  const weeks=activeWeek===0?WEEKS:WEEKS.filter(w=>w.num===activeWeek);
  let html='';

  weeks.forEach(w=>{
    const chs=CHS.filter(c=>c.week===w.num).sort((a,b)=>a.dow-b.dow);
    const doneCount=chs.filter(c=>done.has(c.day)).length;
    const mandDone=chs.filter(c=>c.mandatory&&done.has(c.day)).length;
    const hasFri=chs.find(c=>c.dow===5);

    // DOW header \u2014 W1=3 days (Wed/Thu/Fri), W5=4 days (Mon-Thu), others=5 (Mon-Fri)
    const dowLabels  = w.num === 1 ? DOW_WEEK1 : w.num === 5 ? ['MON','TUE','WED','THU'] : DOW_FULL;
    const gridCols   = w.num === 1 ? 3 : w.num === 5 ? 4 : 5;
    const dowHeaders = dowLabels.map((d,i) => {
      const isFri = (i === dowLabels.length - 1);
      return `<div class="dow-label${isFri?' fri':''}">${d}</div>`;
    }).join('');

    html+=`<div class="week-section">
      <div class="week-head">
        <div class="week-num">W${w.num}</div>
        <div class="week-meta">
          <div class="week-title" style="color:${w.color}">${w.title}</div>
          <div class="week-sub">${w.sub}</div>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;flex-shrink:0">
          <span style="font-family:'DM Mono',monospace;font-size:10px;color:var(--muted)">${doneCount}/${chs.length} done</span>
          ${mandDone>0?`<span class="mandatory-badge">Friday \u2713</span>`:hasFri?`<span style="font-family:'DM Mono',monospace;font-size:10px;color:var(--pink)">Friday pending</span>`:''}
        </div>
      </div>
      <div class="dow-row" style="grid-template-columns:repeat(${gridCols},1fr)">${dowHeaders}</div>
      <div style="display:grid;grid-template-columns:repeat(${gridCols},1fr);gap:11px;">
        ${chs.map(c=>cardHtml(c,TRACKS[c.cat])).join('')}
      </div>
    </div>`;
  });

  // Capstone / Cert section \u2014 always shown at bottom
  html+=`<div class="capstone-section">
    <!-- SECTION HEADER -->
    <div style="text-align:center;margin-bottom:28px;">
      <div style="font-family:'DM Mono',monospace;font-size:10px;letter-spacing:3px;color:var(--muted);margin-bottom:8px">THE BIG COMMITMENT</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:36px;letter-spacing:2px;color:var(--text);line-height:1">CAPSTONE <span style="color:var(--muted);font-size:24px">OR</span> CERTIFICATION</div>
      <div style="font-size:13px;color:var(--muted);margin-top:8px;">Choose your path. Commit to one. <strong style="color:var(--text)">Declare by April 10th.</strong></div>
    </div>

    <!-- SIDE-BY-SIDE -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:28px;">

      <!-- LEFT: CAPSTONE -->
      <div style="background:linear-gradient(160deg,rgba(255,45,120,.08),rgba(255,45,120,.03));border:2px solid rgba(255,45,120,.3);border-radius:18px;padding:24px;position:relative;overflow:hidden;">
        <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--pink),rgba(255,45,120,.3))"></div>
        <!-- Option badge -->
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
          <span style="font-family:'Bebas Neue',sans-serif;font-size:11px;letter-spacing:3px;background:rgba(255,45,120,.15);border:1px solid rgba(255,45,120,.35);color:var(--pink);padding:4px 12px;border-radius:100px;">OPTION A</span>
          <span style="font-family:'DM Mono',monospace;font-size:9px;letter-spacing:2px;color:var(--muted)">TEAM \u00b7 GRADED</span>
        </div>
        <div style="font-size:28px;margin-bottom:8px">\ud83c\udfc6</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:26px;letter-spacing:1px;color:var(--pink);margin-bottom:4px">CAPSTONE PROJECT</div>
        <div style="font-size:12px;color:var(--muted);line-height:1.7;margin-bottom:18px">Build something real with your team. Design and deliver a complete AI-powered solution for a genuine business problem. Graded live by an AI Panel and team feedback.</div>

        <!-- Points badge -->
        <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,45,120,.12);border:1px solid rgba(255,45,120,.3);border-radius:100px;padding:6px 16px;margin-bottom:18px;">
          <span style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--pink)">50</span>
          <span style="font-family:'DM Mono',monospace;font-size:10px;letter-spacing:1px;color:var(--muted)">POINTS \u00b7 GRADED</span>
        </div>

        <!-- Steps -->
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:18px;">
          ${[
            {n:'01', title:'Ideation', desc:'Find a real workflow AI can improve. Form team of 3\u20134.', date:'Apr 1\u20137'},
            {n:'02', title:'Pitch',    desc:'15 min with Eamonn. Approval required before building.', date:'Apr 8/9/10'},
            {n:'03', title:'Build',    desc:'18 days to build your approved idea using AI tools.', date:'Apr 11\u201328'},
            {n:'04', title:'Showcase', desc:'Present to the full team. 15\u201320 min per group.', date:'Apr 29 & 30'},
          ].map(s=>\`<div style="display:flex;gap:12px;align-items:flex-start;background:rgba(255,45,120,.06);border:1px solid rgba(255,45,120,.15);border-radius:10px;padding:10px 14px;">
            <div style="font-family:'Bebas Neue',sans-serif;font-size:16px;color:var(--pink);flex-shrink:0;min-width:20px">\${s.n}</div>
            <div style="flex:1;">
              <div style="font-size:12px;font-weight:800;color:var(--text);margin-bottom:2px">\${s.title}</div>
              <div style="font-size:11px;color:var(--muted);line-height:1.5">\${s.desc}</div>
            </div>
            <div style="font-family:'DM Mono',monospace;font-size:9px;color:var(--pink);flex-shrink:0;white-space:nowrap">\${s.date}</div>
          </div>\`).join('')}
        </div>

        <!-- Platform & Budget -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;">
          <div style="background:var(--s1);border:1px solid var(--border);border-radius:10px;padding:12px;">
            <div style="font-family:'DM Mono',monospace;font-size:9px;letter-spacing:2px;color:var(--muted);margin-bottom:6px">PLATFORM</div>
            <div style="font-size:11px;color:var(--text);line-height:1.6">Base44 \u00b7 Lovable \u00b7 Replit \u00b7 Claude.ai<br><span style="color:var(--muted)">One shared team account</span></div>
          </div>
          <div style="background:var(--s1);border:1px solid rgba(184,255,53,.2);border-radius:10px;padding:12px;">
            <div style="font-family:'DM Mono',monospace;font-size:9px;letter-spacing:2px;color:var(--lime);margin-bottom:6px">BUDGET</div>
            <div style="font-family:'Bebas Neue',sans-serif;font-size:28px;color:var(--lime);line-height:1">$100</div>
            <div style="font-size:10px;color:var(--muted)">per team \u00b7 plan well</div>
          </div>
        </div>

        <!-- Grading criteria -->
        <div style="background:var(--s1);border:1px solid var(--border);border-radius:10px;padding:12px;">
          <div style="font-family:'DM Mono',monospace;font-size:9px;letter-spacing:2px;color:var(--muted);margin-bottom:8px">WEIGHTED GRADING CRITERIA</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;">
            ${['\ud83d\udca1 Originality','\ud83e\udd1d Teamwork','\ud83c\udfe2 Business Value','\u2699\ufe0f Usefulness','\u2728 Quality'].map(c=>\`<span style="background:rgba(255,45,120,.08);border:1px solid rgba(255,45,120,.2);color:var(--text);font-size:11px;font-weight:600;padding:4px 10px;border-radius:100px">\${c}</span>\`).join('')}
          </div>
        </div>
      </div>

      <!-- RIGHT: CERTIFICATION -->
      <div style="background:linear-gradient(160deg,rgba(91,127,255,.08),rgba(91,127,255,.03));border:2px solid rgba(91,127,255,.3);border-radius:18px;padding:24px;position:relative;overflow:hidden;">
        <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--gem),rgba(91,127,255,.3))"></div>
        <!-- Option badge -->
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
          <span style="font-family:'Bebas Neue',sans-serif;font-size:11px;letter-spacing:3px;background:rgba(91,127,255,.15);border:1px solid rgba(91,127,255,.35);color:var(--gem);padding:4px 12px;border-radius:100px;">OPTION B</span>
          <span style="font-family:'DM Mono',monospace;font-size:9px;letter-spacing:2px;color:var(--muted)">INDIVIDUAL \u00b7 NO GROUP PTS</span>
        </div>
        <div style="font-size:28px;margin-bottom:8px">\ud83c\udf93</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:26px;letter-spacing:1px;color:var(--gem);margin-bottom:4px">AI CERTIFICATION</div>
        <div style="font-size:12px;color:var(--muted);line-height:1.7;margin-bottom:18px">Earn a recognised AI certification. Equivalent to Capstone \u2014 your personal AI investment. Individual path with no group competition points.</div>

        <!-- Equivalent badge -->
        <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(91,127,255,.12);border:1px solid rgba(91,127,255,.3);border-radius:100px;padding:6px 16px;margin-bottom:18px;">
          <span style="font-family:'Bebas Neue',sans-serif;font-size:16px;color:var(--gem)">EQUIVALENT</span>
          <span style="font-family:'DM Mono',monospace;font-size:10px;letter-spacing:1px;color:var(--muted)">TO CAPSTONE \u00b7 INDIVIDUAL</span>
        </div>

        <!-- How it works -->
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:18px;">
          ${[
            {n:'01', title:'Declare',  desc:'Post your choice in #ai-april Teams channel by April 10th.'},
            {n:'02', title:'Get Sign-off', desc:'If role-aligned, discuss with your manager and get approval first.'},
            {n:'03', title:'Complete', desc:'Aim to finish by May 1st. Agree a timeline with manager if needed.'},
            {n:'04', title:'Submit',   desc:'Post proof of completion in #ai-april Teams channel.'},
          ].map(s=>\`<div style="display:flex;gap:12px;align-items:flex-start;background:rgba(91,127,255,.06);border:1px solid rgba(91,127,255,.15);border-radius:10px;padding:10px 14px;">
            <div style="font-family:'Bebas Neue',sans-serif;font-size:16px;color:var(--gem);flex-shrink:0;min-width:20px">\${s.n}</div>
            <div style="flex:1;">
              <div style="font-size:12px;font-weight:800;color:var(--text);margin-bottom:2px">\${s.title}</div>
              <div style="font-size:11px;color:var(--muted);line-height:1.5">\${s.desc}</div>
            </div>
          </div>\`).join('')}
        </div>

        <!-- Providers & Platforms -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;">
          <div style="background:var(--s1);border:1px solid var(--border);border-radius:10px;padding:12px;">
            <div style="font-family:'DM Mono',monospace;font-size:9px;letter-spacing:2px;color:var(--muted);margin-bottom:6px">RECOMMENDED PROVIDERS</div>
            <div style="font-size:11px;color:var(--text);line-height:1.8">Microsoft \u00b7 AWS<br>NVIDIA \u00b7 IBM<br>Google</div>
          </div>
          <div style="background:var(--s1);border:1px solid var(--border);border-radius:10px;padding:12px;">
            <div style="font-family:'DM Mono',monospace;font-size:9px;letter-spacing:2px;color:var(--muted);margin-bottom:6px">RECOMMENDED PLATFORMS</div>
            <div style="font-size:11px;color:var(--text);line-height:1.8">LinkedIn Learning<br>Coursera \u00b7 Udemy<br>DeepLearning.AI</div>
          </div>
        </div>

        <!-- Note -->
        <div style="background:rgba(91,127,255,.07);border:1px solid rgba(91,127,255,.2);border-radius:10px;padding:12px;">
          <div style="font-size:11px;color:var(--muted);line-height:1.65;">
            <strong style="color:var(--gem)">Note:</strong> Certification counts as equivalent to Capstone, but does not earn group competition points. If a certification is more aligned to your role, this is your path.
          </div>
        </div>
      </div>
    </div>

    <!-- DECLARATION BANNER -->
    <div style="background:rgba(255,255,255,.03);border:1px solid var(--border2);border-radius:14px;padding:16px 24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:18px;letter-spacing:1px;color:var(--text)">DECLARE YOUR PATH</div>
        <div style="font-size:12px;color:var(--muted)">Post your choice (Capstone or Cert) in <strong style="color:var(--text)">#ai-april</strong> in Microsoft Teams</div>
      </div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--lime)">By April 10th \ud83c\udfaf</div>
    </div>
  </div>`;

  root.innerHTML=html;
  updateProgress();
}

function renderTrackView(){
  const root=document.getElementById('challenges-root');
  let html='';
  TRACKS.forEach((t,ci)=>{
    const chs=CHS.filter(c=>c.cat===ci);
    if(!chs.length)return;
    html+=`<div style="margin-bottom:44px">
      <div class="track-head" style="border-color:${t.bd}">
        <div class="th-icon">${t.icon}</div>
        <div class="th-info"><div class="th-name" style="color:${t.color}">${t.name}</div><div class="th-desc">${t.tool}</div></div>
        <div class="th-tags">${t.ttags.map(tt).join('')}</div>
        <div class="th-count">${chs.length}</div>
      </div>
      <div class="cgrid">${chs.map(c=>cardHtml(c,t)).join('')}</div>
    </div>`;
  });
  root.innerHTML=html;
  updateProgress();
}

function render(){currentView==='week'?renderWeekView():renderTrackView();}

function setView(v){
  currentView=v;
  document.getElementById('vt-week').classList.toggle('on',v==='week');
  document.getElementById('vt-track').classList.toggle('on',v==='track');
  document.getElementById('week-tabs').style.display=v==='week'?'flex':'none';
  render();
}

function buildWeekTabs(){
  const bar=document.getElementById('week-tabs');
  bar.innerHTML=`<button class="wtab on" id="wtab-0" onclick="setWeek(0,this)" style="background:var(--s3);color:var(--text);border-color:transparent">All Weeks</button>`
    +WEEKS.map(w=>`<button class="wtab" id="wtab-${w.num}" onclick="setWeek(${w.num},this)">W${w.num}: ${w.title}</button>`).join('');
}

function setWeek(n,btn){
  activeWeek=n;
  document.querySelectorAll('.wtab').forEach(b=>{b.classList.remove('on');b.style.cssText='';});
  btn.classList.add('on');
  if(n===0){btn.style.background='var(--s3)';btn.style.color='var(--text)';btn.style.borderColor='transparent';}
  else{const w=WEEKS.find(x=>x.num===n);btn.style.background=w.color;btn.style.color='#000';btn.style.borderColor='transparent';}
  render();
}
