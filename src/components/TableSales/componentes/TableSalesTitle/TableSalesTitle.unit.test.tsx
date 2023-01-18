import { render } from '@testing-library/react'
import { TableSalesTitle } from '.'

describe('TableSalesTitle', () => {
  it('should render a TableSalesTitle', () => {
    const { container } = render(
      <TableSalesTitle>
        <div>children</div>
      </TableSalesTitle>
    )
    expect(container).toBeInTheDocument()
  })

  it('should render a TableSalesTitle with children', () => {
    const { getByText } = render(
      <TableSalesTitle>
        <div>children</div>
      </TableSalesTitle>
    )
    expect(getByText('children')).toBeInTheDocument()
  })

  it('should render a TableSalesTitle with title', () => {
    const { getByText } = render(
      <TableSalesTitle>
        <div>children</div>
      </TableSalesTitle>
    )
    expect(getByText('Lista de Vendas')).toBeInTheDocument()
  })

  it('should render a TableSalesTitle with help icon', () => {
    const { getByRole } = render(
      <TableSalesTitle>
        <div>children</div>
      </TableSalesTitle>
    )
    expect(getByRole('button', { name: 'Ajuda' })).toBeInTheDocument()
  })
})
