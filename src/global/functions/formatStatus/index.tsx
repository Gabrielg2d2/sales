import { Box, Typography } from '@mui/material'
import { globalColors } from 'global/styles/colors'

type StatusProps = {
  text: string
  color: string
  bgcolor: string
}

function Status({ bgcolor, color, text }: StatusProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={1}
      px={2}
      bgcolor={bgcolor}
      borderRadius={5}
    >
      <Typography sx={{ color, fontSize: 14 }} noWrap>
        {text}
      </Typography>
    </Box>
  )
}

export function formatStatus(key: string) {
  // ['authorized', 'completed', 'canceled', 'denied', 'pre_authorized']
  const statusKey = key.toLowerCase()

  switch (statusKey) {
    case 'authorized':
      return (
        <Status
          bgcolor={globalColors.green[50]}
          color={globalColors.green[600]}
          text="Autorizada"
        />
      )

    case 'completed':
      return (
        <Status
          bgcolor={globalColors.green[50]}
          color={globalColors.green[600]}
          text="Concluída"
        />
      )

    case 'canceled':
      return (
        <Status
          bgcolor={globalColors.red[50]}
          color={globalColors.red[800]}
          text="Cancelada"
        />
      )

    case 'denied':
      return (
        <Status
          bgcolor={globalColors.red[50]}
          color={globalColors.red[800]}
          text="Negada"
        />
      )

    case 'pre_authorized':
      return (
        <Status
          bgcolor={globalColors.orange[50]}
          color={globalColors.orange[700]}
          text="Pré-Autorizada"
        />
      )

    default:
      return (
        <Status
          bgcolor={globalColors.grey[50]}
          color={globalColors.grey[800]}
          text={'Não identificado'}
        />
      )
  }
}
