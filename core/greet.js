/**
 * greet
 * Pure greeting logic — demonstrates l7v-core usage.
 *
 * Dependencies: l7v-core/result
 * Exports: buildGreeting
 */

import { ok, err } from 'l7v-core/result'

export const buildGreeting = (name, style = 'plain') => {
  if (!name || typeof name !== 'string') return err('name is required')

  const greetings = {
    plain:  `Hello, ${name}!`,
    formal: `Good day, ${name}.`,
    l7v:    `${name} — Simple by design. Composable by nature.`,
  }

  const msg = greetings[style]
  if (!msg) return err(`unknown style: "${style}". Use: plain, formal, l7v`)

  return ok(msg)
}
