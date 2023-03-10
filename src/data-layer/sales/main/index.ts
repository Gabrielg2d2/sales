/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { ListSales, FormatListSales } from 'data-layer/sales/use_cases'
import { DataSalesModelFormatted } from 'domain/sales/types'
import { api } from 'service/api'

interface ISalesMain {
  getSales: () => Promise<DataSalesModelFormatted[]>
}

export class SalesMain implements ISalesMain {
  async getSales(url = '/sales') {
    try {
      const listSales = new ListSales(url, api.get)
      const { data, status } = await listSales.list()

      if (status === 200) {
        const formatListSales = new FormatListSales()
        const dataFormatted = formatListSales.format(data)
        return dataFormatted
      }

      return []
    } catch (error) {
      return []
    }
  }
}
