import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "./ICreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private userRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ) {}

    async execute(data: ICreateUserDTO) {
        const userAlreadyExist = await this.userRepository.findByEmail(data.email);

        if (userAlreadyExist) {
            throw new Error('User already exists.');
        }

        const user = new User(data);
        await this.userRepository.save(user);
        await this.mailProvider.sendMessage({
            to: {
                name: user.name,
                email: user.email
            },
            from: {
                name: "Equipe Meu App",
                email: "equipe@meu.app"
            },
            subject: "Olá, parabéns pelo cadastro!",
            body: "<p>Bem-vindo ao Meu App, " + user.name + "<br /><br /> Você já pode fazer login na plataforma.</p>"
        });
    }
}