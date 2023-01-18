import { render } from '@testing-library/react'
import { Row } from '.'
import { salesMockListFormatted } from 'mock/sales'
import { act } from 'react-dom/test-utils'

describe('Row', () => {
  it('should return a row from the table', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <Row row={salesMockListFormatted[0]} />
        </tbody>
      </table>
    )

    expect(getByText('origin_fake')).toBeInTheDocument()
  })

  it('should return a row from the table, with the expand icon', () => {
    const { getByRole } = render(
      <table>
        <tbody>
          <Row row={salesMockListFormatted[0]} />
        </tbody>
      </table>
    )

    const buttonExpand = getByRole('button', { name: 'expand row' })

    expect(buttonExpand).toBeInTheDocument()
  })

  it('should return a row from the table, with the expand icon and be able to click and open to expand the row', () => {
    const { getByRole, getByTestId } = render(
      <table>
        <tbody>
          <Row row={salesMockListFormatted[0]} />
        </tbody>
      </table>
    )

    const buttonExpand = getByRole('button', { name: 'expand row' })

    act(() => {
      buttonExpand.click()
    })

    expect(buttonExpand).toBeInTheDocument()
    expect(getByTestId('open_expand')).toBeInTheDocument()
  })

  it('should return a row from the table, with the expand icon and be able to click and open and close the row', () => {
    const { getByRole, getByTestId } = render(
      <table>
        <tbody>
          <Row row={salesMockListFormatted[0]} />
        </tbody>
      </table>
    )

    const buttonExpand = getByRole('button', { name: 'expand row' })

    act(() => {
      buttonExpand.click()
    })

    act(() => {
      buttonExpand.click()
    })

    expect(buttonExpand).toBeInTheDocument()
    expect(getByTestId('close_expand')).toBeInTheDocument()
  })
})
