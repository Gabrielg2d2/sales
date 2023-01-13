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
  nsuAcquio: string
  idTransaction: string
  idAuthorization: string
  orderNumber: string
  rates: number
  discount: number
  document: string
  captureMode: string
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
  nsuAcquio: string
  idTransaction: string
  idAuthorization: string
  orderNumber: string
  rates: number
  discount: number
  document: string
  captureMode: string
  statusFormatted: string // formatted
  dateAndTimeFormatted: string
  flagFormatted: string
  bruteFormatted: string
  liquidFormatted: string
  ratesFormatted: string
  discountFormatted: string
}
