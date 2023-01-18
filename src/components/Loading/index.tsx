import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

type LoadingProps = {
  open?: boolean
}

export function Loading({ open = false }: LoadingProps) {
  if (!open) return null

  return (
    <div data-testid="loading_true">
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}
