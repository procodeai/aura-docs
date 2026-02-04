Graph Agent & Architect Optimization Plan
Goal Description
Enhance the 'Architect' (Graph Generation Service) to be more token-efficient and powerful.

Optimization: Filter nodes sent to the LLM based on user prompt (reduce token usage).
Edit Capability: Allow users to modify existing graphs using AI.
Graph Agent: Add capabilities for "daily tasks" (Scheduling) to enable true agentic automation.
User Review Required
IMPORTANT

Optimization Strategy: I will implement a "keyword-based relevance" filter for nodes. This acts as a lightweight RAG. If the user prompt contains "speak", we prioritize action.speak. If it contains "schedule" or "daily", we prioritize trigger.schedule. Edit/Refinement: The "Edit" feature will send the current graph structure to the LLM. This increases token usage for that specific request but enables the feature. I will compact the graph representation.

Proposed Changes
Core / Intelligence
[MODIFY] 
AIGraphGenerator.swift
Update constructSystemPrompt to accept userPrompt.
Implement relevantTemplates(for: query) using NodeRegistry.
Update generateGraph to handle existingGraph parameter:
If present, serialize it to a compact JSON.
Add instruction: "Modify the following existing graph to match the request."
Update extractJSON to be more robust for edits (which might return just the changed nodes, but for now we ask for full graph for safety).
[MODIFY] 
NodeRegistry.swift
Add relevantTemplates(for query: String) -> [NodeTemplate] method.
Logic: Scan searchKeywords and description of all templates. Return matches + always include "Core" nodes (triggers/logic) to ensure valid graphs.
[MODIFY] 
NodeTemplates.swift
[NEW] Add trigger.schedule (Interval/Daily/Time) to support "daily tasks".
ensure searchKeywords are populated well for all nodes.
UI / UX
[MODIFY] 
BlueprintCanvasView.swift
Update toolbarOverlay to include an "Edit with AI" button (Sparkles icon).
Reuse ArchitectZeroStateView logic or create a similar ArchitectInputView popup for editing.
[MODIFY] 
BlueprintEditorState.swift
Add state for showArchitectEditPrompt.
Add method requestGraphEdit(prompt: String) which calls AIGraphGenerator with the current graph.
Verification Plan
Automated Tests
I will script a test validaton in GraphLogicVerifier.swift (if applicable) or just run the app.
Since this is heavily LLM dependent, manual verification is key.
Manual Verification
Optimization:
Run the app, open Console/Logs.
Request a simple graph: "Create a speaking agent".
Verify in logs that irrelevant nodes (e.g., utility.math or complex specific nodes) were NOT included in the system prompt (or check that the prompt length is shorter).
Graph Agent (Scheduling):
Request: "Run a daily task to say hello".
Verify it generates a graph with trigger.schedule -> action.speak.
Edit Graph:
Generate a graph.
Click "Edit" (Sparkles) button.
Request: "Change the text to 'Good Morning'".
Verify the graph updates correctly without breaking connections.