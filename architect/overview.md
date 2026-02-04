# Architect Overview

The **Architect** is ProCode AI's visual programming environment—an infinite canvas where you design agent behaviors by connecting nodes.

## Interface

```
┌─────────────────────────────────────────────────────────────┐
│ ⚙️  Mission Control  │     Canvas     │  📋 Inspector      │
├─────────────────────────────────────────────────────────────┤
│                      │                │                     │
│  📁 Blueprints       │   ┌────┐       │  Node Properties   │
│  ├─ My Agent         │   │Node│───────│  ───────────────   │
│  ├─ DJ Agent         │   └────┘       │  Name: Speak       │
│  └─ Focus Agent      │       │        │  Message: "Hello"  │
│                      │   ┌────┐       │                     │
│  🎯 Nodes            │   │ AI │       │                     │
│  ├─ Triggers         │   └────┘       │                     │
│  ├─ Logic            │                │                     │
│  └─ Actions          │                │                     │
│                      │                │                     │
├─────────────────────────────────────────────────────────────┤
│  ▶️ Play  ⏸️ Pause  🐛 Debug   │   Design │ Debug │ Simulate │
└─────────────────────────────────────────────────────────────┘
```

## Workspace Modes

### 📐 Design Mode

The default mode for building blueprints. Clean interface, precise wiring.

### 🐛 Debug Mode

X-Ray vision—see live variable values, execution state, and data flowing through wires.

### ⚡ Simulate Mode

"The Matrix" view. Background fades, wires glow with data flow animation. Watch your agent think in real-time.

## Core Concepts

### Nodes

Visual blocks representing actions, logic, or data. Each node has:

- **Inputs** (left side) - Receive data or flow
- **Outputs** (right side) - Send data or flow
- **Properties** - Configuration options

### Wires

Connections between nodes. Two types:

- **Flow Wires** (white) - Control execution order
- **Data Wires** (colored) - Pass values between nodes

### Groups

Container nodes that organize related logic. Drag a selection and press `Cmd+G`.

## Why Visual?

| Traditional Code | Visual Blueprint   |
| ---------------- | ------------------ |
| Hidden logic     | See the flow       |
| Syntax errors    | Snap-to-connect    |
| Debug with print | Watch data live    |
| Hard to share    | Screenshot & share |

---

Continue to [Controls & Shortcuts](/architect/controls) to master the editor.
