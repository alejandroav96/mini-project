'use strict'
/**
 * Regustered error codes
 */
const errorCodes = {
    INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
    NOT_FOUND: 'NOT_FOUND',
    BAD_REQUEST: 'BAD_REQUEST',
    UNAUTHORIZED: 'UNAUTHORIZED',
  };
  
  /**
   * Creates a error schema
   * @param {string} errorCode error code of the error
   * @param {number} statusCode status code of the error
   * @return {{status_code: number, error_code: string}} Error schema
   */
  const createErrorSchema = (errorCode, statusCode) => ({
    [errorCode]: {
      status_code: statusCode,
      error_code: errorCode,
    },
  });
  
  /**
   * All error schemas in application
   */
  const errorSchemas = [
    [errorCodes.INTERNAL_SERVER_ERROR, 500],
    [errorCodes.NOT_FOUND, 404],
    [errorCodes.UNAUTHORIZED, 401],
    [errorCodes.BAD_REQUEST, 400],
  ].reduce(
    (last, [errorCode, statusCode]) => ({
      ...last,
      ...createErrorSchema(errorCode, statusCode),
    }),
    {}
  );
  
  /**
   * Creates an error schema
   * @param {string} message Message of the error
   * @param {string} errorCode Error code in string
   * @return {{
   *  message: string,
   *  status_code: number,
   *  error_code: string}} Error schema
   */
  exports.createError = (message = 'Internal server error', errorCode) => ({
    message,
    ...(errorSchemas[errorCode] ||
      errorSchemas[errorCodes.INTERNAL_SERVER_ERROR]),
  });
  
  exports.errorCodes = errorCodes;