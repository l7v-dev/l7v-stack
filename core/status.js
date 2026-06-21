/**
 * status
 * System status report — pure, no side effects.
 *
 * Dependencies: none
 * Exports: buildStatus
 */

export const buildStatus = (config) => ({
  name:    'l7v-stack',
  version: config.version ?? '0.1.0',
  env:     config.env     ?? 'development',
  uptime:  process.uptime().toFixed(2) + 's',
  node:    process.version,
  pid:     process.pid,
})
