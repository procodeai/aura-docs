# [[appName]] Workflow Architecture Design

## Vision

A visual workflow builder for personal AI assistants where **non-technical users** can design complex automations that trigger based on context, voice, or events.

---

## Part 1: Core Concepts

### Terminology

| Concept            | Description                       | Example                      |
| ------------------ | --------------------------------- | ---------------------------- |
| **Agent**          | Complete workflow with trigger(s) | "Email Summarizer"           |
| **Workflow/Graph** | Visual node graph                 | The design canvas            |
| **Node**           | Single action/logic step          | "Send Email", "If Condition" |
| **Subflow**        | Reusable workflow component       | "Format as Markdown"         |
| **Trigger**        | Entry point that starts workflow  | Voice command, Schedule, API |

### Unreal Blueprint Comparison

| UE Blueprint | [[appName]] Equivalent | Notes                        |
| ------------ | ---------------------- | ---------------------------- |
| Event Graph  | **Agent Graph**        | Main workflow                |
| Function     | **Subflow**            | Reusable, has inputs/outputs |
| Macro        | **Template** (future)  | Copy-paste node groups       |
| Event        | **Trigger Node**       | Voice, Schedule, Webhook     |
| Variable     | **Context/Memory**     | AI memory system             |

---

## Part 2: Node Categories

### 1. Trigger Nodes (Entry Points)

#### [Current]

- **🎤 Voice Trigger**: "When user says..."
- **▶️ Start**: Manual execution

#### [Planned]

- **⏰ Schedule**: "Every day at 9am"
- **🔗 Webhook**: "When API called"
- **📱 App Event**: "When app opens"
- **🤖 AI Decision**: "When AI thinks..."

### 2. Action Nodes (Do Something)

```
┌─────────────────────────────────────────────┐
│  💬 AI Chat         Generate response       │
│  📧 Send Email      Via configured account  │
│  🔔 Notification    System alert            │
│  📁 File Operation  Read/Write/Move         │
│  🌐 HTTP Request    Call any API            │
│  📦 Run Subflow     Execute another graph   │
└─────────────────────────────────────────────┘
```

### 3. Control Flow Nodes (Logic)

```
┌─────────────────────────────────────────────┐
│  🔀 If/Else         Branch on condition     │
│  🎯 Switch          Multiple branches       │
│  🔁 For Each        Loop over items         │
│  ⏳ Wait            Delay execution         │
│  🛑 Stop            End workflow early      │
└─────────────────────────────────────────────┘
```

### 4. Data Nodes (Transform)

```
┌─────────────────────────────────────────────┐
│  📝 Text Format     Template strings        │
│  🔢 Math            Calculate values        │
│  📋 List            Filter/Map/Reduce       │
│  💾 Memory          Get/Set AI memory       │
└─────────────────────────────────────────────┘
```

---

## Part 3: Control Flow Design

### If/Else Node (Visual Branching)

```
        ┌─────────┐
   ───▶│ If/Else │
        └────┬────┘
             │
    ┌────────┴────────┐
    ▼                 ▼
┌───────┐         ┌───────┐
│  ✓    │         │  ✗    │
│ True  │         │ False │
└───┬───┘         └───┬───┘
    │                 │
    ▼                 ▼
 (next)            (next)
```

**Condition Builder (User-Friendly):**

```
Instead of: result.status == "success" && count > 5
Show:       "Result status" [equals] "success"
            [AND]
            "Count" [is greater than] [5]
```

### For Each Node (Loop)

```
┌──────────────┐
│   For Each   │
│   📋 items   │───▶ Loop Body ───┐
└──────────────┘                  │
       ▲                          │
       └──────────────────────────┘
              (repeat)
```

**User sees:** "For each **email** in **inbox**, do:"

---

## Part 4: Subflow Architecture

### What is a Subflow?

A Subflow is a **saved graph** that can be **called from other graphs**.

```
┌─────────────────────────────────────────────┐
│  "Email Summarizer" Agent                   │
│  ┌─────────┐     ┌────────────┐     ┌─────┐│
│  │ Trigger │────▶│ Run Subflow│────▶│ End ││
│  │ (Voice) │     │"Summarize" │     │     ││
│  └─────────┘     └────────────┘     └─────┘│
└─────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────┐
│  "Summarize" Subflow (Reusable)             │
│  ┌─────────┐     ┌─────────┐     ┌────────┐│
│  │  Input  │────▶│ AI Chat │────▶│ Output ││
│  │  (text) │     │"Summarize"    │(result)││
│  └─────────┘     └─────────┘     └────────┘│
└─────────────────────────────────────────────┘
```

### Subflow Definition

```swift
struct SubflowDefinition {
    let id: UUID
    let name: String
    let description: String

    // Contract
    let inputs: [PortDefinition]   // What it expects
    let outputs: [PortDefinition]  // What it returns

    // The actual graph
    let graphFileURL: URL
}
```

### Calling a Subflow

The "Run Subflow" node:

- Dropdown to select which Subflow
- Auto-generates input pins based on Subflow's definition
- Returns output pins

---

## Part 5: Multi-Window Session Strategy

### Design Decision

**Support multiple windows** for:

- Editing Agent on Monitor 1, Subflow on Monitor 2
- Comparing workflows
- Future: Split view within window

### Session Model

```swift
// One session per window
struct ArchitectWindowSession {
    let windowID: UUID
    var openGraphIDs: [UUID]      // Tabs
    var selectedGraphID: UUID?    // Active tab
    var configuration: Config     // Theme, layout
}

// Lifecycle:
// - Created: when window opens
// - Updated: on state change (debounced)
// - Deleted: when window INTENTIONALLY closes
// - Restored: on app relaunch (crash recovery)
// - Crash recovery
```

---

## Part 6: User-Friendly Design Principles

### For Non-Technical Users

1. **Natural Language Conditions**
   - Bad: `input.length > 0 && type == "email"`
   - Good: "If **input** is not empty AND **type** is email"

2. **Smart Defaults**
   - Pre-configured "Starter Templates"
   - AI suggests next node based on context

3. **Visual Clarity**
   - Color-coded node categories
   - Clear connection lines with data type hints
   - Inline previews of data flowing through

4. **Error Prevention**
   - Only show valid connection targets
   - Validate graph before saving
   - Friendly error messages

5. **AI Co-Pilot**
   - "Describe what you want" → AI builds graph
   - "Fix this workflow" → AI suggests improvements

---

## Part 7: Implementation Phases

### Phase 1: Foundation ✅ (Current)

- [x] Basic graph editor
- [x] Trigger nodes (Voice, Start)
- [x] Action nodes (AI, Notifications)
- [x] Session persistence

### Phase 2: Control Flow 🔜

- [ ] If/Else node
- [ ] Switch node
- [ ] For Each loop
- [ ] Visual condition builder

### Phase 3: Subflows

- [ ] Subflow creation (mark graph as reusable)
- [ ] Input/Output nodes
- [ ] "Run Subflow" node
- [ ] Subflow library browser

### Phase 4: Advanced

- [ ] Multi-window session restore
- [ ] Template marketplace
- [ ] AI workflow builder
- [ ] Version control for graphs

---

## Part 8: Console UX Refinement (Regression Fixes)

### 1. Stable Group IDs

**Problem**: `LogGroup` used a fresh `UUID()` on every re-render, making `expandedLogIDs.contains(group.id)` always fail.
**Fix**: Use the `id` of the first log in the group as the stable identifier.

### 2. Group Title Consistency

**Problem**: Memory/Thought logs lacked `source` titles, causing them to group under "System" if they were headers.
**Fix**: Propagate node titles to ALL logs within node execution context in `ArchitectEngine`.

### 3. Expansion Logic

**Problem**: Sub-log filtering was too aggressive or breaking the group display.
**Fix**: Ensure `onToggleExpand` is correctly wired and sub-logs are rendered only when expanded.

- [x] **Global Grouping**: Logs are now grouped by `nodeID` + `executionID` globally across the session.
- [x] **NodeID Propagation**: All 12 NodeHandlers now pass `nodeID` to log calls.

## Selection & Data Flow Refinement

### Selection Regression

#### [MODIFY] [BlueprintEditorState.swift](Aura/Core/Graph/Editor/BlueprintEditorState.swift)

- Update `zoomToNode(_:)` to perform `self.selectedNodeIDs = [id]`. This ensures the Inspector updates immediately when jumping from a log entry.

### Execution Data Visualization

#### [MODIFY] [GraphRunner.swift](Aura/Core/Graph/Execution/GraphRunner.swift)

- Update `didFinishNode` delegate call to pass the final `inputs` and `outputs` captured during the node run.
- Ensure outputs are pulled from `GraphContext` after the handler completes.

#### [MODIFY] [ArchitectEngine.swift](Aura/Core/Graph/Execution/ArchitectEngine.swift)

- Implement updated `didFinishNode` to update the reactive `GraphDefinition` surface.
- Map `Any` values to `String` descriptions for the `lastInputs` and `lastOutputs` fields in `NodeDefinition`.

#### [MODIFY] [VisualNodeView.swift](Aura/Features/Architect/VisualNodeView.swift)

- Add "Execution Tooltips/Badges" to pins when in Debug mode.
- Pull data from `node.lastInputs[port.id]` and `node.lastOutputs[port.id]`.

#### [MODIFY] [NodeInspectorView.swift](Aura/Features/Architect/NodeInspectorView.swift)

- Enhance "LAST EXECUTION" section to show both Inputs and Outputs.
- Format complex data (JSON) into a readable, monospaced view.

## Verification Plan

### Manual Verification

- Click the "Jump to Node" arrow in Console -> Verify node is selected AND Inspector updates.
- Run a graph -> Verify input/output values appear on node pins in Debug Mode.
- Open Inspector for a recently run node -> Verify it shows the exact data used in the last run.

---

## Next Steps

1. **Immediate**: Fix session manager for multi-window support
2. **Short-term**: Implement If/Else and For Each nodes
3. **Medium-term**: Subflow system
4. **Long-term**: AI-assisted workflow building
