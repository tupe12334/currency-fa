export function getCurrencyFaName(currency: string): string | null {
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
    default:
      return null;
  }
}

export function getCurrencyFaFullName(
  currency: string
): `fa-${string}-sign` | null {
  const name = getCurrencyFaName(currency);
  if (name === null) {
    return null;
  }
  return `fa-${name}-sign`;
}
