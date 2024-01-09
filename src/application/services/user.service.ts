import { Injectable } from '@nestjs/common';
import { User } from '@domain/models/user.model';
import { UserRepository } from '@infra/repositories/user.repository';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository,) {}

  async create(user: User): Promise<User> {
    user.password = await bcrypt.hash(user.password, 10);
    return this.userRepository.saveUser(user);
  }
}