import { useEffect } from 'react'
import { SalesMain } from 'data-layer/sales/main'
import { HeaderPage } from 'components/HeaderPage'
import { Box } from '@mui/material'

export function SalesTemplate() {
  useEffect(() => {
    void (async () => {
      const salesMain = new SalesMain()
      const response = await salesMain.getSales()
      console.log(response)
    })()
  }, [])

  return (
    <Box height="100vh" bgcolor="#fff" p={2}>
      <HeaderPage title="Vendas" />
    </Box>
  )
}
