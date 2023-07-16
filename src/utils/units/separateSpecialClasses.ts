export interface SpecialClassesString {
  regularClasses: string
  specialClasses: string
}

export function separateSpecialClasses(classes: string): SpecialClassesString {
  let regularClasses = []
  let specialClasses = []

  for (const classStr of classes.replace(/\n/g, "").split(" ")) {
    if (!classStr) continue
    const trimmedClassStr = classStr.trim()
    trimmedClassStr.includes(":")
      ? specialClasses.push(trimmedClassStr)
      : regularClasses.push(trimmedClassStr)
  }

  return {
    regularClasses: regularClasses.join(" "),
    specialClasses: specialClasses.join(" "),
  }
}
