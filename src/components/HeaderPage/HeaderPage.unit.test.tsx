import { render } from '@testing-library/react'
import { HeaderPage } from '.'

describe('HeaderPage', () => {
  it('should render HeaderPage', () => {
    const { getByText } = render(<HeaderPage title="Header" />)
    expect(getByText('Header')).toBeInTheDocument()
  })

  it('should render with the to see icon', () => {
    const { getByLabelText } = render(<HeaderPage title="Header" />)
    expect(getByLabelText('to see')).toBeInTheDocument()
  })
})
