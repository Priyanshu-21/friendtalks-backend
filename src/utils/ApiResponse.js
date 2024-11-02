// Creating a structure of API responses
class ApiResponse {
  constructor(data, statusCode, message = "Success") {
    this.data = data;
    this.StatusCode = statusCode;
    this.message = message;
    // When status code is less than 400
    // Informational(100 - 199), Success(200 - 299) & Redirection(300 - 399)
    this.success = statusCode < 400;
  }
}

export { ApiResponse };
