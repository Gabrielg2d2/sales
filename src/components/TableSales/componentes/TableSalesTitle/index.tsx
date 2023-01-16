import { ReactNode } from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { IconButton, Stack, Typography } from '@mui/material'
import { globalColors } from 'global/styles/colors'

type TableSalesTitleProps = {
  children: ReactNode
}

export function TableSalesTitle({ children }: TableSalesTitleProps) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" alignItems="center">
        <Typography
          variant="h2"
          fontSize={16}
          color={globalColors.grey[700]}
          fontWeight="bold"
        >
          Lista de Vendas
        </Typography>
        <IconButton
          sx={{
            color: globalColors.green[400]
          }}
        >
          <HelpOutlineIcon />
        </IconButton>
      </Stack>
      {children}
    </Stack>
  )
}
