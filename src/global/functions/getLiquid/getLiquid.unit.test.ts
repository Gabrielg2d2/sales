import { salesMockListFormatted } from 'mock/sales'
import { getLiquid } from '.'

describe('getLiquid', () => {
  it('should return value de "R$ 1.400,00"', () => {
    const value = getLiquid(salesMockListFormatted)

    expect(value).toBe('R$ 1.400,00')
  })
})
