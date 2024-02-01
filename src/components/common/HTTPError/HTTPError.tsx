enum HttpStatus {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
}

interface HttpErrorProps {
  status?: number;
  message?: string;
}

export function HttpError({ status, message } : HttpErrorProps)  {
  const getStatusMessage = (): string => {
    switch (status) {
      case HttpStatus.BadRequest:
        return "Bad Request";
      case HttpStatus.Unauthorized:
        return "Unauthorized";
      case HttpStatus.Forbidden:
        return "Forbidden";
      case HttpStatus.NotFound:
        return "Not Found";
      case HttpStatus.InternalServerError:
        return "Internal Server Error";
      default:
        return "Unknown Error";
    }
  };

  return (
    <div
      style={{
        color: "red",
        border: "1px solid red",
        padding: "10px",
        borderRadius: "5px",
        margin: "10px 0",
      }}
    >
      <strong>Error {status ? `(${status}):` : ":"}</strong>{" "}
      {message || getStatusMessage()}
    </div>
  );
}

