import { DataSalesModelFormatted, DataSalesModel } from 'domain/types'

export interface IFormatListSales {
  formatStatus: (status: string) => JSX.Element
  formatDateAndTime: (date: string) => string
  formatFlag: (flag: string) => JSX.Element
  formatBrute: (brute: number) => string
  formatLiquid: (liquid: number) => string
  formatRates: (rates: number) => string
  formatDiscount: (discount: number) => string
  format: (data: DataSalesModel[]) => DataSalesModelFormatted[]
}
