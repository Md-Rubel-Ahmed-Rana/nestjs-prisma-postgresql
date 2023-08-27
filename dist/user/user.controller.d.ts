import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(name: string, email: string): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            name: string;
            email: string;
        };
    }>;
    getUsers(): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            name: string;
            email: string;
        }[];
    }>;
    getSingleUser(id: string): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            name: string;
            email: string;
        };
    }>;
    deleteUser(id: string): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            name: string;
            email: string;
        };
    }>;
    updateUser(id: string, req: Request): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            name: string;
            email: string;
        };
    }>;
}
