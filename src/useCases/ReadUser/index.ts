import { PostgresUsersRespository } from "../../repositories/implementations/PostgresUsersRespository";
import { ReadUserController } from "./ReadUserController";
import { ReadUserUseCase } from "./ReadUserUseCase";

const postgresUsersRespository = PostgresUsersRespository.Instance

const readUserUseCase = new ReadUserUseCase(
    postgresUsersRespository
);

const readUserController = new ReadUserController(readUserUseCase);

export { readUserUseCase, readUserController };