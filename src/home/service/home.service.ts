import { Injectable } from '@nestjs/common';
import { HomePageData } from '../interfaces/home.interface';

@Injectable()
export class HomeService {
  getHomePage(): HomePageData[] {
    const content =  [{
        title: "Learn about the Berserk story",
        imagesrc: "Berserk-Logo.png",
        route:"/story"
      },
      {
        title: "Learn about the characters of Berserk",
        imagesrc: "Guts.webp",
        route:"/characters"
      },
      {
        title: "Learn about the creation of Berserk",
        imagesrc: "Miura.png",
        route:"/creation"
      },
      {
        title: "Learn about the Berserk animes",
        imagesrc: "AnimeGuts.webp",
        route:"/anime"
      }]
    return content;
  }
}

