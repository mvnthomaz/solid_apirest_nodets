import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRespository } from "../../repositories/implementations/PostgresUsersRespository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgresUsersRespository = new PostgresUsersRespository()
const mailtrapMailProvider = new MailtrapMailProvider()

const createUserUserCase = new CreateUserUseCase(
    postgresUsersRespository, 
    mailtrapMailProvider
)

const createUserController = new CreateUserController(
    createUserUserCase
)

export { createUserUserCase, createUserController }