import express from 'express';

import {
    getAll,
    newPost,
    changePost,
    deletePost
} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/all', getAll);

userRouter.post('/new', newPost);

userRouter.put('/edit/:index', changePost);

userRouter.delete('/delete/:index', deletePost);

export default userRouter;
