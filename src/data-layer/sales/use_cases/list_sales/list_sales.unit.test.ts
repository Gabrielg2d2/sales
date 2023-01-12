import { ListSales } from '.'
import { salesMockList } from 'mock/sales'

type SutProps = {
  url?: string
  httpClientGet?: jest.Mock
}

const makeSutListSales = (params?: SutProps) => {
  const urlSpy = params?.url ?? 'any_url'
  const httpClientGetSpy =
    params?.httpClientGet ??
    jest.fn().mockResolvedValueOnce({
      data: salesMockList,
      status: 200
    })
  const sut = new ListSales(urlSpy, httpClientGetSpy)

  return { sut, urlSpy, httpClientGetSpy }
}

describe('ListSales', () => {
  it('should call correct url', async () => {
    const { sut, urlSpy, httpClientGetSpy } = makeSutListSales()

    await sut.list()
    expect(httpClientGetSpy).toHaveBeenCalledWith(urlSpy)
  })

  it('should return a list of sales and status 200', async () => {
    const { sut } = makeSutListSales()
    const sales = await sut.list()

    expect(sales).toEqual({
      data: salesMockList,
      status: 200
    })
  })

  it('should return a list of sales and status 400', async () => {
    const { sut } = makeSutListSales({
      httpClientGet: jest.fn().mockRejectedValueOnce({
        data: [],
        status: 400
      })
    })

    const sales = await sut.list()

    expect(sales).toEqual({
      data: [],
      status: 400
    })
  })

  // Optional, you may not want to show the user api error 500
  it('should return status 400 even with API error', async () => {
    const { sut } = makeSutListSales({
      httpClientGet: jest.fn().mockRejectedValueOnce({
        data: [],
        status: 500
      })
    })

    const sales = await sut.list()

    expect(sales).toEqual({
      data: [],
      status: 400
    })
  })
})
