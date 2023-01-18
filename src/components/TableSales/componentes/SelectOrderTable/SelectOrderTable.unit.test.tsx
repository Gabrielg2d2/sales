import { render, screen } from '@testing-library/react'
import { SelectOrderTable } from '.'

const columns = [
  {
    label: 'Status',
    value: 'status'
  },
  {
    label: 'Origem',
    value: 'origin'
  },
  {
    label: 'Data e hora',
    value: 'dateAndTime'
  },
  {
    label: 'Bandeira',
    value: 'flag'
  },
  {
    label: 'Código',
    value: 'code'
  },
  {
    label: 'Bruto',
    value: 'brute'
  },
  {
    label: 'Líquido',
    value: 'liquid'
  },
  {
    label: 'Modo de pagamento',
    value: 'paymentMethod'
  },
  {
    label: 'Loja/Documento',
    value: 'storeOrDocument'
  }
]

describe('SelectOrderTable', () => {
  it('should return a select component that will be used to order, calling the api', () => {
    const handleChangeOrderTableSpy = jest.fn()

    render(
      <SelectOrderTable
        columns={columns}
        orderTable={'status'}
        handleChangeOrderTable={handleChangeOrderTableSpy}
      />
    )

    expect(handleChangeOrderTableSpy).not.toHaveBeenCalled()

    expect(screen.getByLabelText('Ordenar')).toBeInTheDocument()
  })
})
