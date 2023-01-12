import { ListSales } from '.'
import { salesMockList } from 'mock/sales'

describe('ListSales', () => {
  it('should call correct url', async () => {
    const url = 'any_url'
    const httpClientGet = jest.fn()
    const sut = new ListSales(url, httpClientGet)
    await sut.list()
    expect(httpClientGet).toHaveBeenCalledWith(url)
  })

  it('should return a list of sales and status 200', async () => {
    const url = 'any_url'
    const httpClientGet = jest.fn()
    httpClientGet.mockResolvedValueOnce({
      data: salesMockList,
      status: 200
    })
    const sut = new ListSales(url, httpClientGet)
    const sales = await sut.list()

    expect(sales).toEqual({
      data: salesMockList,
      status: 200
    })
  })
})
