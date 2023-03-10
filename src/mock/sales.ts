export const salesMock = {
  id: 'id_fake',
  status: 'status_fake',
  origin: 'origin_fake',
  dateAndTime: '2019-01-01T00:00:00.000Z',
  flag: 'mastercard',
  code: 'code_fake',
  brute: 1000,
  liquid: 700,
  paymentMethod: 'paymentMethod_fake',
  storeOrDocument: 'storeOrDocument_fake',
  nsuAcquio: 'nsuAcquio_fake',
  idTransaction: 'idTransaction_fake',
  idAuthorization: 'idAuthorization_fake',
  orderNumber: 'orderNumber_fake',
  rates: 100,
  discount: 10,
  document: 'document_fake',
  captureMode: 'captureMode_fake'
}

export const salesMockTwo = {
  id: 'id_fake2',
  status: 'status_fake2',
  origin: 'origin_fake2',
  dateAndTime: '2019-01-01T00:00:00.000Z',
  flag: 'pix',
  code: 'code_fake2',
  brute: 1000,
  liquid: 700,
  paymentMethod: 'paymentMethod_fake2',
  storeOrDocument: 'storeOrDocument_fake2',
  nsuAcquio: 'nsuAcquio_fake2',
  idTransaction: 'idTransaction_fake2',
  idAuthorization: 'idAuthorization_fake2',
  orderNumber: 'orderNumber_fake2',
  rates: 100,
  discount: 7.5,
  document: 'document_fake2',
  captureMode: 'captureMode_fake'
}

export const salesMockList = [salesMock, salesMockTwo]

export const salesMockListFormatted = [
  {
    id: 'id_fake',
    status: 'status_fake',
    origin: 'origin_fake',
    dateAndTime: '2019-01-01T00:00:00.000Z',
    flag: 'mastercard',
    code: 'code_fake',
    brute: 1000,
    liquid: 700,
    paymentMethod: 'paymentMethod_fake',
    storeOrDocument: 'storeOrDocument_fake',
    nsuAcquio: 'nsuAcquio_fake',
    idTransaction: 'idTransaction_fake',
    idAuthorization: 'idAuthorization_fake',
    orderNumber: 'orderNumber_fake',
    rates: 100,
    discount: 10,
    document: 'document_fake',
    captureMode: 'captureMode_fake',
    statusFormatted: 'undefined',
    dateAndTimeFormatted: '01/01/2019 às 00:00:00',
    flagFormatted: 'mastercard',
    bruteFormatted: 'R$ 1.000,00',
    liquidFormatted: 'R$ 700,00',
    ratesFormatted: '100%',
    discountFormatted: '-R$ 10,00'
  },
  {
    id: 'id_fake2',
    status: 'status_fake2',
    origin: 'origin_fake2',
    dateAndTime: '2019-01-01T00:00:00.000Z',
    flag: 'pix',
    code: 'code_fake2',
    brute: 1000,
    liquid: 700,
    paymentMethod: 'paymentMethod_fake2',
    storeOrDocument: 'storeOrDocument_fake2',
    nsuAcquio: 'nsuAcquio_fake2',
    idTransaction: 'idTransaction_fake2',
    idAuthorization: 'idAuthorization_fake2',
    orderNumber: 'orderNumber_fake2',
    rates: 100,
    discount: 7.5,
    document: 'document_fake2',
    captureMode: 'captureMode_fake',
    statusFormatted: 'undefined',
    dateAndTimeFormatted: '01/01/2019 às 00:00:00',
    flagFormatted: 'pix',
    bruteFormatted: 'R$ 1.000,00',
    liquidFormatted: 'R$ 700,00',
    ratesFormatted: '100%',
    discountFormatted: '-R$ 7,50'
  }
]

export const columnsMock = [
  {
    label: 'Status',
    value: 'status'
  },
  {
    label: 'Origem',
    value: 'origin'
  },
  {
    label: 'Data e hora',
    value: 'dateAndTime'
  },
  {
    label: 'Bandeira',
    value: 'flag'
  },
  {
    label: 'Código',
    value: 'code'
  },
  {
    label: 'Bruto',
    value: 'brute'
  },
  {
    label: 'Líquido',
    value: 'liquid'
  },
  {
    label: 'Modo de pagamento',
    value: 'paymentMethod'
  },
  {
    label: 'Loja/Documento',
    value: 'storeOrDocument'
  }
]
