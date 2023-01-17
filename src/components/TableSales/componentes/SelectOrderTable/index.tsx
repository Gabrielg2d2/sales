import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material'
import { globalColors } from 'global/styles/colors'

type SelectOrderTableProps = {
  orderTable: string
  handleChangeOrderTable: (event: SelectChangeEvent) => void
  columns: Array<{
    label: string
    value: string
  }>
}

export function SelectOrderTable({
  columns,
  orderTable,
  handleChangeOrderTable
}: SelectOrderTableProps) {
  return (
    <FormControl
      variant="standard"
      sx={{
        minWidth: 120,
        color: globalColors.grey[700],
        borderBottom: 'none',
        '&.MuiInput-root-MuiSelect-root': {
          color: globalColors.green[600]
        }
      }}
    >
      <InputLabel
        id="order-table-sales"
        sx={{
          color: globalColors.green[600],
          '&.Mui-focused': { color: globalColors.green[600] }
        }}
      >
        Ordenar
      </InputLabel>
      <Select
        labelId="order-table-sales"
        id="select-order-table-sales"
        value={orderTable}
        onChange={handleChangeOrderTable}
        label="Ordenar"
      >
        <MenuItem value="">
          <em>Nenhum</em>
        </MenuItem>
        {columns.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
