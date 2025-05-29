import { Controller, Get } from '@nestjs/common';
import { AnimePageData } from '../interfaces/anime.interface';
import { AnimeService } from '../services/anime.service';

@Controller('anime')
export class AnimeController {
    constructor(private readonly animeService: AnimeService) {}
        
          @Get()
          getAnimePage(): AnimePageData[] {
            return this.animeService.getAnimePage();
          }
}
