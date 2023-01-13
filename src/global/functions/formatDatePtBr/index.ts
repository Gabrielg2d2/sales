/**
 *
 * @param string '2021-09-01T00:00:00.000Z'
 * @returns string '01/09/2021 00:00:00'
 *
 * @example
 * const date = '2021-09-01T00:00:00.000Z'
 * const { dateFormatted, timeFormatted } = formatDateAndHourPtBr(date)
 * console.log(dateFormatted) // 01/09/2021 00:00:00
 */
export function formatDateAndHourPtBr(date: string) {
  try {
    const dateFormatted = new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      timeZone: 'UTC'
    }).format(new Date(date))

    const timeFormatted = new Intl.DateTimeFormat('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'UTC'
    }).format(new Date(date))

    return { dateFormatted, timeFormatted }
  } catch (error) {
    return { dateFormatted: '', timeFormatted: '' }
  }
}
