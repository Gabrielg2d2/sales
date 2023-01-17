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
          {row.status}
        </TableCell>
        <TableCell>{row.origin}</TableCell>
        <TableCell>{row.dateAndTimeFormatted}</TableCell>
        <TableCell>{row.flagFormatted}</TableCell>
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
  return (
    <>
      <TableSalesTitle>
        <span>Ordenar</span>
      </TableSalesTitle>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
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
    </>
  )
}
