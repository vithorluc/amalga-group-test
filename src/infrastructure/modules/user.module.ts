import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../domain/models/user.model';
import { UserRepository } from '@infra/repositories/user.repository';
import { UserResolver } from '@app/graphql/resolvers/user.resolver';
import { UserService } from '@app/services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserResolver, UserRepository, UserService],
  exports: [UserRepository],
})
export class UserModule {}