import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { listUsersController } from "./useCases/ListUsers";
import { readUserController } from "./useCases/ReadUser";

const router = Router()

router.get('/users', (request, response) => {
    return listUsersController.handle(request, response);
});

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

router.get('/users/:id', (request, response) => {
    const id = request.params.id;
    return readUserController.handle(request, response, id);
});

export { router }