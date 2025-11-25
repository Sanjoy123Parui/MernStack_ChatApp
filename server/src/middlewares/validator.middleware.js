// Consuming to the importing some modules and lib for validate middleware
import { trycatchWrapper } from "../helpers/try-catch.helper.js";
import { validationError } from "../utils/utility.js";

// define validation handler function with exporting
export const validateHandler = (schema) =>
  trycatchWrapper(async (req, res, next) => {
    // declare variable for passing the payload values
    const data = {
      ...req.body,
      avatar: req.file ?? null,
    };

    // here was handle safe validation
    const result = await schema.safeParseAsync(data);

    if (!result.success) {
      const errorMsg = result.error.errors.map((err) => ({
        message: err.message,
      }));
      return next(validationError(errorMsg));
    }

    req.body = result.data;
    next();
  });
