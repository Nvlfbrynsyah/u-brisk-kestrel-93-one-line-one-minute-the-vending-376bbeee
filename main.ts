import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Vending machine pickup line generator
const line = "I usually reject crumpled bills and eat quarters for fun, but for you I'd jam my own coils.";

// Guard: entry must be 1-200 code points
const codePoints = [...line].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry is ${codePoints} code points; must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line, 'utf-8');
