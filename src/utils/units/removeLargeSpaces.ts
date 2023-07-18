export function removeLargeSpaces(str: string) {
  return str
    .split(" ")
    .filter(s => s.length)
    .join(" ")
}
