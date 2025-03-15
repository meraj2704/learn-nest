import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'learnNest',
      password: 'meraj123',
      database: 'learnNest',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
