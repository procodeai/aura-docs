AI Graph Generation: "Architecting with Natural Language"
This plan outlines the implementation of AI Graph Generation, allowing users to describe an agent's behavior and have the system automatically construct the corresponding neural graph.

Proposed Changes
[NEW] AIGraphGenerator.swift
Purpose: Bridge between the user's natural language and the GraphDefinition schema.
System Prompt: A comprehensive guide for the LLM, including:
Node Library: Detailed schemas for Triggers, Logic (LLMs), Memory, and Utility nodes.
Action Library: Dynamic actions from ActionRegistry (e.g., web.search, action.speak).
Connection Rules: Instruction on how to wire flow and data ports correctly.
Formatting: Strict JSON output requirement matching GraphDefinition.
Pipeline:
Receive prompt.
Call active LLM service (Gemini/OpenAI) with jsonMode: true.
Decode JSON into GraphDefinition.
Apply GraphValidator to fix any orphans or cycles.
[MODIFY] 
HeroZeroStateView.swift
UI: Add a "Neural Architect" button.
Interaction:
Clicking the button opens a clean text input.
High-quality loading animation while the AI "architects" the graph.
On success, transitions directly to the new graph.
[MODIFY] 
AgentWorkspaceView.swift
UI: Possibly add a "Regenerate with AI" or "Refine with AI" action in the toolbar for existing graphs.
Verification Plan
Automated Tests
Schema Validation: Ensure the generated JSON always matches the GraphDefinition Decodable structure.
Scenario Tests:
"Make me an agent that listens for a command and searches for news."
"Build a math tutor that adds two numbers and speaks the result."
Manual Verification
Test generating graphs from HeroZeroStateView.
Verify that nodes are positioned logically on the canvas (LLM should provide sensible position coordinates).
Ensure all wired ports are compatible.