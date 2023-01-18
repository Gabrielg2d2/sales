import { render, screen } from '@testing-library/react'
import { columnsMock } from 'mock/sales'
import { SelectOrderTable } from '.'

describe('SelectOrderTable', () => {
  it('should return a select component that will be used to order, calling the api', () => {
    const handleChangeOrderTableSpy = jest.fn()

    render(
      <SelectOrderTable
        columns={columnsMock}
        orderTable={'status'}
        handleChangeOrderTable={handleChangeOrderTableSpy}
      />
    )

    expect(handleChangeOrderTableSpy).not.toHaveBeenCalled()

    expect(screen.getByLabelText('Ordenar')).toBeInTheDocument()
  })
})
