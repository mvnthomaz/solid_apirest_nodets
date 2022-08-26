import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class PostgresUsersRespository implements IUsersRepository {
    private users: User[] = [];

    private static _instance: PostgresUsersRespository;

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }


    async findByEmail(email: String): Promise<User> {
        const user = this.users.find(user => user.email == email);
        
        return user;
    }

    async save(user: User): Promise<void> {
        this.users.push(user);
    }

    async findById(id: string): Promise<User> {
        const user = this.users.find(user => user.id == id);
        
        return user;
    }

    async list(): Promise<User[]> {
        return this.users;
    }
}