import { Injectable } from '@nestjs/common';
import { CharacterPageData } from '../interfaces/character.interface';

@Injectable()
export class CharactersService {
  getCharacterPage(): CharacterPageData[] {
    const content = [
      {
        title: 'Guts',
        text: 'Guts (ガッツ, Gattsu) is a wandering mercenary who fights for various companies before being defeated by Griffith and forced into the Band of the Hawk. Raised in a mercenary band by Shisu, a kind prostitute, and later by its leader, Gambino, Guts eventually joins—and later leaves—the Band of the Hawk.',
        imagesrc: 'characterguts.png',
      },
      {
        title: 'Griffith',
        text: 'Griffith (グリフィス, Gurifisu), the "White Hawk," leads the mercenary Band of the Hawk with unmatched skill and ambition. His rise to power in Midland\'s war against Tudor is tied to the Crimson Behelit, an "Egg of the King" prophesied to grant power.',
        imagesrc: 'charactergriffith.webp',
      },
      {
        title: 'Casca',
        text: 'Casca (キャスカ, Kyasuka) is the sole female member of the original Band of the Hawk and its third-strongest warrior after Griffith and Guts. She joins the group after Griffith saves her from a nobleman who purchased her from her parents, fostering her unwavering loyalty and unrequited love for him. Initially hostile toward Guts, she gradually warms to him after he repeatedly saves her life.',
        imagesrc: 'charactercasca.webp',
      },
    ];
    return content;
  }
}
