import config from 'eslint-config-agent'

export default [
  {
    // Build output is generated and not part of the TypeScript project.
    ignores: ['dist/**'],
  },
  ...config,
  {
    rules: {
      // This package keeps its tests in __tests__/ rather than co-located
      // *.spec.ts files, so the DDD "spec beside every source file" rule does
      // not fit the existing layout. Every public function is covered by
      // __tests__/currency.test.ts.
      'ddd/require-spec-file': 'off',

      // Currency mapping is driven by `switch` statements over the `Currency`
      // union. This type-aware rule fails the build when a new currency code is
      // added to the union but its `case` is forgotten, giving a linter-enforced
      // guarantee alongside the hand-written `never` exhaustiveness assertion.
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
    },
  },
]
