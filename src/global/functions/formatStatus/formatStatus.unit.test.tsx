import { render } from '@testing-library/react'
import { formatStatus } from '.'

describe('formatStatus', () => {
  it('should return the status authorized', () => {
    const StatusAuthorized = formatStatus('authorized')
    const { getByText } = render(StatusAuthorized)

    expect(getByText('Autorizada')).toBeInTheDocument()
  })

  it('should return the status completed', () => {
    const StatusCompleted = formatStatus('completed')
    const { getByText } = render(StatusCompleted)

    expect(getByText('Concluída')).toBeInTheDocument()
  })

  it('should return the status canceled', () => {
    const StatusCanceled = formatStatus('canceled')
    const { getByText } = render(StatusCanceled)

    expect(getByText('Cancelada')).toBeInTheDocument()
  })

  it('should return the status denied', () => {
    const StatusDenied = formatStatus('denied')
    const { getByText } = render(StatusDenied)

    expect(getByText('Negada')).toBeInTheDocument()
  })

  it('should return the status pre_authorized', () => {
    const StatusPreAuthorized = formatStatus('pre_authorized')
    const { getByText } = render(StatusPreAuthorized)

    expect(getByText('Pré-Autorizada')).toBeInTheDocument()
  })

  it('should return the status default', () => {
    const StatusDefault = formatStatus('default')
    const { getByText } = render(StatusDefault)

    expect(getByText('Não identificado')).toBeInTheDocument()
  })
})
