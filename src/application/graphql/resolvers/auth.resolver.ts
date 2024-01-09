import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from '../../services/auth.service';
import { UnauthorizedException } from '@nestjs/common';
import { LoginType } from '../types/login.types';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(returns => LoginType)
  async login(@Args('username') username: string, @Args('password') password: string) {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }
}
