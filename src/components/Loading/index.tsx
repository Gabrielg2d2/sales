import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

type LoadingProps = {
  open?: boolean
}

export function Loading({ open = false }: LoadingProps) {
  return (
    <div>
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
