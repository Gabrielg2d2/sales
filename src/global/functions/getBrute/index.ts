import { DataSalesModelFormatted } from 'domain/sales/types'
import { formatMoneyPtBr } from '../formatMoneyPtBr'

export function getBrute(data: DataSalesModelFormatted[]) {
  const total = data.reduce((acc, curr) => acc + curr.brute, 0)

  return formatMoneyPtBr(total)
}
