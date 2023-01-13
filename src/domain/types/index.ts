export type DataSales = {
  status: string
  origin: string
  dateAndTime: string
  flag: string
  code: string
  brute: number
  liquid: number
  paymentMethod: string
  storeOrDocument: string
}

export type DataSalesModel = {
  id: string
  status: string
  origin: string
  dateAndTime: string
  flag: string
  code: string
  brute: number
  liquid: number
  paymentMethod: string
  storeOrDocument: string
}

export type DataSalesModelFormatted = {
  id: string
  status: string
  origin: string
  dateAndTime: string
  flag: string
  code: string
  brute: number
  liquid: number
  paymentMethod: string
  storeOrDocument: string
  statusFormatted: JSX.Element
  dateAndTimeFormatted: string
  flagFormatted: JSX.Element
  bruteFormatted: string
  liquidFormatted: string
}
