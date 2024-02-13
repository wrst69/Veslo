import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { UserRole } from 'types/user-role.enum';

@Injectable()
export class UsersService {
  constructor(private db: DbService) {}

  findByName(name: string) {
    return this.db.user.findFirst({ where: { name } });
  }

  create(name: string, role: UserRole, hash: string, salt: string) {
    return this.db.user.create({ data: { name, role, hash, salt } });
  }
}
