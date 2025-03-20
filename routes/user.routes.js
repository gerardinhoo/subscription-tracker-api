import Router from "express";
import authorize from "../middlewares/auth.middleware.js";
import { getUsers, getUser } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/', (req, res) => {
   res.send({title: "Create a new user"})
})

userRouter.put('/:id', (req, res) => {
   res.send({title: "Update a User"})
})

userRouter.delete('/:id', (req, res) => {
   res.send({title: "Delete a User"})
})


export default userRouter;

