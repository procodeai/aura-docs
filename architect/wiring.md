# Wiring System

The wiring system connects nodes together to define data and execution flow.

## Wire Types

### Flow Wires (White)

Control the **order** of execution.

```
[Trigger] ──flow──▶ [Action 1] ──flow──▶ [Action 2]
```

- Solid white line
- Connects **Flow Out** → **Flow In**
- Defines "what runs next"

### Data Wires (Colored)

Pass **values** between nodes.

```
[Text Input] ──data──▶ [AI Generate]
                           │
                    (uses the text)
```

- Colored by data type
- Connects **Output** → **Input**
- Carries values (strings, numbers, etc.)

## Wire Colors

| Color     | Data Type |
| --------- | --------- |
| 🟢 Green  | String    |
| 🔵 Blue   | Number    |
| 🔴 Red    | Boolean   |
| 🟣 Purple | Object    |
| ⚪ White  | Flow      |

## Creating Wires

1. **Click and drag** from any port
2. A dashed preview wire follows your cursor
3. **Drop** on a compatible port to connect

### Magnetic Snapping

When within 50px of a valid target, the wire snaps automatically.

### Cancel

Drop in empty space to cancel the wire.

## Editing Wires

### Pick Up & Move

1. Drag from an **Input** port that has a wire
2. The existing wire detaches
3. Drop on a new source

### Delete

1. Select the wire (click on it)
2. Press `Delete` or `Backspace`

## Compatibility

Wires only connect compatible types:

| From            | To       | Result |
| --------------- | -------- | ------ |
| String → String | ✅ Works |
| Number → Number | ✅ Works |
| String → Number | ❌ Error |
| Any → Any       | ✅ Works |

## Best Practices

1. **Keep wires short**: Long wires are hard to follow
2. **Use groups**: Organize related nodes together
3. **Color consistency**: Follow type colors for clarity
