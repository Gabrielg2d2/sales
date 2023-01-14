import { Stack, Typography, IconButton } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'

type HeaderPageProps = {
  title: string
}

export function HeaderPage({ title }: HeaderPageProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid #e0e0e0"
      px={2}
      py={1}
    >
      <Typography variant="h1" fontWeight="bold" fontSize={18}>
        {title}
      </Typography>
      <IconButton>
        <RemoveRedEyeIcon />
      </IconButton>
    </Stack>
  )
}
