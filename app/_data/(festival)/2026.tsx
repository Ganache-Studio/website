import { FestivalData } from './types';

export const festival2026Data = {
  affiche: 'https://ganache.studio/media/festival/2026/affiche_festival.jpeg',

  navigationItems: [
    {
      title: 'PRÉSENTATION',
      id: 'presentation',
      to: 'section',
    },
    {
      title: 'INSCRIRE UN FILM',
      href: 'https://filmfreeway.com/ganachefestival',
      target: '_blank',
      to: 'page',
    },
    {
      title: 'PARRAIN',
      id: 'parrain',
      to: 'section',
    },
    {
      title: 'ÉQUIPE',
      id: 'equipe',
      to: 'section',
    },
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
  ],

  parrain: {
    gender: 'male',
    title: ['Dali Benssalah,', 'parrain du festival'],
    description:
      'Acteur au cinéma et au théâtre, réalisateur, sportif de haut niveau, Dali est un artiste pluriel que ses goûts ont autant porté autant vers le cinéma d’auteur que les grandes productions internationales. Nous sommes comblé·e·s de compter sur son regard humain, bienveillant et affûté pour accompagner cette édition.',
    affiche: 'https://ganache.studio/media/festival/2026/affiche_parrain.jpeg',
  },

  team: [
    {
      name: 'Adrio',
      image: 'https://ganache.studio/media/festival/staffs/adrio.jpeg',
    },
    {
      name: 'Benjamin',
      image: 'https://ganache.studio/media/festival/staffs/benjamin.jpg',
    },
    {
      name: 'Mathilde',
      image: 'https://ganache.studio/media/festival/staffs/mathilde.jpg',
    },
    {
      name: 'Gabriel',
      image: 'https://ganache.studio/media/festival/staffs/gabriel.jpg',
    },
    {
      name: 'Lily',
      image: 'https://ganache.studio/media/festival/staffs/lily.jpg',
    },
  ],
} satisfies FestivalData;
