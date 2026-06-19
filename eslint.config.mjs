import config from 'eslint-config-agent'

// Relaxed overrides for incremental adoption of eslint-config-agent.
// The default export is tuned for greenfield projects (a spec file beside
// every source file, single export per module, custom Error classes, no
// optional chaining / nullish coalescing). This existing library keeps the
// core quality rules but defers the most opinionated ones.
const relaxedOverrides = {
  name: 'currency-fa/relaxed-overrides',
  rules: {
    'ddd/require-spec-file': 'off',
    'single-export/single-export': 'off',
    'required-exports/required-exports': 'off',
    'error/no-generic-error': 'off',
    'error/require-custom-error': 'off',
    'error/no-literal-error-message': 'off',
    'default/no-default-params': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    'no-restricted-syntax': 'off',
  },
}

export default [...config, relaxedOverrides]
