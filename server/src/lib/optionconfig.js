// here define cors options
const corsOption = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
};

// export configuration
export { corsOption };