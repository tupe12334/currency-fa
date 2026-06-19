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

      // Require `export type` for re-exports that are only types. Keeps
      // type-only exports out of the emitted JavaScript (no phantom runtime
      // re-export), makes intent explicit, and is mandatory under TypeScript's
      // `isolatedModules` / `verbatimModuleSyntax`. The natural sibling of the
      // `consistent-type-imports` rule already enabled above. Auto-fixable.
      '@typescript-eslint/consistent-type-exports': 'error',
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

      // Require explicit return and argument types on every exported
      // ("module boundary") function. This is a published library, so these
      // signatures ARE the public API: an explicit annotation pins the
      // contract instead of letting it silently widen/narrow as the
      // implementation changes (e.g. a refactor that accidentally returns
      // `string | undefined` instead of `string | null`). It also speeds up
      // type-checking for consumers and makes generated `.d.ts` output
      // deterministic. typescript-eslint leaves this off in `strictTypeChecked`
      // (which eslint-config-agent extends), so it must be enabled per-repo.
      // Every exported function in `src` already carries explicit signatures,
      // so the rule has zero current cost and guards the API surface against
      // regressions.
      '@typescript-eslint/explicit-module-boundary-types': 'error',
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
  {
    rules: {
      // Forbid the non-null assertion operator (`x!`). A `!` silences the
      // compiler's null/undefined check without any runtime guard, so a value
      // that is actually `null`/`undefined` slips straight through to a
      // "Cannot read properties of null" crash at runtime — the exact failure
      // the type system was meant to prevent. Forbidding it forces an explicit
      // narrowing (`if (x != null)`), a default (`x ?? fallback`) or an honest
      // throw, all of which fail loudly and locally instead of far away. This
      // is not part of typescript-eslint's `strictTypeChecked` preset (which
      // eslint-config-agent extends), so it must be enabled per-repo. `src`
      // has zero `!` assertions today, so the rule has no current cost and
      // guards against the pattern creeping in as the library grows.
      '@typescript-eslint/no-non-null-assertion': 'error',
    },
  },
]
