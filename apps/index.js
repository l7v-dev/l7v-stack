#!/usr/bin/env node
/**
 * l7v-stack
 * Entry point — boots config, registers commands, runs CLI.
 *
 * Boot sequence:
 *   1. load config  (l7v-config)
 *   2. register commands (l7v-cli)
 *   3. run CLI
 */

import { init }            from 'l7v-config/singleton'
import { createCli }       from 'l7v-cli/cli'
import { defaults, envOptions } from '../config/defaults.js'
import { greetCommand, statusCommand, configCommand } from '../modules/commands.js'
import { readFileSync }    from 'node:fs'
import { fileURLToPath }   from 'node:url'
import { join, dirname }   from 'node:path'

const __dir = dirname(fileURLToPath(import.meta.url))
const pkg   = JSON.parse(readFileSync(join(__dir, '../package.json'), 'utf8'))

// 1. Config — load once
const configFile = process.env.L7V_CONFIG ?? null
init(defaults, configFile, envOptions)

// 2. CLI — register commands
const cli = createCli({ name: 'l7v-stack', version: pkg.version })

cli.register('greet',  'Print a greeting            [name] [--style=plain|formal|l7v]', greetCommand)
cli.register('status', 'Show system status          [--json]',                           statusCommand)
cli.register('config', 'Show active configuration   [--json]',                           configCommand)

// 3. Run
cli.run()
