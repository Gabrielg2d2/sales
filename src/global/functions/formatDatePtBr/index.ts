export function formatDatePtBr(date: string): string {
  const dateFormatted = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date(date))

  return dateFormatted
}

export function formatHourPtBr(dateAndTime: string): string {
  const timeFormatted = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(new Date(dateAndTime))

  return timeFormatted
}
