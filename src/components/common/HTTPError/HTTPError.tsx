import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";

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
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        w="60vw"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
         Network Error
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          {message || getStatusMessage()}
        </AlertDescription>
      </Alert>
  );
}

