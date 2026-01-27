class NumberAndCurrencyParsers {
  private readonly compactNumberFormatter = new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1
  })

  public formatToCompactNumber(value: number) {
    return this.compactNumberFormatter.format(value)
  }
}

export const numberParsers = new NumberAndCurrencyParsers()
