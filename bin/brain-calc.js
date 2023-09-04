#!/usr/bin/env node
import game from '../src/index.js';
import { phrases } from '../src/index.js';
import calc from '../src/games/calcGame.js';

const calcGame = () => game(phrases.DESCRIPTION_CALC_GAME, calc);

calcGame();