import { DataSalesModelFormatted, DataSalesModel } from 'domain/sales/types'

export interface IFormatListSales {
  formatStatus: (status: string) => string
  formatDateAndTime: (date: string) => string
  formatFlag: (flag: string) => string
  formatBrute: (brute: number) => string
  formatLiquid: (liquid: number) => string
  formatRates: (rates: number) => string
  formatDiscount: (discount: number) => string
  format: (data: DataSalesModel[]) => DataSalesModelFormatted[]
}
