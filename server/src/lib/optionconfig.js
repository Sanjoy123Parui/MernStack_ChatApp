// here define and also exporting cors options
export const corsOption = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
};

// here define and also exporting cookie option
export const cookieOptions = {
  httpOnly: true,
  secure: true,
};
