import config from 'eslint-config-agent'

export default [
  {
    // Build output is generated and not part of the TypeScript project.
    ignores: ['dist/**'],
  },
  ...config,
  {
    rules: {
      // Require strict equality (=== / !==) to avoid the surprising type
      // coercion that the loose == / != operators perform.
      eqeqeq: ['error', 'always'],

      // This package keeps its tests in __tests__/ rather than co-located
      // *.spec.ts files, so the DDD "spec beside every source file" rule does
      // not fit the existing layout. Every public function is covered by
      // __tests__/currency.test.ts.
      'ddd/require-spec-file': 'off',
      // Force `import type` for imports used only as types. Keeps type-only
      // imports out of the emitted JS (smaller output, no accidental runtime
      // dependency or side-effect), makes intent explicit, and is required for
      // TypeScript's `verbatimModuleSyntax`. Auto-fixable, so zero ongoing cost.
      '@typescript-eslint/consistent-type-imports': 'error',
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
  {
    rules: {
      // Flag conditions (if / ternary / && / || / ?.) whose outcome is already
      // determined by the static types — e.g. testing a non-nullable value for
      // `null`, or a branch the type system proves can never run. Such checks
      // are dead code: they hide a wrong type annotation or a leftover guard,
      // and mislead readers into thinking a case is still reachable. This
      // type-aware rule is intentionally left out of typescript-eslint's
      // `strictTypeChecked` preset (which eslint-config-agent extends), so it
      // must be enabled per-repo. `src` has no violations today, so the rule
      // is zero-cost now and keeps redundant guards from creeping in as the
      // currency map grows.
      '@typescript-eslint/no-unnecessary-condition': 'error',
    },
  },
]
