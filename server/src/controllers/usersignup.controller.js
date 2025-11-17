// Consuming to the importing some modules & lib are use for this usersignup controller

// define here all usersignup related controller function with exporting

// define usersignupRegister controller function with exporting
export const usersignupRegister = async (req) => {
  // declare variables of payload in body
  const { phone, password } = req.body;

  // declare array of object of stored data
  let registeredData = {
    phone: phone,
    password: password,
  };

  await registeredData;

  return registeredData;
};
