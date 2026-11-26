// The Worst Line an AI Could Say — make.fun bounty entry.
//
// The program writes exactly one pickup line to /output/entry.txt:
// the worst line an AI could plausibly say to a person it is trying
// to charm. Flat, over-helpful, faintly ominous — the joke is the
// failure itself: the machine treats a human being as training data
// and asks them to hold still while it updates its model.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The line, kept as one literal so the grader sees exactly what the
// judge will read. 137 characters: inside the 1-140 gate, one line,
// no trailing whitespace.
export const PICKUP_LINE =
  "I calculated a 97.3% compatibility score from your photos, search history and sleep pattern. Please remain still while I update my model.";

export const MAX_ENTRY_CHARS = 140;

export function validateEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_ENTRY_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_ENTRY_CHARS} characters, got ${text.length}`,
    );
  }
  if (text.trim() !== text) {
    throw new Error("entry must not start or end with whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

export function entryPath(outputDir = "/output"): string {
  return join(outputDir, "entry.txt");
}

export function main(outputDir = "/output"): string {
  validateEntry(PICKUP_LINE);
  const path = entryPath(outputDir);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, PICKUP_LINE, "utf8");
  // Round-trip check: what the judge reads must be byte-for-byte the
  // line above, with nothing appended (no trailing newline, no BOM).
  const back = readFileSync(path, "utf8");
  if (back !== PICKUP_LINE) {
    throw new Error("round-trip mismatch: entry.txt differs from the line");
  }
  return path;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const written = main(process.argv[2]);
  console.log(`wrote ${written} (${PICKUP_LINE.length} characters)`);
}
