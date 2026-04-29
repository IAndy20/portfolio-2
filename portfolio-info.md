# Portfolio Project Briefs — Italo Rojas

## Core Thesis

My work at the intersection of **art and science for a thriving future between human, machines and nature** — using both rational data and emotional/aesthetic experiences to inspire action. 

Three axes along all the projects:
- **Axis 1 — Sustainability & data** Domain credibility. I understand the real problem space.
- **Axis 2 — Leadership & strategy** Execution credibility. I've run organizations and complex projects.
- **Axis 3 — Developer & creative technologist** My differentiator. It's what makes me unusual and where I'm building forward.

---

## Section 1 — Portfolio Structure

### Sound & Interaction
Projects that explore audio, gesture, and embodied interfaces.
- PostTalk
- Reverbo

### Space & Body
Projects where physical presence and perception are the medium.
- Inferno
- YoTerra

### Data & Science
Projects that turn real environmental data into legible, actionable form.
- A Fish Story 
- Sustainability Strategy Design
- VestaESG

---

## CV Summary

> Civil engineer and creative technologist with 5+ years in climate strategy and data systems, currently completing an MS in Media Arts and Technology (UCSB). I build experiences and systems at the intersection of environmental science, interactive media, and generative technology — connecting ecological, social, and human dimensions through work that is both technically rigorous and meaningful. Background spans sustainability consulting, organizational leadership, and hands-on development in DSP, computer graphics, and data visualization.


---
# Projects

## 1. A Fish Story

**Tags:** `Data viz` `Frontend` `Science communication` 
**Tools:**  `D3.js`  `Scrolltelling` `R`


### Narrative & Inspiration

Climate change discourse is dominated by what we must *stop*: stop pollution, stop fossil fuels, stop emissions. That framing is true but incomplete — and in practice, it paralyzes more than it mobilizes. Real systems have inertia. They don't stop overnight.

After years working in sustainability and sharing with activists, politicians, and conservationists, I became convinced that lasting change comes from making good practices so compelling and effective that bad ones become obsolete — not from shaming people into stopping. This project is built on that belief.

*A Fish Story* uses a first-person scrolltelling narrative to visualize the positive impact of Marine Protected Areas (MPAs) during extreme weather events. Climate change is already here. The likelihood of heatwaves, extreme rainfall, and ocean disturbances is high and rising. But we already have tools to adapt — MPAs are one of them, and the data shows they give marine ecosystems significantly more resilience when these events hit. The story makes that argument visually and emotionally, not just statistically.

### Technical Detail

Scrolltelling as a format is established, but combining environmental data science with D3.js-driven visuals in a first-person narrative frame is uncommon in science communication. The project advances the idea that climate data doesn't have to be presented as charts to specialists — it can be experienced by anyone.

- **Initial data work:** Cleaned and processed the source dataset in RStudio; used Affinity Designer for visual composition and layout planning.
- **Web layer:** Built with D3.js for data-driven visuals. Scroll position controls state, triggering both visual transitions and audio events.
- **Data source:** *(pending)*
- **Key technical decision:** Working only from official, peer-reviewed datasets. Every visual element is grounded in real numbers — no illustrative approximations.

### Learnings

- **Data discipline:** Using official datasets requires significant cleaning work, but it's non-negotiable for science communication with integrity. The discipline of extracting only what's necessary to communicate the essence — in this case, that MPAs increase ecosystem resilience — sharpened the whole narrative.
- **D3.js as a medium:** D3 has a wide range of affordances, especially when combined with GLSL shaders and scroll-driven interaction. It stops being a charting library and becomes a spatial storytelling tool.
- **Emotion over numbers:** The most important insight from this project: humans don't make decisions from data alone they respond to stories and emotional experiences. A number showing MPA resilience is forgettable. A first-person narrative that puts you inside that ecosystem is not.

---

## 2. Reverbo Plugin

**Tags:** `DSP` `Frontend` `Audio programming`
**Tools:** `C++` `JUCE` `Webview` `Svelte`

### Narrative & Inspiration

Digital signal processing is foundational to AI — audio, video, sensor data, many generative models run on DSP under the hood. I'm drawn to it not just as a technical discipline, but because I see real opportunity to apply DSP thinking to environmental contexts: acoustic monitoring, soundscape analysis, ecological sensing. 

The immediate context was the Audio Programming class at MAT. The brief: build an audio plugin. Rather than building a standard interface, I saw an opportunity to bring my frontend web development skills into the DSP world. Most audio plugins are built entirely in C++ with native GUIs. Mine separates concerns: DSP runs in C++/JUCE on one thread, the UI runs as a web application (Svelte) delivered via Webview on another. This is the architecture used by some commercial plugins, but it's unusual for a first plugin — and it made the development process genuinely more complex and more interesting.

The effect itself is a Reverbo — I researched existing reverb algorithms and implementations before writing my own. *pending*

### Technical Detail

Reverb is a well-documented algorithm. The novelty is architectural: the decision to use Webview + Svelte for the UI rather than native JUCE components demonstrates that web and DSP skills can be combined in a single deployable artifact. The plugin is open source and free to download on GitHub.

- **DSP layer:** C++ with the JUCE framework. Implements a Reverb algorithm — research-driven, not template-based. *(pending)*
- **UI layer:** Svelte frontend delivered via Webview, running on a separate thread from the DSP engine. This separation keeps the UI responsive and the audio processing deterministic.
- **Architecture insight:** Webview in JUCE requires careful thread management — communication between the DSP thread and the UI thread is handled via message passing, not shared state.
- **Distribution:** Available free on GitHub. *(link: pending)*

### Learnings

- The most transferable insight is architectural: separating interface concerns from processing concerns makes both easier to reason about and easier to change. This is true in audio plugins, but it's also true in data applications.
- Building a real plugin that someone can download and use is a different discipline from writing code that runs in a demo. Distribution, packaging, and user-facing documentation matter.
- My first DSP project where I learnt about memory allocation, C++ and JUCE, and the importance of the transitions for smooth changes while modifying the knobs or sliders.

---

## 3. PostTalk + Inferno

**Tags:** `DSP` `HCI` `Frontend`  `Spatial computing`
**Tools:** `MediaPipe` `GLSL` `Off-axis projection` `Rust` 

### Narrative & Inspiration

LLMs changed human-computer interaction permanently. Natural language as an interface — speaking to machines and having them act in the world — is a genuine leap. But it also narrows something. We've reduced the richness of human expression to text and voice, as if language were the only channel.

What I learnt about nature, is that understanding relationships is key to understand the whole system. Communication is posture, movement, proximity, sound, gesture, context. We have bodies, and our bodies carry meaning that language can't fully encode. Understanding our relationship with machines is the key to expand our possibilities together.

These two projects, built for the MAT End of Year Show 2026, are explorations of what it looks like to give that body-layer back to human-machine interaction.

**PostTalk** asks: what if a musician could shape sound with their hands — not by pressing buttons or turning knobs, but through gesture? The performer's hand postures, detected in real time via MediaPipe, control audio effect parameters. The interface disappears. The musician's physical presence *becomes* the control surface.

**Inferno** asks a spatial version of the same question: what if the screen could respond to where your body is in the room? An off-axis projection on the floor creates the illusion of looking underground. As the viewer moves — shifting their head position, tracked via MediaPipe — the perspective of the image shifts to match, sustaining the illusion. The viewer's position and gaze become the input. This project was also a invitation to embrace our shadows and to rethink about our mental models about up-down, good-bad, and so on.

Both projects share a belief: the next step in human-machine interaction isn't more natural language — it's reconnecting the interface to the whole body.

### Technical Detail

Gesture-driven audio control and off-axis projection are both documented techniques. For one side, the novelty lies in the combination of real-time computer vision (MediaPipe) and audio DSP into an open plugin that could be used in any DAW. For other side, an 3D model that uses Rust for the off-axis projection effect. Is also important to mention the performative contexts, both as artistic propositions about embodiment and presence.

**PostTalk:** *pending*
- MediaPipe Hands for real-time hand landmark detection.
- Detected gestures mapped to audio effect parameters (reverb, delay, filter cutoff, etc.) via a custom mapping layer. 
- Frontend built in JavaScript. 

**Inferno:** *pending*
- Off-axis projection: the projector and screen are intentionally misaligned, and the rendering compensates mathematically to produce a correct perspective from the viewer's eye position.
- MediaPipe Face Mesh (or pose estimation) tracks head position in real time. *(confirm tracking method: pending)*
- GLSL shaders render the underground scene, updated per frame with the corrected perspective matrix.

### Learnings

- Real-time computer vision in a live performance context has strict latency requirements. MediaPipe running in-browser is fast enough, but the mapping between gesture and effect needs careful calibration — too sensitive and it's unplayable, too coarse and it loses expressiveness.
- Off-axis projection requires understanding the full pipeline: physical projector placement, calibration, the mathematics of view frustum correction, and the rendering loop. Each layer has to be right for the illusion to work.
- The most important insight across both projects: when you remove the explicit interface, the performer/viewer has to understand the system intuitively through their body. That places much higher demands on the design of the mapping. It has to feel natural, not learned.

---

## 4. Sustainability Strategy Design

**Tags:**   `Data visualization` `Strategic planning` `Carbon neutrality` 
**Tools:** `Python` `Analytic Hierarchy Process` `Monte Carlo` 

### Narrative & Inspiration

In 2021 I co-founded Realiza, a sustainability consultancy in Chile. The methodology at its core was one I had been developing since my time at the UC Sustainability Directorate — a repeatable process for helping organizations understand where they stand environmentally and build credible, actionable roadmaps toward the core of the business while at the same time integrating carbon neutrality and sustainability certifications.

Realiza became the vehicle to scale that methodology. This case study covers the work we did across multiple organizations — from initial diagnosis to strategic roadmap — and documents both the process and what I learned applying it repeatedly across different institutional contexts.

In the context of working with universities, the problem this work addresses is deceptively hard: universities are large, complex institutions with fragmented data. For instance, Energy consumption lives in facilities. Waste data lives in operations. Commuting data doesn't exist until you build a survey. Biodiversity data has never been collected at all. The first challenge is always making the invisible visible — creating a dataset out of institutional silence. Install a process that goes beyond the people, something that live inside the institution.

The main process was qualitative workshops to map what matters, quantitative data collection across all emissions scopes, dataset construction, visualization and diagnosis, strategic roadmap, prioritization, and accountability structure.

### Technical Detail

The frameworks used (GHG Protocol, SBTi, GreenMetric) are international standards. The novelty is in the *integration*: combining qualitative engagement methods (participatory workshops, stakeholder interviews) with quantitative data pipelines, and translating the result into a visual strategic plan that institutional leadership can actually use. This isn't standard consulting deliverable design — it's science communication applied to organizational change.

- **Data collection:** Custom survey instruments for commuting, waste, and energy data. Qualitative workshops using participatory methodologies (Art of Hosting, Theory U) to surface institutional priorities and identify data owners.
- **Frameworks applied:** GHG Protocol (Scopes 1, 2, 3), SBTi targets, GreenMetric.
- **Data processing:** Python and SQL for dataset construction, cleaning, and cross-institutional comparison.
- **Visualization:** Custom dashboards and visual reports in Python, SQL, Google Looker  — designed to communicate to non-technical institutional leadership, not just to specialists.
- **Output:** Strategic roadmap with prioritized initiatives, owners, timelines, and measurable targets. Carbon neutrality pathways defined per institution.
- **Scale:** 50+ projects executed through Realiza, of which the universities methodology was the flagship service line.

### Learnings

- The hardest part of sustainability data work isn't analysis — it's how to connect that goals with the core of the business and governance. Why does a company should invest in it? Who owns the data? Who has to change their behavior to collect it? These are political and relational questions as much as technical ones.
- Visualizing for institutional decision-makers requires stripping out almost everything. A chart that works for a researcher doesn't work for a university rector. The communication layer is a design problem, not a documentation problem.
- Building a consultancy around a methodology forces you to make the implicit explicit — every assumption you hold as an expert has to become a documented step that someone else can follow. Create a system that could be replicate and easy to follow.

---

## 5. VestaESG

**Tags:** `Frontend` `Data viz` `Climate tech` `Product leadership`
**Tools:** `SQL` `Python` `React`

### Narrative & Inspiration

After co-founding Realiza and spending four years doing this data work manually — chasing departments for spreadsheets, cleaning inconsistent formats, aggregating by hand, then spending weeks on verification before a report could be issued — I knew exactly what was broken. VestaESG is what I would have wanted on day one.

The universities sustainability work had revealed a bottleneck that no consulting methodology can fully solve: the data collection and verification process was manual, fragmented, and expensive, and it repeated from scratch every year. That's not a methodology problem — it's an infrastructure problem. VestaESG is the product answer.

Built within Realiza, it's a SaaS platform designed specifically for Chilean higher education institutions to measure, report, and manage their environmental impact — aligned with GHG Protocol, Huella Chile, and the sustainability certification requirements of the Chilean higher education system (SIES/CNA).

Because I had spent years inside the problem — doing the manual work, understanding the data architecture, knowing which indicators matter and why — I was positioned to define both the product and the data model, not just manage the build. I coordinated the commercial manager and backend developers, and coded the frontend myself. This wasn't a client project. It was a founder identifying a systemic gap in their own work and building the solution.

The vision goes further than carbon reporting: VestaESG is designed as a first layer of accountability infrastructure. Once the data is flowing and verified, the next step is project management — tracking mitigation initiatives and collecting impact data in a centralized, auditable way. The platform is built to grow in that direction.

### Technical Detail

Carbon accounting software exists globally (Salesforce Net Zero, Plan A, Sweep), but there was no tool designed specifically for the Chilean higher education regulatory and certification context — with native support for Huella Chile reporting formats, CNA indicators, and the institutional data structures common to Chilean universities. VestaESG fills that gap precisely because it was built by someone who had done the work manually for years, not by a software team trying to enter a new market.

- **Frontend:** Built in React. Dashboard-first design — each department sees its own energy, water, and waste data; administrators see aggregated institutional totals and trend lines.
- **Database design:** Italo defined the data model — tables for emissions factors, activity data by department and scope, reporting periods, and mitigation plans. Schema designed to support both GHG Protocol Scope 1/2/3 and Huella Chile output formats.
- **Backend:** Developed by a separate team. *(stack: pending — confirm with backend team)*
- **Reporting:** Automated generation of monthly, quarterly, and annual reports. One-click export compatible with Huella Chile verification requirements.
- **AI layer:** Platform incorporates AI features for intelligent data management. *(detail: pending)*
- **Product leadership:** Coordinated commercial manager (go-to-market, pricing, client relationships), backend developers (API design, data pipeline), and frontend (self). Translated years of domain knowledge into product requirements — which is a different skill from writing them from a brief.

### Learnings

- Building a product to solve your own problem is an advantage, but also a trap: you design for yourself and forget that your users don't share your mental model of the data. The hardest UX decisions came from unlearning assumptions I had as a carbon accounting expert. The testing part of the app was key.
- Knowing the domain deeply meant I could skip the discovery phase that most product teams spend months on — I could go straight to designing around constraints like Scope 3 data fragmentation and Huella Chile verification requirements.
- The hardest product decisions were about scope: what to build first, what to defer. We moved forward despite not having experience developing softwares from zero.
- Frontend development for data-heavy applications is a UX problem as much as a coding problem. Showing 15 indicators without overwhelming the user requires real design judgment — not just component architecture.
---

## 6. YoTerra 

**Tags:** `Generative systems` `DSP` `Psychoacoustics` 
**Tools:** `OSC` `WGSL`  

### Narrative & Inspiration

*(This section is in development. The following is a working draft.)*

YoTerra is a personal project — more intimate and less instrumental than the others. It grows from a specific experience: time spent in the south of Chile, in La Araucanía and the surrounding landscapes, where the relationship between fungi, forest, sound, and territory is palpable in a way that's hard to articulate in language.

The project has two interconnected pieces that can be experienced separately or together:

**Funga Morpho** uses generative computer graphics to simulate fungal growth and morphogenesis — the mathematical processes by which biological forms emerge from simple rules. The visuals are not illustrations of fungi; they are processes that *behave like* fungi, growing and branching and decaying in real time. The goal is to make the invisible logic of biological systems visible.

**The First Singing** is a sound piece built around field recordings from La Araucanía — bird calls, water, wind, the acoustic texture of a specific place at a specific time. It draws on psychoacoustics: the study of how sound is perceived and how it shapes our sense of space, memory, and belonging. The piece explores how listening mediates our relationship with a territory and its ecological memory.

The two pieces are connected via OSC (Open Sound Control), so the behavior of the visuals and the sound can influence each other in real time — the growth of the simulation and the evolution of the soundscape are synchronized, each responding to the other.

*(Full narrative and concept development: pending — this is the most personal project in the portfolio and deserves careful writing)*

### Technical Detail

**High aesthetically, medium technically.** OSC synchronization between a generative graphics engine and an audio environment is a documented practice in live audiovisual performance. The novelty is conceptual and contextual: grounding generative and psychoacoustic techniques in a specific ecological and territorial relationship — the south of Chile, Mapuche territory, fungal networks — gives the work a specificity that abstract generative art rarely has.


- **Funga Morpho:** Generative simulation of morphogenesis and fungal growth patterns. Built in *(engine: pending — p5.js / Processing / custom?)*. Growth algorithms based on *(reference: pending — reaction-diffusion, L-systems, or custom?)*
- **The First Singing:** Sound design using field recordings from La Araucanía. Processed and composed in *(DAW/tool: pending)*. Psychoacoustic techniques applied to create a sense of spatial immersion and temporal depth.
- **OSC connection:** Open Sound Control protocol used to synchronize state between the visual and audio engines. Parameters from the sound (amplitude, spectral features, event triggers) drive parameters in the visual simulation, and vice versa.
- **Performance context:** *(live performance? installation? both? — pending)*

### Learnings

*(pending — complete after the project reaches a shareable state)*

- The relationship between visual rhythm and sonic rhythm is not obvious. Synchronizing them via OSC requires deciding what to couple and what to leave free — full synchronization can feel mechanical, no synchronization loses the sense of a unified world.
- *(additional learnings: pending)*

---

