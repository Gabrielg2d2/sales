import { useEffect, useState } from 'react'
import { SalesMain } from 'data-layer/sales/main'
import { Stack } from '@mui/material'
import { HeaderPage, InformationSectionSales, TableSales } from 'components'
import { DataSalesModelFormatted } from 'domain/sales/types'
import { getBrute, getLiquid, getQuantity } from 'global/functions'

export function SalesTemplate() {
  const [sales, setSales] = useState<DataSalesModelFormatted[]>([])

  useEffect(() => {
    void (async () => {
      const salesMain = new SalesMain()
      const response = await salesMain.getSales()
      setSales(response)
    })()
  }, [])

  return (
    <Stack height="100vh" bgcolor="#fff" p={2} spacing={2}>
      <HeaderPage title="Vendas" />

      <Stack
        direction="column"
        component="main"
        px={{ xs: 1, sm: 4 }}
        spacing={3}
      >
        <section>
          <InformationSectionSales
            brute={getBrute(sales)}
            liquid={getLiquid(sales)}
            quantity={getQuantity(sales)}
          />
        </section>

        <TableSales dataSales={sales} />
      </Stack>
    </Stack>
  )
}
