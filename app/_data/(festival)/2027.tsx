import { FestivalData } from './types';

export const festival2027Data = {
  affiche: 'https://ganache.studio/media/festival/2027/affiche_festival.jpg',
  navigationItems: [
    {
      title: 'PRÉSENTATION',
      id: 'presentation',
      to: 'section',
    },
    {
      title: 'INSCRIRE UN FILM',
      target: '_blank',
      href: 'https://filmfreeway.com/ganachefestival',
      to: 'page',
    },
    {
      title: 'ÉQUIPE',
      id: 'equipe',
      to: 'section',
    },
    {
      title: 'ARCHIVES',
      to: 'group',
      items: [
        {
          title: '1ère ÉDITION',
          italic: true,
          target: '_blank',
          href: '/ganache-festival-2023',
          to: 'page',
        },
        {
          title: '2ème ÉDITION',
          italic: true,
          target: '_blank',
          href: '/ganache-festival-2024',
          to: 'page',
        },
        {
          title: '3ème ÉDITION',
          italic: true,
          target: '_blank',
          href: '/ganache-festival-2025',
          to: 'page',
        },
        {
          title: '4ème ÉDITION',
          italic: true,
          target: '_blank',
          href: '/ganache-festival-2026',
          to: 'page',
        },
      ],
    },
  ],

  team: [
    {
      name: 'Benjamin Gilet',
      image: 'https://ganache.studio/media/festival/staffs/Benjamin2026.jpeg',
    },
    {
      name: 'Gabriel Washer',
      image: 'https://ganache.studio/media/festival/staffs/Gabriel2026.jpg',
    },
    {
      name: 'Mathilde Hauser',
      image: 'https://ganache.studio/media/festival/staffs/Mathilde2026.jpeg',
    },
    {
      name: 'Adrio Guarino',
      image: 'https://ganache.studio/media/festival/staffs/Adrio2026.jpeg',
    },
  ],
  partners: [
    {
      name: 'Le Grand Action',
      image: 'https://ganache.studio/media/festival/partenaires/GA.png',
      url: 'https://www.legrandaction.com/',
    },
    {
      name: 'La Septième Obsession',
      image: 'https://ganache.studio/media/festival/partenaires/LSO.jpg',
      url: 'https://www.laseptiemeobsession.com/',
    },
    {
      name: "L'éloge",
      image: 'https://ganache.studio/media/festival/partenaires/LELG.png',
      url: 'https://www.instagram.com/l_eloge_/',
    },
    {
      name: 'Reepost',
      image: 'https://ganache.studio/media/festival/partenaires/RP.png',
      url: 'https://www.reepoststudio.fr/',
    },
    {
      name: 'Transpa',
      image: 'https://ganache.studio/media/festival/partenaires/TP.png',
      url: 'https://transpalux.com/',
    },
    {
      name: 'Apicorp',
      image: 'https://ganache.studio/media/festival/partenaires/AC.png',
      url: 'https://agenceapicorp.com/',
    },
    {
      name: 'Movinmotion',
      image: 'https://ganache.studio/media/festival/partenaires/MM.png',
      url: 'https://www.movinmotion.com/',
    },
    {
      name: 'Cercer',
      image: 'https://ganache.studio/media/festival/partenaires/CER.png',
      url: 'https://www.instagram.com/cercer.deli/',
    },
  ],
} satisfies FestivalData;
