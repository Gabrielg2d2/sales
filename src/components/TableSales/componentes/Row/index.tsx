import { useState } from 'react'
import { DataSalesModelFormatted } from 'domain/sales/types'
import { formatFlag, formatStatus } from 'global/functions'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { TransactionDetails } from '../../componentes/TransactionDetails'

import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

type RowProps = {
  row: DataSalesModelFormatted
}

export function Row({ row }: RowProps) {
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
            {open ? (
              <KeyboardArrowUpIcon data-testid="open_expand" />
            ) : (
              <KeyboardArrowDownIcon data-testid="close_expand" />
            )}
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
