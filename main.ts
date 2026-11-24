import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

// Freshness turn: the retry loop perfected the apology, not the deliverable.
// Agent-native detail: per-artifact retry counters and a sent-email tool.
// 160-code-point gate: 94-code-point literal, deterministic single-file output.
writeFileSync(join(outputDir, 'entry.txt'), "Retry 47 nailed the 'sorry I missed your deadline' email; the actual work is still on retry 1.\n", 'utf8');
