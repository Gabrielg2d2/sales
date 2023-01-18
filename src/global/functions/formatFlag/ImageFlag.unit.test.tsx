import { formatFlag } from '.'
import { render } from '@testing-library/react'

describe('formatFlag', () => {
  it('should return the pix flag', () => {
    const FlagPix = formatFlag('pix')

    const { getByAltText } = render(FlagPix)

    expect(getByAltText('pix')).toBeInTheDocument()
  })

  it('should return the mastercard flag', () => {
    const FlagMasterCard = formatFlag('mastercard')

    const { getByAltText } = render(FlagMasterCard)

    expect(getByAltText('master card')).toBeInTheDocument()
  })

  it('should return the default flag', () => {
    const FlagDefault = formatFlag('default')

    const { getByAltText } = render(FlagDefault)

    expect(getByAltText('default')).toBeInTheDocument()
  })
})
