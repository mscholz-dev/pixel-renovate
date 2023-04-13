import {
  ClientErrorCode,
  APIErrorCode,
  isNotionClientError,
} from "@notionhq/client";

export default class NotionError {
  handleError(err: unknown): string {
    let errorMessage = "";

    if (isNotionClientError(err)) {
      switch (err.code) {
        case ClientErrorCode.RequestTimeout:
          errorMessage = "notion request timeout";
          break;
        case APIErrorCode.ObjectNotFound:
          errorMessage =
            "notion object not found";
          break;
        case APIErrorCode.Unauthorized:
          errorMessage = "notion unauthorized";
          break;
        case APIErrorCode.InvalidRequest:
          errorMessage = "notion invalid request";
          break;
        case APIErrorCode.ConflictError:
          errorMessage = "notion conflict error";
          break;
        case APIErrorCode.RateLimited:
          errorMessage = "notion rate limited";
          break;
        case APIErrorCode.InternalServerError:
          errorMessage =
            "notion internal server error";
          break;
        case APIErrorCode.InvalidJSON:
          errorMessage = "notion invalid json";
          break;
        case APIErrorCode.InvalidRequestURL:
          errorMessage =
            "notion invalid request url";
          break;
        case APIErrorCode.RestrictedResource:
          errorMessage =
            "notion restricted resource";
          break;
        case APIErrorCode.ServiceUnavailable:
          errorMessage =
            "notion service unavailable";
          break;
        case APIErrorCode.ValidationError:
          errorMessage =
            "notion validation error";
          break;
        default:
          errorMessage =
            "notion error not defined";
          break;
      }

      return errorMessage;
    }

    return "error undefined";
  }
}
