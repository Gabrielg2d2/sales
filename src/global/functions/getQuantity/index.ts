import { DataSalesModelFormatted } from 'domain/sales/types'

export function getQuantity(data: DataSalesModelFormatted[]) {
  return data.length.toString()
}
