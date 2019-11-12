export default function apiErrorHandler(error) {
  // handle error from backend if it returns error message and 500 status
  if (error.response) {
    if (error.response.data && error.response.data.message) {
      return Promise.reject(error.response.data.message);
    }

    if (error.response.status === 500) {
      return Promise.reject("Server error");
    }
  }

  if (error.message) {
    // if no error message from backend send browser error message
    return Promise.reject(error.message);
  }

  return Promise.reject(error.response || "Something went wrong");
}
