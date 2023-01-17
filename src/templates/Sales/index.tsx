import { Stack } from '@mui/material'
import {
  HeaderPage,
  InformationSectionSales,
  Loading,
  TableSales
} from 'components'
import { getBrute, getLiquid, getQuantity } from 'global/functions'
import { useSales } from 'hook/useSales'

export function SalesTemplate() {
  const { columns, sales, orderTable, handleChangeOrderTable, loading } =
    useSales()

  return (
    <>
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
      <Loading open={loading} />
    </>
  )
}
