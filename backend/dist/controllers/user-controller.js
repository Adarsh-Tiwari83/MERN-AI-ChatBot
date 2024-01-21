import user from "../models/user.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constants.js";
export const getAllUser = async (req, res, next) => {
    try {
        const users = await user.find();
        return res.status(200).json({ message: "ok", users });
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({ message: "ERROR", cause: error.message });
    }
};
export const UsersignUp = async (req, res, next) => {
    // For user Sign up
    try {
        const { name, email, password } = req.body;
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(401).send("User Already Registered.");
        }
        const hashed = hash(password, 10);
        const users = new user({ name, email, password: hashed });
        await users.save();
        // Storing cookies for new user.
        res.clearCookie(COOKIE_NAME, {
            domain: "localhost",
            httpOnly: true,
            signed: true,
            path: "/"
        });
        const token = createToken(users._id.toString(), users.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, { path: "/", domain: "localhost", expires, httpOnly: true, signed: true });
        return res.status(201).json({ message: "ok", id: users._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({ message: "ERROR", cause: error.message });
    }
};
export const userLogin = async (req, res, next) => {
    // for user Login
    try {
        const { email, password } = req.body;
        const exist = await user.findOne({ email });
        if (!exist) {
            return res.status(401).send("User is not found");
        }
        const ispass = await compare(password, exist.password);
        if (!ispass) {
            return res.status(403).send("Incorrect Password.");
        }
        res.clearCookie(COOKIE_NAME, {
            domain: "localhost",
            httpOnly: true,
            signed: true,
            path: "/"
        });
        const token = createToken(exist._id.toString(), exist.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, { path: "/", domain: "localhost", expires, httpOnly: true, signed: true });
        return res.status(201).json({ message: "ok", id: exist._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({ message: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=user-controller.js.map