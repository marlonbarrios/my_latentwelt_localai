# Beginner's Guide to Running AI Locally with Ollama and Open WebUI

A step-by-step tutorial for a Mac and for a PC. No programming experience required.

This guide explains how to install and use artificial intelligence models directly on your computer, without sending every conversation to a commercial AI service.

By the end, you will be able to download AI models, have conversations with them through a familiar web interface, and experiment with voice interaction.

**[My LatentWelt](../README.md) does not need this guide.** The pendulum piece needs [Ollama](https://ollama.com/download) and the Gemma 4 model. The install for the piece, with the Mac steps and the PC steps written out, is in the [README](../README.md). Open WebUI is a separate chat window for the same local models. Use this page when you also want that chat.

The commands that download a model, `ollama pull`, are the same on both computers. The installer, the terminal, Python, and the lines that start Open WebUI are different. Each step below says which computer it is for. Use the block that matches yours. Pasting a PC command into a Mac terminal, or a Mac command into PowerShell, makes the step fail.

## 1. Understanding the two applications

### What is Ollama?

[Ollama](https://ollama.com/) is a free application that lets you download and run large language models (LLMs) on your own computer.

A large language model is an AI system trained to understand and generate language. It can answer questions, summarize documents, help write code, generate creative text, and assist with research.

Ollama acts as the **engine** that runs the AI model.

Unlike using ChatGPT through a cloud service, Ollama can run downloaded models locally, using your computer's CPU, GPU, and memory.

Some advantages include:

- **Privacy:** Local conversations can be processed without sending prompts to a cloud model provider.
- **Offline use:** Downloaded models can work without an internet connection.
- **Experimentation:** You can install and compare different open-weight models.
- **Integration:** You can connect Ollama to your own JavaScript, Python, or creative coding applications. My LatentWelt is one of those applications.
- **Cost:** Local inference does not require paying per token to a cloud API provider.

Ollama is not itself a language model. It is the software that manages and runs language models.

- PC: [https://ollama.com/download/windows](https://ollama.com/download/windows)
- Mac: [https://ollama.com/download/mac](https://ollama.com/download/mac)

### What is Open WebUI?

[Open WebUI](https://github.com/open-webui/open-webui) is a browser-based interface for interacting with AI models.

Open WebUI provides a more complete environment for chatting with Ollama models. Depending on the configuration, it supports conversation history, document uploads, model selection, speech recognition, and spoken responses.

The simplest way to understand their relationship is:

```text
You (write or speak a question)
  |
  v
Open WebUI (the chat and voice interface)
  |
  v
Ollama (runs the downloaded AI model on your computer)
```

You can use Ollama without Open WebUI. My LatentWelt does exactly that. Open WebUI makes ordinary chatting more convenient, especially for beginners.

This guide installs Open WebUI with Python, because the steps stay visible. There is also a desktop app that skips Python: [https://github.com/open-webui/desktop](https://github.com/open-webui/desktop). Its documentation is [https://docs.openwebui.com/](https://docs.openwebui.com/). The install page for the method below is [https://docs.openwebui.com/getting-started/quick-start/](https://docs.openwebui.com/getting-started/quick-start/).

## 2. What you need before installing

You will need a stable internet connection for the initial downloads, sufficient storage for the AI models, and permission to install software.

A dedicated NVIDIA GPU on a PC, or an Apple silicon Mac, is helpful for faster responses. A smaller model can also run on the processor alone, although it may respond more slowly.

The complete installation has four stages:

1. Install Ollama.
2. Download your first AI model.
3. Install and launch Open WebUI.
4. Connect the two applications and test a conversation.

A PC includes Microsoft Edge. A Mac includes Safari. If you want another browser, install one first:

- [Google Chrome](https://www.google.com/chrome/) — https://www.google.com/chrome/
- [Mozilla Firefox](https://www.mozilla.org/firefox/new/) — https://www.mozilla.org/firefox/new/

### Every download in this guide

| What | Address to open |
|------|-----------------|
| Ollama for a PC | https://ollama.com/download/windows |
| Ollama for a Mac | https://ollama.com/download/mac |
| Ollama, all systems | https://ollama.com/download |
| Ollama model library | https://ollama.com/library |
| Llama 3.2, the first practice model | https://ollama.com/library/llama3.2 |
| Gemma 4, the model My LatentWelt writes with | https://ollama.com/library/gemma4 |
| Python for a PC | https://www.python.org/downloads/windows/ |
| Python for a Mac | https://www.python.org/downloads/macos/ |
| Python, the page that offers every system | https://www.python.org/downloads/ |
| Open WebUI documentation | https://docs.openwebui.com/ |
| Open WebUI install guide | https://docs.openwebui.com/getting-started/quick-start/ |
| Open WebUI desktop app, if you want to skip Python | https://github.com/open-webui/desktop |
| Open WebUI project | https://github.com/open-webui/open-webui |
| Ollama documentation | https://docs.ollama.com/ |
| My LatentWelt, the pendulum piece | https://github.com/marlonbarrios/my_latentwelt_localai |

Llama 3.2 and Gemma 4 arrive through a terminal command after Ollama is installed. Those commands are in section 4. They are the same on a Mac and on a PC.

Open WebUI, in this guide, is downloaded by Python. That command is in section 5, and the line is different on each computer.

## 3. Installing Ollama

Estimated time: 5–10 minutes, excluding model downloads.

### On a PC

1. Open Chrome, Edge, or Firefox and go to [https://ollama.com/download/windows](https://ollama.com/download/windows).
2. Download the Windows installer.
3. Open your **Downloads** folder and double-click `OllamaSetup.exe`.
4. Follow the installation instructions and wait until it finishes.
5. Look near the clock for the Ollama icon. Ollama keeps running in the background. Its local address is [http://localhost:11434](http://localhost:11434).

Then open PowerShell:

1. Click the Windows **Start** button.
2. Type `PowerShell`.
3. Click **Windows PowerShell**.

You should see a prompt similar to:

```powershell
PS C:\Users\YourName>
```

You do not need to run PowerShell as administrator for the steps in this guide.

Check the install:

```powershell
ollama --version
```

A version number means Ollama is installed. If Windows says `ollama` is not recognized, close PowerShell, open it again, and try once more. If it still fails, restart the PC or run the installer from https://ollama.com/download/windows again.

### On a Mac

1. Open Safari, Chrome, or Firefox and go to [https://ollama.com/download/mac](https://ollama.com/download/mac).
2. Download the Mac installer and open `Ollama.dmg`.
3. Drag **Ollama** onto **Applications**.
4. Open Ollama from **Applications**. If macOS asks whether to open an app from the internet, choose **Open**.
5. If Ollama asks to install its command-line tool, allow it. Terminal needs that tool for the `ollama` command.
6. Look in the menu bar at the top of the screen for the Ollama icon. Leave the app running. Its local address is [http://localhost:11434](http://localhost:11434).

Then open Terminal from **Applications → Utilities**.

Check the install:

```bash
ollama --version
```

A version number means Ollama is installed. If Terminal says `command not found`, quit Terminal, open it again, and try once more. If it still fails, open Ollama from Applications and allow the command-line tool, then try the command in a new Terminal window.

## 4. Downloading your first AI model

Ollama is the engine, but it needs a language model to produce responses.

Think of Ollama as a music player and the model as the music file. Installing the player does not automatically give you all the music.

### Step 1: Choose a model

For a first experiment, start with a relatively small model such as Llama 3.2.

**Llama 3.2**

A practical starting point for learning how local language models work. The default 3-billion-parameter version is relatively lightweight.

Its page is [https://ollama.com/library/llama3.2](https://ollama.com/library/llama3.2)

You can explore additional models at the [Ollama model library](https://ollama.com/library): https://ollama.com/library

**Gemma 4, for My LatentWelt**

The pendulum piece expects Gemma 4. Its page is [https://ollama.com/library/gemma4](https://ollama.com/library/gemma4). Download it in the next step as well if you are setting up the installation. The README uses this same model.

### Step 2: Download the model

The commands are the same in PowerShell on a PC and in Terminal on a Mac.

```bash
ollama pull llama3.2
```

Press Enter. Ollama shows progress while it downloads. Wait until the command finishes. The model stays on your computer.

If you are also installing My LatentWelt, download Gemma 4 the same way:

```bash
ollama pull gemma4
```

Gemma 4 is several gigabytes. Wait until that command finishes too.

### Step 3: Start your first conversation

On either computer:

```bash
ollama run llama3.2
```

When the model is ready, type:

```text
Hello! Explain what a large language model is
in simple language.
```

Press Enter and wait for a response.

You have now run an AI language model locally.

To leave the conversation, type:

```text
/bye
```

### Step 4: See your installed models

At the regular prompt, on either computer:

```bash
ollama list
```

This displays the models installed on your computer.

You can install multiple models and switch between them later in Open WebUI. My LatentWelt uses whichever model is named in its `.env` file. The default is `gemma4`. How to create that file on each computer is in the [README](../README.md).

## 5. Installing Open WebUI

Open WebUI supports several installation methods, including Docker, Python, and a desktop application. This tutorial uses Python 3.11 or 3.12. The pip install does not support Python 3.13 or newer. If a download page offers a higher number, keep looking until the version starts with **3.12**.

The official install page is [https://docs.openwebui.com/getting-started/quick-start/](https://docs.openwebui.com/getting-started/quick-start/)

### On a PC

**Install Python**

1. Open [https://www.python.org/downloads/windows/](https://www.python.org/downloads/windows/).
2. Download the newest **Python 3.12** Windows installer, 64-bit.
3. Run it. Enable **Add python.exe to PATH**.
4. Finish the installation.
5. Close PowerShell and open a new one.

Check it:

```powershell
py -3.12 --version
```

You should see a Python 3.12 version number.

**Create a separate Python environment**

A virtual environment keeps Open WebUI's packages separate from other software.

```powershell
cd $HOME
py -3.12 -m venv "$HOME\open-webui-env"
```

Wait until the command finishes. It creates a folder named `open-webui-env` in your user folder.

**Install Open WebUI**

```powershell
& "$HOME\open-webui-env\Scripts\python.exe" -m pip install open-webui
```

The first installation may take several minutes. Keep PowerShell open until it finishes.

**Create a folder for chats and settings**

```powershell
New-Item -ItemType Directory -Force "$HOME\open-webui-data"
```

**Start Open WebUI**

Run these three lines, one at a time, in this order:

```powershell
cd $HOME
$env:DATA_DIR = "$HOME\open-webui-data"
& "$HOME\open-webui-env\Scripts\open-webui.exe" serve
```

Keep this PowerShell window open. Closing it stops Open WebUI.

### On a Mac

**Install Python**

1. Open [https://www.python.org/downloads/macos/](https://www.python.org/downloads/macos/).
2. Download the newest **Python 3.12** macOS installer. The universal2 installer works on Apple silicon and on Intel.
3. Open the `.pkg` file and follow it to the end.
4. Close Terminal and open a new one from **Applications → Utilities**.

Check it:

```bash
python3.12 --version
```

You should see a Python 3.12 version number. If Terminal says `command not found`, the new window was not opened after the installer finished. Open another Terminal window and try again.

**Create a separate Python environment**

```bash
cd "$HOME"
python3.12 -m venv "$HOME/open-webui-env"
```

Wait until the command finishes. It creates a folder named `open-webui-env` in your home folder.

**Install Open WebUI**

```bash
"$HOME/open-webui-env/bin/python" -m pip install open-webui
```

The first installation may take several minutes. Keep Terminal open until it finishes.

**Create a folder for chats and settings**

```bash
mkdir -p "$HOME/open-webui-data"
```

**Start Open WebUI**

Run these three lines, one at a time, in this order:

```bash
cd "$HOME"
export DATA_DIR="$HOME/open-webui-data"
"$HOME/open-webui-env/bin/open-webui" serve
```

Keep this Terminal window open. Closing it stops Open WebUI.

### Open the interface

On a PC, use Edge, Chrome, or Firefox. On a Mac, use Safari, Chrome, or Firefox. The address is the same:

[http://localhost:8080](http://localhost:8080)

`localhost` means *this computer*. You are opening a service on your own machine.

The first time, Open WebUI may ask you to create an administrator account. Follow the on-screen steps and keep those credentials somewhere secure.

## 6. Connecting Open WebUI to Ollama

On one computer, Open WebUI can normally find Ollama by itself.

### Step 1: Check that Ollama is running

Leave the Open WebUI window open. Open a second terminal: PowerShell on a PC, Terminal on a Mac.

```bash
ollama list
```

You should see your installed models.

If the command fails, start Ollama again. On a PC, open it from the Start menu and look for the icon near the clock. On a Mac, open it from Applications and look for the icon in the menu bar.

### Step 2: Select a model in Open WebUI

In the browser:

1. Open [http://localhost:8080](http://localhost:8080).
2. Find the model selector near the top of the chat.
3. Click the selector.
4. Look for `llama3.2`, `gemma4`, or another model you installed.
5. Select the model.

If the model appears, Open WebUI is connected to Ollama.

### Step 3: Test a conversation

Type:

> Explain the relationship between algorithms and creativity in five sentences.

Press Enter.

Open WebUI sends your question to Ollama, Ollama processes it with the selected language model, and Open WebUI displays the response.

### What if the model does not appear?

Open WebUI includes connection settings, usually under the administrator settings, in **Connections**.

For this Python installation, on a Mac and on a PC, the Ollama address is:

```text
http://localhost:11434
```

Check that Ollama is running and that the address matches. Save any changes and refresh the model selector.

A Docker installation can need a different address. That method is on the [Open WebUI quick start](https://docs.openwebui.com/getting-started/quick-start/).

## 7. Using Open WebUI for everyday conversations

Once everything is connected, you can use Open WebUI much like a conventional AI chat application.

### Starting a new conversation

Click **New Chat**, choose a model, type your question, and press Enter.

You can ask questions such as:

> Write a short poem about artificial intelligence and memory.

> Explain the difference between generative art and generative AI.

> Help me understand this JavaScript function.

> Create five instructions for an interactive performance inspired by conceptual art.

### Switching models

Open the model selector and choose another installed model. Different models may produce different results, even when given identical prompts.

### Conversation history

Open WebUI can store your conversations locally. You can return to previous discussions using the sidebar.

### Working with documents

Depending on the models and features configured, Open WebUI can also work with uploaded documents, retrieve information from files, and help summarize or analyze texts.

Document-processing features may require additional local models or dependencies. Those are described in the [Open WebUI documentation](https://docs.openwebui.com/).

## 8. Setting up voice conversations

Open WebUI can support two different voice functions:

- **Speech-to-text (STT):** You speak, and your words are converted into text.
- **Text-to-speech (TTS):** The AI generates text, and a speech engine reads it aloud.

These are separate technologies. They are also separate from the voices in My LatentWelt. The pendulum piece speaks with Kokoro and Supertonic inside its own page. Those downloads are listed in the [README](../README.md).

### Step 1: Open the audio settings

In Open WebUI:

1. Click your profile icon.
2. Select **Settings**.
3. Open **Audio**, if available in your version.
4. Review the speech-to-text and text-to-speech options.

### Step 2: Configure speech recognition

Choose an available speech recognition method, such as browser-based recognition or a configured local Whisper model.

Allow microphone access when the browser requests permission. On a Mac, macOS also asks for microphone permission for the browser, under **System Settings → Privacy & Security → Microphone**.

Test by speaking a short sentence and checking whether it appears as text.

Some browser speech recognition options use cloud processing. Choose an explicitly local engine if offline operation is important.

### Step 3: Configure text-to-speech

For local speech generation, you can experiment with **Kokoro.js**, if your version of Open WebUI supports it.

**Kokoro.js**

A JavaScript speech option that can run in the browser. The model page is [https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX](https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX). Open WebUI fetches it when you select Kokoro.js. You do not save that file by hand.

The first time, you may see a download or loading percentage. Wait until it finishes.

### Step 4: Test spoken responses

Return to your conversation and ask:

> Introduce yourself in two short sentences.

When the AI responds, click the speaker icon beneath the response, if it is there.

You should hear the generated speech. On a Mac, check the volume in the menu bar if the room stays quiet. On a PC, check the speaker icon near the clock.

Some Open WebUI versions also provide automatic playback or voice conversation modes. Those can be turned on separately when the version includes them.

A text-to-speech engine is a different experience from a live voice conversation. Continuous listening, interruptions, and low-latency turn-taking need extra setup.

## 9. How to start everything the next day

The install stays on the computer. Each later session is only a start-up.

1. **Start Ollama.**

   It may already be running. On a PC, check the icon near the clock, or open Ollama from the Start menu. On a Mac, check the menu bar, or open Ollama from Applications.

   Then, in a terminal:

   ```bash
   ollama list
   ```

2. **Start Open WebUI.** Use the block for your computer. Run the lines one at a time.

   **On a PC, in PowerShell:**

   ```powershell
   cd $HOME
   $env:DATA_DIR = "$HOME\open-webui-data"
   & "$HOME\open-webui-env\Scripts\open-webui.exe" serve
   ```

   **On a Mac, in Terminal:**

   ```bash
   cd "$HOME"
   export DATA_DIR="$HOME/open-webui-data"
   "$HOME/open-webui-env/bin/open-webui" serve
   ```

3. **Open the browser** at [http://localhost:8080](http://localhost:8080).

4. **Select your model and begin chatting.**

When you are finished, close the browser. In the terminal that is running Open WebUI, press **Ctrl+C** on a PC or **Control+C** on a Mac.

To start the pendulum piece on the same computer, leave Ollama running and follow **Start the piece** in the [README](../README.md). Open WebUI and My LatentWelt can both talk to the same Ollama. The piece uses `npm run dev:all` and opens [http://localhost:5173/](http://localhost:5173/). That command is the same on a Mac and on a PC.

## 10. Common problems and solutions

| Problem | What to try |
|--------|--------|
| `ollama` is not recognized, on a PC | Close PowerShell, open a new window, and try again. The installer is at https://ollama.com/download/windows |
| `command not found: ollama`, on a Mac | Open Ollama from Applications, allow the command-line tool, then try in a new Terminal window. The installer is at https://ollama.com/download/mac |
| Open WebUI shows no models | Check that Ollama is running and that its address is `http://localhost:11434`. |
| `localhost:8080` does not open | The Open WebUI terminal has to stay open. Start it again with the lines in section 9. |
| Python package will not install | Use Python 3.11 or 3.12. Python 3.13 and newer are outside what this pip install supports. PC: https://www.python.org/downloads/windows/ Mac: https://www.python.org/downloads/macos/ |
| `PermissionError` mentioning `system32`, on a PC | Run `cd $HOME` and start again from your user folder. |
| `permission denied` while creating the environment, on a Mac | Run the commands from `"$HOME"`, which is your home folder. |
| Kokoro.js is loading slowly | Wait for the first download to finish and check the internet connection. |
| The AI responds very slowly | Try a smaller model, close other heavy programs, or check available memory. |
| Microphone does not work | On a PC, check Windows microphone privacy and the browser permission. On a Mac, check **System Settings → Privacy & Security → Microphone**. |
| No spoken response | Check the TTS setting, the speaker control, and the computer's volume. |

More troubleshooting is in the [official Open WebUI documentation](https://docs.openwebui.com/): https://docs.openwebui.com/

## 11. Understanding privacy and offline use

One advantage of this setup is that the models run on your own hardware.

Using Ollama or Open WebUI does not by itself make every feature offline.

For a fully local workflow:

- The language model is one you downloaded, running on this computer.
- Open WebUI is connected to your local Ollama server.
- Speech recognition and text-to-speech use local engines.
- Optional cloud connections, remote search, and external APIs stay off when privacy or offline use matters.
- Local chat history and uploaded documents still need ordinary care and backups.

Keep Open WebUI on your own computer unless you deliberately set up remote access. Putting its server on the public internet needs a separate security setup.

## 12. Beyond chatting: using Ollama for creative coding

Ollama exposes an API that other applications can use. That is useful for artists, researchers, educators, and creative technologists.

[My LatentWelt](../README.md) is that kind of application. A browser page asks the local model for language, draws the words with moving pendulums, and speaks them with Kokoro or Supertonic. Open WebUI is a place to test models and prompts. The piece talks to Ollama directly.

A creative coding system can follow this structure:

```text
Audience interaction
(keyboard, mouse, movement, sensors)
          |
          v
Node.js + Ollama
(generate language in response to interaction)
          |
          +--> p5.js: animated text and visuals
          |
          +--> Kokoro or Supertonic: synthetic voice
```

The Node.js install for that piece, including the different Mac and PC installers, is in the [README](../README.md).

## 13. Final installation checklist

- [ ] Install Ollama. PC: https://ollama.com/download/windows Mac: https://ollama.com/download/mac
- [ ] Confirm it with `ollama --version`.
- [ ] Download a model with `ollama pull llama3.2`.
- [ ] If you are running My LatentWelt, also run `ollama pull gemma4`.
- [ ] Test the model with `ollama run llama3.2`.
- [ ] Install Python 3.12. PC: https://www.python.org/downloads/windows/ Mac: https://www.python.org/downloads/macos/
- [ ] Create the separate Python environment with the commands for your computer.
- [ ] Install Open WebUI in that environment.
- [ ] Create the Open WebUI data folder and set `DATA_DIR`.
- [ ] Start Open WebUI and open http://localhost:8080.
- [ ] Create the administrator account if the page asks.
- [ ] Select your installed model.
- [ ] Send a test message and confirm that a response appears.
- [ ] Configure speech, if you want it.
- [ ] Read the privacy section before you rely on offline use.
- [ ] Practice stopping Open WebUI and starting it again the next day.

After those steps, you have a local AI chat on this computer. The pendulum piece can use the same Ollama. Its own start command is in the [README](../README.md).

### Official resources

- [Ollama](https://ollama.com/) — https://ollama.com/
- [Ollama for a PC](https://ollama.com/download/windows) — https://ollama.com/download/windows
- [Ollama for a Mac](https://ollama.com/download/mac) — https://ollama.com/download/mac
- [Ollama model library](https://ollama.com/library) — https://ollama.com/library
- [Llama 3.2](https://ollama.com/library/llama3.2) — https://ollama.com/library/llama3.2
- [Gemma 4](https://ollama.com/library/gemma4) — https://ollama.com/library/gemma4
- [Ollama documentation](https://docs.ollama.com/) — https://docs.ollama.com/
- [Open WebUI installation guide](https://docs.openwebui.com/getting-started/quick-start/) — https://docs.openwebui.com/getting-started/quick-start/
- [Open WebUI documentation](https://docs.openwebui.com/) — https://docs.openwebui.com/
- [Open WebUI desktop app](https://github.com/open-webui/desktop) — https://github.com/open-webui/desktop
- [Python for a PC](https://www.python.org/downloads/windows/) — https://www.python.org/downloads/windows/
- [Python for a Mac](https://www.python.org/downloads/macos/) — https://www.python.org/downloads/macos/
- [My LatentWelt README](../README.md) — the pendulum piece, with Mac and PC install steps

This tutorial uses the Python installation method. Open WebUI also offers Docker and a desktop app, described on the [quick start page](https://docs.openwebui.com/getting-started/quick-start/).
