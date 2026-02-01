// The Collapse Protocol - Game Engine
// Manages game state and progression

export const GAME_STAGES = {
  CALIBRATION: 'calibration',
  SHIFT: 'shift',
  SIMULATION: 'simulation',
  ENDING: 'ending',
};

export const createInitialState = () => ({
  stage: GAME_STAGES.CALIBRATION,
  player: {
    name: '',
    city: '',
    talent: '',
  },
  stats: {
    health: 100,
    sanity: 100,
  },
  currentScenario: 0,
  totalScenarios: 5,
  history: [],
});

export const updatePlayerInfo = (state, field, value) => ({
  ...state,
  player: {
    ...state.player,
    [field]: value,
  },
});

export const startGame = (state) => ({
  ...state,
  stage: GAME_STAGES.SHIFT,
});

export const beginSimulation = (state) => ({
  ...state,
  stage: GAME_STAGES.SIMULATION,
});

export const makeChoice = (state, choice) => {
  const newHealth = Math.max(0, Math.min(100, state.stats.health + choice.healthChange));
  const newSanity = Math.max(0, Math.min(100, state.stats.sanity + choice.sanityChange));

  const newState = {
    ...state,
    stats: {
      health: newHealth,
      sanity: newSanity,
    },
    history: [
      ...state.history,
      {
        scenario: state.currentScenario,
        choice: choice.text,
        outcome: choice.outcome,
        healthChange: choice.healthChange,
        sanityChange: choice.sanityChange,
      },
    ],
    currentScenario: state.currentScenario + 1,
  };

  // Check for game over conditions
  if (newHealth <= 0 || newSanity <= 0 || newState.currentScenario >= state.totalScenarios) {
    return {
      ...newState,
      stage: GAME_STAGES.ENDING,
    };
  }

  return newState;
};

export const restartGame = () => createInitialState();

export const getStatStatus = (value) => {
  if (value > 70) return 'stable';
  if (value > 40) return 'warning';
  if (value > 20) return 'critical';
  return 'terminal';
};
