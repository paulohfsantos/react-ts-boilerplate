export function convertToCurrency(value: number, country: string, coin: string) {
  return Intl.NumberFormat(country, {
    style: "currency",
    currency: coin,
  }).format(value);
}

// convertToCurrency(1000, "en-US", "USD");