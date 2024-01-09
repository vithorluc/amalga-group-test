import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { UserModule } from './user.module';
import { AuthModule } from './auth.module';
import { AppModule } from './app.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    DatabaseModule,
    UserModule,
    AuthModule,
    AppModule,

  ],
})
export class MainModule {}
