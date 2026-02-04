# Quick Start

Build your first ProCode AI agent in 5 minutes.

## Step 1: Open the Architect

1. Launch **ProCode AI** from your Applications
2. Click the **Architect** button in the sidebar (or press `Cmd + Shift + A`)
3. Click **New Blueprint**

You'll see an infinite canvas with a grid—this is your workspace.

## Step 2: Add Your First Nodes

Let's create a simple "Hello World" agent that responds to voice.

### Add a Trigger Node

1. Right-click on the canvas
2. Search for **"Voice Trigger"**
3. Click to place it

### Add a Response Node

1. Right-click again
2. Search for **"Speak"**
3. Place it to the right of the trigger

## Step 3: Connect the Nodes

1. Click and drag from the **Output** port (right side) of Voice Trigger
2. Drop it on the **Input** port (left side) of Speak
3. A wire now connects them!

## Step 4: Configure the Speak Node

1. Click on the **Speak** node to select it
2. In the Inspector (right panel), find the **Message** field
3. Type: `Hello! I'm your ProCode AI agent.`

## Step 5: Test It

1. Click the **Play** button (▶️) in the toolbar
2. Say anything into your microphone
3. ProCode AI should speak your message!

```
┌─────────────────┐         ┌─────────────────┐
│  Voice Trigger  │────────▶│      Speak      │
│                 │         │  "Hello! I'm    │
│   🎤            │  ──▶    │  your agent."   │
└─────────────────┘         └─────────────────┘
```

## What's Next?

Now that you've built your first agent, explore these concepts:

### Add Logic

Try adding a **Condition** node between trigger and response:

```
Voice Trigger → Condition ("contains 'hello'?") → Speak
```

### Add AI

Replace the static message with AI:

```
Voice Trigger → AI Prompt ("Respond friendly") → Speak
```

### Add Actions

Make it do something real:

```
Voice Trigger → Condition ("play music?") → Spotify Play
```

## Example Blueprints

### Morning Routine Agent

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│ Time Trigger │────▶│ Read Calendar│────▶│ Speak Summary│
│  (7:00 AM)   │     │              │     │              │
└──────────────┘     └──────────────┘     └──────────────┘
                            │
                            ▼
                     ┌──────────────┐     ┌──────────────┐
                     │ Get Weather  │────▶│ Play Spotify │
                     │              │     │ (Mood: Calm) │
                     └──────────────┘     └──────────────┘
```

### Focus Mode Agent

```
Voice ("Focus mode") → Close Slack → Enable DND → Play Lo-fi
```

## Continue Learning

- [Architect Controls](/architect/controls) - Master the editor
- [Node Reference](/architect/nodes) - All available nodes
- [Memory System](/guide/memory) - How agents learn
