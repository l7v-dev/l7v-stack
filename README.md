# l7v-stack

> Wires l7v-core + l7v-cli + l7v-config into a working system.

```bash
npx l7v-stack --help
```

```
l7v-stack

Usage:
  l7v-stack <command> [options]

Commands:
  greet    Print a greeting            [name] [--style=plain|formal|l7v]
  status   Show system status          [--json]
  config   Show active configuration   [--json]
```

## Quick start

```bash
# greet
npx l7v-stack greet world
# → Hello, world!

npx l7v-stack greet l7v --style=l7v
# → l7v — Simple by design. Composable by nature.

# status
npx l7v-stack status
# → l7v-stack v0.1.0 / env: development / node: v18+

# config (override via env)
L7V_PORT=9000 L7V_ENV=production npx l7v-stack config --json
```

## Why

This is the proof of concept. It shows that l7v-core, l7v-cli, and l7v-config compose cleanly into a working system — no glue code, no ceremony.

## Boot sequence

```
1. init config   →  l7v-config  (defaults + L7V_* env vars + optional JSON file)
2. register cmds →  l7v-cli     (greet, status, config)
3. run CLI       →  parse argv, route, execute
```

## Config

Defaults are in `config/defaults.js`. Override with env vars (prefix `L7V_`) or a JSON file:

```bash
L7V_CONFIG=./my-config.json l7v-stack status
```

```json
{
  "port": 8080,
  "env": "staging"
}
```

## Structure

```
core/
├── greet.js        # Greeting logic (uses l7v-core/result)
└── status.js       # Status report builder
modules/
└── commands.js     # CLI commands wired to core logic
config/
└── defaults.js     # Base config + env schema
apps/
└── index.js        # Entry point — boot sequence
```

## Philosophy

Simple by design. Composable by nature.

→ [l7v principles](https://github.com/l7v-dev)
