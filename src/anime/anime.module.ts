import { Module } from '@nestjs/common';
import { AnimeService } from './services/anime.service';
import { AnimeController } from './controller/anime.controller';

@Module({
  providers: [AnimeService],
  controllers: [AnimeController]
})
export class AnimeModule {}
