import { SalesMain } from '.'
import { salesMockListFormatted } from 'mock/sales'
import { DataSalesModelFormatted } from 'domain/sales/types'

describe('SalesMain', () => {
  it('should return a list of sales', async () => {
    const salesMain = new SalesMain()

    const salesMainSpy = jest.spyOn(salesMain, 'getSales').mockReturnValueOnce(
      new Promise((resolve) => {
        resolve(salesMockListFormatted)
      })
    )

    const sales = await salesMain.getSales()

    expect(salesMainSpy).toHaveBeenCalledTimes(1)
    expect(sales).toEqual(salesMockListFormatted)
    expect(sales).toBeInstanceOf(Array)
    expect(sales).toHaveLength(2)
  })

  it('should return an empty list', async () => {
    const salesMain = new SalesMain()

    const salesMainSpy = jest.spyOn(salesMain, 'getSales').mockReturnValueOnce(
      new Promise((resolve) => {
        resolve([])
      })
    )

    const sales = await salesMain.getSales()

    expect(salesMainSpy).toHaveBeenCalledTimes(1)
    expect(sales).toBeInstanceOf(Array)
    expect(sales).toHaveLength(0)
    expect(sales).toEqual([])
  })

  it('should return an error 500 api', async () => {
    const salesMain = new SalesMain()

    const salesMainSpy = jest.spyOn(salesMain, 'getSales').mockReturnValueOnce(
      new Promise((resolve, reject) => {
        reject(new Error('Error 500'))
      })
    )

    let response: DataSalesModelFormatted[] = []

    try {
      response = await salesMain.getSales()
    } catch (error) {
      expect(response).toEqual([])
      expect(salesMainSpy).toHaveBeenCalledTimes(1)
      expect(error).toBeInstanceOf(Error)
    }
  })
})
