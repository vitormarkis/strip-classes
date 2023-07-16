import type { SpecialClassesString } from "@/utils/units/separateSpecialClasses"

export interface SpecialClassesArray {
  regularClasses: string
  specialClasses: {
    [k: string]: string[]
  }
}

export function appendSpecialClassesToObject(
  separatedSpecialClasses: SpecialClassesString
): SpecialClassesArray {
  const result: SpecialClassesArray = {
    regularClasses: separatedSpecialClasses.regularClasses,
    specialClasses: {},
  }

  for (const specialStr of separatedSpecialClasses.specialClasses.split(" ")) {
    const trimmedSpecialStr = specialStr.trim()
    const [_, ...prefixes] = specialStr.split(":").reverse()
    const prefix = prefixes.reverse().join(":")
    const hasPrefixAsProperty = prefix in result.specialClasses

    if (!hasPrefixAsProperty) {
      result.specialClasses = {
        ...result.specialClasses,
        [prefix]: [trimmedSpecialStr],
      }
    } else {
      result.specialClasses[prefix] = [...result.specialClasses[prefix], trimmedSpecialStr]
    }
  }

  return result
}
