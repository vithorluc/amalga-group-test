import { Module } from '@nestjs/common';
import { AppResolver } from '@app/graphql/resolvers/health.resolver';

@Module({
  providers: [AppResolver],
})
export class AppModule {}