# How Aura Works

Aura is built on a **biological architecture**—designed to mimic how living organisms perceive, think, and act.

## The Three Pillars

```
┌─────────────────────────────────────────────────────┐
│                     AURA                            │
├─────────────────────────────────────────────────────┤
│  PERCEPTION        COGNITION         ACTION        │
│  ───────────       ──────────        ──────        │
│  See & Hear        Think & Decide    Do & Execute  │
└─────────────────────────────────────────────────────┘
```

### 1. Perception (The Senses)

How Aura understands the world:

| Sense       | Implementation                        |
| ----------- | ------------------------------------- |
| **Vision**  | Screen analysis, UI element detection |
| **Hearing** | Voice commands, audio context         |
| **Context** | Active app, time, location            |

### 2. Cognition (The Brain)

How Aura thinks and decides:

| Component           | Function                           |
| ------------------- | ---------------------------------- |
| **LLM Reasoning**   | Natural language understanding     |
| **Blueprint Logic** | Visual workflow execution          |
| **Memory RAG**      | Retrieval of relevant past context |

### 3. Action (The Body)

How Aura affects the world:

| System            | Capabilities                  |
| ----------------- | ----------------------------- |
| **macOS APIs**    | App control, file management  |
| **Accessibility** | UI automation, clicks, typing |
| **Integrations**  | Spotify, Calendar, etc.       |

## Data Flow

```
User speaks "Play something chill"
        │
        ▼
   ┌─────────┐
   │ PERCEPT │ ← Voice transcription
   └────┬────┘
        │
        ▼
   ┌─────────┐
   │ COGNIZE │ ← LLM understands intent
   └────┬────┘   Memory recalls: "User likes Lo-fi"
        │
        ▼
   ┌─────────┐
   │   ACT   │ ← Spotify: Play Lo-fi playlist
   └─────────┘
```

## Local-First Architecture

Everything runs on your Mac:

- **LLM**: Ollama (local) or cloud providers (your choice)
- **Memory**: SQLite database, encrypted
- **Processing**: Native Swift, no web views

## Further Reading

- [Memory System](/guide/memory) - How agents remember
- [Architect Overview](/architect/overview) - Visual programming
- [Actions API](/api/actions) - What agents can do
