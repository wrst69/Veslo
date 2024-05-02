import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UsersService {
  constructor(private db: DbService) {}

  async findByLogin(login: string) {
    return this.db.user.findUnique({ where: { login } });
  }

  async findById(id: number) {
    return this.db.user.findUnique({ where: { id } });
  }

  async create(
    login: string,
    name: string,
    role: Role,
    hash: string,
    salt: string,
  ) {
    return this.db.user.create({ data: { login, name, role, hash, salt } });
  }
}
