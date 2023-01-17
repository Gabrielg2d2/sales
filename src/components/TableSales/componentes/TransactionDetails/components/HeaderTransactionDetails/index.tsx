import { Button, Stack, Typography } from '@mui/material'
import { globalColors } from 'global/styles/colors'

export function HeaderTransactionDetails() {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        gutterBottom
        color={globalColors.grey[800]}
      >
        Detalhes da transação
      </Typography>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Button sx={{ color: globalColors.grey[300] }}>
          Solicitar Cancelamento
        </Button>

        <Button sx={{ color: globalColors.green[600] }}>Ver comprovante</Button>

        <Button sx={{ color: globalColors.green[600] }}>Ver detalhes</Button>
      </Stack>
    </Stack>
  )
}
