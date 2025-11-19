// Consuming to the importing some modules and lib for validate middleware
import { trycatchWrapper } from "../helpers/try-catch.helper";
import { validationError } from "../utils/utility.js";

// here was define validator middleware functionality
/* export const validateHandler = (schema) => async (req, res, next) => {
  // use try-catch
  try {
    // here declare payload
    const data = {
      ...req.body,
      avatar: req.file,
    };

    await schema.parseAsync(data);
    next();
  } catch (error) {
    // here was declare error message
    // const erroMessage = error.errors[0].message;
    const erroMessage = error.errors.map((err) => ({
      message: err.message,
    }));
    res.status(400).json({ message: erroMessage });
  }
}; */

// define validation handler function with exporting
export const validateHandler = (schema) =>
  trycatchWrapper(async (req, res, next) => {
    // declare variable for passing the payload values
    const data = {
      ...req.body,
      avatar: req.file,
    };

    // here was handle safe validation
    const result = await schema.safeParseAsync(data);

    if (!result.success) {
      const errors = result.error.errors.map((e) => e.message);
      return next(validationError(errors.join(", ")));
    }

    req.validateData = result.data;
    next();
  });
