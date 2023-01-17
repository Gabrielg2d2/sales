import { useState } from 'react'

import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import { DataSalesModelFormatted } from 'domain/sales/types'
import { TableSalesTitle } from './componentes/TableSalesTitle'
import { TransactionDetails } from './componentes/TransactionDetails'
import { globalColors } from 'global/styles/colors'
import { Stack, Typography } from '@mui/material'
import { formatFlag, formatStatus } from 'global/functions'

type RowProps = {
  row: DataSalesModelFormatted
}

function Row({ row }: RowProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              setOpen(!open)
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {formatStatus(row.status)}
        </TableCell>
        <TableCell>{row.origin}</TableCell>
        <TableCell>{row.dateAndTimeFormatted}</TableCell>
        <TableCell>{formatFlag(row.flagFormatted)}</TableCell>
        <TableCell>{row.code}</TableCell>
        <TableCell>{row.bruteFormatted}</TableCell>
        <TableCell>{row.liquidFormatted}</TableCell>
        <TableCell>{row.paymentMethod}</TableCell>
        <TableCell>{row.storeOrDocument}</TableCell>
      </TableRow>
      <TableRow>
        <TransactionDetails open={open} row={row} />
      </TableRow>
    </>
  )
}

type Props = {
  dataSales: DataSalesModelFormatted[]
}

const columns = [
  'Status',
  'Origem',
  'Data e hora',
  'Bandeira',
  'Código',
  'Bruto',
  'Líquido',
  'Modo de pagamento',
  'Loja/Documento'
]

export function TableSales({ dataSales }: Props) {
  if (!dataSales.length) {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        border={`1px solid ${globalColors.grey[200]}`}
        borderRadius={2}
        flex={1}
        minHeight={200}
      >
        <Typography variant="h6" component="h3" sx={{ textAlign: 'center' }}>
          Nenhum dado encontrado
        </Typography>
      </Stack>
    )
  }

  return (
    <>
      <TableSalesTitle>
        <span>Ordenar</span>
      </TableSalesTitle>
      <Paper
        sx={{
          width: '100%',
          overflow: 'hidden',
          border: `1px solid ${globalColors.grey[200]}`,
          borderBottom: 'none',
          maxHeight: { xs: '60vh', md: '50vh', lg: '50vh', xl: '65vh' }
        }}
      >
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            maxHeight: '100%'
          }}
        >
          <Table stickyHeader aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                {columns.map((column) => (
                  <TableCell key={column}>{column}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataSales.map((row) => (
                <Row key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  )
}
