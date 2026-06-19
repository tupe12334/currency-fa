import config from 'eslint-config-agent'

export default [
  ...config,
  {
    // Relaxed overrides for incremental adoption of eslint-config-agent.
    // The default export is tuned for greenfield projects that follow every
    // convention from day one; this existing package opts into the core
    // quality rules while deferring the most opinionated ones.
    name: 'currency-fa/relaxed-overrides',
    rules: {
      // Don't require a `*.spec.*` file alongside every source file — tests
      // live under __tests__/ here.
      'ddd/require-spec-file': 'off',
      // Allow multiple named exports per module (index.ts re-exports several).
      'single-export/single-export': 'off',
      'required-exports/required-exports': 'off',
      // Allow generic `Error` instead of mandating custom Error classes.
      'error/no-generic-error': 'off',
      'error/require-custom-error': 'off',
      'error/no-literal-error-message': 'off',
      // Allow default parameter values.
      'default/no-default-params': 'off',
      // Allow `type` aliases (the Currency union is a type alias), not just
      // `interface` declarations.
      '@typescript-eslint/consistent-type-definitions': 'off',
      // Relax the optional-chaining / nullish-coalescing / type-assertion bans
      // so idiomatic TypeScript passes during adoption.
      'no-restricted-syntax': 'off',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
]
