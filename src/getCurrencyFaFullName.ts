import { Currency } from "./Currency";
import { getCurrencyFaName } from "./getCurrencyFaName";

/**
 * Gets the full Font Awesome currency name for a given currency code
 * @param {Currency} currency - The ISO 4217 currency code (e.g., "USD", "EUR")
 * @returns {`fa-${string}-sign` | null} The full Font Awesome name for the currency, or null if not supported
 */
export function getCurrencyFaFullName(
  currency: Currency
): `fa-${string}-sign` | null {
  const name = getCurrencyFaName(currency);
  if (name === null) {
    return null;
  }
  return `fa-${name}-sign`;
}
