# Beginner's Guide to Running AI Locally with Ollama and Open WebUI

A step-by-step tutorial for Windows 11. No programming experience required.

This guide explains how to install and use artificial intelligence models directly on your computer, without sending every conversation to a commercial AI service.

By the end, you will be able to download AI models, have conversations with them through a familiar web interface, and experiment with voice interaction.

**You do not need this guide to run [My LatentWelt](../README.md).** The pendulum piece needs [Ollama](https://ollama.com/download) and the Gemma 4 model. Open WebUI is a separate chat window for the same local models. Use this page when you also want that chat on Windows 11. The install for the piece itself is in the [README](../README.md).

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

Download it here: [https://ollama.com/download/windows](https://ollama.com/download/windows)

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

**Important:** You can use Ollama without Open WebUI. My LatentWelt does exactly that. Open WebUI makes ordinary chatting more convenient, especially for beginners.

Open WebUI is installed later in this guide with Python. Its documentation is here: [https://docs.openwebui.com/](https://docs.openwebui.com/)

## 2. What you need before installing

This tutorial assumes you are using a Windows 11 computer.

You will need a stable internet connection for the initial downloads, sufficient storage for the AI models, and permission to install software.

A dedicated NVIDIA GPU is helpful for faster responses, but it is not mandatory. Smaller models can also run on a CPU, although they may respond more slowly.

The complete installation has four stages:

1. Install Ollama.
2. Download your first AI model.
3. Install and launch Open WebUI.
4. Connect the two applications and test a conversation.

Every program in those stages has an address in the list below. Open each one in the browser you already have. Windows already includes Microsoft Edge. If you have no browser, install one first:

- [Google Chrome](https://www.google.com/chrome/) — https://www.google.com/chrome/
- [Mozilla Firefox](https://www.mozilla.org/firefox/new/) — https://www.mozilla.org/firefox/new/

### Every download in this guide

| What | Address to open |
|------|-----------------|
| Ollama for Windows | https://ollama.com/download/windows |
| Ollama, all systems | https://ollama.com/download |
| Ollama model library | https://ollama.com/library |
| Llama 3.2, the first practice model | https://ollama.com/library/llama3.2 |
| Gemma 4, the model My LatentWelt writes with | https://ollama.com/library/gemma4 |
| Python, used to install Open WebUI | https://www.python.org/downloads/ |
| Python 3.12 release files | https://www.python.org/downloads/release/python-3120/ |
| Open WebUI documentation | https://docs.openwebui.com/ |
| Open WebUI install guide | https://docs.openwebui.com/getting-started/quick-start/ |
| Open WebUI project | https://github.com/open-webui/open-webui |
| Ollama documentation | https://docs.ollama.com/ |

Llama 3.2 and Gemma 4 are not files you save from the browser. After Ollama is installed, a terminal command downloads them. Those commands are in section 4.

Open WebUI, in this guide, is not a separate installer either. Python's package tool downloads it. That command is in section 5.

## 3. Installing Ollama on Windows 11

Estimated time: 5–10 minutes, excluding model downloads.

### Step 1: Visit the official website

Open Chrome, Edge, or Firefox and go to:

[Download Ollama for Windows](https://ollama.com/download/windows)

The address is https://ollama.com/download/windows

Click the Windows download option to download the installer.

### Step 2: Install Ollama

1. Open your **Downloads** folder.
2. Find `OllamaSetup.exe`.
3. Double-click the file.
4. Follow the installation instructions.
5. Wait until installation finishes.

You may see the Ollama icon in the Windows notification area near the clock.

Ollama normally runs as a background application on Windows, so you do not have to keep a chat window open. Its local API is normally available at [http://localhost:11434](http://localhost:11434).

### Step 3: Open Windows PowerShell

PowerShell is a program that lets you communicate with your computer by typing commands.

To open it:

1. Click the Windows **Start** button.
2. Type `PowerShell`.
3. Click **Windows PowerShell** or **Terminal**.

You should see a window with a prompt similar to:

```powershell
PS C:\Users\YourName>
```

This means PowerShell is ready to receive commands.

You do not need to run PowerShell as administrator for the steps in this guide.

### Step 4: Check whether Ollama is installed

Copy and paste this command into PowerShell, then press Enter:

```powershell
ollama --version
```

If Ollama is installed, you should see a version number.

If Windows says `ollama` is not recognized, close PowerShell, reopen it, and try again. If that still fails, restart Windows or reinstall Ollama from https://ollama.com/download/windows

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

The pendulum piece expects Gemma 4. Its page is [https://ollama.com/library/gemma4](https://ollama.com/library/gemma4). Download it in the next step as well, after Llama 3.2, if you are setting up the installation.

### Step 2: Download the model

In PowerShell, enter:

```powershell
ollama pull llama3.2
```

Press Enter.

Ollama will download the model. You will see progress information as it downloads.

Wait until the command finishes successfully. The model will be stored on your computer.

If you are also installing My LatentWelt, download Gemma 4 the same way:

```powershell
ollama pull gemma4
```

Gemma 4 is several gigabytes. Wait until that command finishes too.

### Step 3: Start your first conversation

Enter:

```powershell
ollama run llama3.2
```

When the model is ready, type:

```text
Hello! Explain what a large language model is
in simple language.
```

Press Enter and wait for a response.

You have now run an AI language model locally.

To exit the interactive conversation, type:

```text
/bye
```

### Step 4: See your installed models

At the regular PowerShell prompt, enter:

```powershell
ollama list
```

This displays the models installed on your computer.

You can install multiple models and switch between them later in Open WebUI. My LatentWelt uses whichever model is named in its `.env` file. The default is `gemma4`.

## 5. Installing Open WebUI

Beginner-friendly Python method for Windows 11.

Open WebUI supports several installation methods, including Docker, Python, and a desktop application. This tutorial uses Python because it runs Open WebUI locally without Docker.

The official install page is [https://docs.openwebui.com/getting-started/quick-start/](https://docs.openwebui.com/getting-started/quick-start/)

The official Open WebUI documentation supports Python 3.12 and also Python 3.11 for installation with pip.

### Step 1: Install Python

Python is a programming language used by Open WebUI's backend.

Visit:

[Official Python downloads](https://www.python.org/downloads/)

The address is https://www.python.org/downloads/

Choose a compatible **Python 3.12 Windows 64-bit installer**. The 3.12 release files are listed at [https://www.python.org/downloads/release/python-3120/](https://www.python.org/downloads/release/python-3120/). On that page, under **Files**, download **Windows installer (64-bit)**.

During installation, if the installer offers an option labeled **Add python.exe to PATH**, enable it.

Finish the installation.

### Step 2: Verify Python

Open a **new** PowerShell window and enter:

```powershell
py -3.12 --version
```

You should see a Python 3.12 version number.

If the command fails, confirm that Python 3.12 was installed and that the Windows Python launcher is available. Close PowerShell and open it again after the installer finishes.

### Step 3: Create a separate Python environment

A virtual environment keeps Open WebUI's Python packages separate from other software on your computer.

Enter:

```powershell
cd $HOME
```

This moves PowerShell into your Windows user folder, where you have permission to create files.

Now enter:

```powershell
py -3.12 -m venv "$HOME\open-webui-env"
```

Wait for the command to finish.

This creates a folder named `open-webui-env` containing a separate Python environment.

### Step 4: Install Open WebUI

Enter the following command:

```powershell
& "$HOME\open-webui-env\Scripts\python.exe" -m pip install open-webui
```

Press Enter.

This downloads and installs Open WebUI and its required Python packages from the Python package index. There is no separate Open WebUI installer in this method.

The first installation may take several minutes. Keep PowerShell open until it finishes.

### Step 5: Create a folder for Open WebUI data

Open WebUI needs somewhere to store conversations, settings, and other application data.

Enter:

```powershell
New-Item -ItemType Directory -Force "$HOME\open-webui-data"
```

This creates a writable folder inside your Windows user directory.

### Step 6: Launch Open WebUI

First, make sure you are in your home folder:

```powershell
cd $HOME
```

Then specify the data folder:

```powershell
$env:DATA_DIR = "$HOME\open-webui-data"
```

Finally, launch Open WebUI:

```powershell
& "$HOME\open-webui-env\Scripts\open-webui.exe" serve
```

Wait while the server starts.

**Keep this PowerShell window open.** Closing it will normally stop the Open WebUI server.

### Step 7: Open the interface

Launch Chrome, Edge, or Firefox and enter:

[http://localhost:8080](http://localhost:8080)

The Open WebUI interface should appear.

`localhost` means *this computer*. You are accessing a service running on your own machine, not a public website.

The first time you open Open WebUI, it may ask you to create an administrator account. Follow the on-screen registration steps and keep your credentials somewhere secure.

## 6. Connecting Open WebUI to Ollama

Because Ollama and Open WebUI are running on the same computer, Open WebUI can normally communicate with Ollama automatically.

### Step 1: Check that Ollama is running

Open a second PowerShell window, leaving the Open WebUI server window open.

Enter:

```powershell
ollama list
```

You should see your installed models.

If Ollama is not running, launch Ollama from the Windows Start menu.

### Step 2: Select a model in Open WebUI

In your browser:

1. Open [http://localhost:8080](http://localhost:8080).
2. Find the model selector near the top of the chat interface.
3. Click the selector.
4. Look for `llama3.2`, `gemma4`, or another model you have installed.
5. Select the model.

If the model appears, Open WebUI is connected to Ollama.

### Step 3: Test a conversation

Type:

> Explain the relationship between algorithms and creativity in five sentences.

Press Enter.

Open WebUI sends your question to Ollama, Ollama processes it with the selected language model, and Open WebUI displays the response.

### What if the model does not appear?

Open WebUI includes connection settings, usually accessible from the administrator settings under **Connections**.

For a normal local Python installation, the Ollama server address is:

```text
http://localhost:11434
```

Check that Ollama is running and that the configured URL is correct. Save any changes and refresh the model selector.

This local connection is different from a Docker installation, where network addresses may need additional configuration. Docker instructions are on the [Open WebUI quick start](https://docs.openwebui.com/getting-started/quick-start/).

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

Allow microphone access when your browser requests permission.

Test by speaking a short sentence and checking whether it appears as text.

Be aware that some browser speech recognition options may use cloud processing. Choose an explicitly local engine if offline operation is important.

### Step 3: Configure text-to-speech

For local speech generation, you can experiment with **Kokoro.js**, if your version of Open WebUI supports it.

**Kokoro.js**

A JavaScript-based speech synthesis option that can run in the browser using downloaded model files. The model page is [https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX](https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX). You do not download that file by hand. Open WebUI fetches it when you select Kokoro.js.

The first time you select Kokoro.js, you may see a download or loading percentage. This is normal because the speech model needs to be downloaded and initialized.

Wait until the process finishes.

### Step 4: Test spoken responses

Return to your conversation and ask:

> Introduce yourself in two short sentences.

When the AI responds, click the speaker icon beneath the response, if available.

You should hear the generated speech.

Some Open WebUI versions also provide automatic playback or voice conversation modes. These can be enabled separately when available.

**Important:** A text-to-speech engine does not automatically create the same real-time conversational experience as a live voice API. Continuous listening, interruptions, and low-latency turn-taking require additional configuration.

## 9. How to start everything the next day

Once installed, you do not need to repeat the installation process.

Each time you want to use your local AI chat:

1. **Start Ollama.**

   It may already be running in the background. If not, launch it from the Windows Start menu. You can confirm it with:

   ```powershell
   ollama list
   ```

2. **Open PowerShell and start Open WebUI.**

   Run these commands, one at a time:

   ```powershell
   cd $HOME
   ```

   ```powershell
   $env:DATA_DIR = "$HOME\open-webui-data"
   ```

   ```powershell
   & "$HOME\open-webui-env\Scripts\open-webui.exe" serve
   ```

3. **Open your browser.**

   Visit [http://localhost:8080](http://localhost:8080).

4. **Select your model and begin chatting.**

When finished, you can close the browser and press `Ctrl+C` in the PowerShell window running Open WebUI to stop the server.

To start the pendulum piece on the same computer, leave Ollama running and follow **Start the piece** in the [README](../README.md). Open WebUI and My LatentWelt can both talk to the same Ollama.

## 10. Common problems and solutions

| Problem | What to try |
|--------|--------|
| `ollama` is not recognized | Reopen PowerShell, check the installation, or restart Windows. The installer is at https://ollama.com/download/windows |
| Open WebUI shows no models | Check that Ollama is running and that its connection URL is `http://localhost:11434`. |
| `localhost:8080` does not open | Check whether the Open WebUI server is still running in PowerShell. |
| Python package will not install | Verify that you are using Python 3.11 or 3.12 rather than an unsupported version. Download it from https://www.python.org/downloads/ |
| `PermissionError` mentioning `system32` | Change to your user folder with `cd $HOME` and relaunch. |
| Kokoro.js is loading slowly | Allow the initial model download to finish and check your internet connection. |
| The AI responds very slowly | Try a smaller model, close other GPU-intensive programs, or check available memory. |
| Microphone does not work | Check Windows and browser microphone permissions. |
| No spoken response | Check TTS settings, browser audio output, and the speaker control. |

For more detailed troubleshooting, consult the [official Open WebUI documentation](https://docs.openwebui.com/): https://docs.openwebui.com/

## 11. Understanding privacy and offline use

One of the major advantages of this setup is that you can run AI models on your own hardware.

However, using Ollama or Open WebUI does not automatically guarantee that every feature is offline.

For a fully local workflow, make sure that:

- Your selected language model is downloaded and running locally, not through an optional cloud endpoint.
- Open WebUI is connected to your local Ollama server.
- Speech recognition and text-to-speech use local engines.
- Optional cloud integrations, remote search tools, and external APIs are disabled when privacy or offline operation is required.
- You understand that local chat history and uploaded documents still need appropriate security and backups.

Keep Open WebUI bound to your own computer unless you intentionally configure remote access. Do not expose its server directly to the public internet without appropriate security measures.

## 12. Beyond chatting: using Ollama for creative coding

Ollama is especially interesting for artists, researchers, educators, and creative technologists because it exposes an API that other applications can use.

[My LatentWelt](../README.md) is that kind of application. A browser page asks the local model for language, draws the words with moving pendulums, and speaks them with Kokoro or Supertonic. Open WebUI is a convenient place to test models and prompts. The piece itself talks to Ollama directly and does not go through Open WebUI.

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

In this arrangement, Open WebUI remains a convenient interface for testing models and prompts, while your custom application communicates directly with Ollama.

This makes it possible to explore AI not only as a conversational assistant but also as a computational medium for generative art.

## 13. Final installation checklist

- [ ] Install Ollama from https://ollama.com/download/windows and verify it with `ollama --version`.
- [ ] Download a model with `ollama pull llama3.2`.
- [ ] If you are running My LatentWelt, also run `ollama pull gemma4`.
- [ ] Test the model with `ollama run llama3.2`.
- [ ] Install Python 3.12 from https://www.python.org/downloads/ and verify it.
- [ ] Create the separate Python environment.
- [ ] Install Open WebUI in that environment.
- [ ] Create and configure the Open WebUI data folder.
- [ ] Start Open WebUI and open http://localhost:8080.
- [ ] Create the initial administrator account if prompted.
- [ ] Connect to Ollama and select your installed model.
- [ ] Send a test message and confirm that a response appears.
- [ ] Configure and test speech recognition and spoken responses, if desired.
- [ ] Review privacy settings and local versus cloud processing.
- [ ] Practice stopping and restarting Open WebUI.

Once the required steps are complete, you have a working local AI chat. You can experiment with different models, explore their capabilities, and connect them to your own applications, including My LatentWelt.

### Official resources

- [Ollama official website](https://ollama.com/) — https://ollama.com/
- [Download Ollama for Windows](https://ollama.com/download/windows) — https://ollama.com/download/windows
- [Ollama model library](https://ollama.com/library) — https://ollama.com/library
- [Llama 3.2](https://ollama.com/library/llama3.2) — https://ollama.com/library/llama3.2
- [Gemma 4](https://ollama.com/library/gemma4) — https://ollama.com/library/gemma4
- [Ollama documentation](https://docs.ollama.com/) — https://docs.ollama.com/
- [Open WebUI installation guide](https://docs.openwebui.com/getting-started/quick-start/) — https://docs.openwebui.com/getting-started/quick-start/
- [Open WebUI documentation](https://docs.openwebui.com/) — https://docs.openwebui.com/
- [Open WebUI on GitHub](https://github.com/open-webui/open-webui) — https://github.com/open-webui/open-webui
- [Python downloads](https://www.python.org/downloads/) — https://www.python.org/downloads/
- [My LatentWelt README](../README.md) — the pendulum piece, which uses Ollama and does not require Open WebUI

This tutorial uses the Python installation method for Windows 11. Open WebUI also offers Docker and desktop installation options, described on the [quick start page](https://docs.openwebui.com/getting-started/quick-start/), which may be preferable if you want a different setup.
