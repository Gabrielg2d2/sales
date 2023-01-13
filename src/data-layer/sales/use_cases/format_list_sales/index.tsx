import { IFormatListSales } from 'domain/sales/use_cases'
import { DataSalesModel, DataSalesModelFormatted } from 'domain/types'
import {
  formatDatePtBr,
  formatHourPtBr,
  formatMoneyPtBr
} from 'global/functions'

export class FormatListSales implements IFormatListSales {
  formatStatus(status: string): JSX.Element {
    switch (status) {
      case 'authorized':
        return <span>{status}</span>
      case 'completed':
        return <span>{status}</span>
      case 'canceled':
        return <span>{status}</span>
      case 'denied':
        return <span>{status}</span>
      default:
        return <span>{status}</span>
    }
  }

  formatDateAndTime(dateAndTime: string): string {
    const dateFormatted = formatDatePtBr(dateAndTime)

    const timeFormatted = formatHourPtBr(dateAndTime)

    return `${dateFormatted} às ${timeFormatted}`
  }

  formatFlag(flag: string): JSX.Element {
    switch (flag) {
      case 'master':
        return <span>{flag}</span>
      case 'visa':
        return <span>{flag}</span>
      case 'pix':
        return <span>{flag}</span>
      default:
        return <span>{flag}</span>
    }
  }

  formatBrute(brute: number): string {
    return formatMoneyPtBr(brute)
  }

  formatLiquid(liquid: number): string {
    return formatMoneyPtBr(liquid)
  }

  format(data: DataSalesModel[]): DataSalesModelFormatted[] {
    return data.map((sale) => {
      const statusFormatted = this.formatStatus(sale.status)
      const dateAndTimeFormatted = this.formatDateAndTime(sale.dateAndTime)
      const flagFormatted = this.formatFlag(sale.flag)
      const bruteFormatted = this.formatBrute(sale.brute)
      const liquidFormatted = this.formatLiquid(sale.liquid)

      return {
        ...sale,
        statusFormatted,
        dateAndTimeFormatted,
        flagFormatted,
        bruteFormatted,
        liquidFormatted
      }
    })
  }
}
