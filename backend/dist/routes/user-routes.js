import { Router } from "express";
import { getAllUser, UsersignUp } from "../controllers/user-controller.js";
const userRoutes = Router();
userRoutes.get("/", getAllUser);
userRoutes.post("/signup", UsersignUp);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map