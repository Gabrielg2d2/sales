import { IconButton, Stack, Typography } from '@mui/material'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { globalColors } from 'global/styles/colors'

export function InformationSectionSales() {
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
          fontSize: { xs: 0, sm: 60 }
        }}
      />
      <Stack
        direction="row"
        alignItems="flex-start"
        spacing={4}
        ml={{ xs: 2, sm: 4 }}
      >
        <Stack>
          <Typography>Valor bruto</Typography>
          <Typography fontWeight="700" fontSize={18} noWrap>
            R$ 61,21
          </Typography>
        </Stack>

        <Stack>
          <Typography>Valor líquido</Typography>
          <Typography fontWeight="700" fontSize={18} noWrap>
            R$ 59,23
          </Typography>
        </Stack>

        <Stack>
          <Typography>Quantidade de vendas</Typography>
          <Typography fontWeight="700" fontSize={18}>
            5
          </Typography>
        </Stack>
      </Stack>

      <IconButton
        sx={{
          marginLeft: 'auto',
          marginTop: { xs: 'auto', sm: 0 },
          color: globalColors.white[50]
        }}
      >
        <HelpOutlineIcon />
      </IconButton>
    </Stack>
  )
}
