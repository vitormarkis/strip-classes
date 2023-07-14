import { z } from "zod"

export const stripClassesSchema = z.object({
  baseClasses: z.string(),
  secondaryClasses: z.string(),
  commomClasses: z.string(),
  baseUniqueClasses: z.string(),
  secondaryUniqueClasses: z.string(),
})

export type IFormValues = z.output<typeof stripClassesSchema>
