const listStatus = {
  400: "Bad request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};
class HttpError extends Error {
  constructor(status, message = listStatus[status]) {
    super();
    this.status = status;
    this.message = message;
  }
}

module.exports = HttpError;
