import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '../../services/user.service';
import { UserType } from '../types/user.types';
import { CreateUserInput } from '../inputs/create-input.types';
import { User } from '@domain/models/user.model';
import { Inject } from '@nestjs/common';

@Resolver(of => UserType)
export class UserResolver {
  constructor(@Inject(UserService) private userService: UserService) {}

  @Mutation(returns => UserType)
  async createUser(@Args('createUserData') createUserInput: CreateUserInput): Promise<any> {
    const user = new User();
    user.username = createUserInput.username;
    user.password = createUserInput.password;

    return this.userService.create(user);
  }
}
