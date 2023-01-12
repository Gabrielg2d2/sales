import { DataSalesModel } from './model'

export type HttpClientGetSales = (url: string) => Promise<DataSalesModel>

export interface IListSales {
  list: () => Promise<DataSalesModel>
}
