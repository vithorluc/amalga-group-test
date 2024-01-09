import { Module } from '@nestjs/common'
import { AuthService } from '../../application/services/auth.service';
import { AuthResolver } from '@app/graphql/resolvers/auth.resolver';
import { UserRepository } from '@infra/repositories/user.repository';
import { User } from '@domain/models/user.model';
import { TypeOrmModule } from '@nestjs/typeorm';    
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthResolver, UserRepository, AuthService],
  exports: [UserRepository],
})
export class AuthModule {}