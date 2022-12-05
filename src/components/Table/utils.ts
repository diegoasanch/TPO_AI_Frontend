export type InferTableType<T extends readonly { key: string }[]> =
  T[number]['key']
