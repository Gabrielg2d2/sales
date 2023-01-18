import { render } from '@testing-library/react'
import { columnsMock, salesMockListFormatted } from 'mock/sales'
import { TableSales } from '.'

describe('TableSales', () => {
  it('should render table empty', () => {
    const handleChangeOrderTableSpy = jest.fn()

    const { getByText } = render(
      <TableSales
        orderTable=""
        handleChangeOrderTable={handleChangeOrderTableSpy}
        columns={[]}
        dataSales={[]}
      />
    )

    expect(getByText('Nenhum dado encontrado')).toBeInTheDocument()
  })

  it('should render table with dataSales equal "salesMockListFormatted"', () => {
    const handleChangeOrderTableSpy = jest.fn()

    const { queryByText, getByText } = render(
      <TableSales
        orderTable=""
        handleChangeOrderTable={handleChangeOrderTableSpy}
        columns={columnsMock}
        dataSales={salesMockListFormatted}
      />
    )

    expect(queryByText('Nenhum dado encontrado')).not.toBeInTheDocument()

    expect(getByText('Status')).toBeInTheDocument()
    expect(getByText('Origem')).toBeInTheDocument()
    expect(getByText('Data e hora')).toBeInTheDocument()
    expect(getByText('Bandeira')).toBeInTheDocument()
    expect(getByText('Código')).toBeInTheDocument()
    expect(getByText('Bruto')).toBeInTheDocument()
    expect(getByText('Líquido')).toBeInTheDocument()
    expect(getByText('Modo de pagamento')).toBeInTheDocument()
    expect(getByText('Loja/Documento')).toBeInTheDocument()
  })
})
