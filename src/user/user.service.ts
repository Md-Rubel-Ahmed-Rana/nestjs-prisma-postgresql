/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { User , PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

@Injectable()
export class UserService {

    async createUser(data: {name: string, email: string}): Promise<User>{
        const result = await prisma.user.create({
            data
        });
        return result
    }

    async getUsers(): Promise<User[]>{
        const result = await prisma.user.findMany();
        return result
    }

    async getSingleUser(id: number): Promise<User>{
        const result = await prisma.user.findUnique({
            where: {
                id
            }
        })
        return result
    }

    async deleteUser(id: number): Promise<User>{
        const result = await prisma.user.delete({
            where: {
                id
            }
        })
        return result
    }

    async updateUser(id: number, payload: Partial<User>): Promise<User>{
        const result = await prisma.user.update({
            where: {
                id
            },
            data: payload
        })
        return result
    }
}