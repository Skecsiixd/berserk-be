import { Module } from '@nestjs/common';
import { CreationController } from './controller/creation.controller';
import { CreationService } from './service/creation.service';

@Module({
  controllers: [CreationController],
  providers: [CreationService]
})
export class CreationModule {}
