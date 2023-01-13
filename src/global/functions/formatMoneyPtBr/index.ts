export function formatMoneyPtBr(value: number): string {
  try {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  } catch (error) {
    return 'error format money pt-br'
  }
}
