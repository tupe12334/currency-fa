import { Currency } from "./Currency";

/**
 * Gets the Font Awesome currency name for a given currency code
 * @param {Currency} currency - The ISO 4217 currency code (e.g., "USD", "EUR")
 * @returns {string | null} The Font Awesome name for the currency, or null if not supported
 */
export function getCurrencyFaName(currency: Currency): string | null {
  switch (currency) {
    case "USD":
    case "HKD":
    case "AUD":
    case "CAD":
      return "dollar";
    case "EUR":
      return "euro";
    case "GBP":
      return "pound";
    case "JPY":
      return "yen";
    case "RUB":
      return "ruble";
    case "INR":
      return "rupee";
    case "ILS":
      return "shekel";
    case "CHF":
      return "franc";
    case "KRW":
      return "won";
    case "BTC":
      return "bitcoin";
    case "LTC":
      return "litecoin";
    case "THB":
      return "baht";
    case "BRL":
      return "brazilian-real";
    case "CNY":
      return null;
  }

  // This assertion ensures that all cases are handled
  const _exhaustiveCheck: never = currency;
  return null;
}
