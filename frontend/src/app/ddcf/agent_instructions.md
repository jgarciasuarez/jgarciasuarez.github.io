# DDCF Interactive Hub Agent Instructions

## Directives
1. **Purpose**: This page is an interactive, visually complex hub for the SNSF-funded DDCF project.
2. **Core Library**: Use `reactflow` for the node-based interface.
3. **Content Source**: Use `../../../../context-in-text/ddcf_content_specification.md` for all node and dialog copy.
   The content dependency is resolved; do not replace the approved copy with placeholder text.
4. **Architecture**:
   - Implement a central hub node representing the DDCF project.
   - Implement peripheral nodes for subprojects: Constitutive Modeling, Neural Operators, GPU-acceleration, Automatic Differentiation.
   - Nodes must be draggable and the canvas should support panning/zooming.
5. **Styling**: Nodes must adhere to the global dark theme and look premium (glassmorphism, subtle glowing borders).
6. **Isolation**: Keep the React Flow state and logic isolated from standard UI components to prevent unnecessary re-renders.

## State
- [x] Central and peripheral node content approved.
- [x] Source links and asset candidates documented.
- [x] DDCF page architecture and interactive React Flow hub implemented.
- [x] Accessible detail dialogs, responsive fallback controls, and reduced-motion support implemented.
