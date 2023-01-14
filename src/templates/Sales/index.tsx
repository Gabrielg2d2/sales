import { useEffect } from 'react'
import { SalesMain } from 'data-layer/sales/main'

export function SalesTemplate() {
  useEffect(() => {
    void (async () => {
      const salesMain = new SalesMain()
      const response = await salesMain.getSales()
      console.log(response)
    })()
  }, [])

  return (
    <div>
      <h1>Sales Template</h1>
    </div>
  )
}
