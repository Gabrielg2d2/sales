import { render } from '@testing-library/react'
import { Loading } from '.'

describe('Loading', () => {
  it('should render Loading', () => {
    const { getByTestId } = render(<Loading open={true} />)
    expect(getByTestId('loading_true')).toBeInTheDocument()
  })

  it('should return null when the open property is equal to false', () => {
    const { container } = render(<Loading open={false} />)
    expect(container).toBeEmptyDOMElement()
  })
})
