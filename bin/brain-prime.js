#!/usr/bin/env node
import game from '../src/index.js';
import { phrases } from '../src/index.js';
import prime from '../src/games/primeGame.js';

const primeGame = () => game(phrases.DESCRIPTION_PRIME_GAME, prime);

primeGame();
