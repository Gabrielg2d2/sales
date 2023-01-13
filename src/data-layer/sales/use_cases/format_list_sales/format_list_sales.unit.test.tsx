import { FormatListSales } from '.'
import { render, screen } from '@testing-library/react'
import { salesMockList, salesMockListFormattedString } from 'mock/sales'

describe('formatStatus', () => {
  it('should return a jsx element, with "Indefinido" text', () => {
    const formatListSales = new FormatListSales()
    const statusFormatted = formatListSales.formatStatus('undefined')

    render(statusFormatted)

    expect(screen.getByText('Indefinido')).toBeInTheDocument()
  })

  it('should return a jsx element, with "Autorizada" text', () => {
    const formatListSales = new FormatListSales()
    const statusFormatted = formatListSales.formatStatus('authorized')

    render(statusFormatted)

    expect(screen.getByText('Autorizada')).toBeInTheDocument()
  })

  it('should return a jsx element, with "Concluída" text', () => {
    const formatListSales = new FormatListSales()
    const statusFormatted = formatListSales.formatStatus('completed')

    render(statusFormatted)

    expect(screen.getByText('Concluída')).toBeInTheDocument()
  })

  it('should return a jsx element, with "Cancelada" text', () => {
    const formatListSales = new FormatListSales()
    const statusFormatted = formatListSales.formatStatus('canceled')

    render(statusFormatted)

    expect(screen.getByText('Cancelada')).toBeInTheDocument()
  })

  it('should return a jsx element, with "Negada" text', () => {
    const formatListSales = new FormatListSales()
    const statusFormatted = formatListSales.formatStatus('denied')

    render(statusFormatted)

    expect(screen.getByText('Negada')).toBeInTheDocument()
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
  it('should return a jsx element, with data-testid "default"', () => {
    const formatListSales = new FormatListSales()
    const flagFormatted = formatListSales.formatFlag('undefined')

    render(flagFormatted)

    expect(screen.getByTestId('default')).toBeInTheDocument()
  })

  it('should return a jsx element, with data-testid "master"', () => {
    const formatListSales = new FormatListSales()
    const flagFormatted = formatListSales.formatFlag('master')

    render(flagFormatted)

    expect(screen.getByTestId('master')).toBeInTheDocument()
  })

  it('should return a jsx element, with data-testid "visa"', () => {
    const formatListSales = new FormatListSales()
    const flagFormatted = formatListSales.formatFlag('visa')

    render(flagFormatted)

    expect(screen.getByTestId('visa')).toBeInTheDocument()
  })

  it('should return a jsx element, with data-testid "pix"', () => {
    const formatListSales = new FormatListSales()
    const flagFormatted = formatListSales.formatFlag('pix')

    render(flagFormatted)

    expect(screen.getByTestId('pix')).toBeInTheDocument()
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
    const salesFormattedString = JSON.stringify(salesFormatted)

    expect(salesFormattedString).toEqual(salesMockListFormattedString)
  })
})
