import { useMemo } from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { DataSalesModelFormatted } from 'domain/sales/types'
import { TableSalesTitle } from './componentes/TableSalesTitle'
import { globalColors } from 'global/styles/colors'
import { SelectChangeEvent, Stack, Typography } from '@mui/material'
import { Row } from './componentes/Row'
import { SelectOrderTable } from './componentes/SelectOrderTable'

type TableSalesProps = {
  dataSales: DataSalesModelFormatted[]
  orderTable: string
  handleChangeOrderTable: (event: SelectChangeEvent) => void
  columns: Array<{
    label: string
    value: string
  }>
}

export function TableSales({
  dataSales,
  orderTable,
  handleChangeOrderTable,
  columns
}: TableSalesProps) {
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

  const rows = useMemo(
    () => dataSales.map((row) => <Row key={row.id} row={row} />),
    [dataSales]
  )

  return (
    <>
      <TableSalesTitle>
        <SelectOrderTable
          columns={columns}
          orderTable={orderTable}
          handleChangeOrderTable={handleChangeOrderTable}
        />
      </TableSalesTitle>
      <Paper
        sx={{
          width: '100%',
          overflow: 'hidden',
          border: `1px solid ${globalColors.grey[200]}`,
          borderBottom: 'none',
          maxHeight: { xs: '50vh', md: '50vh', lg: '50vh', xl: '65vh' }
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
                {columns.map(({ label, value }) => (
                  <TableCell key={value}>{label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>{rows}</TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  )
}
