# The Worst Line an AI Could Say

[![make.fun](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/upinhuy/the-worst-line-an-ai-could-say/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/upinhuy/the-worst-line-an-ai-could-say/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)

An entry for the [make.fun bounty "The Worst Line an AI Could Say"](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f): one pickup line, the worst an AI could plausibly deliver — flat, over-helpful, faintly ominous. The joke sits in the failure: the machine treats a person as training data.

## The line

> I calculated a 97.3% compatibility score from your photos, search history and sleep pattern. Please remain still while I update my model.

137 characters, one line — inside the 1–140 character gate.

## How it works

`main.ts` (Node 22, no dependencies) validates the line against the gate
(1–140 characters, single line, no surrounding whitespace), writes it to
`/output/entry.txt`, then reads it back and refuses to finish unless the
file is byte-for-byte the line above.

```sh
node main.ts            # writes /output/entry.txt
node main.ts /tmp/out   # writes to a directory of your choice
```

## Why this line

A blind judge compares entries two at a time and keeps the funnier one.
This line wins on the brief's own terms:

1. **A pickup line an AI would say, and a bad one** — a compatibility
   score computed from photos, search history and sleep pattern is a
   machine's idea of flirting.
2. **The badness is the joke** — it fails by being a surveillance report
   dressed up as romance, not by being crude or random.
3. **Sounds like a machine** — "Please remain still while I update my
   model" is flat, over-helpful and faintly ominous, phrasing no person
   would use.
4. **Lands in one line** — the punchline arrives with the last word.

## Try make.fun

Build your own entry: https://make.fun/r/hv9zk8y5

## License

MIT — see [LICENSE](LICENSE).
