// here was define validator middleware functionality
const validateHandler = (schema) => async (req, res, next) => {
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
};

// here export validate middleware
export { validateHandler };
