import { Stack, Typography } from '@mui/material'
import { globalColors } from 'global/styles/colors'

type Props = {
  nsuAcquio: string
  idTransaction: string
  idAuthorization: string
  orderNumber: string
}

export function SaleIdentifiers({
  nsuAcquio,
  idAuthorization,
  idTransaction,
  orderNumber
}: Props) {
  const gapRow = 1.5

  return (
    <Stack
      border={`1px solid ${globalColors.grey[300]}`}
      borderRadius={2}
      px={2}
      py={1}
    >
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        gutterBottom
        color={globalColors.grey[800]}
        mb={1}
      >
        Identificadores da venda
      </Typography>

      <Stack
        direction="row"
        flex={1}
        justifyContent="space-between"
        borderBottom={`1px solid ${globalColors.grey[200]}`}
        py={gapRow}
      >
        <Typography color={globalColors.grey[700]} fontWeight="bold">
          NSU Acqio
        </Typography>
        <Typography color={globalColors.grey[700]} fontWeight="500">
          {nsuAcquio}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        flex={1}
        justifyContent="space-between"
        borderBottom={`1px solid ${globalColors.grey[200]}`}
        py={gapRow}
      >
        <Typography color={globalColors.grey[700]} fontWeight="bold">
          ID da transação
        </Typography>
        <Typography color={globalColors.grey[700]} fontWeight="500">
          {idTransaction}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        flex={1}
        justifyContent="space-between"
        borderBottom={`1px solid ${globalColors.grey[200]}`}
        py={gapRow}
      >
        <Typography color={globalColors.grey[700]} fontWeight="bold">
          ID da autorização
        </Typography>
        <Typography color={globalColors.grey[700]} fontWeight="500">
          {idAuthorization}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        flex={1}
        justifyContent="space-between"
        py={gapRow}
      >
        <Typography color={globalColors.grey[700]} fontWeight="bold">
          Número do pedido
        </Typography>
        <Typography color={globalColors.grey[700]} fontWeight="500">
          {orderNumber}
        </Typography>
      </Stack>
    </Stack>
  )
}
