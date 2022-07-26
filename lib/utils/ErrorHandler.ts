
export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) { return error.message; }
  if (isErrorWithMessage(error)) { return error.message; }
  else { return String(error) }
}

export const isErrorWithMessage = (error: unknown): error is { message: string } => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  )
}
