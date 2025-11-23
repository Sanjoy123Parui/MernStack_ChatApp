// Consuming to the importing some modules and lib for optionconfig
import { cache } from "../config/app.js";

// here declare and also exporting cors options
export const corsOption = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
};

// here declare and also exporting cookie option
export const cookieOptions = {
  httpOnly: true,
  secure: true,
};

// here define & exporting also usersignupCaching
export const usersignupCaching = (usersignupId) => {
  if (cache.has("usersignupId")) {
    usersignupId = JSON.parse(cache.get("usersignupId"));
  }
};
