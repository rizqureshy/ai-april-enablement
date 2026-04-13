const TRACKS=[
  {icon:'\u270d\ufe0f',name:'Smart Content Generation',tool:'ChatGPT + Copilot',   ttags:['gpt','cop'],color:'var(--c0)',bg:'rgba(79,168,255,.08)',bd:'rgba(79,168,255,.2)'},
  {icon:'\ud83d\udcca',name:'Copilot in PowerPoint',   tool:'Copilot',             ttags:['cop'],      color:'var(--c1)',bg:'rgba(255,122,53,.08)', bd:'rgba(255,122,53,.2)'},
  {icon:'\ud83c\udfb5',name:'Music from Gemini',        tool:'Gemini',              ttags:['gem'],      color:'var(--c2)',bg:'rgba(167,139,250,.08)',bd:'rgba(167,139,250,.2)'},
  {icon:'\u2728',name:'Animated Workflows',       tool:'Claude',              ttags:['cla'],      color:'var(--c3)',bg:'rgba(45,212,191,.08)', bd:'rgba(45,212,191,.2)'},
  {icon:'\u26a1',name:'MicroApps',               tool:'ChatGPT + Claude',    ttags:['gpt','cla'],color:'var(--c4)',bg:'rgba(74,222,128,.08)', bd:'rgba(74,222,128,.2)'},
  {icon:'\ud83d\uddbc\ufe0f',name:'Image Generation',         tool:'Copilot Designer',    ttags:['cop'],      color:'var(--c5)',bg:'rgba(244,114,182,.08)',bd:'rgba(244,114,182,.2)'},
  {icon:'\ud83d\udcc8',name:'Excel \u2192 Dashboards',       tool:'Copilot in Excel',    ttags:['cop'],      color:'var(--c6)',bg:'rgba(250,204,21,.08)', bd:'rgba(250,204,21,.2)'},
  {icon:'\ud83d\udcd6',name:'Story \u2192 Graphic Novel',    tool:'ChatGPT + DALL\u00b7E',    ttags:['gpt'],      color:'var(--c7)',bg:'rgba(192,132,252,.08)',bd:'rgba(192,132,252,.2)'},
  {icon:'\ud83d\udc9c',name:'Vibe Coding',              tool:'Lovable\u00b7Base44\u00b7Replit',ttags:['vib'],      color:'var(--c8)',bg:'rgba(232,121,249,.08)',bd:'rgba(232,121,249,.22)'},
];
const TL={gpt:'ChatGPT',cop:'Copilot',cla:'Claude',gem:'Gemini',vib:'Vibe'};

// Week dates in April 2026 (Mon\u2013Fri)
// Apr 1=Wed, so Week 1 = Apr 6\u201310, W2=Apr13\u201317, W3=Apr20\u201324, W4=Apr27\u2013May1, W5=May4\u20138
const WEEKS=[
  {num:1, title:'Week 1 \u2014 Apr 1\u20133 (Wed\u2013Fri)',   sub:'3-day kickoff. Wednesday & Thursday optional. Friday is mandatory.',      color:'var(--c4)'},
  {num:2, title:'Week 2 \u2014 Apr 6\u201310',                 sub:'First full week \u2014 step it up, sharper prompts, bolder outputs.',       color:'var(--c0)'},
  {num:3, title:'Week 3 \u2014 Apr 13\u201317',                sub:'Mid-month \u2014 storytelling, data, and multi-tool challenges.',            color:'var(--c2)'},
  {num:4, title:'Week 4 \u2014 Apr 22\u201325',                sub:'Build week \u2014 dashboards, vibe coding, and real work tools.',            color:'var(--c5)'},
  {num:5, title:'Week 5 \u2014 Apr 27\u201330',  sub:'Final week \u2014 Mon to Thu only. The plan wraps on April 30th.', color:'var(--c8)'},
];

// W1 has 3 challenges (Wed/Thu/Fri), W2-W5 have 5 each (Mon-Fri)
const DOW_FULL  = ['MON','TUE','WED','THU','FRI \ud83d\udd34'];
const DOW_WEEK1 = ['WED','THU','FRI \ud83d\udd34'];

// 22 challenges total: W1=3, W2-W4=5 each, W5=4
const CHS=[
  // WEEK 1: Apr 1 (Wed), Apr 2 (Thu), Apr 3 (Fri mandatory)
  {day:1,  week:1, dow:1, cat:0, emoji:'\ud83e\uddb8', diff:1, title:'AI Alter Ego',
   desc:'Rewrite your professional bio as a superhero origin story \u2014 your superpower, your origin moment, and your nemesis. Have Copilot reformat it as a LinkedIn post. Share both.',
   details:'Try different personas \u2014 villain origin story, anime protagonist, or fantasy hero. The wilder, the better. Post both versions to #ai-april.',
   tools:['gpt','cop']},
  {day:2,  week:1, dow:2, cat:5, emoji:'\ud83c\udfa8', diff:1, title:'Triple Style Portrait',
   desc:'Generate yourself in 3 wildly different art styles using Copilot Designer: watercolour, cyberpunk neon, and Renaissance oil painting. Same description, only the style tag changes.',
   details:'Use the exact same prompt for all 3 \u2014 only change the style tag. Share all 3 images side by side in #ai-april so we can see the contrast.',
   tools:['cop']},
  {day:3,  week:1, dow:3, cat:1, emoji:'\ud83d\udcca', diff:3, title:'AI Strategy Deck',
   desc:'FRIDAY CHALLENGE \u2605 Use any AI tool \u2014 Copilot, ChatGPT, Claude, Gamma, Canva AI, Gemini, or anything else \u2014 to turn your own AI strategy or vision into a polished presentation deck. Let AI do the heavy lifting: writing, editing, and polishing. Your job is to guide it, not write it. (1) Pick your AI tool and use it to build and shape your slides. (2) Your deck must cover: Current State \u2192 AI Opportunity \u2192 3 Tools + Use Cases \u2192 Implementation Roadmap \u2192 Risks & Mitigations \u2192 Success Metrics. (3) Add speaker notes to every slide in your own words \u2014 this is where your thinking shows. (4) Submit your deck along with one sentence naming the tool you used and why you picked it.',
   details:'You have until Tuesday Apr 7th EOD to post your submission in #ai-april. Eamonn will grade and post results on Wednesday Apr 8th.',
   tools:['cop','gpt','cla','gem'], mandatory:true},

  // WEEK 2: Apr 6 (Mon) to Apr 10 (Fri mandatory)
  {day:4,  week:2, dow:1, cat:3, emoji:'\ud83d\ude80', diff:2, title:'Artemis II: Mission Control',
   desc:'NASA\'s Artemis II is sending humans around the Moon for the first time in 50 years. Use any AI tool to build an animated HTML page that walks a 7\u201310 year old student through the journey \u2014 launch, travel path, lunar flyby, and return. Think big, colourful, simple words, and things that move. No coding required \u2014 just great prompting. Submit your .html file in #ai-april.',
   details:'This one is intentional prep for Thursday and Friday \u2014 get comfortable making things move before the stakes get higher. The real skill: Prompting AI to produce an interactive visual artifact for a specific audience. If a 10-year-old can follow it, your prompting was precise.',
   tools:['gpt','cop','cla','gem']},
  {day:5,  week:2, dow:2, cat:4, emoji:'\ud83c\udfb8', diff:2, title:'Build a Band',
   desc:'Use any AI tool to build a working musical instrument app in a single HTML file \u2014 a piano, drum pad, guitar frets, xylophone, whatever you like. It should actually play sounds when you click or tap it. No coding experience needed \u2014 just describe what you want and iterate until it works. Post your .html file in #ai-april.',
   details:'The real skill: Prompting AI to produce a fully functional interactive application from scratch \u2014 and learning how to debug and iterate when the first version isn\'t quite right.',
   tools:['gpt','cop','cla','gem']},
  {day:6,  week:2, dow:3, cat:4, emoji:'\ud83e\udd4a', diff:2, title:'Sparring Session',
   desc:'Pick an idea for an AI-powered app, process, or platform you\'d want to build. Then sit down with any AI tool and fight for it. Pitch your idea. Let AI push back. Defend it, refine it, kill the weak parts, and rebuild. Write it up as a one-pager \u2014 what, how, why \u2014 and post it in #ai-april along with one thing AI made you rethink.',
   details:'Thinking about your Capstone? Use today to kick-start your thinking. Post your ideas in the #ai-april Teams channel. The real skill: Using AI as a thinking collaborator \u2014 not a yes-machine.',
   tools:['gpt','cop','cla','gem']},
  {day:7,  week:2, dow:4, cat:3, emoji:'\ud83d\udd04', diff:3, title:'Process Flow Animation',
   desc:'Describe any 5-step work process to any AI tool. Ask it to build an animated HTML flowchart where each step reveals in sequence with smooth transitions. Must be click-through interactive. Post your .html file in #ai-april.',
   details:'The real skill: Translating a real work process into a structured AI prompt \u2014 and getting a polished, shareable visual artifact out the other side.',
   tools:['gpt','cop','cla','gem']},
  {day:8,  week:2, dow:5, cat:4, emoji:'\ud83d\udcca', diff:4, title:'Live Team Dashboard',
   desc:'FRIDAY CHALLENGE \u2605 Build a fully functional live dashboard using any AI tool. It could be a live project update dashboard, a metrics tracker, or a data story displayed as a dashboard \u2014 your choice. Must include at least 4 chart types, animated metrics, status indicators, and a progress tracker. Must look polished enough to show leadership.',
   details:'You have until Tuesday Apr 14th EOD to post your submission in #ai-april. Eamonn will grade and post results on Wednesday Apr 15th. The real skill: Using AI to deliver something real, functional, and leadership-ready \u2014 end to end.',
   tools:['gpt','cop','cla','gem'], mandatory:true},

  // WEEK 3: Apr 13 (Mon) to Apr 17 (Fri mandatory)
  {day:9,  week:3, dow:1, cat:6, emoji:'\ud83d\udcca', diff:2, title:'Make the Data Real',
   desc:'Use any AI tool to generate a clean, realistic synthetic dataset for a real business scenario \u2014 customer satisfaction scores, sales pipeline health, team productivity metrics, support ticket trends, or anything relevant to your role. Push AI to make it believable: regional breakdowns, time periods, anomalies, and patterns that tell a story. Export it as a CSV or table. Then ask AI one more question: what story does this data tell? Post your dataset and the one-line story it tells in #ai-april.',
   details:'The real skill: Prompting AI to generate structured, realistic synthetic data \u2014 and learning to read the story inside it. A dashboard with no data is just a template.',
   tools:['gpt','cop','cla','gem']},
  {day:10, week:3, dow:2, cat:6, emoji:'\ud83d\udd0d', diff:3, title:'Data Detective',
   desc:'Take your dataset from Monday \u2014 or any real business data you have \u2014 and put AI to work as your analyst. Push it harder: "What patterns do you see?" "What would concern a senior leader?" "Where are the anomalies and what might explain them?" "What three decisions could a team make based on this data?" Iterate until AI surfaces something genuinely useful. Post your most interesting finding and the prompt that unlocked it in #ai-april.',
   details:'The real skill: Using AI as an analytical thinking partner \u2014 not a generation-only tool.',
   tools:['gpt','cop','cla','gem']},
  {day:11, week:3, dow:3, cat:5, emoji:'\u270f\ufe0f', diff:2, title:'From Sketch to Screen',
   desc:'Hand draw anything \u2014 a product idea, a comic character, an object, an animal, a concept from your work. Take a photo of it. Then use any AI image tool to refine and render it into something polished and presentable. Share both \u2014 the original hand-drawn sketch and the AI-rendered version \u2014 in #ai-april.',
   details:'The real skill: Using AI as a creative finishing tool. The idea starts with you. AI makes it real.',
   tools:['gpt','cop','cla','gem']},
  {day:12, week:3, dow:4, cat:0, emoji:'\ud83d\udccd', diff:1, title:'Share Your Big Commitment',
   desc:'Where are you at? Post one of the following in #ai-april: If you are on a Capstone project: Share your project update \u2014 what you are building, who is working with you, what your first milestone looks like, and how you plan to get there. If you are on the Cert path: Post your cert link or progress update \u2014 what you are studying, what inspired you to choose this cert, and one thing you have learned so far.',
   details:'This is your chance to share progress and inspire others. No wrong answers \u2014 just show where you are.',
   tools:['gpt','cop','cla','gem']},
  {day:13, week:3, dow:5, cat:4, emoji:'\ud83c\udf93', diff:4, title:'Build a Course',
   desc:'FRIDAY CHALLENGE \u2605 Use any AI tool to build a fully functional online course in SCORM or HTML format. It could be on any topic relevant to your role, your team, a sales methodology, a product, or your Capstone idea. Must include structured lessons, clear learning objectives, and a polished, professional look \u2014 something ready to drop into a learning platform or share directly. Post your SCORM package or .html file in #ai-april.',
   details:'You have until Tuesday Apr 21st EOD to post your submission in #ai-april. Eamonn will grade and post results on Wednesday Apr 22nd. The real skill: Using AI to design, write, and build a complete learning experience from scratch \u2014 end to end.',
   tools:['gpt','cop','cla','gem'], mandatory:true},

  // WEEK 4: Apr 22 (Wed) to Apr 25 (Fri mandatory) \u2014 Apr 21 = Easter Monday
  {day:14, week:4, dow:1, cat:6, emoji:'\ud83d\udcca', diff:2, title:'Chart from Chaos',
   desc:'Take any raw data from your work (or invent realistic data). Use Copilot in Excel to generate 3 different chart types. Share all 3 with a one-line insight \u2014 let the data speak.',
   details:'Try bar, line, and pie \u2014 or get creative with waterfall or treemap. Include one sentence per chart explaining the insight it reveals.',
   tools:['cop']},
  {day:15, week:4, dow:2, cat:6, emoji:'\ud83d\udd22', diff:3, title:'Formula Wizard',
   desc:'Describe 3 Excel calculations you genuinely need at work. Use Copilot to write the formulas, explain them in plain English, and demonstrate them on sample data. Share the results.',
   details:'Share the formulas, the plain-English explanations, and a screenshot of them working on sample data. Real work formulas preferred.',
   tools:['cop']},
  {day:16, week:4, dow:3, cat:4, emoji:'\ud83d\udcac', diff:3, title:'Standup Bot',
   desc:'Build a daily standup assistant \u2014 asks the 3 standup questions one by one, collects answers, formats and copies a clean post to clipboard. Ready to paste straight into Slack or Teams.',
   details:'The bot should ask: What did you do yesterday? What are you doing today? Any blockers? Share a link or demo of the working bot.',
   tools:['gpt','cla']},
  {day:17, week:4, dow:4, cat:5, emoji:'\ud83d\udce6', diff:3, title:'Product Concept Art',
   desc:'Invent 3 products from your industry that don\'t yet exist. Generate professional concept art for each with Copilot Designer. Must look plausible and launchable \u2014 not joke items.',
   details:'Think real products a startup might build. Share all 3 concept images with a one-line product description for each.',
   tools:['cop']},
  {day:18, week:4, dow:5, cat:8, emoji:'\ud83d\udee0\ufe0f', diff:5, title:'Vibe Code a Real Work Tool',
   desc:'FRIDAY CHALLENGE \u2605 Build and ship a fully functional app that solves a real problem your team faces \u2014 using Lovable.dev, Base44, or Replit. Must be live at a shareable URL. Submit the live link + a 3-sentence explanation of the problem it solves and who it helps.',
   details:'You have until Tuesday Apr 28th EOD to post your submission in #ai-april. Eamonn will grade and post results on Wednesday Apr 29th.',
   tools:['vib','gpt'], mandatory:true, vibe:true},

  // WEEK 5: Apr 27 (Mon) to Apr 30 (Thu) \u2014 plan ends April 30, no Friday
  {day:19, week:5, dow:1, cat:0, emoji:'\ud83d\udccb', diff:2, title:'Meeting Recap Machine',
   desc:'Paste your roughest, most chaotic meeting notes into ChatGPT or Copilot. Extract: a clean 5-line summary, 5 action items with owners, and a ready-to-send follow-up email \u2014 all from the same messy input.',
   details:'Use real meeting notes (anonymise if needed). Share the before (messy) and after (clean summary + action items + email) side by side.',
   tools:['gpt','cop']},
  {day:20, week:5, dow:2, cat:7, emoji:'\ud83d\udd2e', diff:3, title:'Industry Fable',
   desc:'Write a short fable set in your industry 5 years from now. Characters: the innovator, the skeptic, the manager, the intern. Illustrate 2 key scenes and each character with DALL\u00b7E.',
   details:'Keep the fable under 500 words. Share the story text plus all generated illustrations together in your post.',
   tools:['gpt']},
  {day:21, week:5, dow:3, cat:3, emoji:'\ud83d\udce1', diff:4, title:'Live Ops Dashboard',
   desc:'Ask Claude to build an animated operations dashboard \u2014 live-updating metrics, pulsing status indicators, filling progress bars. Must look like a real monitoring screen, not a static wireframe.',
   details:'This should look like a real NOC or ops screen. Share a live link or screen recording showing the animations running.',
   tools:['cla','gpt']},
  {day:22, week:5, dow:4, cat:3, emoji:'\ud83c\udf10', diff:3, title:'Clickable Org Chart',
   desc:'Describe your team structure to Claude. Ask it to build an animated org chart where clicking any person expands their role and responsibilities. Must be at least 3 levels deep.',
   details:'Use your real team structure (or a fictional one). The click-to-expand interaction is key \u2014 share a live link or screen recording.',
   tools:['cla']},
];

/* CHALLENGE DATES
   W1: Apr 1(Wed), Apr 2(Thu), Apr 3(Fri-mand)   days 1\u20133
   W2: Apr 6(Mon)\u2013Apr 10(Fri-mand)               days 4\u20138
   W3: Apr 13(Mon)\u2013Apr 17(Fri-mand)              days 9\u201313
   W4: Apr 22(Wed)\u2013Apr 25(Fri-mand)              days 14\u201318
   W5: Apr 27(Mon)\u2013Apr 30(Thu) NO FRIDAY         days 19\u201322  */
const CHALLENGE_DATES = [
  null,
  new Date(2026,3,1),  new Date(2026,3,2),  new Date(2026,3,3),
  new Date(2026,3,6),  new Date(2026,3,7),  new Date(2026,3,8),  new Date(2026,3,9),  new Date(2026,3,10),
  new Date(2026,3,13), new Date(2026,3,14), new Date(2026,3,15), new Date(2026,3,16), new Date(2026,3,17),
  new Date(2026,3,22), new Date(2026,3,23), new Date(2026,3,24), new Date(2026,3,25), new Date(2026,3,26),
  new Date(2026,3,27), new Date(2026,3,28), new Date(2026,3,29), new Date(2026,3,30),
];

// \u2500\u2500 CAPSTONE PROJECT \u2500\u2500
const CAPSTONE = {
  emoji: '\ud83c\udfc6',
  title: 'AI APRIL CAPSTONE PROJECT',
  sub: 'Team-based. Mandatory. 50 points. Due May 1st.',
  desc: 'Teams of 3\u20134 people will collaborate to design and deliver a complete AI-powered solution for a real business problem within Equinix or your department. This is not an individual challenge \u2014 it requires planning, coordination, and the combined use of multiple AI tools across the team.',
  rules: [
    '\ud83d\udc65 Teams of 3\u20134 people \u2014 self-organised',
    '\ud83d\udce3 Announce your team in the #ai-april channel by April 11',
    '\ud83d\udee0\ufe0f Must use a minimum of 3 different AI tools',
    '\ud83d\udcc5 Final submission due: May 1st',
    '\ud83c\udfc6 Worth 50 points \u2014 judged by the manager',
    '\u2b50 Graded on: Ambition, Real-World Applicability, Multi-Tool Usage, Presentation Quality',
  ],
  options: [
    {num:'Option A', icon:'\ud83e\udd16', title:'AI-Powered Internal Tool',
     desc:'Build a fully functional app or tool your department would actually adopt. Must be live and demonstrable. Use at least one Vibe Coding platform plus AI-generated content and a process diagram.'},
    {num:'Option B', icon:'\ud83d\udcda', title:'AI Learning Experience',
     desc:'Design a complete AI learning module for a team that hasn\'t used AI yet. Include: a curriculum outline (ChatGPT), training deck (Copilot PPT), interactive quiz app (Claude), and a Gemini-generated audio intro for each module.'},
    {num:'Option C', icon:'\ud83d\uddfa\ufe0f', title:'AI Adoption Roadmap',
     desc:'Build a full AI adoption roadmap for your team or function. Deliverables: stakeholder deck (Copilot), animated process flow (Claude), a vibe-coded tracking tool (Lovable/Base44), written strategy doc (ChatGPT), and a Gemini audio summary for leadership.'},
  ]
};
