import { FormatListSales } from '.'
import { salesMockList, salesMockListFormatted } from 'mock/sales'

describe('formatStatus', () => {
  it('should return a text, with "undefined"', () => {
    const formatListSales = new FormatListSales()
    const statusFormatted = formatListSales.formatStatus('undefined')

    expect(statusFormatted).toBe('undefined')
  })

  it('should return a text, with "authorized"', () => {
    const formatListSales = new FormatListSales()
    const statusFormatted = formatListSales.formatStatus('authorized')

    expect(statusFormatted).toBe('authorized')
  })

  it('should return a text, with "completed"', () => {
    const formatListSales = new FormatListSales()
    const statusFormatted = formatListSales.formatStatus('completed')

    expect(statusFormatted).toBe('completed')
  })

  it('should return a text, with "canceled"', () => {
    const formatListSales = new FormatListSales()
    const statusFormatted = formatListSales.formatStatus('canceled')

    expect(statusFormatted).toEqual('canceled')
  })

  it('should return a text, with "denied"', () => {
    const formatListSales = new FormatListSales()
    const statusFormatted = formatListSales.formatStatus('denied')

    expect(statusFormatted).toBe('denied')
  })
})

describe('formatDateAndTime', () => {
  it('should return a string, with date and time formatted', () => {
    const formatListSales = new FormatListSales()
    const dateAndTimeFormatted = formatListSales.formatDateAndTime(
      '2021-09-01T00:00:00.000Z'
    )

    expect(dateAndTimeFormatted).toBe('01/09/2021 às 00:00:00')
  })

  it('should return the string sent in the parameter, when it is not possible to format', () => {
    const formatListSales = new FormatListSales()
    const dateAndTimeFormatted =
      formatListSales.formatDateAndTime('2021-09-01Tyyyyy')

    expect(dateAndTimeFormatted).toBe('2021-09-01Tyyyyy')
  })
})

describe('formatFlag', () => {
  it('should return a text undefined', () => {
    const formatListSales = new FormatListSales()
    const flagFormatted = formatListSales.formatFlag('undefined')

    expect(flagFormatted).toEqual('undefined')
  })

  it('should return a text mastercard', () => {
    const formatListSales = new FormatListSales()
    const flagFormatted = formatListSales.formatFlag('mastercard')

    expect(flagFormatted).toEqual('mastercard')
  })

  it('should return a jsx element, with data-testid "visa"', () => {
    const formatListSales = new FormatListSales()
    const flagFormatted = formatListSales.formatFlag('visa')

    expect(flagFormatted).toEqual('visa')
  })

  it('should return a jsx element, with data-testid "pix"', () => {
    const formatListSales = new FormatListSales()
    const flagFormatted = formatListSales.formatFlag('pix')

    expect(flagFormatted).toEqual('pix')
  })
})

describe('formatBrute', () => {
  it('should return a string, with the value formatted', () => {
    const formatListSales = new FormatListSales()
    const bruteFormatted = formatListSales.formatBrute(1000)

    expect(bruteFormatted).toBe('R$ 1.000,00')
  })
})

describe('formatLiquid', () => {
  it('should return a string, with the value formatted', () => {
    const formatListSales = new FormatListSales()
    const liquidFormatted = formatListSales.formatLiquid(1000)

    expect(liquidFormatted).toBe('R$ 1.000,00')
  })
})

describe('formatRates', () => {
  it('should return a string, with the value formatted', () => {
    const formatListSales = new FormatListSales()
    const ratesFormatted = formatListSales.formatRates(25)

    expect(ratesFormatted).toBe('25%')
  })
})

describe('formatDiscount', () => {
  it('should return a string, with the value formatted negative', () => {
    const formatListSales = new FormatListSales()
    const discountFormatted = formatListSales.formatDiscount(100)

    expect(discountFormatted).toBe('-R$ 100,00')
  })
})

describe('format', () => {
  it('should return a list of sales, with the values formatted', () => {
    const formatListSales = new FormatListSales()
    const salesFormatted = formatListSales.format(salesMockList)

    expect(salesFormatted).toEqual(salesMockListFormatted)
  })
})
