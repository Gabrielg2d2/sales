import { DataSales } from 'domain/types'

type DataSalesApi = {
  id: string
} & DataSales

export type DataSalesModel = {
  data: DataSalesApi[]
  status: number
}
