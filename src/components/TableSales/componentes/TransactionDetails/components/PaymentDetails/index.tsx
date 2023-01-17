import { Stack, Typography } from '@mui/material'
import { globalColors } from 'global/styles/colors'

type Props = {
  captureMode: string
}

export function PaymentDetails({ captureMode }: Props) {
  const gapRow = 1.5

  return (
    <Stack
      border={`1px solid ${globalColors.grey[300]}`}
      borderRadius={2}
      px={2}
      py={1}
      flex={1}
    >
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        gutterBottom
        color={globalColors.grey[800]}
        mb={1}
      >
        Dados do pagamento
      </Typography>

      <Stack
        direction="row"
        flex={1}
        justifyContent="space-between"
        py={gapRow}
      >
        <Typography color={globalColors.grey[700]} fontWeight="bold">
          Modo de captura
        </Typography>
        <Typography color={globalColors.grey[700]} fontWeight="500">
          {captureMode}
        </Typography>
      </Stack>
    </Stack>
  )
}
