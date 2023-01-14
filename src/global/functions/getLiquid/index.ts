import { DataSalesModelFormatted } from 'domain/sales/types'
import { formatMoneyPtBr } from '../formatMoneyPtBr'

export function getLiquid(data: DataSalesModelFormatted[]) {
  const total = data.reduce((acc, curr) => acc + curr.liquid, 0)

  return formatMoneyPtBr(total)
}
