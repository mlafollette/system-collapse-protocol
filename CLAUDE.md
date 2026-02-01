# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build to dist/
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Architecture

This is a single-page React application with a stage-based game flow:

```
App.jsx (state management)
├── Calibration (user input: name, city, talent)
├── Shift (glitch transition animation)
├── Simulation (gameplay loop)
└── Ending (results display)
```

### Game Engine (`src/engine/`)

- **GameEngine.js**: Pure functions for state transitions. Uses `GAME_STAGES` enum to control flow. All game state mutations happen through functions like `makeChoice()`, `startGame()`.
- **ScenarioDatabase.js**: Content arrays (sky descriptions, city states, encounters) and `generateScenario()` which stitches fragments together using player input. The `{TALENT}` placeholder in encounter text gets replaced with the player's talent.

### Stage Components (`src/stages/`)

Each stage is a self-contained view. Props flow down from App:
- `Calibration`: Collects player data via sequential prompts
- `Shift`: Timed animation sequence with glitch effects
- `Simulation`: Displays scenarios, handles choices, shows outcomes
- `Ending`: Shows final stats and decision log

### Hooks (`src/hooks/`)

- **useTypewriter.js**: Character-by-character text reveal with configurable speed. Returns `{ displayedText, isComplete, skip }`.

### Visual System

CSS custom properties define the color palette in `index.css`:
- `--terminal-green`: #00ff41
- `--holographic-blue`: #00d4ff
- `--danger-red`: #ff0040
- `--deep-black`: #050505

Key CSS classes: `.glow-green`, `.glow-blue`, `.glitch-hover`, `.crt-overlay`, `.flicker`, `.shake`

## Adding Content

New scenarios go in `ScenarioDatabase.js`. Each encounter needs:
```js
{
  description: "Scenario text. Use {TALENT} for player's talent.",
  choices: [
    { text: "Choice text", healthChange: -10, sanityChange: 5, outcome: "Result text" }
  ]
}
```

The `encounters` array is cycled through based on `scenarioIndex % encounters.length`.
