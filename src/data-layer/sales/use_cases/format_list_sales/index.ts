import { IFormatListSales } from 'domain/sales/use_cases'
import { DataSalesModel, DataSalesModelFormatted } from 'domain/types'
import { formatDateAndHourPtBr, formatMoneyPtBr } from 'global/functions'

export class FormatListSales implements IFormatListSales {
  formatStatus(value: string): string {
    const list = ['authorized', 'completed', 'canceled', 'denied']

    if (!list.includes(value)) return 'undefined'

    return value
  }

  formatDateAndTime(dateAndTime: string): string {
    const { dateFormatted, timeFormatted } = formatDateAndHourPtBr(dateAndTime)
    if (!dateFormatted || !timeFormatted) return dateAndTime

    return `${dateFormatted} às ${timeFormatted}`
  }

  formatFlag(flag: string): string {
    const list = ['pix', 'visa', 'mastercard']

    if (!list.includes(flag)) return 'undefined'

    return flag
  }

  formatBrute(brute: number): string {
    return formatMoneyPtBr(brute)
  }

  formatLiquid(liquid: number): string {
    return formatMoneyPtBr(liquid)
  }

  formatRates(rates: number): string {
    const calc = (rates / 100) * 100
    return `${calc}%`
  }

  formatDiscount(discount: number): string {
    return `-${formatMoneyPtBr(discount)}`
  }

  format(data: DataSalesModel[]): DataSalesModelFormatted[] {
    return data.map((sale) => {
      const statusFormatted = this.formatStatus(sale.status)
      const dateAndTimeFormatted = this.formatDateAndTime(sale.dateAndTime)
      const flagFormatted = this.formatFlag(sale.flag)
      const bruteFormatted = this.formatBrute(sale.brute)
      const liquidFormatted = this.formatLiquid(sale.liquid)
      const ratesFormatted = this.formatRates(sale.rates)
      const discountFormatted = this.formatDiscount(sale.discount)

      return {
        ...sale,
        statusFormatted,
        dateAndTimeFormatted,
        flagFormatted,
        bruteFormatted,
        liquidFormatted,
        ratesFormatted,
        discountFormatted
      }
    })
  }
}
