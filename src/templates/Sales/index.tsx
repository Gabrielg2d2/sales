import { useEffect, useState } from 'react'
import { SalesMain } from 'data-layer/sales/main'
import { SelectChangeEvent, Stack } from '@mui/material'
import { HeaderPage, InformationSectionSales, TableSales } from 'components'
import { DataSalesModelFormatted } from 'domain/sales/types'
import { getBrute, getLiquid, getQuantity } from 'global/functions'

export function SalesTemplate() {
  const [sales, setSales] = useState<DataSalesModelFormatted[]>([])
  const [orderTable, setOrderTable] = useState('')
  const columns = [
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

  const handleChangeOrderTable = (event: SelectChangeEvent) => {
    setOrderTable(event.target.value)
  }

  useEffect(() => {
    void (async () => {
      const salesMain = new SalesMain()
      const orderUrl = orderTable
        ? `/sales?sortBy=${orderTable}&order=desc`
        : '/sales?sortBy=dateAndTime&order=desc'
      const response = await salesMain.getSales(orderUrl)
      setSales(response)
    })()
  }, [orderTable])

  return (
    <Stack height="100vh" bgcolor="#fff" p={2} spacing={2}>
      <HeaderPage title="Vendas" />

      <Stack
        direction="column"
        component="main"
        px={{ xs: 1, sm: 4 }}
        pb={2}
        spacing={3}
      >
        <section>
          <InformationSectionSales
            brute={getBrute(sales)}
            liquid={getLiquid(sales)}
            quantity={getQuantity(sales)}
          />
        </section>

        <TableSales
          columns={columns}
          dataSales={sales}
          orderTable={orderTable}
          handleChangeOrderTable={handleChangeOrderTable}
        />
      </Stack>
    </Stack>
  )
}
