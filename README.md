# 🗣️ VOCALCHAT – REALTIME AI CHAT WITH SPEECH-TO-TEXT & TEXT-TO-SPEECH

## 🧩 Project Environment

- Runtime: **Node.js v22.20.0**  
  https://www.npmjs.com/package/node/v/22.20.0  
- Package manager: **npm v10.x+** or **pnpm**
- Frontend: **React** + **Electron**
- Backend: **Node.js** (TCP Server + Socket.IO)
- AI Services:  
  - WhisperModel (Speech-to-Text - Local)
- Optional: **Python** (for local AI recommendation module)

## 🎯 Introduction

**VocalChat** is a realtime communication platform combining voice, text, and AI.
It allows users to chat naturally using speech, while AI models convert **speech to text** and **text to speech** seamlessly.  

### ✨ Core Features

- 🔊 Speech-to-Text (STT): Convert real-time voice input to text messages
- 🗣️ Text-to-Speech (TTS): AI voice replies for natural interaction
- 💬 Realtime Chat: Low-latency communication using Socket.IO (TCP protocol)
- 🧠 AI Integration: Smart language model for auto-responses and summaries
- 🪶 Modern UI: Built with React + Electron for smooth cross-platform performance

This project is developed for the AI for Life Competition, showcasing how Artificial Intelligence enhances daily communication.

## ⚙️ Installation Guide – Development Mode

### 📋 Prerequisites

Before starting, make sure you have:
- **Node.js v22.20.0** installed
- **npm v10.x+** or **pnpm**
- **Python 3.8+** (if using local WhisperModel)
- **OpenAI API Key** (for cloud-based services)

### 🚀 Step 1: Clone and Setup Project

```bash
# Clone the repository
git clone git@github.com:cuongnadev/vocalchat.git

# Navigate into the project folder
cd vocalchat
```

### 🤖 Step 2: Setup and Run Local WhisperModel
```bash
# Navigate to whisper-local directory
cd whisper-local

# Install Python dependencies
pip install -r requirements.txt

# Run
uvicorn app:app --host 0.0.0.0 --port 8000 --reload
```

- **Hardware Requirements**:
  - Minimum: 4GB RAM for `tiny` and `base` models
  - Recommended: 8GB+ RAM for `small` model
  - GPU recommended for `medium` and `large` models

- **First Run**: The model will be downloaded automatically on first use (can take several minutes depending on size)

### 🖥️ Step 2: Run the Server

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Copy and configure your environment file
cp .env.example .env
```

```bash
# Run the server
npm run dev
```

The server will start on `http://localhost:BE_PORT`

### 💻 Step 3: Run the Client

Open a new terminal window:

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Copy and configure your environment file
cp .env.example .env
```

**Run Web Version:**
```bash
npm run dev
```

**Run Electron Desktop Version:**
```bash
npm run dev:electron
```

The web client will be available at `http://localhost:5173`

## 📝 License

This project is developed for educational purposes and the AI for Life Competition.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.