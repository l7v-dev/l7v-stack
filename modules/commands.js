/**
 * commands
 * All l7v-stack CLI commands — wired together here, one per export.
 *
 * Dependencies: core/greet.js, core/status.js, l7v-config singleton
 * Exports: greetCommand, statusCommand, configCommand
 */

import { buildGreeting } from '../core/greet.js'
import { buildStatus }   from '../core/status.js'
import { get }           from 'l7v-config/singleton'

export const greetCommand = (args, flags) => {
  const name  = args[0] ?? flags.name ?? 'world'
  const style = flags.style ?? 'plain'
  const result = buildGreeting(name, style)
  if (!result.ok) return result
  console.log(result.value)
}

export const statusCommand = (_args, flags) => {
  const config = get()
  const status = buildStatus(config)

  if (flags.json) {
    console.log(JSON.stringify(status, null, 2))
    return
  }

  console.log(`\n  l7v-stack v${status.version}`)
  console.log(`  env:    ${status.env}`)
  console.log(`  node:   ${status.node}`)
  console.log(`  uptime: ${status.uptime}`)
  console.log(`  pid:    ${status.pid}\n`)
}

export const configCommand = (_args, flags) => {
  const config = get()

  if (flags.json) {
    console.log(JSON.stringify(config, null, 2))
    return
  }

  console.log('\n  Active config:')
  for (const [key, val] of Object.entries(config)) {
    console.log(`    ${key}: ${val}`)
  }
  console.log()
}
