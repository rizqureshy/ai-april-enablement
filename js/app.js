function showPage(id,btn){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  btn.classList.add('active');
  if(id==='leaderboard') renderLB();
}

document.addEventListener('DOMContentLoaded',()=>{
  seedDatesFromCalendar();
  buildWeekTabs();
  // Ensure week view is active by default
  setView('week');
  render();

  // Auto-jump to the week that contains today (or the closest upcoming week)
  const today = todayMidnight();

  // Find which week contains today
  let targetWeek = null;
  for (const w of WEEKS) {
    const wChs = CHS.filter(c => c.week === w.num);
    if (!wChs.length) continue;
    const dates = wChs.map(c => { const d = new Date(CHALLENGE_DATES[c.day]); d.setHours(0,0,0,0); return d; });
    const minD = new Date(Math.min(...dates));
    const maxD = new Date(Math.max(...dates));
    if (today >= minD && today <= maxD) { targetWeek = w.num; break; }
    // If today is before the first challenge, jump to week 1
    if (today < minD && targetWeek === null) { targetWeek = w.num; break; }
  }
  // If past all weeks, stay on last week
  if (targetWeek === null) targetWeek = WEEKS[WEEKS.length-1].num;

  const weekBtn = document.getElementById('wtab-' + targetWeek);
  if (weekBtn) setWeek(targetWeek, weekBtn);

  // Scroll today's card into view if present
  const todayCh = CHS.find(c => {
    const cd = CHALLENGE_DATES[c.day];
    if (!cd) return false;
    const cdm = new Date(cd); cdm.setHours(0,0,0,0);
    return cdm.getTime() === today.getTime();
  });
  if (todayCh) {
    setTimeout(() => {
      const el = document.getElementById('card-' + todayCh.day);
      if (el) el.scrollIntoView({ behavior:'smooth', block:'center' });
    }, 400);
  }

  document.getElementById('inp-name').addEventListener('keydown',e=>{ if(e.key==='Enter') addPlayer(); });
});
