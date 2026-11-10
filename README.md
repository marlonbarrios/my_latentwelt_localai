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

Powered by **Ollama**, **Gemma**, **Kokoro**, **Supertonic**, and **p5.js**.

**Open-source models and local AI version.**

The words on screen are written by a model running on your own computer. Nothing in the live piece calls a remote language service, and no API key is required. Speech is synthesized in the browser.

---

## Models and applications

Each part of the installation is a separate program. You install them once. After that, the piece runs on this machine.

| Piece | What it is | Download it here |
|-------|------------|-----------------|
| **Cursor** | The editor, with an AI chat that can guide the install | https://cursor.com/download |
| **VS Code** | Another editor, if you do not want Cursor | https://code.visualstudio.com/download |
| **Git** | The tool that copies this project from GitHub | https://git-scm.com/downloads |
| **Node.js** | Runs the local station. The installer also gives you **npm** | https://nodejs.org/en/download |
| **Ollama** | Runs the open-source language model on this computer | https://ollama.com/download |
| **Gemma 4** | The writer. Page for the model; the download command is below | https://ollama.com/library/gemma4 |
| **My LatentWelt** | This project. The green **Code** button, then **Download ZIP**, or the direct ZIP | https://github.com/marlonbarrios/my_latentwelt_localai |
| **Kokoro** | English voice. The browser downloads it. This is its page | https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX |
| **Supertonic 2** | Spanish, French, Portuguese, and Korean. The browser downloads it | https://huggingface.co/onnx-community/Supertonic-TTS-2-ONNX |
| **p5.js** | Draws the pendulums. The page loads it. This is its home | https://p5js.org/ |

Gemma 4 is the model this version expects. Any other model you have already pulled in Ollama can be selected later in a file named `.env`.

Open WebUI is an optional chat window for the same local models. It is separate from the pendulums. The full beginner path for Ollama, a first model, Python, and Open WebUI, on a Mac and on a PC, is **[Beginner's guide to Ollama and Open WebUI](docs/ollama-and-open-webui.md)**. Every installer in that guide has its own address. Skip it if you only want this piece.

---

## Every download, in one list

Open each address in the browser you already have. A PC includes Microsoft Edge. A Mac includes Safari. If you want another browser: [Google Chrome](https://www.google.com/chrome/) at https://www.google.com/chrome/ or [Mozilla Firefox](https://www.mozilla.org/firefox/new/) at https://www.mozilla.org/firefox/new/.

Click the address, or copy it into the address bar and press Enter. When a page offers more than one file, choose the one for your computer. A PC wants the Windows file. A Mac wants the macOS file.

| What | Address to open |
|------|-----------------|
| Cursor | https://cursor.com/download |
| VS Code, only if you skip Cursor | https://code.visualstudio.com/download |
| Git | https://git-scm.com/downloads |
| Node.js, which includes npm | https://nodejs.org/en/download |
| Ollama, the page that offers every system | https://ollama.com/download |
| Ollama for a PC | https://ollama.com/download/windows |
| Ollama for a Mac | https://ollama.com/download/mac |
| Gemma 4, the model page | https://ollama.com/library/gemma4 |
| This project on GitHub | https://github.com/marlonbarrios/my_latentwelt_localai |
| This project as a ZIP file | https://github.com/marlonbarrios/my_latentwelt_localai/archive/refs/heads/main.zip |
| Kokoro, the English voice | https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX |
| Supertonic, the other four languages | https://huggingface.co/onnx-community/Supertonic-TTS-2-ONNX |
| p5.js, the drawing library | https://p5js.org/ |

Kokoro, Supertonic, and p5.js do not need a separate installer. The page fetches them. The links are there so you can see what they are. Gemma 4 is not a file you save from the browser. After Ollama is installed, a terminal command downloads it. That command is in step 4.

---

## Install it on a new computer

This path is for someone who has not used a terminal before. Do the steps in order. Each one is a separate install. Skipping one is the usual reason the page opens and then sits on *Receiving text…*.

The piece itself is the same on a Mac and on a PC. The commands `npm install`, `ollama pull gemma4`, and `npm run dev:all` are the same. What changes is the installer you download, the name of the terminal, and where the Ollama icon sits after you open it. Each step below says which part is different.

### Cursor can guide you while you do this

[Cursor](https://cursor.com/) is a code editor with an AI in the same window. After you open this project, open the chat and tell it where you are. For example: “I am installing My LatentWelt. I have not installed Node yet. What do I do next?”

You can chat through the whole process. Paste an error from the terminal. Ask what a command means. Ask it to look at this README and walk you one step at a time. The AI can see the project files and the terminal, so it can tell the difference between a missing program, a model that was not downloaded, and a server that is not running.

[VS Code](https://code.visualstudio.com/) can open the same folder if you prefer that editor. The steps below are the same. The built-in guide described here is Cursor’s chat.

### 1. Download Cursor

Open https://cursor.com/download and take the file for your computer. Install one editor. Cursor is the one with the chat that can stay with you through these steps. If you would rather use VS Code, the same split applies at https://code.visualstudio.com/download.

**On a PC**

1. Download the Windows installer.
2. Open your **Downloads** folder and double-click that file.
3. Follow the windows until the installer finishes.
4. Open Cursor from the Start menu.

**On a Mac**

1. Download the Mac installer. If the page asks which Mac, open the Apple menu and choose **About This Mac**. **Apple silicon** is an M1, M2, M3, or M4. **Intel** is an older Mac.
2. Open the downloaded file. If a window shows Cursor next to a folder named **Applications**, drag Cursor onto **Applications**.
3. Open Cursor from **Applications**.
4. If macOS asks whether to open an app from the internet, choose **Open**.

### 2. What a terminal is

A terminal is a text window where you type a command and the computer runs it. There is no button for `npm install`. You type that line and press Enter.

You will use a terminal in two places:

- **Inside Cursor.** This is the one to use for this project. Open the project folder first, then open the terminal. On a PC the shortcut is **Ctrl+`** (the key beside 1). On a Mac it is **Control+`**. You can also use the menu **View → Terminal**. The line at the start of the terminal should be the project folder. Commands you type there apply to My LatentWelt.
- **Outside Cursor.** This is the system terminal. On a PC, open **PowerShell** from the Start menu. On a Mac, open **Terminal** from **Applications → Utilities**. Use this one to confirm that Node and Ollama exist even when Cursor is closed. If you use it to run the piece, first move into the project folder with `cd`.

A command is one line. `cd` means “change directory,” which means “move into this folder.” `npm` is the JavaScript package tool. It is not a separate download. It is installed when you install Node.js.

A missing program looks different in the two terminals. On a PC, PowerShell says the command is not recognized. On a Mac, Terminal says `command not found`. In both cases, close that terminal, open a new one, and try again. The old window was often opened before the installer finished.

### 3. Install Node.js, which includes npm

Node.js runs the small local station that talks to Ollama. npm downloads the JavaScript libraries this repository lists.

1. Open https://nodejs.org/en/download and download the **LTS** installer for your computer.
2. Run that installer.
   - **On a PC,** choose the Windows installer (`.msi`). Accept the option that adds Node to your PATH.
   - **On a Mac,** choose the macOS installer (`.pkg`). The Mac installer has no PATH checkbox. Open the package and follow it to the end.
3. Close every terminal that was already open, including Cursor’s, and open a new one.
4. Check the install. The two commands are the same on a PC and on a Mac:

```bash
node -v
npm -v
```

You should see two version numbers, not an error. Node.js 18 or newer is enough.

### 4. Install Ollama and download Gemma 4

Ollama is the program that holds the language model on this computer.

The model page is https://ollama.com/library/gemma4. Gemma 4 arrives through the terminal command below. The page is there so you can see which model you are getting.

**On a PC**

1. Open https://ollama.com/download/windows and download the Windows installer.
2. Open your **Downloads** folder and double-click `OllamaSetup.exe`.
3. Follow the installer. When it finishes, Ollama starts on its own.
4. Look near the clock for the Ollama icon. It can also be opened from the Start menu. Leave it running. The piece talks to it in the background, at http://127.0.0.1:11434.

**On a Mac**

1. Open https://ollama.com/download/mac and download the Mac installer.
2. Open `Ollama.dmg`.
3. Drag **Ollama** onto **Applications**.
4. Open Ollama from **Applications**. If macOS asks to install the command-line tool, allow it. That is what lets Terminal run `ollama`.
5. Look in the menu bar at the top of the screen for the Ollama icon. Leave the app running. The piece talks to it in the background, at http://127.0.0.1:11434.

**On a PC and on a Mac,** then type:

```bash
ollama pull gemma4
```

Gemma 4 is several gigabytes. Wait until the command finishes. Then check that it is there:

```bash
ollama list
```

You should see `gemma4` in the list. Other models can sit beside it. This version uses `gemma4` unless `.env` names a different one.

The same Ollama install is explained more slowly, for a PC and for a Mac, in the **[Beginner's guide to Ollama and Open WebUI](docs/ollama-and-open-webui.md)**. That guide also installs an optional chat window. This piece runs without that window.

### 5. Get the project and open it in Cursor

If you already have the project folder, use that folder. It is the open-source models and local AI version of My LatentWelt.

If you do not have it yet, download the ZIP from this address:

https://github.com/marlonbarrios/my_latentwelt_localai/archive/refs/heads/main.zip

On a PC, open **Downloads**, right-click the ZIP, and choose **Extract All**. On a Mac, double-click the ZIP. Either computer creates a folder named `my_latentwelt_localai-main`. That folder is the project.

Or install Git, then copy the project with a terminal. On a PC, download Git from https://git-scm.com/downloads and run the Windows installer. On a Mac, download Git from the same page, or type `git` once in Terminal and accept the offer to install Apple’s command-line tools. Then, on either computer:

```bash
git clone https://github.com/marlonbarrios/my_latentwelt_localai.git
cd my_latentwelt_localai
```

Then in Cursor choose **File → Open Folder** and select that folder. Do not open a single file. Open the folder that contains `package.json`.

In the Cursor chat you can say: “This is My LatentWelt, the local AI version. Help me install the dependencies and start it.”

### 6. Download the JavaScript dependencies

The repository does not contain the libraries themselves. `package.json` names them. npm downloads them into a folder called `node_modules`.

In Cursor’s terminal, from the project folder:

```bash
npm install
```

Wait until it finishes. On a PC, if PowerShell says `npm` is not recognized, go back to step 3 and open a new terminal. On a Mac, if Terminal says `command not found`, do the same.

Later, when you want the libraries to match `package.json` again, run `npm install` once more from this same folder. That is the update step. You do not reinstall Node.js for that.

### 7. Tell the station which model to use

In the project folder, copy `.env.example` to a new file named `.env`. If `.env` is already there, leave it.

On a PC, in PowerShell, from the project folder:

```powershell
Copy-Item .env.example .env
```

On a Mac, in Terminal, from the project folder:

```bash
cp .env.example .env
```

The new file should contain:

```bash
OLLAMA_HOST=http://127.0.0.1:11434
OLLAMA_MODEL=gemma4
OLLAMA_THINK=true
```

`OLLAMA_THINK=true` lets Gemma 4 think before it answers. The piece removes that thinking trace and speaks only the prose. Set it to `false` only if you point `OLLAMA_MODEL` at a model that should answer in one pass.

### 8. Start the piece

Still in the project folder:

```bash
npm run dev:all
```

That starts two processes and leaves them running:

- the page at [http://localhost:5173/](http://localhost:5173/)
- the station at [http://localhost:3001/](http://localhost:3001/), which calls Ollama

Open [http://localhost:5173/](http://localhost:5173/). Click the canvas once so the browser allows sound. Leave **Sound on**. Press **Space**.

The first visit downloads the Kokoro English voice into the browser. The status line shows that progress. Choosing Spanish, French, Portuguese, or Korean downloads Supertonic the first time. Those voice files stay cached. The first passage can sit on *Receiving text…* while Gemma loads into memory. The pendulums keep moving during that wait.

Leave the terminal open while you use the piece. Closing it stops the page. So does **Ctrl+C** on a PC, or **Control+C** on a Mac, in that same terminal.

On a PC, open the page in Edge, Chrome, or Firefox. On a Mac, open it in Safari, Chrome, or Firefox. The address is the same.

### If something does not start

Paste the terminal text into the Cursor chat and say what you expected to happen. These are the usual cases:

| What you see | What it means |
|--------------|----------------|
| `npm` is not recognized, on a PC | Node.js is missing, or this PowerShell window was opened before Node was installed. Open a new terminal. |
| `command not found`, on a Mac | The same situation. Node or Ollama is missing, or Terminal was opened too early. Open a new Terminal window. |
| The page does not load | `npm run dev:all` is not running, or it stopped. Start it again from the project folder. |
| *Receiving text…* never changes | Ollama is not running, or `gemma4` was not pulled. On a PC, check the icon near the clock. On a Mac, check the menu bar. Then run `ollama list`. |
| The voice is silent | Click the canvas once. The browser blocks sound until you click the page. On a Mac, also check that the menu-bar volume is up. |
| The drone is very quiet | **Sound on** is the pendulum tone. It sits under the voice. Headphones make it easier to hear. |

---

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

## Setup, short form

The full beginner path is **Install it on a new computer**, above. If the tools are already installed, the short form is:

```bash
ollama pull gemma4
npm install
npm run dev:all
```

Those three commands are the same on a Mac and on a PC. Then open [http://localhost:5173/](http://localhost:5173/), click the canvas, and press **Space**.

`npm run server` is only the station (port 3001). `npm run dev` is only the page (port 5173). `npm run dev:all` starts both. Vite proxies `/api/chat` to the station, and the station calls Ollama. No API key is required.

If a step fails, open the Cursor chat, paste the terminal output, and ask it what to do next. The AI in Cursor can walk through the rest of the install with you.

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
| `docs/ollama-and-open-webui.md` | Optional Mac and PC guide: Ollama, a first model, and Open WebUI |

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

**Repository:** [github.com/marlonbarrios/my_latentwelt_localai](https://github.com/marlonbarrios/my_latentwelt_localai)
