# Installation

Get ProCode AI running on your Mac in under 5 minutes.

## System Requirements

| Requirement | Minimum                | Recommended                |
| ----------- | ---------------------- | -------------------------- |
| macOS       | 13.0 (Ventura)         | 14.0+ (Sonoma)             |
| RAM         | 8GB                    | 16GB+                      |
| Storage     | 2GB                    | 10GB (for local AI models) |
| Processor   | Apple Silicon or Intel | Apple Silicon              |

## Download

::: tip Beta Access
ProCode AI is currently in private beta. [Join the waitlist](https://procodeai.com) to get early access.
:::

### Option 1: Direct Download

1. Visit [procodeai.com/download](https://procodeai.com/download)
2. Download the `.dmg` file
3. Open and drag ProCode AI to Applications
4. Launch from Applications folder

### Option 2: Homebrew (Coming Soon)

```bash
brew install --cask procodeai
```

## First Launch

When you first launch ProCode AI, you'll be prompted to:

### 1. Grant Permissions

ProCode AI needs certain permissions to work its magic:

| Permission           | Why We Need It            | What We Don't Do                   |
| -------------------- | ------------------------- | ---------------------------------- |
| **Accessibility**    | Control apps, automate UI | Never read passwords or keystrokes |
| **Screen Recording** | Let AI "see" context      | Never record or transmit           |
| **Microphone**       | Voice commands            | Never sent to servers              |

::: warning Important
All permissions are used locally. No data leaves your Mac.
:::

### 2. Set Up AI Provider

Choose your AI backend:

#### Local (Recommended for Privacy)

```bash
# Install Ollama
brew install ollama

# Pull a model
ollama pull llama3.2
```

#### Cloud Providers (Optional)

- **OpenAI** - Requires API key
- **Anthropic Claude** - Requires API key
- **Groq** - Free tier available

### 3. Connect Services (Optional)

Enhance ProCode AI with integrations:

- **Spotify** - Music control and mood-based playlists
- **Apple Shortcuts** - Trigger existing shortcuts
- **Calendar** - Context-aware scheduling

## Verify Installation

Open ProCode AI and try:

1. Click the microphone button
2. Say: _"What can you do?"_
3. ProCode should respond with its capabilities

::: tip Troubleshooting
If voice commands don't work, check **System Settings → Privacy & Security → Microphone**.
:::

## Next Steps

- [Quick Start](/guide/quickstart) - Build your first agent
- [How It Works](/guide/how-it-works) - Understand the architecture
