import { DataSalesModel } from './model'

export type HttpClientGetSales = (url: string) => Promise<{
  data: DataSalesModel[]
  status: number
}>

export interface IListSales {
  list: () => Promise<{
    data: DataSalesModel[]
    status: number
  }>
}
