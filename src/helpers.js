export function formatDollarsDecimal(dollars) {
  return `$${(dollars).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}
export function formatDollarsRounded(dollars) {
  return `$${(dollars).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}