const TRACKS=[
  {icon:'✍️',name:'Smart Content Generation',tool:'ChatGPT + Copilot',   ttags:['gpt','cop'],color:'var(--c0)',bg:'rgba(79,168,255,.08)',bd:'rgba(79,168,255,.2)'},
  {icon:'📊',name:'Copilot in PowerPoint',   tool:'Copilot',             ttags:['cop'],      color:'var(--c1)',bg:'rgba(255,122,53,.08)', bd:'rgba(255,122,53,.2)'},
  {icon:'🎵',name:'Music from Gemini',        tool:'Gemini',              ttags:['gem'],      color:'var(--c2)',bg:'rgba(167,139,250,.08)',bd:'rgba(167,139,250,.2)'},
  {icon:'✨',name:'Animated Workflows',       tool:'Claude',              ttags:['cla'],      color:'var(--c3)',bg:'rgba(45,212,191,.08)', bd:'rgba(45,212,191,.2)'},
  {icon:'⚡',name:'MicroApps',               tool:'ChatGPT + Claude',    ttags:['gpt','cla'],color:'var(--c4)',bg:'rgba(74,222,128,.08)', bd:'rgba(74,222,128,.2)'},
  {icon:'🖼️',name:'Image Generation',         tool:'Copilot Designer',    ttags:['cop'],      color:'var(--c5)',bg:'rgba(244,114,182,.08)',bd:'rgba(244,114,182,.2)'},
  {icon:'📈',name:'Excel → Dashboards',       tool:'Copilot in Excel',    ttags:['cop'],      color:'var(--c6)',bg:'rgba(250,204,21,.08)', bd:'rgba(250,204,21,.2)'},
  {icon:'📖',name:'Story → Graphic Novel',    tool:'ChatGPT + DALL·E',    ttags:['gpt'],      color:'var(--c7)',bg:'rgba(192,132,252,.08)',bd:'rgba(192,132,252,.2)'},
  {icon:'💜',name:'Vibe Coding',              tool:'Lovable·Base44·Replit',ttags:['vib'],      color:'var(--c8)',bg:'rgba(232,121,249,.08)',bd:'rgba(232,121,249,.22)'},
];
const TL={gpt:'ChatGPT',cop:'Copilot',cla:'Claude',gem:'Gemini',vib:'Vibe'};

// Week dates in April 2026 (Mon–Fri)
// Apr 1=Wed, so Week 1 = Apr 6–10, W2=Apr13–17, W3=Apr20–24, W4=Apr27–May1, W5=May4–8
const WEEKS=[
  {num:1, title:'Week 1 — Apr 1–3 (Wed–Fri)',   sub:'3-day kickoff. Wednesday & Thursday optional. Friday is mandatory.',      color:'var(--c4)'},
  {num:2, title:'Week 2 — Apr 6–10',                 sub:'First full week — step it up, sharper prompts, bolder outputs.',       color:'var(--c0)'},
  {num:3, title:'Week 3 — Apr 13–17',                sub:'Mid-month — storytelling, data, and multi-tool challenges.',            color:'var(--c2)'},
  {num:4, title:'Week 4 — Apr 22–25',                sub:'Build week — dashboards, vibe coding, and real work tools.',            color:'var(--c5)'},
  {num:5, title:'Week 5 — Apr 27–30',  sub:'Final week — Mon to Thu only. The plan wraps on April 30th.', color:'var(--c8)'},
];

// W1 has 3 challenges (Wed/Thu/Fri), W2-W5 have 5 each (Mon-Fri)
const DOW_FULL  = ['MON','TUE','WED','THU','FRI 🔴'];
const DOW_WEEK1 = ['WED','THU','FRI 🔴'];

// 22 challenges total: W1=3, W2-W4=5 each, W5=4
const CHS=[
  // WEEK 1: Apr 1 (Wed), Apr 2 (Thu), Apr 3 (Fri mandatory)
  {day:1,  week:1, dow:1, cat:0, emoji:'🦸', diff:1, title:'AI Alter Ego',
   desc:'Rewrite your professional bio as a superhero origin story — your superpower, your origin moment, and your nemesis. Have Copilot reformat it as a LinkedIn post. Share both.',
   tools:['gpt','cop']},
  {day:2,  week:1, dow:2, cat:5, emoji:'🎨', diff:1, title:'Triple Style Portrait',
   desc:'Generate yourself in 3 wildly different art styles using Copilot Designer: watercolour, cyberpunk neon, and Renaissance oil painting. Same description, only the style tag changes.',
   tools:['cop']},
  {day:3,  week:1, dow:3, cat:1, emoji:'📊', diff:3, title:'AI Strategy Deck',
   desc:'FRIDAY CHALLENGE ★ Build a 6-slide "AI in Our Team" strategy deck using Copilot in PowerPoint. Must include: Current State, AI Opportunity, 3 Recommended Tools with use cases, Implementation Roadmap, Risks & Mitigations, and Success Metrics. Use Copilot to write every slide, then add speaker notes. Share the final deck.',
   tools:['cop','gpt'], mandatory:true},

  // WEEK 2: Apr 6 (Mon) to Apr 10 (Fri mandatory)
  {day:4,  week:2, dow:1, cat:0, emoji:'🎭', diff:1, title:'Tone Tornado',
   desc:'Write one email saying you\'ll be 5 minutes late. Have AI rewrite it in 5 very different tones: Shakespearean, passive-aggressive, Gen Z, corporate buzzword soup, and pirate. Share all 5.',
   tools:['gpt','cop','cla']},
  {day:5,  week:2, dow:2, cat:5, emoji:'🌌', diff:2, title:'Alternate Universe Office',
   desc:'Generate your workplace reimagined in 3 alternate realities using Copilot Designer: underwater research lab, medieval castle, and space station. Should feel like the same place — different universe.',
   tools:['cop']},
  {day:6,  week:2, dow:3, cat:2, emoji:'🎸', diff:2, title:'Mood Soundtrack',
   desc:'Generate 3 music tracks for 3 work scenarios: deep focus session, Friday afternoon wind-down, and a high-pressure incident. One Gemini prompt each — compare which captures each mood best.',
   tools:['gem']},
  {day:7,  week:2, dow:4, cat:3, emoji:'🔄', diff:2, title:'Process Flow Animation',
   desc:'Describe any 5-step work process to Claude. Ask it to build an animated HTML flowchart where each step reveals in sequence with smooth transitions. Must be click-through interactive.',
   tools:['cla']},
  {day:8,  week:2, dow:5, cat:4, emoji:'📈', diff:4, title:'Live Team Dashboard',
   desc:'FRIDAY CHALLENGE ★ Build a fully functional live team operations dashboard using Claude Artifacts. Must include: at least 4 chart types, animated metrics, status indicators, and a team progress tracker. Use ChatGPT to design the data story first, then Claude to build the live app. Must look polished enough to show leadership.',
   tools:['cla','gpt'], mandatory:true},

  // WEEK 3: Apr 13 (Mon) to Apr 17 (Fri mandatory)
  {day:9,  week:3, dow:1, cat:0, emoji:'📢', diff:2, title:'Content Multiplier',
   desc:'Take one real idea from your current project. Expand it into 5 formats in a single AI session: a tweet thread, a LinkedIn post, an internal email, a meeting talking point, and a one-pager headline.',
   tools:['gpt','cop']},
  {day:10, week:3, dow:2, cat:7, emoji:'🌟', diff:3, title:'Your Origin Story',
   desc:'Write your professional journey — how you got here — using ChatGPT. Illustrate it as a 4-panel graphic novel with DALL·E. Each panel must match a real scene from your story.',
   tools:['gpt']},
  {day:11, week:3, dow:3, cat:2, emoji:'🎤', diff:3, title:'AI Original Song',
   desc:'Write full original lyrics about your job, team, or project with ChatGPT — pick a real genre, include verse, chorus, and bridge. Then use Gemini to generate the actual music. Submit both.',
   tools:['gpt','gem']},
  {day:12, week:3, dow:4, cat:3, emoji:'📅', diff:3, title:'Animated Project Timeline',
   desc:'Give Claude a real or fictional project with 6 milestones and dates. Ask it to build an animated horizontal timeline that draws itself left to right with milestone labels and status indicators.',
   tools:['cla']},
  {day:13, week:3, dow:5, cat:0, emoji:'🎬', diff:4, title:'AI-Powered Project Pitch',
   desc:'FRIDAY CHALLENGE ★ Create a complete multi-format pitch for a real initiative from your work. Deliverables: (1) A polished 5-slide Copilot PPT deck, (2) A 60-second explainer video script with storyboard (ChatGPT), (3) An animated process workflow diagram (Claude), and (4) A Gemini-generated music track for the presentation. All four submitted together.',
   tools:['cop','gpt','cla','gem'], mandatory:true},

  // WEEK 4: Apr 22 (Wed) to Apr 25 (Fri mandatory) — Apr 21 = Easter Monday
  {day:14, week:4, dow:1, cat:6, emoji:'📊', diff:2, title:'Chart from Chaos',
   desc:'Take any raw data from your work (or invent realistic data). Use Copilot in Excel to generate 3 different chart types. Share all 3 with a one-line insight — let the data speak.',
   tools:['cop']},
  {day:15, week:4, dow:2, cat:6, emoji:'🔢', diff:3, title:'Formula Wizard',
   desc:'Describe 3 Excel calculations you genuinely need at work. Use Copilot to write the formulas, explain them in plain English, and demonstrate them on sample data. Share the results.',
   tools:['cop']},
  {day:16, week:4, dow:3, cat:4, emoji:'💬', diff:3, title:'Standup Bot',
   desc:'Build a daily standup assistant — asks the 3 standup questions one by one, collects answers, formats and copies a clean post to clipboard. Ready to paste straight into Slack or Teams.',
   tools:['gpt','cla']},
  {day:17, week:4, dow:4, cat:5, emoji:'📦', diff:3, title:'Product Concept Art',
   desc:'Invent 3 products from your industry that don\'t yet exist. Generate professional concept art for each with Copilot Designer. Must look plausible and launchable — not joke items.',
   tools:['cop']},
  {day:18, week:4, dow:5, cat:8, emoji:'🛠️', diff:5, title:'Vibe Code a Real Work Tool',
   desc:'FRIDAY CHALLENGE ★ Build and ship a fully functional app that solves a real problem your team faces — using Lovable.dev, Base44, or Replit. Must be live at a shareable URL. Submit the live link + a 3-sentence explanation of the problem it solves and who it helps.',
   tools:['vib','gpt'], mandatory:true, vibe:true},

  // WEEK 5: Apr 27 (Mon) to Apr 30 (Thu) — plan ends April 30, no Friday
  {day:19, week:5, dow:1, cat:0, emoji:'📋', diff:2, title:'Meeting Recap Machine',
   desc:'Paste your roughest, most chaotic meeting notes into ChatGPT or Copilot. Extract: a clean 5-line summary, 5 action items with owners, and a ready-to-send follow-up email — all from the same messy input.',
   tools:['gpt','cop']},
  {day:20, week:5, dow:2, cat:7, emoji:'🔮', diff:3, title:'Industry Fable',
   desc:'Write a short fable set in your industry 5 years from now. Characters: the innovator, the skeptic, the manager, the intern. Illustrate 2 key scenes and each character with DALL·E.',
   tools:['gpt']},
  {day:21, week:5, dow:3, cat:3, emoji:'📡', diff:4, title:'Live Ops Dashboard',
   desc:'Ask Claude to build an animated operations dashboard — live-updating metrics, pulsing status indicators, filling progress bars. Must look like a real monitoring screen, not a static wireframe.',
   tools:['cla','gpt']},
  {day:22, week:5, dow:4, cat:3, emoji:'🌐', diff:3, title:'Clickable Org Chart',
   desc:'Describe your team structure to Claude. Ask it to build an animated org chart where clicking any person expands their role and responsibilities. Must be at least 3 levels deep.',
   tools:['cla']},
];

/* CHALLENGE DATES
   W1: Apr 1(Wed), Apr 2(Thu), Apr 3(Fri-mand)   days 1–3
   W2: Apr 6(Mon)–Apr 10(Fri-mand)               days 4–8
   W3: Apr 13(Mon)–Apr 17(Fri-mand)              days 9–13
   W4: Apr 22(Wed)–Apr 25(Fri-mand)              days 14–18
   W5: Apr 27(Mon)–Apr 30(Thu) NO FRIDAY         days 19–22  */
const CHALLENGE_DATES = [
  null,
  new Date(2026,3,1),  new Date(2026,3,2),  new Date(2026,3,3),
  new Date(2026,3,6),  new Date(2026,3,7),  new Date(2026,3,8),  new Date(2026,3,9),  new Date(2026,3,10),
  new Date(2026,3,13), new Date(2026,3,14), new Date(2026,3,15), new Date(2026,3,16), new Date(2026,3,17),
  new Date(2026,3,22), new Date(2026,3,23), new Date(2026,3,24), new Date(2026,3,25), new Date(2026,3,26),
  new Date(2026,3,27), new Date(2026,3,28), new Date(2026,3,29), new Date(2026,3,30),
];

// ── CAPSTONE PROJECT ──
const CAPSTONE = {
  emoji: '🏆',
  title: 'AI APRIL CAPSTONE PROJECT',
  sub: 'Team-based. Mandatory. 50 points. Due May 1st.',
  desc: 'Teams of 3–4 people will collaborate to design and deliver a complete AI-powered solution for a real business problem within Equinix or your department. This is not an individual challenge — it requires planning, coordination, and the combined use of multiple AI tools across the team.',
  rules: [
    '👥 Teams of 3–4 people — self-organised',
    '📣 Announce your team in the #ai-april channel by April 11',
    '🛠️ Must use a minimum of 3 different AI tools',
    '📅 Final submission due: May 1st',
    '🏆 Worth 50 points — judged by the manager',
    '⭐ Graded on: Ambition, Real-World Applicability, Multi-Tool Usage, Presentation Quality',
  ],
  options: [
    {num:'Option A', icon:'🤖', title:'AI-Powered Internal Tool',
     desc:'Build a fully functional app or tool your department would actually adopt. Must be live and demonstrable. Use at least one Vibe Coding platform plus AI-generated content and a process diagram.'},
    {num:'Option B', icon:'📚', title:'AI Learning Experience',
     desc:'Design a complete AI learning module for a team that hasn\'t used AI yet. Include: a curriculum outline (ChatGPT), training deck (Copilot PPT), interactive quiz app (Claude), and a Gemini-generated audio intro for each module.'},
    {num:'Option C', icon:'🗺️', title:'AI Adoption Roadmap',
     desc:'Build a full AI adoption roadmap for your team or function. Deliverables: stakeholder deck (Copilot), animated process flow (Claude), a vibe-coded tracking tool (Lovable/Base44), written strategy doc (ChatGPT), and a Gemini audio summary for leadership.'},
  ]
};
