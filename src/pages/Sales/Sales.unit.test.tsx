import { render } from '@testing-library/react'
import { SalesPage } from '.'

describe('SalesPage', () => {
  it('should render a SalesPage', () => {
    const { container } = render(<SalesPage />)
    expect(container).toBeInTheDocument()
  })
})
