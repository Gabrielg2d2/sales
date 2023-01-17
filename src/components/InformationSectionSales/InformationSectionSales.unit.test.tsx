import { InformationSectionSales } from '.'
import { render } from '@testing-library/react'

describe('InformationSectionSales', () => {
  it('should render InformationSectionSales', () => {
    const { getByText } = render(
      <InformationSectionSales
        brute="R$1000,00"
        liquid="R$999,00"
        quantity="3"
      />
    )
    expect(getByText('R$1000,00')).toBeInTheDocument()
    expect(getByText('R$999,00')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
  })

  it('should render with the monetization icon', () => {
    const { getByTestId } = render(
      <InformationSectionSales
        brute="R$1000,00"
        liquid="R$999,00"
        quantity="3"
      />
    )
    expect(getByTestId('MonetizationOnOutlinedIcon')).toBeInTheDocument()
  })

  it('should render with the help icon', () => {
    const { getByTestId } = render(
      <InformationSectionSales
        brute="R$1000,00"
        liquid="R$999,00"
        quantity="3"
      />
    )
    expect(getByTestId('HelpOutlineIcon')).toBeInTheDocument()
  })

  it('should render with the texts "Valor bruto", "Valor líquido", "Quantidade de vendas"', () => {
    const { getByText } = render(
      <InformationSectionSales
        brute="R$1000,00"
        liquid="R$999,00"
        quantity="3"
      />
    )
    expect(getByText('Valor líquido')).toBeInTheDocument()
    expect(getByText('Valor bruto')).toBeInTheDocument()
    expect(getByText('Quantidade de vendas')).toBeInTheDocument()
  })
})
