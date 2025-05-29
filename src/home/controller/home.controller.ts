import { Controller, Get } from '@nestjs/common';
import { HomeService } from '../service/home.service';
import { HomePageData } from '../interfaces/home.interface';

@Controller('home')
export class HomeController {
      constructor(private readonly homeService: HomeService) {}
    
      @Get()
      getHomePage(): HomePageData[] {
        return this.homeService.getHomePage();
      }
    
}
