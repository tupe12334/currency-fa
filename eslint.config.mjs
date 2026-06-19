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
      // Force `import type` for imports used only as types. Keeps type-only
      // imports out of the emitted JS (smaller output, no accidental runtime
      // dependency or side-effect), makes intent explicit, and is required for
      // TypeScript's `verbatimModuleSyntax`. Auto-fixable, so zero ongoing cost.
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
]
