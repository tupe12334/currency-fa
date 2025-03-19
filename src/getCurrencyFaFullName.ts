import { getCurrencyFaName } from "./getCurrencyFaName";

/**
 * Gets the complete Font Awesome class name for a currency symbol
 * @param {string} currency - The ISO 4217 currency code (e.g., "USD", "EUR")
 * @returns {`fa-${string}-sign` | null} The complete Font Awesome class name (e.g., "fa-dollar-sign"), or null if not supported
 */
export function getCurrencyFaFullName(
  currency: string
): `fa-${string}-sign` | null {
  const name = getCurrencyFaName(currency);
  if (name === null) {
    return null;
  }
  return `fa-${name}-sign`;
}
