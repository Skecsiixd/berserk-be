import { Module } from '@nestjs/common';
import { HomeService } from './service/home.service';
import { HomeController } from './controller/home.controller';

@Module({
    providers: [HomeService],
    controllers: [HomeController]
})
export class HomeModule {

}
