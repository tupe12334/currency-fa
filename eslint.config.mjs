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
    },
  },
  {
    rules: {
      // Forbid relying on the implicit truthiness of nullable strings, numbers
      // and objects in boolean positions (`if (str)`, `a && b`, `!obj`,
      // ternaries). Implicit coercion lets an empty string, `0`, `NaN` or
      // `null` silently take the wrong branch — a class of bugs that
      // disappears once every condition is an explicit comparison
      // (`str.length > 0`, `x != null`). typescript-eslint deliberately leaves
      // this out of its `strictTypeChecked` preset (which eslint-config-agent
      // extends), so it must be enabled per-repo. `src` has no violations
      // today, so the rule has zero current cost and guards against
      // regressions as the library grows.
      '@typescript-eslint/strict-boolean-expressions': 'error',
    },
  },
]
