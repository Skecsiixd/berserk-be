import { Injectable } from '@nestjs/common';
import { AnimePageData } from '../interfaces/anime.interface';

@Injectable()
export class AnimeService {
  getAnimePage(): AnimePageData[] {
    const content = [
      {
        title: "First series (1997–1998)",
        text: "Berserk was adapted into a 25-episode anime television series, produced by Nippon Television and VAP, animated by Oriental Light and Magic, and directed by Naohito Takahashi. The first episode begins with the Black Swordsman arc (incomplete) and shifts into the Golden Age arc thereafter.",
        link:"https://www.youtube.com/embed/CArg8gQ-aB0?si=K0graR6Trx610upm"
      },
      {
        title: "Film series (2012–2013)",
        text: "The Berserk's Golden Age arc was adapted into a trilogy of theatrical anime films. The first film, The Egg of the King, premiered in Japan on February 4, 2012. The second film, The Battle for Doldrey, premiered in Japan on June 23, 2012. The third film, The Advent, premiered in Japan on February 1, 2013. A remastered television broadcast edition, labeled as \"Memorial Edition\", aired from October 2 to December 25, 2022.",
        link:"https://www.youtube.com/embed/H6dkuEdzaFY?si=vXI_59cigwUFqxrP"
      },
      {
        title: "Second series (2016–2017)",
        text: "A second anime television series adaptation of Berserk was produced. The series' 12-episode first season covered the manga's Conviction arc. A 12-episode second season, which covered the first half of the manga's Falcon of the Millennium Empire arc. It is also dogshit. Very bad CGI.",
        link:"https://www.youtube.com/embed/0MIw4xzxcTU?si=HoWTu1rjbDeD5X_6"
      }
    ];
    return content;
  }
}
