import { Module } from '@nestjs/common'
import { AuthService } from '../../application/services/auth.service';
import { AuthResolver } from '@app/graphql/resolvers/auth.resolver';
import { UserRepository } from '@infra/repositories/user.repository';
import { User } from '@domain/models/user.model';
import { TypeOrmModule } from '@nestjs/typeorm';    

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AuthResolver, UserRepository, AuthService],
  exports: [UserRepository],
})
export class AuthModule {}