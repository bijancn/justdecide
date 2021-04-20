export function handleError<T>(result: T, error: any): T {
  if (error) {
    console.log("error", error);
    // TODO: Error handling? "Oops Page"
  } else {
    return result;
  }
}
