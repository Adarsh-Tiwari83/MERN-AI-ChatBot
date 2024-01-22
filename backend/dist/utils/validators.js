import { body, validationResult } from "express-validator";
export const validate = (validations) => {
    return async (req, res, next) => {
        for (let valid of validations) {
            const result = await valid.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({ errors: errors.array() }); // errors.array() converts errors to array.
    };
};
export const loginValidator = [
    body("email").trim().isEmail().withMessage("email is required"),
    body("password").trim().isLength({ min: 6 }).withMessage("Atleast password of length 6 is required.")
];
export const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    ...loginValidator
];
export const chatCompletionValidator = [
    body("message").notEmpty().withMessage("Message is required"),
];
//# sourceMappingURL=validators.js.map