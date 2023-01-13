import { FormatListSales } from '.'
import { render, screen } from '@testing-library/react'

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
