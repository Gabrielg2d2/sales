import { Stack, Typography } from '@mui/material'
import { globalColors } from 'global/styles/colors'

type Props = {
  status: string
  dateAndTime: string
  brute: string
  liquid: string
  rates: string
  discount: string
}

export function SalesData({
  status,
  dateAndTime,
  brute,
  liquid,
  rates,
  discount
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
        Dados da venda
      </Typography>

      <Stack
        direction="row"
        flex={1}
        justifyContent="space-between"
        borderBottom={`1px solid ${globalColors.grey[200]}`}
        py={gapRow}
      >
        <Typography color={globalColors.grey[700]} fontWeight="bold">
          Status
        </Typography>
        <Typography color={globalColors.grey[700]} fontWeight="500">
          {status}
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
          Data e hora da venda
        </Typography>
        <Typography color={globalColors.grey[700]} fontWeight="500">
          {dateAndTime}
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
          Valor bruto
        </Typography>
        <Typography color={globalColors.grey[700]} fontWeight="500">
          {brute}
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
          Taxas
        </Typography>
        <Typography color={globalColors.grey[700]} fontWeight="500">
          {rates}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        flex={1}
        justifyContent="space-between"
        py={gapRow}
        borderBottom={`1px solid ${globalColors.grey[200]}`}
      >
        <Typography color={globalColors.grey[700]} fontWeight="bold">
          Descontos
        </Typography>
        <Typography color={globalColors.grey[700]} fontWeight="500">
          {discount}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        flex={1}
        justifyContent="space-between"
        py={gapRow}
      >
        <Typography color={globalColors.grey[700]} fontWeight="bold">
          Valor líquido
        </Typography>
        <Typography color={globalColors.grey[700]} fontWeight="500">
          {liquid}
        </Typography>
      </Stack>
    </Stack>
  )
}
