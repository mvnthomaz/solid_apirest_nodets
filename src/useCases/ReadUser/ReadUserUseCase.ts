import { ResponseError } from "../../miscellaneous/ResponseError";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IReadIUserDTO } from "./IReadUserDTO";

export class ReadUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) {}

    async read(id: string): Promise<IReadIUserDTO> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new ResponseError('User not found.', 404);
        }
        
        return user;
    }
    
}