import { salesMockListFormatted } from 'mock/sales'
import { getQuantity } from '.'

describe('getQuantity', () => {
  it('should return the quantity equal to "2"', () => {
    const quantity = getQuantity(salesMockListFormatted)

    expect(quantity).toBe('2')
  })
})
