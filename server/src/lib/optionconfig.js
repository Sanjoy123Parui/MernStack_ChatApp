// Consuming to the importing some lib
import { cache } from "../config/app.js";

// here define cors options
export const corsOption = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
};
