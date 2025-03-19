export function getCurrencyFaName(currency: string): string | null {
  switch (currency) {
    case "USD":
      return "dollar";
    case "EUR":
      return "euro";
    case "GBP":
      return "pound";
    case "JPY":
      return "yen";
    case "CNY":
      return "renminbi";
    case "RUB":
      return "ruble";
    case "INR":
      return "rupee";
    case "ILS":
      return "shekel";
    default:
      return null;
  }
}

export function getCurrencyFaFullName(currency: string): string | null {
  const name = getCurrencyFaName(currency);
  if (name === null) {
    return null;
  }
  return `fa-${name}-sign`;
}
