import Collapse from '@mui/material/Collapse'
import { Box, Stack, TableCell } from '@mui/material'
import { globalColors } from 'global/styles/colors'
import { HeaderTransactionDetails } from './components/HeaderTransactionDetails'
import { SaleIdentifiers } from './components/SaleIdentifiers'
import { SalesData } from './components/SalesData'
import { CarrierDate } from './components/CarrierDate'
import { PaymentDetails } from './components/PaymentDetails'
import { DataSalesModelFormatted } from 'domain/sales/types'

type TransactionDetailsProps = {
  open: boolean
  row: DataSalesModelFormatted
}

export function TransactionDetails({ open, row }: TransactionDetailsProps) {
  const saleIdentifiers = {
    nsuAcquio: row.nsuAcquio,
    idTransaction: row.idTransaction,
    idAuthorization: row.idAuthorization,
    orderNumber: row.orderNumber
  }

  const salesData = {
    status: row.status,
    dateAndTime: row.dateAndTimeFormatted,
    brute: row.bruteFormatted,
    liquid: row.liquidFormatted,
    discount: row.discountFormatted,
    rates: row.ratesFormatted
  }

  const carrierData = {
    document: row.document
  }

  const paymentData = {
    captureMode: row.captureMode
  }

  return (
    <TableCell
      style={{
        paddingBottom: 0,
        paddingTop: 0,
        backgroundColor: globalColors.blue[50]
      }}
      colSpan={12}
    >
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Stack m={1} pb={2} spacing={2}>
          <HeaderTransactionDetails />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 2
            }}
          >
            <Stack spacing={2}>
              <SaleIdentifiers {...saleIdentifiers} />
              <SalesData {...salesData} />
            </Stack>
            <Stack spacing={2}>
              <CarrierDate {...carrierData} />
              <PaymentDetails {...paymentData} />
            </Stack>
          </Box>
        </Stack>
      </Collapse>
    </TableCell>
  )
}
