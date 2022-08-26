import { Request, Response } from "express";
import { ReadUserUseCase } from "./ReadUserUseCase";

export class ReadUserController {
    constructor (
        private readUserUseCase: ReadUserUseCase
    ) {}

    async handle(request: Request, response: Response, id: string): Promise<Response> {
        try {
            const user = await this.readUserUseCase.read(id);

            return response.status(200).json(user);
        } catch (err) {
            return response.status(err.statusCode).json({
                message: err.message || "Unexpected error."
            });
        }
    }
}