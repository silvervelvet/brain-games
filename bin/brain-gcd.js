#!/usr/bin/env node
import game from '../src/index.js';
import { phrases } from '../src/index.js';
import gcd from '../src/games/gcdGame.js';

const gcdGame = () => game(phrases.DESCRIPTION_GCD_GAME, gcd);

gcdGame();
