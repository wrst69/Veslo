import { Injectable } from '@nestjs/common';
import { Divisions, Roles } from '@prisma/client';
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
    division: Divisions,
    hash: string,
    salt: string,
  ) {
    return await this.db.user.create({ data: { login, name, role, division, hash, salt } });
  }

  async findByLogin(login: string) {
    return await this.db.user.findUnique({ where: { login } });
  }
}
