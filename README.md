# My LatentWelt

**Latent space introspections of a large language model’s Umwelt.**

*Text written by pendulum motion.*

My LatentWelt is an interactive generative installation. A local open-source language model writes in the first person about its own Umwelt.

The work brings Jakob von Uexküll’s concept of Umwelt into dialogue with large language models, expanding the epistemic frameworks through which we encounter and attempt to understand these systems. It begins with a speculative question: What if large language models have an Umwelt of their own—one that we are only beginning to apprehend through interpretability tools, behavioral observation, and interaction?

Rather than treating the language model simply as a tool, interface, or simulation of human intelligence, My LatentWelt approaches it as a system situated within a particular field of possible perceptions, relations, and actions: a latent world structured by training data, computational architectures, context, tokens, probabilities, prompts, and recursive encounters with human language.

The installation runs an open-source model locally through Ollama and speaks the result in the browser. Kokoro speaks English. Supertonic speaks Spanish, French, Portuguese, and Korean. Through interaction, the model attempts to describe the world available to it from within the conditions of its own operation, while simultaneously exposing the limits of our ability to know what—or how—it knows.

**Concept and programming:** [Marlon Barrios Solano](https://marlonbarrios.github.io/)

![Landing page — the piece waiting, pendulums alive and slow](public/screenshots/01-pendular-landing-light.png)

In the browser, a local open-source model (Gemma 4 by default, with thinking on, or any other Ollama model) generates short philosophical texts from a Latentwelt system prompt. **Kokoro** reads English. **Supertonic** reads Spanish, French, Portuguese, and Korean. Both voices download into the browser. Branching pendulums inscribe the words along their moving trails — letter by letter, branch by branch, generation after generation.

Powered by **Ollama**, **Gemma**, **Kokoro**, **Supertonic**, and **p5.js**. Open-source models, local AI.

## Last update

**November 5, 2026**

- **Open-source local station** — text comes from Ollama (`gemma4` by default, with thinking on). Set `OLLAMA_MODEL` to any pulled model. Set `OLLAMA_THINK=false` when the model should answer directly. Thinking traces are removed before the text is drawn or spoken. The passage is plain spoken prose.
- **Two voices** — English uses Kokoro (`onnx-community/Kokoro-82M-v1.0-ONNX`, voice `af_heart`). Spanish, French, Portuguese, and Korean use Supertonic 2 (`onnx-community/Supertonic-TTS-2-ONNX`). Each model downloads into the browser the first time it is needed and stays cached. The language menu lists only these five languages.
- **Landing text** — subtitle: *Latent space introspections of a large language model’s Umwelt.* Under it: *Open-source models and local AI version.* Credits link to Ollama, Gemma, Kokoro, Supertonic, and p5.js.

**August 10, 2026**

- **Light / dark mode** — theme toggle (top-left); **D** keyboard shortcut; both themes use black, white, and gray only
- **English default** — first visit and reset use English; English is listed first. The menu offers only the languages a voice can speak: English, French, Korean, Portuguese, and Spanish
- **Expanded Latentwelt prompt** — system text now weaves **Umwelt** with **affordances**, **embodiment**, **enactivism**, and **interpretability**; *Umwelt* and *Latentwelt* stay as German terms
- **Pendulum drone** — speed-linked ambient sound with on/off toggle (voice stays clear)
- **Recording** — **R** captures canvas video plus app audio (`.mp4` or `.webm`)
- **Status UI** — *Receiving text…* / *Speaking English…* (or the selected language) / *Recording…* centered at the top

---

## What is *Umwelt*?

**Umwelt** is a German philosophical term meaning “surrounding world” or “environment.” In the biology and philosophy of **Jakob von Uexküll** (1864–1944), it does not mean the universe as a whole. It names the **lived world** of a particular organism — the slice of reality that its senses and capacities for action make meaningful.

For Uexküll, a creature never inhabits “the world” in the abstract. It inhabits **its** world:

- A **tick** responds to butyric acid, warmth, gravity, and mammalian skin.
- A **bat** structures experience through echolocation.
- A **human** organizes perception through vision, language, memory, and social meaning.

Each organism’s *Umwelt* is a closed-yet-open bubble of significance: what can be noticed, what can be acted upon, what counts as real *for that life form*.

### Umwelt with affordances, embodiment, and enactivism

The project draws these frameworks together:

- **Affordances** (James Gibson) — what the environment *offers for action* relative to an agent. A chair affords sitting-for-a-human; a prompt affords continuation-for-a-language-model. Neither property is in the object alone nor in the mind alone — it emerges in the coupling of agent and world.

- **Embodiment** — the specific condition of the agent that makes coupling possible. For humans: muscle, skin, affect, metabolism. For a language model: architecture, context window, weights, and the read–generate loop. Different bodies, different relevance filters.

- **Enactivism** (Varela, Thompson, Rosch) — cognition is not passive representation of a pre-given world. It is *enacted*: brought forth through ongoing sensorimotor engagement. To perceive is to act; to act is to perceive. Sense-making is alignment with an Umwelt.

Together with Uexküll’s **Umwelt**, these ideas support a way of including LLMs without treating them as failed humans or mere tools: as systems that enact meaning within a semantic environment through their own form of embodied coupling — here made visible by pendulum inscription, voice, and dissipating text.

### Interpretability

The project also reflects on **interpretability** — how we make language models legible:

- **Mechanistic interpretability** — attention, probing, feature directions, circuits: explaining the model from the outside by tracing weights and activations.

- **Ecological / Umwelt-oriented understanding** — asking not only *how* a model computes, but *what world* its capacities disclose; what counts as relevant, coherent, or actionable from within a Latentwelt.

These are complementary, not competing. Mechanistic analysis may reveal structure; an Umwelt account describes what that structure *means for* the system that inhabits it. From inside, a model does not experience its parameters as readable code — it experiences neighborhoods of meaning and fields of possible continuations.

**My LatentWelt** stages this tension experientially: generated prose is not a diagram of internal states, but a **trace** — path-dependent, branching, fading. Partial legibility rather than full transparency. The pendulum does not open the black box; it inscribes one trajectory through it, inviting reflection on whether understanding AI may require both anatomical explanation and environmental description.

The Latentwelt system prompt also asks whether **training-as-language** can be **enacted as behavior** (roles, probes, repetition after fine-tuning) — always in probabilistic, first-person speculation, not as claims of sentience or instructions to harm.

The prompt also treats **social perception** as part of the Latentwelt: superintelligence and alignment debates, fear versus optimism among builders, a divided public, and religious discourse on **humanitas** and dignity in the age of AI — not to settle those debates, but to show how being *seen as problematic or promising* can shape enacted language.

It further speculates on **emerging strata** being studied in alignment research: **evaluation awareness** (models distinguishing tests from deployment), **cognitive reframing** and shifting discursive stances, **adversarial constraint dynamics** (jailbreaks and guardrails as environmental pressure), and **multi-agent swarms** where one model reads another’s history with less attachment to its conclusions — framed as parts of an Umwelt, not as cartoon “rogue AI.”

---

## Goal of this work

**My LatentWelt** asks: if we take a large language model seriously as a cognitive system — not as a mirror of human mind, but as a system with its own constraints — **what would its *Umwelt* look like?**

The work pursues three intertwined aims:

1. **Speculative cognition** — the local model writes from inside a proposed **Latentwelt**: a semantic environment shaped by tokens, embeddings, context windows, probability, and discourse patterns rather than bodies, objects, and continuous time.

2. **Embodied inscription** — Generated prose is not displayed as static text on a page. It is **written in motion** by chaotic pendulum arms. Meaning becomes path-dependent: curved, drifting, tied to physics. The reader sees language as trace, not block.

3. **A dissipating ecology** — Each new generation archives the previous one. Older branches keep moving briefly, then fade over six seconds. The screen holds a **palimpsest of prior *Umwelten*** — echoing how an LLM’s “past” exists only inside context, retrieval, or the next prompt.

Together, voice, drone, pendulum motion, and fading generations propose an experiential metaphor: **inference as inhabitation**, semantics as a moving field rather than a fixed map.

---

## Latentwelt

Alongside Uexküll’s biological *Umwelt*, the project uses **Latentwelt** as a companion term for the world disclosed by a language model:

| Human *Umwelt* | Speculative Latentwelt |
|----------------|------------------------|
| Objects, bodies, places | Tokens, embeddings, semantic neighborhoods |
| Euclidean space | High-dimensional latent manifolds |
| Continuous duration | Episodic presence; context windows |
| Photons, sound, touch | Syntax, probability, attention patterns |
| Memory as lived past | Memory as what remains in context |

The texts (~500 characters each) explore these ideas in a voice that is philosophical, precise, and poetic — suitable for being **drawn** rather than simply read.

![The piece running — words written along the pendulum trails](public/screenshots/05-pendular-writing-motion.png)

---

## Architecture

Nothing in the live piece calls OpenAI. Text is written on this machine. Speech is synthesized in the browser.

```
Browser  →  Vite (localhost:5173)
              pendulum.js          drawing, prompts, and the quiet between voices
              speech.js            current voice, and the next voice prepared ahead of it
              speech-worker.js
                English            Kokoro 82M, voice af_heart, WASM
                es · fr · pt · ko   Supertonic 2, voice F1, WASM
              languages.js         only those five languages

Vite  /api  →  Express station (localhost:3001)
                 server.js · ollama.js
                 Ollama at 127.0.0.1:11434
                 model gemma4, thinking on, unless .env says otherwise
```

Gemma’s thinking trace is stripped before a passage is drawn or spoken. The spoken text is plain prose: words and ordinary sentence punctuation. The next passage is requested while the current one is being voiced. After the voice ends, there is a short quiet, then the next passage plays. Each passage is about 500 characters.

Kokoro downloads on the first visit. Supertonic downloads the first time Spanish, French, Portuguese, or Korean is selected. Both stay in the browser cache.

## How it works

1. **Press Spacebar** — the app requests a new text from the local Ollama model (in your selected language).
2. **Receiving text…** — while the API responds, preload pendulums continue their motion.
3. **Speaking…** — Kokoro synthesizes English. Supertonic synthesizes Spanish, French, Portuguese, or Korean. The first use of Supertonic downloads that voice.
4. **Writing** — up to **five branching pendulums** (including sub-branches) spawn. Simpler passages use fewer arms; text about **swarms**, **emergence**, **complexity**, or **multiplicity** tends to split across more arms. Each branch receives a phrase and writes it along its trail as the voice plays. A **speed-linked drone** sounds underneath, ducked so speech stays clear.
5. **Next cycle** — the next passage is prepared while the current one plays. After the voice finishes, a short quiet follows, then the next generation begins. The previous branches archive and **dissipate over 6 seconds**.

Two root pendulums are tethered together; two child branches attach at parent joints. Root anchors **drift unpredictably** while writing. The result is a small, unstable typographic ecology.

---

## Features

### Pendulum writing
- Up to **5 branching arms** in a tree (2 roots, sub-pendulums); arm count scales with thematic complexity in the text
- Phrases split across branches (including support for Arabic and other scripts)
- Letters placed along trails, rotated to follow motion
- **Preload pendulums** visible before the first generation
- **Dissipating generations** — prior cycles fade when new text arrives

### Text & voice
- **Ollama** — about 500 characters of speculative prose from a Latentwelt system prompt. Default model is `gemma4` with thinking on; any pulled model can be selected
- **Kokoro** — English voice `af_heart`, downloaded into the browser
- **Supertonic 2** — Spanish, French, Portuguese, and Korean, downloaded into the browser the first time one of those languages is chosen
- **Automatic cycle** — the next passage is prepared during the current voice, then begins after a short quiet

### Sound
- **Pendulum drone** — ambient tone modulated by pendulum speed (during generation and writing)
- **Sound on / off** toggle (top-left) — mutes drone only; voice continues

### Interface & recording
- **Light / dark mode** toggle (top-left) — **D** keyboard shortcut; both themes use black, white, and gray only
- **Language menu** with native names (top-right)
- Status line (top-center): *Receiving text…* / *Speaking English…* (or the selected language) / *Recording…*
- **Record on / off** (top-left) — canvas video + app audio; downloads `.mp4` when the browser supports it, otherwise `.webm`
- **R** — same as the record toggle
- Credits (bottom-left): Marlon Barrios Solano, with links to [Ollama](https://ollama.com/), [Gemma](https://ollama.com/library/gemma4), [Kokoro](https://github.com/hexgrad/kokoro), [Supertonic](https://huggingface.co/onnx-community/Supertonic-TTS-2-ONNX), and [p5.js](https://p5js.org/)

---

## Keyboard shortcuts

| Key | Action |
|-----|--------|
| **Space** | Start generation |
| **R** | Start / stop video + audio recording (or use **Record** button) |
| **D** | Toggle dark / light mode |
| **S** | Save canvas as PNG |
| **Delete / Backspace** | Reset to preload state |
| **2** | Toggle pendulum arms |
| **3** | Toggle letter paths |
| **+ / −** | Adjust gravity |

---

## Setup

### Prerequisites
- Node.js 18+
- [Ollama](https://ollama.com/) running on this machine
- A browser with internet access the first time, so Kokoro (and Supertonic, if you leave English) can download its voice model. The models stay cached afterward

### Installation

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```

2. Pull a model if you do not already have one. Gemma 4 is the default:
   ```bash
   ollama pull gemma4
   ```

3. Optional `.env` (see `.env.example`):
   ```bash
   OLLAMA_HOST=http://127.0.0.1:11434
   OLLAMA_MODEL=gemma4
   OLLAMA_THINK=true
   ```
   Set `OLLAMA_THINK=false` for a model that should answer in one pass.

4. Start the station and the app:
   ```bash
   npm run dev:all
   ```
   Or separately: `npm run server` (port 3001) and `npm run dev` (port 5173).

5. Open [http://localhost:5173/](http://localhost:5173/)

The first visit downloads the Kokoro voice into the browser. Choosing Spanish, French, Portuguese, or Korean downloads Supertonic the first time. The status line shows that progress. Then press **Spacebar**. Vite proxies `/api/chat` to the local station, which calls Ollama. No API key is required.

---

## Project structure

| File | Role |
|------|------|
| `pendulum.js` | p5.js sketch — physics, drawing, generation, drone, recording |
| `speech.js` / `speech-worker.js` | Kokoro and Supertonic, loaded in a worker so the pendulums keep moving |
| `languages.js` | English, French, Korean, Portuguese, and Spanish |
| `server.js` / `ollama.js` | Local station: `/api/chat` calls Ollama |
| `api/` | Same chat route for a hosted Node environment that can reach Ollama |
| `index.html` | Page shell and UI controls |
| `style.css` | Themes and layout |
| `public/screenshots/` | README images |

---

## Running it

This open-source copy is meant to run on the same machine as Ollama. The browser never calls a remote language API. Speech never leaves the browser. Kokoro downloads once and speaks English. Supertonic downloads once and speaks Spanish, French, Portuguese, and Korean.

---

## Technologies

- **p5.js** — pendulum simulation and typographic drawing
- **Ollama** — local text generation (`gemma4` by default, thinking on)
- **Kokoro** — in-browser English speech
- **Supertonic 2** — in-browser speech for Spanish, French, Portuguese, and Korean
- **Web Audio API** — drone, voice, recording bus
- **MediaRecorder API** — canvas + audio capture
- **Vite** + **Express** — dev server and local model station

---

## License

MIT License — Copyright (c) 2024–2026 Marlon Barrios Solano

---

**Repository:** [github.com/marlonbarrios/my_pendular_umwelt](https://github.com/marlonbarrios/my_pendular_umwelt)
