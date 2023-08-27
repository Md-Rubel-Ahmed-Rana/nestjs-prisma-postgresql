import { User } from "@prisma/client";
export declare class UserService {
    createUser(data: {
        name: string;
        email: string;
    }): Promise<User>;
    getUsers(): Promise<User[]>;
    getSingleUser(id: number): Promise<User>;
    deleteUser(id: number): Promise<User>;
    updateUser(id: number, payload: Partial<User>): Promise<User>;
}
