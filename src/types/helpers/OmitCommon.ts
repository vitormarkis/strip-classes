export type OmitCommon<T, U> = Pick<T, Exclude<keyof T, Extract<keyof T, keyof U>>>
