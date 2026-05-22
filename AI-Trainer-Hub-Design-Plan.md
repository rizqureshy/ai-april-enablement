# AI Trainer Hub — Design Plan
**Theme**: *Thinking in the Age of AI, and Learning by Doing*

---

## 1. Vision

AI Trainer Hub is a self-service platform where trainers build and deploy AI skills development programs for their teams — without writing code or designing curriculum from scratch.

It takes what worked with AI April (structured challenges, capability tracks, leaderboards, deadlines) and packages it into a configurable builder that any trainer can use to generate a ready-to-deploy training program.

---

## 2. Core User Journey

```
┌─────────────┐    ┌──────────────┐    ┌──────────────┐    ┌───────────┐    ┌──────────┐
│  1. DEFINE   │───▶│  2. SELECT   │───▶│  3. CURATE   │───▶│ 4. REVIEW │───▶│ 5. EXPORT│
│  Your Program│    │  Tracks &    │    │  Activities  │    │ & Preview │    │ & Deploy │
│              │    │  Difficulty  │    │              │    │           │    │          │
└─────────────┘    └──────────────┘    └──────────────┘    └───────────┘    └──────────┘
```

### Step 1: Define Your Program
- **Program Name** (e.g. "AI for Customer Success Q3 2026")
- **Team/Audience** (e.g. "Customer Service Org", "Sales Engineering", "Finance")
- **Delivery Format** (see Section 5)
- **Start Date**
- **Trainer Name(s)**

### Step 2: Select Tracks & Difficulty
- Choose 1–5 capability tracks from the track library
- Set difficulty per track (Beginner / Intermediate / Advanced / Mixed)
- System filters the activity library accordingly

### Step 3: Curate Activities
- Browse filtered activities — pre-built, categorized, with time estimates
- Drag-and-drop into calendar/schedule slots
- Auto-suggest fills based on format + tracks + difficulty
- Trainer can swap, edit descriptions, add custom activities
- Real-time counters: total activities, estimated hours, track coverage

### Step 4: Review & Preview
- See the full program as it will appear to learners
- Live preview of the generated training page (AI April-style)
- Validate: all slots filled, mandatory activities assigned, deadlines set

### Step 5: Export & Deploy
- **GitHub Pages site** — full HTML/CSS/JS package, ready to deploy
- **Downloadable ZIP** — complete repo with README and deploy instructions
- **PDF Program Guide** — printable curriculum with activity details
- **PowerPoint Deck** — presentation-ready overview for stakeholders
- **Shareable Link** — hosted preview URL

---

## 3. Capability Tracks (Pre-built Library)

Each track represents a skill area. Trainers pick tracks relevant to their team.

| # | Track | Icon | Description | Example Audience |
|---|-------|------|-------------|------------------|
| 1 | **Prompt Engineering Fundamentals** | 💬 | Crafting effective prompts, iterating, prompt patterns | Everyone |
| 2 | **Content Generation & Writing** | ✍️ | Emails, reports, summaries, social posts, documentation | Marketing, Comms, All |
| 3 | **Data Analysis & Insights** | 📊 | Synthetic data, pattern recognition, dashboards, data storytelling | Analysts, Finance, Ops |
| 4 | **Visual Creation & Design** | 🎨 | Image generation, presentations, concept art, brand visuals | Marketing, Product, Design |
| 5 | **Application Building** | ⚡ | No-code/vibe-coded apps, tools, dashboards, bots | Engineering-adjacent, Ops |
| 6 | **Process Automation** | 🔄 | Workflow automation, SOPs, decision trees, process mapping | Operations, IT, HR |
| 7 | **Presentation & Communication** | 📊 | Decks, pitch materials, executive summaries, video scripts | Sales, Leadership, PM |
| 8 | **Creative & Storytelling** | 🎭 | Narratives, fables, graphic novels, music, multimedia | All — engagement-focused |
| 9 | **Customer Intelligence** | 🎯 | Sentiment analysis, customer journey mapping, persona building | CS, Sales, CX |
| 10 | **Research & Strategy** | 🔍 | Market research, competitive analysis, strategic planning | Strategy, Product, BD |
| 11 | **Learning & Training Design** | 🎓 | Course creation, quiz building, knowledge base, onboarding | L&D, HR, Enablement |
| 12 | **Code & Technical** | 💻 | Code generation, debugging, documentation, API integration | Engineering, DevOps |

---

## 4. Activity Library (Pre-built, 150+)

Each activity has:

```javascript
{
  id: 'PE-001',
  track: 'prompt-engineering',
  title: 'The Perfect Prompt',
  emoji: '💬',
  difficulty: 'beginner',        // beginner | intermediate | advanced
  timeEstimate: 20,              // minutes
  description: 'Write the same request 5 different ways...',
  detailedInstructions: '...',   // shown on card back (flip)
  tools: ['any'],                // or specific: ['chatgpt','claude','copilot']
  deliverable: 'Post your 5 prompts and outputs in the team channel.',
  skillsBuilt: ['prompt-clarity', 'iteration', 'specificity'],
  tags: ['warm-up', 'day-1-friendly', 'no-tools-required']
}
```

### Sample Activities by Track

#### 💬 Prompt Engineering Fundamentals (15+ activities)
| ID | Title | Diff | Time | Description |
|----|-------|------|------|-------------|
| PE-001 | The Perfect Prompt | ⭐ | 20m | Write the same request 5 different ways. Compare outputs. Learn what specificity does. |
| PE-002 | Role Play | ⭐ | 15m | Assign AI 5 different expert roles for the same question. See how perspective changes output. |
| PE-003 | Chain of Thought | ⭐⭐ | 25m | Force AI to show its reasoning step-by-step. Compare with a one-shot answer. |
| PE-004 | Constraint Boxing | ⭐⭐ | 20m | Give AI the same task with increasingly tight constraints (word limit, tone, format). |
| PE-005 | Prompt Battle | ⭐⭐ | 30m | Two people prompt the same AI for the same goal. Compare results. Who got closer? |
| PE-006 | The Anti-Prompt | ⭐⭐⭐ | 25m | Write the worst possible prompt. Then fix it systematically. Document what changed. |
| PE-007 | Few-Shot Teaching | ⭐⭐⭐ | 30m | Teach AI a pattern with 3 examples, then test it on new input. |
| PE-008 | System Prompt Architect | ⭐⭐⭐ | 35m | Design a system prompt for a specific use case. Test with 10 different user inputs. |

#### ✍️ Content Generation & Writing (15+ activities)
| ID | Title | Diff | Time | Description |
|----|-------|------|------|-------------|
| CG-001 | Tone Tornado | ⭐ | 20m | Rewrite one message in 5 tones: formal, casual, urgent, humorous, executive. |
| CG-002 | Email Transformer | ⭐ | 15m | Turn bullet points into a polished email. Then turn a rambling email into bullets. |
| CG-003 | Content Multiplier | ⭐⭐ | 25m | Take one idea, generate 5 formats: tweet, LinkedIn, email, talking points, one-pager. |
| CG-004 | Meeting Recap Machine | ⭐⭐ | 20m | Paste messy notes. Extract summary, action items, and follow-up email. |
| CG-005 | Ghostwriter Challenge | ⭐⭐ | 30m | Give AI samples of your writing. Have it write something new in your voice. |
| CG-006 | Translation Layer | ⭐⭐ | 25m | Take a technical document, translate for 3 audiences: exec, customer, new hire. |
| CG-007 | SOW Generator | ⭐⭐⭐ | 40m | Describe a project verbally. AI produces a full Statement of Work. |
| CG-008 | Blog to Deck | ⭐⭐⭐ | 35m | Turn a blog post into a 10-slide presentation with speaker notes. |

#### 📊 Data Analysis & Insights (15+ activities)
| ID | Title | Diff | Time | Description |
|----|-------|------|------|-------------|
| DA-001 | Make the Data Real | ⭐ | 25m | Generate a realistic synthetic dataset for a business scenario. |
| DA-002 | Data Detective | ⭐⭐ | 30m | Feed AI real data. Ask it to find patterns, anomalies, and recommendations. |
| DA-003 | Chart from Chaos | ⭐⭐ | 25m | Raw data → 3 different chart types. One-line insight per chart. |
| DA-004 | Formula Wizard | ⭐⭐ | 25m | Describe 3 calculations in English. AI writes the Excel formulas and explains them. |
| DA-005 | Dashboard Builder | ⭐⭐⭐ | 45m | Build a live interactive dashboard with 4+ chart types using AI. |
| DA-006 | Survey Analyzer | ⭐⭐⭐ | 35m | Feed survey results to AI. Get themes, sentiment, and action items. |
| DA-007 | KPI Storyteller | ⭐⭐⭐ | 30m | Give AI 10 KPIs. Have it write the narrative a CFO would present to the board. |

#### 🎨 Visual Creation & Design (12+ activities)
| ID | Title | Diff | Time | Description |
|----|-------|------|------|-------------|
| VC-001 | Triple Style Portrait | ⭐ | 15m | Generate the same subject in 3 art styles. Compare the outputs. |
| VC-002 | Alternate Universe | ⭐ | 20m | Reimagine a real place in 3 alternate realities. |
| VC-003 | Product Concept Art | ⭐⭐ | 25m | Invent 3 products. Generate professional concept art for each. |
| VC-004 | From Sketch to Screen | ⭐⭐ | 25m | Hand-draw something. Photo it. AI renders it polished. |
| VC-005 | Brand Kit Generator | ⭐⭐⭐ | 40m | Describe a brand. AI generates logo concepts, color palette, and style guide. |
| VC-006 | Infographic Builder | ⭐⭐⭐ | 35m | Turn a data set into a polished infographic using AI. |

#### ⚡ Application Building (12+ activities)
| ID | Title | Diff | Time | Description |
|----|-------|------|------|-------------|
| AB-001 | Build a Band | ⭐⭐ | 30m | Build a working musical instrument app in HTML. |
| AB-002 | Standup Bot | ⭐⭐ | 30m | Build a daily standup assistant that formats and copies to clipboard. |
| AB-003 | Quiz App | ⭐⭐ | 30m | Build an interactive quiz on any topic with scoring. |
| AB-004 | Live Dashboard | ⭐⭐⭐ | 45m | Build a live operational dashboard with animated metrics. |
| AB-005 | Portfolio Page | ⭐⭐⭐ | 45m | Build a personal or team portfolio page. |
| AB-006 | Calculator Tool | ⭐⭐ | 25m | Build a specialized calculator for a real work scenario. |
| AB-007 | Booking System | ⭐⭐⭐ | 50m | Build a room/resource booking interface. |

#### 🔄 Process Automation (10+ activities)
| ID | Title | Diff | Time | Description |
|----|-------|------|------|-------------|
| PA-001 | Process Flow Animation | ⭐⭐ | 30m | Describe a 5-step process. AI builds an animated flowchart. |
| PA-002 | Decision Tree | ⭐⭐ | 25m | Map a real decision process as an interactive decision tree. |
| PA-003 | SOP Generator | ⭐⭐ | 30m | Describe a procedure verbally. AI produces a formatted SOP. |
| PA-004 | Onboarding Checklist | ⭐⭐⭐ | 35m | Build an interactive onboarding checklist app for new hires. |
| PA-005 | Workflow Optimizer | ⭐⭐⭐ | 40m | Describe a current workflow. AI identifies bottlenecks and proposes improvements. |

#### 🎯 Customer Intelligence (10+ activities)
| ID | Title | Diff | Time | Description |
|----|-------|------|------|-------------|
| CI-001 | Persona Builder | ⭐⭐ | 25m | Describe your customer base. AI builds 3 detailed buyer personas. |
| CI-002 | Sentiment Scanner | ⭐⭐ | 30m | Feed customer reviews. AI categorizes sentiment and extracts themes. |
| CI-003 | Journey Mapper | ⭐⭐⭐ | 40m | Map the full customer journey with pain points and opportunities. |
| CI-004 | Objection Handler | ⭐⭐ | 25m | List common objections. AI generates response frameworks for each. |
| CI-005 | Win/Loss Analyzer | ⭐⭐⭐ | 35m | Feed deal notes. AI identifies patterns in wins vs losses. |

#### 🔍 Research & Strategy (10+ activities)
| ID | Title | Diff | Time | Description |
|----|-------|------|------|-------------|
| RS-001 | Sparring Session | ⭐⭐ | 30m | Pitch an idea to AI. Let it push back. Refine and write a one-pager. |
| RS-002 | Competitive Landscape | ⭐⭐ | 30m | Describe your market. AI maps competitors, differentiators, and gaps. |
| RS-003 | SWOT Generator | ⭐⭐ | 25m | Describe a product or initiative. AI builds a detailed SWOT analysis. |
| RS-004 | Trend Spotter | ⭐⭐⭐ | 35m | Give AI your industry. It identifies 5 emerging trends with evidence. |
| RS-005 | Business Case Builder | ⭐⭐⭐ | 45m | Describe a proposal. AI writes a full business case with ROI model. |

#### 🎓 Learning & Training Design (10+ activities)
| ID | Title | Diff | Time | Description |
|----|-------|------|------|-------------|
| LD-001 | Build a Course | ⭐⭐⭐ | 45m | Build a fully functional course in SCORM or HTML format. |
| LD-002 | Quiz Generator | ⭐⭐ | 20m | Give AI a topic. It generates a 10-question quiz with explanations. |
| LD-003 | Knowledge Base | ⭐⭐⭐ | 40m | Build a searchable FAQ/knowledge base for a team or product. |
| LD-004 | Scenario Builder | ⭐⭐ | 30m | Create 5 realistic workplace scenarios for role-play training. |
| LD-005 | Rubric Designer | ⭐⭐ | 25m | Describe an assessment. AI creates a detailed grading rubric. |

#### 🎭 Creative & Storytelling (10+ activities)
| ID | Title | Diff | Time | Description |
|----|-------|------|------|-------------|
| CS-001 | AI Alter Ego | ⭐ | 15m | Rewrite your bio as a superhero origin story. |
| CS-002 | Industry Fable | ⭐⭐ | 30m | Write a short fable set in your industry 5 years from now. |
| CS-003 | Origin Story | ⭐⭐ | 30m | Write your professional journey. Illustrate it as a graphic novel. |
| CS-004 | AI Original Song | ⭐⭐ | 30m | Write lyrics about your work. Generate the music with AI. |
| CS-005 | Animated Timeline | ⭐⭐ | 30m | Build an animated timeline of a project or career milestone. |

#### 📊 Presentation & Communication (10+ activities)
Already covered in AI April — Strategy Decks, Project Pitches, etc.

#### 💻 Code & Technical (8+ activities)
| ID | Title | Diff | Time | Description |
|----|-------|------|------|-------------|
| CT-001 | Code Reviewer | ⭐⭐ | 25m | Feed AI a code snippet. Get a review with suggestions. |
| CT-002 | API Doc Generator | ⭐⭐ | 30m | Describe an API. AI writes the full documentation. |
| CT-003 | Test Writer | ⭐⭐⭐ | 35m | Give AI a function. It writes unit tests with edge cases. |
| CT-004 | Regex Builder | ⭐⭐ | 20m | Describe a pattern in English. AI writes and explains the regex. |

---

## 5. Delivery Formats

| Format | Duration | Structure | Activities | Best For |
|--------|----------|-----------|------------|----------|
| **1-Day AI Workshop** | 1 day (6-8 hrs) | Morning theory, afternoon hands-on | 6–8 activities | Quick team enablement, off-sites |
| **Weekly Sprint** | 1–2 weeks | 1 activity per day, Mon–Fri | 5–10 activities | Focused skill burst |
| **Monthly Marathon** | 4 weeks | Daily challenges, mandatory Fridays | 18–22 activities | Deep skill building (like AI April) |
| **Lunch & Learn Series** | 4–8 weeks | 1 session per week, 1 hour | 4–8 activities | Low-commitment introduction |
| **Self-Paced Course** | Open-ended | Learner chooses pace | 10–20 activities | Async, global teams |
| **Hackathon** | 1–2 days | Intensive team-based building | 3–5 big activities | Innovation, team bonding |
| **Certification Prep** | 2–4 weeks | Structured modules with assessments | 12–16 activities | Formal skill validation |
| **Custom** | User-defined | Fully configurable | Any number | Specific needs |

### Format Templates
Each format comes with:
- Pre-configured schedule template
- Suggested activity mix (% beginner / intermediate / advanced)
- Built-in milestones and checkpoints
- Communication templates (kickoff email, weekly updates, wrap-up)
- Recommended team size

---

## 6. Builder Wizard — UI Flow

### Screen 1: Welcome / Landing Page
- Hero: "Thinking in the Age of AI, and Learning by Doing"
- Tagline: "Build AI skills programs your team will actually complete."
- CTA: "Start Building" button
- Showcase: 3 example programs (AI April-style preview cards)
- Stats: "500+ activities · 12 tracks · 8 formats · Deploy in minutes"

### Screen 2: Program Setup
```
┌─────────────────────────────────────────────────┐
│  PROGRAM BASICS                                  │
│                                                  │
│  Program Name:  [________________________]       │
│  Team/Audience: [________________________]       │
│  Your Name:     [________________________]       │
│  Start Date:    [____/____/________]             │
│                                                  │
│  DELIVERY FORMAT                                 │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐   │
│  │Workshop│ │ Weekly │ │Monthly │ │ Custom │    │
│  │ 1 Day  │ │ Sprint │ │Marathon│ │        │    │
│  └────────┘ └────────┘ └────────┘ └────────┘   │
│  (+ Lunch & Learn, Self-Paced, Hackathon, Cert) │
└─────────────────────────────────────────────────┘
```

### Screen 3: Track Selection
```
┌─────────────────────────────────────────────────┐
│  SELECT CAPABILITY TRACKS (1–5)                  │
│                                                  │
│  ☑ 💬 Prompt Engineering        [Beginner ▼]    │
│  ☑ ✍️ Content Generation        [Mixed    ▼]    │
│  ☐ 📊 Data Analysis             [         ▼]    │
│  ☑ ⚡ Application Building      [Advanced ▼]    │
│  ☐ 🔄 Process Automation        [         ▼]    │
│  ☐ 🎯 Customer Intelligence     [         ▼]    │
│  ...                                             │
│                                                  │
│  Selected: 3 tracks · ~45 activities available   │
└─────────────────────────────────────────────────┘
```

### Screen 4: Activity Curation
```
┌─────────────────────────────────────────────────┐
│  CURATE YOUR PROGRAM                             │
│                                                  │
│  ┌─ Available ──────┐  ┌─ Your Schedule ──────┐ │
│  │ 💬 The Perfect   │  │ WEEK 1               │ │
│  │    Prompt   ⭐20m│  │ Mon: [drag here]     │ │
│  │ 💬 Role Play     │  │ Tue: [drag here]     │ │
│  │          ⭐ 15m  │  │ Wed: [drag here]     │ │
│  │ ✍️ Tone Tornado  │  │ Thu: [drag here]     │ │
│  │          ⭐ 20m  │  │ Fri: [drag here] 🔴  │ │
│  │ ...              │  │                      │ │
│  └──────────────────┘  │ WEEK 2               │ │
│                        │ ...                   │ │
│  [🤖 Auto-Fill]       └──────────────────────┘ │
│                                                  │
│  18 activities · 12.5 hrs · 3 tracks covered     │
└─────────────────────────────────────────────────┘
```

### Screen 5: Preview
- Full rendered preview of the training program
- Looks like AI April — cards, progress bar, leaderboard placeholder
- "This is what your learners will see"

### Screen 6: Export
```
┌─────────────────────────────────────────────────┐
│  YOUR PROGRAM IS READY! 🎉                      │
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │ 🌐 HTML  │  │ 📦 ZIP   │  │ 📄 PDF   │      │
│  │  Deploy  │  │ Full Repo │  │  Guide   │      │
│  │  GitHub  │  │ Download  │  │ Download │      │
│  │  Pages   │  │          │  │          │      │
│  └──────────┘  └──────────┘  └──────────┘      │
│                                                  │
│  ┌──────────┐  ┌──────────┐                     │
│  │ 📊 PPTX  │  │ 🔗 Share │                     │
│  │  Deck    │  │  Link    │                     │
│  │ Download │  │  Copy    │                     │
│  └──────────┘  └──────────┘                     │
└─────────────────────────────────────────────────┘
```

---

## 7. Generated Output — What Trainers Get

The exported training program includes:

### HTML Site (AI April-style)
- **Landing page** with program name, theme, KPIs
- **Challenge cards** with flip animation (front: description, back: details)
- **Weekly/daily structure** based on chosen format
- **Progress tracking** (auto-completion by date)
- **Leaderboard** with racer visualization (optional)
- **Scoring page** explaining the points system
- Fully self-contained — works offline, deployable to GitHub Pages

### PDF Program Guide
- Program overview and objectives
- Full activity calendar with descriptions
- Tool recommendations
- Submission guidelines
- Grading criteria (if applicable)

### PowerPoint Deck
- Program pitch for stakeholders
- Week-by-week overview
- Expected outcomes and success metrics

---

## 8. Technical Architecture

### Stack
- **Frontend**: Vanilla HTML/CSS/JS (like AI April — no build tools, deployable anywhere)
- **Hosting**: GitHub Pages
- **Data**: All activities stored as JSON in JS files
- **Export**: Client-side generation (JSZip for repo, jsPDF for PDF, PptxGenJS for PPTX)
- **No backend required** — everything runs in the browser

### File Structure
```
AI-Trainer-Hub/
├── index.html                 # Landing page + builder wizard
├── css/
│   └── styles.css             # Hub styling (dark theme, matching AI April aesthetic)
├── js/
│   ├── activities.js          # Full activity library (150+ activities)
│   ├── tracks.js              # Track definitions and metadata
│   ├── formats.js             # Delivery format templates
│   ├── builder.js             # Wizard logic, drag-and-drop, auto-fill
│   ├── preview.js             # Live preview renderer
│   ├── export-html.js         # HTML/repo generator
│   ├── export-pdf.js          # PDF generator
│   ├── export-pptx.js         # PowerPoint generator
│   └── app.js                 # Initialization and navigation
├── templates/
│   ├── program-template.html  # Base template for generated programs
│   ├── card-template.js       # Challenge card component
│   └── leaderboard-template.js# Leaderboard component
└── assets/
    └── logo.svg               # AI Trainer Hub logo
```

---

## 9. Smart Features

### Auto-Fill Engine
When a trainer selects tracks, difficulty, and format, the system can auto-generate a complete program:
- Distributes activities across the schedule
- Ramps difficulty (easier → harder over time)
- Places mandatory/graded activities on Fridays (for marathon format)
- Ensures track coverage is balanced
- Respects time estimates (no 3-hour days)

### Activity Recommendations
- "Based on your tracks, trainers also include..."
- "This activity pairs well with..."
- "Popular for Customer Service teams: ..."

### Customization
- Edit any activity title, description, or details
- Add fully custom activities
- Adjust time estimates
- Set which activities are mandatory vs optional
- Configure point values

---

## 10. Future Enhancements (V2+)

- **Learner Analytics** — Track completion rates, engagement, scores
- **Activity Rating** — Trainers rate activities after use, surfaces best ones
- **Template Marketplace** — Share and discover programs built by other trainers
- **LMS Integration** — SCORM export for corporate learning platforms
- **Team Management** — Add learners, assign programs, track progress
- **AI-Powered Curation** — "Describe your team and goals, AI builds the program"
- **Multi-language Support** — Generate programs in different languages
- **Slack/Teams Integration** — Auto-post daily challenges to team channels

---

## 11. Design Language

### Visual Identity
- **Primary**: Deep navy/space theme (like AI April) OR clean modern light theme
- **Accent**: Electric blue (#00cfff) + lime green (#b8ff35)
- **Fonts**: Bebas Neue (display), Outfit (body), DM Mono (data)
- **Cards**: Rounded corners, subtle borders, flip animations
- **Animations**: Smooth transitions, progress fills, hover effects

### Tone of Voice
- Empowering, not corporate
- "Build something real" not "complete the module"
- Action-oriented: "Start Building", "Deploy Now", "Go Live"
- The theme: *"Thinking in the Age of AI, and Learning by Doing"*

---

## 12. MVP Scope (V1)

### Must Have
- [ ] Landing page with hero, value prop, CTA
- [ ] 5-step builder wizard (setup → tracks → curate → preview → export)
- [ ] 100+ pre-built activities across 8+ tracks
- [ ] 3 difficulty levels with filtering
- [ ] Time estimates on all activities
- [ ] 4 delivery formats (Workshop, Weekly, Marathon, Custom)
- [ ] Auto-fill / auto-suggest
- [ ] Live preview of generated program
- [ ] HTML export (self-contained, GitHub Pages ready)
- [ ] ZIP download of full repo

### Nice to Have (V1.1)
- [ ] PDF export
- [ ] PowerPoint export
- [ ] Drag-and-drop activity curation
- [ ] Custom activity creation
- [ ] Shareable preview links
- [ ] Leaderboard toggle (on/off)

### V2
- [ ] Analytics dashboard
- [ ] Template marketplace
- [ ] AI-powered auto-curation
- [ ] LMS/SCORM export
