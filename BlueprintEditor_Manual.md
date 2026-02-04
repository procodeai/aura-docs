# Genesis Architect: Blueprint Editor Manual

**Version:** 1.0 (Alpha)
**Date:** December 17, 2025

## Overview
The **Blueprint Editor** (internally `BlueprintCanvasView`) is an infinite canvas interface for designing AI Agent behaviors. It is inspired by Unreal Engine's Blueprint system, allowing users to visually connect "Nodes" via "Cables" to define logic flow.

---

## 🎮 Controls & Shortcuts

| Action | Input | Notes |
| :--- | :--- | :--- |
| **Pan Canvas** | `⌘ Command` + Drag | Infinite scrolling in any direction. |
| **Zoom** | Pinch / Magnify | Zoom focus centers on the gesture. |
| **Select Node** | Click | Exclusive selection. |
| **Multi-Select** | `Shift` + Click | Toggles selection state. |
| **Marquee Select** | Click + Drag (Background) | Draws a blue box to select multiple nodes. |
| **Delete** | `Delete` / `Backspace` | Removes all selected nodes and their connected wires. |
| **Duplicate** | `⌘ Command` + `D` | OFFSETS copies of selected nodes/groups. |
| **Group** | `⌘ Command` + `G` | Wraps selected nodes in a commented container. |
| **Window Zoom** | Double-Tap Header | Toggles between efficient Maximize and Restore. |

---

## 🔌 Wiring System

The wiring system is designed for precision and "feel".

1.  **Ports (Pins)**:
    *   **Inputs** (Left): Receive data or flow.
    *   **Outputs** (Right): Send data or flow.
    *   **Colors**: visual indicators of type (Boolean=Red, String=Green, Flow=White, etc.).

2.  **Connecting**:
    *   **Drag-to-Connect**: Click and drag from any pin. A dashed wire follows your cursor.
    *   **Magnetic Snapping**: When the wire end gets close (within **50px**) of a valid target pin, it will "snap" to the center of that dot.
    *   **Cancel**: Drop the wire in empty space to cancel.

3.  **Editing**:
    *   **Pick Up & Move**: Dragging from an **Input** pin that *already has a wire* will detach ("pick up") the existing wire, allowing you to move it to a different source or delete it.

---

## 🏗 Features

### 1. Visual Nodes
*   **Glassmorphic Design**: Nodes feature a modern, translucent UI with backdrop blur.
*   **Safe Dragging**: Nodes can be dragged by their headers or bodies. They utilize specific drag priorities to avoid conflict with Marquee selection.

### 2. Grouping (Living Containers)
*   **Creation**: Select nodes -> `Cmd+G`.
*   **Sticky Behavior**: Dragging a Group Node moves all nodes visually inside it.
*   **Organization**: Groups provide a label/header for organizing complex logic clusters.

### 3. Infinite Geometry
*   The canvas is technically infinite.
*   **Coordinate Spaces**:
    *   **Grid/Background**: Handles Panning/Zooming gestures.
    *   **Canvas Space**: The coordinate system for Nodes and Wires. Wires are rendered here to ensure they stick exactly to pins during zoom.
    *   **Global Overlay**: Used for temporary UI elements (like the Wire Drag preview).

---

## 🛠 Technical Architecture

**Key Components:**

1.  **`BlueprintCanvasView.swift`**:
    *   The main container.
    *   Manages the `ZStack` layers: Grid -> Groups -> Wires -> Nodes -> Overlays.
    *   Handles top-level gestures (Marquee, Pan).

2.  **`BlueprintEditorState` (ObservableObject)**:
    *   The "Brain" of the editor.
    *   Stores `GraphDefinition` (Nodes/Edges).
    *   Manages ephemeral state: `selectionRect`, `tempWireStart`, `portPositions`.
    *   **Port Tracking**: Uses `Preferences` to track the exact screen coordinates of every Pin for precise wire rendering.

3.  **`VisualNodeView.swift`**:
    *   Renders individual nodes.
    *   **Hit Testing**: Uses `PortPositionKey` to broadcast Pin locations up to the Canvas.

4.  **`ConnectionCable.swift`**:
    *   Renders the Cubic Bezier curves.
    *   Uses dynamic lookups into `portPositions` to ensure cables always connect "center-to-center".

---

## 🐛 Known Behaviors / Troubleshooting

*   **Window vs Canvas**: Dragging the window requires grabbing the **Header Bar**. Dragging the Canvas requires `Cmd+Drag`.
*   **Wire Alignment**: If wires look "offset", it usually means the `CoordinateSpace` names mismatch. Ensure `VisualNodeView` and `BlueprintCanvasView` both refer to `.named("Canvas")`.
