// here are define asyncHandler of trycatch wrapper helper function
// export const asyncHandler = (paramsData) => async (req, res, next) => {
//   // use try-catch
//   try {
//     await paramsData(req, res, next);
//   } catch (error) {
//     next(error);
//   }
// };

// here define trycatch wrapper function with exporting which are also using globally
export const trycatchWrapper = (paramsData) => async (req, res, next) => {
  try {
    await paramsData(req, res, next);
  } catch (error) {
    next(error);
  }
};
