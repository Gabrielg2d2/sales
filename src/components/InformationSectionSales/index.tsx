import { IconButton, Stack, Typography } from '@mui/material'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { globalColors } from 'global/styles/colors'

type Props = {
  liquid: string
  brute: string
  quantity: string
}

export function InformationSectionSales(props: Props) {
  return (
    <Stack
      direction="row"
      alignItems="flex-start"
      minHeight={100}
      p={{ xs: '8px 16px 8px', sm: '16px 24px 16px' }}
      borderRadius={2}
      bgcolor={globalColors.green[600]}
      color={globalColors.white[50]}
    >
      <MonetizationOnOutlinedIcon
        sx={{
          fontSize: 60
        }}
      />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="flex-start"
        spacing={4}
        ml={{ xs: 2, sm: 4 }}
      >
        <Stack>
          <Typography>Valor bruto</Typography>
          <Typography fontWeight="700" fontSize={18}>
            {props.brute}
          </Typography>
        </Stack>
        <Stack>
          <Typography>Valor líquido</Typography>
          <Typography fontWeight="700" fontSize={18}>
            {props.liquid}
          </Typography>
        </Stack>

        <Stack>
          <Typography>Quantidade de vendas</Typography>
          <Typography fontWeight="700" fontSize={18}>
            {props.quantity}
          </Typography>
        </Stack>
      </Stack>

      <IconButton
        title="Ajuda"
        sx={{
          marginLeft: 'auto',
          color: globalColors.white[50]
        }}
      >
        <HelpOutlineIcon />
      </IconButton>
    </Stack>
  )
}
