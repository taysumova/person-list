export default function apiErrorHandler(error) {
  // handle error from backend if it returns error message
  const { message } = error.response.data;
  if (message) {
    return Promise.reject(message);
  } else if (error.message) {
    // if no error message from backend send browser error message
    return Promise.reject(error.message);
  }
  return Promise.reject(error.response || "Something went wrong");
}
