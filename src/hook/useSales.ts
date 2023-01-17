import { useEffect, useState } from 'react'
import { DataSalesModelFormatted } from 'domain/sales/types'
import { SelectChangeEvent } from '@mui/material'
import { SalesMain } from 'data-layer/sales/main'

export function useSales() {
  const [loading, setLoading] = useState(false)
  const [sales, setSales] = useState<DataSalesModelFormatted[]>([])
  const [orderTable, setOrderTable] = useState('')
  const [columns] = useState([
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
  ])

  const handleChangeOrderTable = (event: SelectChangeEvent) => {
    setOrderTable(event.target.value)
  }

  useEffect(() => {
    void (async () => {
      setLoading(true)
      const salesMain = new SalesMain()
      const orderUrl = orderTable
        ? `/sales?sortBy=${orderTable}&order=desc`
        : '/sales?sortBy=dateAndTime&order=desc'
      const response = await salesMain.getSales(orderUrl)
      setSales(response)
      setLoading(false)
    })()
  }, [orderTable])

  return {
    sales,
    columns,
    orderTable,
    handleChangeOrderTable,
    loading
  }
}
