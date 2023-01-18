import { salesMockListFormatted } from 'mock/sales'
import { getBrute } from '.'

describe('getBrute', () => {
  it('should return value de "R$ 2.000,00"', () => {
    const value = getBrute(salesMockListFormatted)

    expect(value).toBe('R$ 2.000,00')
  })
})
