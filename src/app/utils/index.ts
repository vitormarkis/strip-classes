export function getElementValue<
  T extends React.MutableRefObject<HTMLInputElement | undefined | null>
>(element: T): string | undefined {
  return element.current?.value
}
