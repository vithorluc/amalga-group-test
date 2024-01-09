import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { User } from '@domain/models/user.model';
import { UserRepository } from '@infra/repositories/user.repository';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<User | null> {
    const user = await this.userRepository.findOneByUsername(username);

    if (user && bcrypt.compareSync(pass, user.password)) {
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.username }
    const token = this.jwtService.sign(payload)

    return {
      token,
      user: {
        id: user.id,
        username: user.username,
      },
    }
  }
}
