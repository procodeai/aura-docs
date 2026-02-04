# Grouping

Groups help organize complex blueprints by containing related nodes.

## What is a Group?

A group is a container node that:

- Holds multiple nodes together
- Moves as a single unit when dragged
- Provides a label for organization
- Can be collapsed to save space

## Creating Groups

1. Select the nodes you want to group
2. Press `Cmd + G`
3. Enter a name for the group

Or right-click → **Group Selection**

## Group Anatomy

```
┌──────────────────────────────────┐
│ 📁 Email Handler                 │ ← Header (label)
├──────────────────────────────────┤
│                                  │
│  ┌─────┐    ┌─────┐    ┌─────┐  │
│  │ Get │───▶│Parse│───▶│Reply│  │ ← Contained nodes
│  └─────┘    └─────┘    └─────┘  │
│                                  │
└──────────────────────────────────┘
```

## Moving Groups

- **Drag the header**: Moves all contained nodes
- **Drag a node inside**: Moves just that node

## Editing Groups

### Rename

Double-click the header text.

### Resize

Drag the edges of the group.

### Ungroup

Select the group → `Cmd + Shift + G`

### Delete

Select the group → `Delete` (removes group and contents)

## Nested Groups

Groups can contain other groups:

```
┌── Main Process ─────────────────────┐
│                                      │
│  ┌── Input ──────┐  ┌── Output ──┐  │
│  │ [Node] [Node] │  │ [Node]     │  │
│  └───────────────┘  └────────────┘  │
│                                      │
└──────────────────────────────────────┘
```

## Best Practices

1. **Logical grouping**: Group by function (Input, Process, Output)
2. **Clear labels**: Name groups descriptively
3. **Don't over-nest**: 2 levels max for readability
