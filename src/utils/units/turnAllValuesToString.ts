export function turnAllValuesToString<T extends Record<string, string[]>>(
  target: T
): Record<keyof T, string> {
  const entries = Object.entries(target)
  const resolved = entries.map(([key, value]) => [key, value.join(" ")])
  return Object.fromEntries(resolved)
}
