# Controls & Shortcuts

Master the Architect with these keyboard shortcuts and gestures.

## Navigation

| Action            | Input          | Notes                            |
| ----------------- | -------------- | -------------------------------- |
| **Pan Canvas**    | `⌘` + Drag     | Infinite scroll in any direction |
| **Zoom In/Out**   | Pinch / Scroll | Zoom centers on gesture          |
| **Reset View**    | `⌘` + `0`      | Return to origin                 |
| **Fit All Nodes** | `⌘` + `1`      | Zoom to show all nodes           |

## Selection

| Action             | Input                     | Notes            |
| ------------------ | ------------------------- | ---------------- |
| **Select Node**    | Click                     | Single selection |
| **Multi-Select**   | `Shift` + Click           | Toggle selection |
| **Marquee Select** | Click + Drag (background) | Box selection    |
| **Select All**     | `⌘` + `A`                 | Select all nodes |
| **Deselect**       | `Escape`                  | Clear selection  |

## Editing

| Action        | Input                  | Notes                         |
| ------------- | ---------------------- | ----------------------------- |
| **Delete**    | `Delete` / `Backspace` | Remove selected nodes & wires |
| **Duplicate** | `⌘` + `D`              | Copy with offset              |
| **Copy**      | `⌘` + `C`              | Copy to clipboard             |
| **Paste**     | `⌘` + `V`              | Paste at cursor               |
| **Undo**      | `⌘` + `Z`              | Undo last action              |
| **Redo**      | `⌘` + `Shift` + `Z`    | Redo                          |

## Organization

| Action          | Input                        | Notes             |
| --------------- | ---------------------------- | ----------------- |
| **Group Nodes** | `⌘` + `G`                    | Wrap in container |
| **Ungroup**     | `⌘` + `Shift` + `G`          | Dissolve group    |
| **Rename**      | `Enter` (with node selected) | Edit node label   |
| **Collapse**    | `⌘` + `.`                    | Minimize node     |

## Wiring

| Action           | Input                     | Notes                   |
| ---------------- | ------------------------- | ----------------------- |
| **Start Wire**   | Drag from port            | Begin connection        |
| **Cancel Wire**  | Drop in empty space       | Discard wire            |
| **Pick Up Wire** | Drag from connected input | Reconnect existing wire |
| **Delete Wire**  | Select wire + `Delete`    | Remove connection       |

## View Modes

| Action            | Input     | Notes              |
| ----------------- | --------- | ------------------ |
| **Design Mode**   | `⌘` + `1` | Normal editing     |
| **Debug Mode**    | `⌘` + `2` | See values & state |
| **Simulate Mode** | `⌘` + `3` | Animated flow view |

## Execution

| Action            | Input             | Notes            |
| ----------------- | ----------------- | ---------------- |
| **Run Blueprint** | `⌘` + `R` or `▶️` | Start execution  |
| **Stop**          | `⌘` + `.` or `⏹️` | Stop execution   |
| **Step Through**  | `F10`             | Execute one node |

## Tips

::: tip Pro Tip: Quick Node Creation
Double-click anywhere on the canvas to open the quick-add menu. Start typing to search for nodes.
:::

::: tip Pro Tip: Wire Snapping
When dragging a wire near a compatible port (within 50px), it automatically snaps to connect.
:::
