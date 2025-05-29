import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from './home/home.module';
import { CharactersModule } from './characters/characters.module';
import { CreationModule } from './creation/creation.module';
import { AnimeModule } from './anime/anime.module';

@Module({
  imports: [HomeModule, CharactersModule, CreationModule, AnimeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
