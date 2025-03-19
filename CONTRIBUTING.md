# Contributing to currency-fa

Thank you for your interest in contributing to currency-fa! This document provides guidelines and steps for contributing to this project.

## Development Setup

1. Fork and clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Make your changes
4. Run tests:
   ```bash
   pnpm test
   ```

## Project Structure

- `src/` - Source code files
  - `getCurrencyFaName.ts` - Core currency to Font Awesome name mapping
  - `getCurrencyFaFullName.ts` - Generates complete FA class names
- `__tests__/` - Test files
- `dist/` - Compiled output (generated)

## Guidelines

### Adding New Currency Support

1. Open `src/getCurrencyFaName.ts`
2. Add the new currency code to the switch statement
3. Add corresponding test cases in `__tests__/currency.test.ts`
4. Ensure all tests pass

### Code Style

- Use TypeScript
- Maintain strict type checking
- Add JSDoc comments for new functions
- Follow existing code formatting

### Testing

- Write tests for new features
- Ensure existing tests pass
- Aim for good test coverage

### Commit Messages

Follow conventional commit format:

- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- test: Adding or updating tests
- refactor: Code refactoring
- style: Formatting changes

## Pull Request Process

1. Create a new branch for your feature
2. Make your changes
3. Run tests
4. Update documentation if needed
5. Submit a pull request
6. Wait for review and address any feedback

## Questions?

Feel free to open an issue for any questions or concerns.

## License

By contributing, you agree that your contributions will be licensed under the project's ISC license.
