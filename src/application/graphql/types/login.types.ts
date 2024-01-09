import { Field, ObjectType } from '@nestjs/graphql';
import { UserType } from './user.types';

@ObjectType()
export class LoginType {
  @Field()
  token: string;

  @Field(() => UserType)
  user: UserType;
}
