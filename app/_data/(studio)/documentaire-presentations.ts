import { FilmPresentation } from '../../_types/film-presentation.type';

export const documentairePresentations: FilmPresentation[] = [
  {
    id: 'mortel',
    titles: [
      {
        text: 'MORTEL',
        italic: true,
      },
    ],
    description:
      "Lidvine est conseillère funéraire le jour et biker la nuit. Le temps d'un portrait, elle raconte les coulisses d'une vie à la croisée des morts et des vivants.",
    vimeoUrl:
      'https://player.vimeo.com/video/887722450?title=0&byline=0&portrait=0',
    additionalHtml:
      '<p>Créé et produit par Benjamin Gilet • Réalisé par Julien Thiverny • Musique de Flavien Berger et Lou Rotzinger • En co-production avec Jak Prod (Belgique)</p><p>Distribué par <a href="http://www.manifest.pictures/" target="_blank"><u>Manifest</u></a></p>',
    festivals: [
      'Que du Feu - Festival du Film Émergent de Lyon',
      "Festival International du Film Court d'Angoulême - Mention du Jury",
    ],
  },
  {
    id: 'max-et-sa-guitare',
    titles: [
      {
        text: 'MAX ET SA GUITARE',
        italic: true,
      },
    ],
    description:
      "Deux ans après l'échec de son propre concert, Max repère Maxime et lui propose un défi : en l'espace d'une semaine, il doit composer une chanson et donner son premier concert. Derrière sa caméra, Max participe activement à la préparation de l'aspirant musicien, révélant peu à peu ses propres désirs artistiques inassouvis.",
    imageUrl: 'images/documentaires/max_et_sa_guitare.jpg',
    additionalHtml:
      '<p>Un film de Max Lesage • Produit par Benjamin Gilet • Avec Maxime Crescini<br/>En production',
  },
  {
    id: 'rodrigo',
    titles: [
      {
        text: 'RODRIGO PEÑA, CAPITANO',
        italic: true,
      },
    ],
    imageUrl: 'images/documentaires/rodrigo.jpg',
    additionalHtml:
      "<p>Un documentaire de Thibault Pastierik • Écrit par Thibault Pastierik et Emilio Frignati • Produit par Benjamin Gilet<br/>En développement<br/>Soutenu par la Bourse <i>Brouillon d'un Rêve</i> de la SCAM",
  },
  {
    id: 'capsules-aout',
    titles: [
      {
        text: 'CAPSULE',
      },
      {
        text: 'AOÛT',
        italic: true,
      },
    ],
    description:
      'Après une nuit tourmentée, Yolande apprend une heureuse nouvelle de la bouche de son petit-fils.',
    vimeoUrl:
      'https://player.vimeo.com/video/456740100?title=0&byline=0&portrait=0',
    additionalHtml:
      "<p>Un film d'Aurélien Grellier-Beker • Produit par Benjamin Gilet • Étalonnage de Florian Solin • Mixage de Matthieu Fraticelli<br/>2020</p>",
    showCapsule: true,
  },
  {
    id: 'capsules-fevrier',
    titles: [
      {
        text: 'CAPSULE',
      },
      {
        text: 'FÉVRIER',
        italic: true,
      },
    ],
    description:
      "Yolande passe une journée en compagnie de son petit-fils alors que ses souvenirs s'évaporent.",
    vimeoUrl:
      'https://player.vimeo.com/video/394411387?title=0&byline=0&portrait=0',
    additionalHtml:
      "<p>Un film d'Aurélien Grellier-Beker • Produit par Benjamin Gilet • Étalonnage de Florian Solin • Mixage de Matthieu Fraticelli<br/>2020</p>",
    showCapsule: true,
    festivals: ['Lyon Young Film Festival'],
  },
];
