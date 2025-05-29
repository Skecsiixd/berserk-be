import { Injectable } from '@nestjs/common';
import { CreationPageData } from '../interface/creation.interface';

@Injectable()
export class CreationService {
  getCreationPage(): CreationPageData[] {
    const content = [
      {
        title: 'Development',
        text: "While briefly working as an assistant to George Morikawa at 18, Miura had already planned some ideas for Berserk's development, having a dark warrior with a gigantic sword illustrated in his portfolio who would be the first conception of Guts.",
        imagesrc: 'BTP_Guts.webp',
      },
      {
        title: 'Original plans',
        text: 'Berserk was originally planned as a fantasy series for a shōnen audience, aligning with the magazine that published Miura\'s earlier award-winning work. He eventually submitted his work to a magazine that, at the time, "was on the verge of going under," and he was switched around between several editors before meeting his first editor.',
        imagesrc: 'miurayoung.jpg',
      },
      {
        title: 'Concept and Influences',
        text: 'Miura felt "Berserk" would make a perfect title to represent his universe. To create the world of the series, Miura was influenced by the films Hellraiser (1987) and The Name of the Rose (1986). Miura stated that Berserk\'s dark fantasy setting and medieval European aesthetic drew inspiration from the 1982 film Conan the Barbarian, the 1981 film Excalibur, and the Elric of Melniboné series, adding that his creature designs emphasized realism to ground the fantastical in tangible detail.',
        imagesrc: 'hellraiser.jpg',
      },
    ];
    return content;
  }
}
