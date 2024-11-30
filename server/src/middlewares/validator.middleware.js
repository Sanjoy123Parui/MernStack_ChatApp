// here was define validator middleware functionality
const validateHandler = (schema) => async (req, res, next) => { 

    // use try-catch
    try {

        // decalre payload validation
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
        
    } 
    catch (error) {

        // here was declare error message
        const erroMessage = error.errors[0].message;
        res.status(400).json({message:erroMessage});
        
    }
    
}

// here export validate middleware
export { validateHandler };