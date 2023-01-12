import {
  HttpClientGetSales,
  IListSales
} from 'domain/sales/use_cases/list_sales'

export class ListSales implements IListSales {
  constructor(
    private readonly url: string,
    private readonly httpClientGet: HttpClientGetSales
  ) {}

  async list() {
    const response = await this.httpClientGet(this.url)
    return response
  }
}
