/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param, Delete, Patch, Req} from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from '@prisma/client';

@Controller("users")
export class UserController {
    constructor (private readonly userService: UserService){}
    @Post()
    async createUser(@Body("name") name: string, @Body("email") email: string){
        const data = {name, email}
        const result = await this.userService.createUser(data)
        return {
            success: true,
            message: "User created successfully!",
            data: result
        }
    }

    @Get()
    async getUsers () {
        const result = await this.userService.getUsers();
        return {
            success: true,
            message: "Users fetched successfully!",
            data: result
        }
    }

    @Get(":id")
    async getSingleUser(@Param("id") id: string) {
        const result = await this.userService.getSingleUser(Number(id));
        return {
            success: true,
            message: "User fetched successfully!",
            data: result
        }
    }

    @Delete(":id")
    async deleteUser(@Param("id") id: string){
        const result = await this.userService.deleteUser(Number(id))
        return {
            success: true,
            message: "User deleted successfully!",
            data: result
        }
    }
    @Patch(":id")
    async updateUser(@Param("id") id: string, @Req() req: Request){
        const payload = req.body as Partial<User>
        const result = await this.userService.updateUser(Number(id), payload)
        return {
            success: true,
            message: "User updated successfully!",
            data: result
        }
    }
    
}