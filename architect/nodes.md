# Nodes Reference

A complete reference of all available nodes in the Architect editor.

## Categories

### Triggers

Nodes that start blueprint execution.

| Node             | Description                |
| ---------------- | -------------------------- |
| `Voice Trigger`  | Activates when user speaks |
| `Time Trigger`   | Scheduled execution        |
| `App Trigger`    | When an app opens/closes   |
| `Hotkey Trigger` | Keyboard shortcut          |

### Logic

Control flow and decision nodes.

| Node        | Description            |
| ----------- | ---------------------- |
| `Condition` | If/else branching      |
| `Switch`    | Multi-way branching    |
| `Loop`      | Repeat actions         |
| `Delay`     | Wait before continuing |

### AI

LLM-powered intelligence nodes.

| Node           | Description          |
| -------------- | -------------------- |
| `AI Generate`  | Free-form prompt     |
| `AI Summarize` | Condense text        |
| `AI Classify`  | Categorize input     |
| `AI Extract`   | Pull structured data |

### Actions

Nodes that perform real-world actions.

| Node           | Description        |
| -------------- | ------------------ |
| `Speak`        | Text-to-speech     |
| `Notification` | macOS notification |
| `Open App`     | Launch application |
| `Spotify Play` | Control music      |

### Data

Storage and variable nodes.

| Node            | Description               |
| --------------- | ------------------------- |
| `Variable`      | Store/retrieve values     |
| `Memory Query`  | Search agent memory       |
| `Text Input`    | User text input           |
| `Result Viewer` | Display execution results |

---

## Node Anatomy

Every node has:

- **Header**: Name and icon
- **Input Ports** (left): Receive data or flow
- **Output Ports** (right): Send data or flow
- **Body**: Configuration fields

## Adding Nodes

1. Right-click on canvas
2. Type to search
3. Click to place

Or double-click anywhere to open the quick-add menu.
