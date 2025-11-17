// here are define asyncHandler of trycatch wrapper helper function
// export const asyncHandler = (paramsData) => async (req, res, next) => {
//   // use try-catch
//   try {
//     await paramsData(req, res, next);
//   } catch (error) {
//     next(error);
//   }
// };

// define trycatch  wrapper function with exporting which are using globally for rest-api

export const trycatchWrapper = (paramsData) => async (req, res, next) => {
  try {
    await paramsData(req, res, next);
  } catch (error) {
    next(error);
  }
};
