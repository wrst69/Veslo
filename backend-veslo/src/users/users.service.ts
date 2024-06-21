import { Injectable } from '@nestjs/common';
import { Roles } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UsersService {
  constructor(private db: DbService) {}
  
  async getUsers() {
    return await this.db.user.findMany({
      select: {
        id: true,
        name: true,
        role: true
      }
    });
  }

  async create(
    login: string,
    name: string,
    role: Roles,
    hash: string,
    salt: string,
  ) {
    return await this.db.user.create({ data: { login, name, role, hash, salt } });
  }

  async findByLogin(login: string) {
    return await this.db.user.findUnique({ where: { login } });
  }
}
