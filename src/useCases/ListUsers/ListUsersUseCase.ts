import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IListUsersDTO } from "./IListUsersDTO";

export class ListUsersUseCase {
    constructor(
        private userRepository: IUsersRepository,
    ) {}

    async execute(): Promise<IListUsersDTO[]> {
        const users = this.userRepository.list();

        return users;
    }
}