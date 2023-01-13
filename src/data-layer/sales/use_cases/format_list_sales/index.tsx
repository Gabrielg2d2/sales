import { IFormatListSales } from 'domain/sales/use_cases'
import { DataSalesModel, DataSalesModelFormatted } from 'domain/types'
import { formatDateAndHourPtBr, formatMoneyPtBr } from 'global/functions'

export class FormatListSales implements IFormatListSales {
  formatStatus(status: string): JSX.Element {
    switch (status) {
      case 'authorized':
        return <span>Autorizada</span>
      case 'completed':
        return <span>Concluída</span>
      case 'canceled':
        return <span>Cancelada</span>
      case 'denied':
        return <span>Negada</span>
      default:
        return <span>Indefinido</span>
    }
  }

  formatDateAndTime(dateAndTime: string): string {
    const { dateFormatted, timeFormatted } = formatDateAndHourPtBr(dateAndTime)
    if (!dateFormatted || !timeFormatted) return dateAndTime

    return `${dateFormatted} às ${timeFormatted}`
  }

  formatFlag(flag: string): JSX.Element {
    switch (flag) {
      case 'master':
        return <span data-testid="master">{flag}</span>
      case 'visa':
        return <span data-testid="visa">{flag}</span>
      case 'pix':
        return <span data-testid="pix">{flag}</span>
      default:
        return <span data-testid="default">{flag}</span>
    }
  }

  formatBrute(brute: number): string {
    return formatMoneyPtBr(brute)
  }

  formatLiquid(liquid: number): string {
    return formatMoneyPtBr(liquid)
  }

  formatRates(rates: number): string {
    const calc = rates / 100
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
