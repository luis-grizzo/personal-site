export function convertObjectToArray<T>(obj: Record<string, unknown>) {
  return Object.keys(obj).map((item) => obj[item as keyof typeof obj] as T)
}
