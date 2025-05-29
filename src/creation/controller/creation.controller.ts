import { Controller, Get } from '@nestjs/common';
import { CreationService } from '../service/creation.service';
import { CreationPageData } from '../interface/creation.interface';

@Controller('creation')
export class CreationController {
      constructor(private readonly creationService: CreationService) {}
    
      @Get()
      getCreationPage(): CreationPageData[] {
        return this.creationService.getCreationPage();
      }
    
}
