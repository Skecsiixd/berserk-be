import { Module } from '@nestjs/common';
import { CharactersService } from './service/characters.service';
import { CharactersController } from './controller/characters.controller';

@Module({
  providers: [CharactersService],
  controllers: [CharactersController]
})
export class CharactersModule {}
