
// Enum numeric
enum StatusCodes {
    Success = 200,
    Accepted = "202",
    NoContent = 204,
    Unauthorized = 401,
    BadRequest = 400,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    Conflict = 409,
    Gone = 410,
    LengthRequired = 411,
    PreconditionFailed = 412,
    PayloadTooLarge = 413,
    UriTooLong = 414,
    UnsupportedMediaType = 415,
    RangeNotSatisfiable = 416,
    ExpectationFailed = 417,
    ImATeapot = 418,
    MisdirectedRequest = 421,
    UnprocessableEntity = 422,
    Locked = 423,
    FailedDependency = 424,
    TooEarly = 425,
    UpgradeRequired = 426,
    PreconditionRequired = 428,
    TooManyRequests = 429,
    RequestHeaderFieldsTooLarge = 431,
    UnavailableForLegalReasons = 451,
    InternalServerError = 500,
    NotImplemented = 501,
    BadGateway = 502,
    ServiceUnavailable = 503,
    GatewayTimeout = 504,
    HttpVersionNotSupported = 505,
    VariantAlsoNegotiates = 506,
    InsufficientStorage = 507,
    LoopDetected = 508,
    NotExtended = 510,
    NetworkAuthenticationRequired = 511,

}
console.log(StatusCodes.Success);
console.log(StatusCodes.NotFound);
console.log(StatusCodes.BadRequest);
console.log(StatusCodes.Accepted);

// Enum strings
enum CardinalDirection {
    North = 'North',
    East = 'East',
    South = 'South',
    West = 'West'
}
console.log(CardinalDirection.North);
console.log(CardinalDirection.West);
