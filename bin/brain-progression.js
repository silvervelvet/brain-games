#!/usr/bin/env node
import game from '../src/index.js';
import { phrases } from '../src/index.js';
import progression from '../src/games/progressionGame.js';

const progressionGame = () => game(phrases.DESCRIPTION_PROGRESSION_GAME, progression);

progressionGame();