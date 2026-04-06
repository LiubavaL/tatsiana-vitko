export function generateKey(index: number) {
  if (index > 9) {
    return `${index}`
  }

  return `0${index}`
}
