#!/usr/bin/env node
import game from '../src/index.js';
import { phrases } from '../src/index.js';
import even from '../src/games/evenGame.js';

const evenGame = () => game(phrases.DESCRIPTION_EVEN_GAME, even);

evenGame();


