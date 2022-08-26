import { PostgresUsersRespository } from "../../repositories/implementations/PostgresUsersRespository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

const postgresUsersRespository = PostgresUsersRespository.Instance

const listUsersUseCase = new ListUsersUseCase(
    postgresUsersRespository
)

const listUsersController = new ListUsersController(
    listUsersUseCase
)

export { listUsersUseCase, listUsersController }