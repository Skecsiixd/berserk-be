import { Controller, Get } from '@nestjs/common';
import { CharacterPageData } from '../interfaces/character.interface';
import { CharactersService } from '../service/characters.service';

@Controller('characters')
export class CharactersController {
      constructor(private readonly charactersService: CharactersService) {}
    
      @Get()
      getCharacterPage(): CharacterPageData[] {
        return this.charactersService.getCharacterPage();
      }
    
}
