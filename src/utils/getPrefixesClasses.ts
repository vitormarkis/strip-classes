import { appendSpecialClassesToObject } from "@/utils/units/appendSpecialClassesToObject"
import { separateSpecialClasses } from "@/utils/units/separateSpecialClasses"
import { turnAllValuesToString } from "@/utils/units/turnAllValuesToString"

export interface ClassesPrefixes {
  regularClasses: string
  specialClasses: {
    [k: string]: string
  }
}

export function getPrefixesClasses(classes: string): ClassesPrefixes {
  const separatedSpecialClasses = separateSpecialClasses(classes)
  const specialClassesArray = appendSpecialClassesToObject(separatedSpecialClasses)
  const specialClasses = turnAllValuesToString(specialClassesArray.specialClasses)

  return {
    regularClasses: specialClassesArray.regularClasses,
    specialClasses,
  }
}
