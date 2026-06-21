/**
 * defaults
 * Base config for l7v-stack. All values overridable via file or env.
 *
 * Env prefix: L7V
 * Schema: PORT → number, DEBUG → boolean
 */

export const defaults = {
  version: '0.1.0',
  env:     'development',
  port:    3000,
  host:    'localhost',
  debug:   false,
}

export const envOptions = {
  prefix: 'L7V',
  schema: {
    PORT:  'number',
    DEBUG: 'boolean',
  },
}
