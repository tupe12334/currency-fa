# currency-fa

A simple utility library that maps ISO 4217 currency codes to their corresponding Font Awesome currency icon names.

## Description

This library provides an easy way to get the appropriate Font Awesome icon name for any standard ISO 4217 currency code. It's useful for applications that need to display currency symbols using Font Awesome icons.

## Installation

Using pnpm (recommended):

```bash
pnpm add currency-fa
```

Using npm:

```bash
npm install currency-fa
```

Using yarn:

```bash
yarn add currency-fa
```

## Usage

```typescript
import { getCurrencyFaName, getCurrencyFaFullName } from "currency-fa";

// Get base Font Awesome name
const usdIcon = getCurrencyFaName("USD"); // Returns 'dollar'

// Get complete Font Awesome class name
const eurIcon = getCurrencyFaFullName("EUR"); // Returns 'fa-euro-sign'
const gbpIcon = getCurrencyFaFullName("GBP"); // Returns 'fa-pound-sign'

// Handling unsupported currencies
const unknownIcon = getCurrencyFaFullName("XYZ"); // Returns null
```

## Supported Currencies

The library supports the following currencies:

- USD (US Dollar) → `fa-dollar-sign`
- EUR (Euro) → `fa-euro-sign`
- GBP (British Pound) → `fa-pound-sign`
- JPY (Japanese Yen) → `fa-yen-sign`
- RUB (Russian Ruble) → `fa-ruble-sign`
- INR (Indian Rupee) → `fa-rupee-sign`
- ILS (Israeli Shekel) → `fa-shekel-sign`
- CHF (Swiss Franc) → `fa-franc-sign`
- KRW (South Korean Won) → `fa-won-sign`
- BTC (Bitcoin) → `fa-bitcoin-sign`
- LTC (Litecoin) → `fa-litecoin-sign`
- THB (Thai Baht) → `fa-baht-sign`
- BRL (Brazilian Real) → `fa-brazilian-real-sign`

Additionally, these currencies use the dollar sign:

- HKD (Hong Kong Dollar)
- AUD (Australian Dollar)
- CAD (Canadian Dollar)

## Requirements

- Font Awesome 5 or newer must be installed in your project for the icons to display properly

## Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a Pull Request.

## License

[ISC License](LICENSE)

## Issues

If you find a bug or want to request a new feature, please [open an issue](https://github.com/tupe12334/currency-fa/issues) on the GitHub repository.

## Author

Ofek Gabay (<ofek.gabay.he@gmail.com>)
