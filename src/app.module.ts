import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from './home/home.module';
import { CharactersModule } from './characters/characters.module';
import { CreationModule } from './creation/creation.module';
import { AnimeModule } from './anime/anime.module';
import { PostsModule } from './posts/posts.module';
import { PostgresModule } from './postgres/postgres.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HomeModule,
    CharactersModule,
    CreationModule,
    AnimeModule,
    PostsModule,
    PostgresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
