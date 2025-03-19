# currency-fa

A simple utility library that maps ISO 4217 currency codes to their corresponding Font Awesome currency icon names.

## Description

This library provides an easy way to get the appropriate Font Awesome icon name for any standard ISO 4217 currency code. It's useful for applications that need to display currency symbols using Font Awesome icons.

## Installation

```bash
npm install currency-fa
```

## Usage

```javascript
import { getCurrencyIcon } from 'currency-fa';

// Get Font Awesome icon name for USD
const usdIcon = getCurrencyIcon('USD'); // Returns 'fa-dollar-sign'

// Get Font Awesome icon name for EUR
const eurIcon = getCurrencyIcon('EUR'); // Returns 'fa-euro-sign'

// Get Font Awesome icon name for GBP
const gbpIcon = getCurrencyIcon('GBP'); // Returns 'fa-pound-sign'
```

## Supported Currencies

The library supports major currencies including but not limited to:
- USD (US Dollar)
- EUR (Euro)
- GBP (British Pound)
- JPY (Japanese Yen)
- And more...

## Requirements

- Font Awesome must be installed in your project for the icons to display properly

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)

## Issues

If you find a bug or want to request a new feature, please open an issue on the GitHub repository.

## Author

[Your Name/Username]