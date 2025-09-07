import { FestivalData } from './types';

export const festival2024Data = {
  affiche: 'https://ganache.studio/media/festival/2024/affiche_festival.jpeg',
  teaser: 'https://player.vimeo.com/video/931124635?h=89588603ba&title=0&byline=0&portrait=0',

  photos: [
    'https://ganache.studio/media/festival/2024/photos/1.jpeg',
    'https://ganache.studio/media/festival/2024/photos/2.jpeg',
    'https://ganache.studio/media/festival/2024/photos/3.jpeg',
    'https://ganache.studio/media/festival/2024/photos/4.jpeg',
    'https://ganache.studio/media/festival/2024/photos/5.jpeg',
    'https://ganache.studio/media/festival/2024/photos/6.jpeg',
    'https://ganache.studio/media/festival/2024/photos/7.jpeg',
    'https://ganache.studio/media/festival/2024/photos/8.jpeg',
  ],

  navigationItems: [
    {
      title: 'PRÉSENTATION',
      id: 'presentation',
      to: 'section',
    },
    {
      title: 'PROGRAMME',
      id: 'programme',
      to: 'section',
    },
    {
      title: 'LA SÉLECTION',
      id: 'selection',
      to: 'section',
    },
    {
      title: 'MARRAINE',
      id: 'parrain',
      to: 'section',
    },
    {
      title: 'ÉQUIPE',
      id: 'equipe',
      to: 'section',
    },
    {
      title: 'PARTENAIRES',
      id: 'partenaires',
      to: 'section',
    },
    {
      title: '1ère ÉDITION',
      href: '/ganache-festival-2023',
      to: 'page',
    },
    {
      title: '3ème ÉDITION',
      href: '/ganache-festival-2025',
      to: 'page',
    },
    {
      title: '4ème ÉDITION',
      href: '/ganache-festival',
      to: 'page',
    },
  ],

  programme: [
    {
      day: 1,
      title: 'VENDREDI 19 AVRIL',
      steps: [
        {
          title: '18H - Ouverture du festival',
        },
        {
          title: "19H - Séance 1 - Animée par l'Éloge",
          films: [
            {
              title: 'LORRAINE',
              text: "de Milena Beurer-Doenst - 12'",
            },
            {
              title: 'GWENDOLINE',
              text: "de Joaquim Bayle - 22'",
            },
            {
              title: 'AMÉDÉE',
              text: "de Fabian Jestin - 20'",
            },
            {
              title: "L'AMÉRICAIN",
              text: "de Maxime Renard - 23'",
            },
          ],
        },
        {
          title: '21H30 - Séance 2 - Animée par Alex Lutz',
          films: [
            {
              title: 'BABY BLUE',
              text: "de Carla Audebaud & Aurore Levy - 20'",
            },
            {
              title: 'NATURE ATTACK',
              text: "d'Erik Semashkin - 3'25",
            },
            {
              title: 'PARENTS',
              text: "de Coline Béal - 16'",
            },
            {
              title: 'EN AVANT, EN ARRIÈRE',
              text: "d'Aurore Engel - 18'",
            },
          ],
        },
        {
          title: '23H00 - Soirée',
        },
      ],
    },
    {
      day: 2,
      title: 'SAMEDI 20 AVRIL',
      steps: [
        {
          title: "19H - Séance 3 - Animée par l'équipe du Ganache Festival",
          films: [
            {
              title: 'MINUIT SUR MSN',
              text: "d'Élise Levy - 22'",
            },
            {
              title: 'TOUTES LES DEUX',
              text: "de Clara Lemaire Anspach - 20'",
            },
            {
              title: 'BÂTIMENT Y',
              text: "de Noé Balthazard - 18'",
            },
            {
              title: 'LA DERNIÈRE VALLÉE',
              text: "d'Étienne Mommessin - 23'",
            },
          ],
        },
        {
          title: "21H30 - Séance 4 - Animée par l'équipe du Ganache Festival",
          films: [
            {
              title: 'ANDY ET CHARLIE',
              text: "de Livia Lattanzio - 21'",
            },
            {
              title: 'NOUS LES SINGES',
              text: "de Clarence Larrivoire - 19'",
            },
            {
              title: 'LONELY PEOPLE ENVY LONELY PEOPLE',
              text: "de Melchior Leroux - 6'",
            },
            {
              title: "RIEN N'EST GRAVE",
              text: "de Bastien Achard - 13'",
            },
          ],
        },
        {
          title: '23H00 - Soirée',
        },
      ],
    },
  ],

  selection: [
    {
      title: 'AMÉDÉE',
      director: 'Fabian Jestin',
      duration: "20'",
      synopsis:
        "En 1952, Amédée, le parrain du grand-père du cinéaste, s'est donné la mort en se jetant dans la Seine. Personne ne connaît la raison de cet acte tragique. Son histoire nous parvient par bribes, par fragments de souvenirs.",
      image: 'https://ganache.studio/media/festival/2024/films/AMDE.jpg',
    },
    {
      title: 'ANDY ET CHARLIE',
      director: 'Livia Lattanzio',
      duration: "21'",
      synopsis:
        "Andy et Charlie se produisent sur scène dans des numéros érotiques. L'été, loin du cabaret, les deux jeunes femmes s'interrogent frontalement et inventent leurs itinéraires.",
      image: 'https://ganache.studio/media/festival/2024/films/A&C.jpg',
    },
    {
      title: 'BABY BLUE',
      director: 'Carla Audebaud & Aurore Levy',
      duration: "20'",
      synopsis:
        "Aurore et Carla sont proches depuis l'enfance, des amies inséparables. Mais depuis quelques mois, le duo s'est transformé en trio, Carla est devenue maman. L'amitié forte et exclusive des filles résistera-t-elle ?",
      image: 'https://ganache.studio/media/festival/2024/films/BB.jpg',
    },
    {
      title: 'BÂTIMENT Y',
      director: 'Noé Balthazard',
      duration: "18'",
      synopsis: "Un agent d'entretien erre seul dans un immense bâtiment vide.",
      image: 'https://ganache.studio/media/festival/2024/films/BY.jpg',
    },
    {
      title: 'EN AVANT, EN ARRIÈRE',
      director: 'Aurore Engel',
      duration: "18'",
      synopsis:
        "Basile vient de se faire quitter après avoir trompé Diane avec Zoé … pour reconquérir son ex-copine, une seule solution selon lui : que ce soit Zoé qui aille faire comprendre à Diane qu'entre eux, ce n'était qu'un coup d'un soir.",
      image: 'https://ganache.studio/media/festival/2024/films/EAEA.png',
    },
    {
      title: 'GWENDOLINE',
      director: 'Joaquim Bayle',
      duration: "22'",
      synopsis:
        "Errant sur leur vélo tandem et armés de leur désespoir, Micka et Pierre, jeune duo d'un groupe de post-punk, recherchent désespérément leur public.",
      image: 'https://ganache.studio/media/festival/2024/films/GWENDOLINE.jpg',
    },
    {
      title: "L'AMÉRICAIN",
      director: 'Maxime Renard',
      duration: "23'",
      synopsis:
        "Pour tromper l'ennui et attirer l'attention, Malik annonce à trois jeunes de son quartier qu'il va partir aux USA. Il ment, mais la nouvelle fait rapidement le tour du quartier et Malik devient un symbole d'espoir et de fierté pour tout le monde.",
      image: 'https://ganache.studio/media/festival/2024/films/AMERICAIN.jpg',
    },
    {
      title: 'LA DERNIÈRE VALLÉE',
      director: 'Étienne Mommessin',
      duration: "23'",
      synopsis:
        "Alors que Abdou traverse avec difficulté́ les Alpes en quête de liberté, il croise la route d'un vieil homme qui vit seul, reclus dans la forêt. Une rencontre éphémère qui laissera une trace chez les deux hommes.",
      image: 'https://ganache.studio/media/festival/2024/films/LDV.jpg',
    },
    {
      title: 'LONELY PEOPLE ENVY LONELY PEOPLE',
      director: 'Melchior Leroux',
      duration: "6'",
      synopsis:
        'De la genèse de la Terre sont nées les premières âmes. Seules, elles cherchent à tout prix à former un tout.',
      image: 'https://ganache.studio/media/festival/2024/films/LPELP.jpg',
    },
    {
      title: 'LORRAINE',
      director: 'Milena Beurer-Doenst',
      duration: "12'",
      synopsis:
        "Lorraine, une jeune mannequin de vingt-trois ans, rend visite à sa mère dans sa maison d'enfance. Durant son séjour, elle va s'avouer la vraie raison de sa venue.",
      image: 'https://ganache.studio/media/festival/2024/films/LORRAINE.jpeg',
    },
    {
      title: 'MINUIT SUR MSN',
      director: 'Élise Levy',
      duration: "22'",
      synopsis:
        "2008, le début de l'été, la fin de la cinquième. La nuit, Laure parle secrètement à Alix sur msn. Mais le jour, dans leur collège de filles, elle l'évite - comme tout le monde. Quand Laure invite Alix à venir chez elle après les cours, quelque chose change entre elles.",
      image: 'https://ganache.studio/media/festival/2024/films/MINUIT.jpg',
    },
    {
      title: 'NATURE ATTACK',
      director: 'Erik Semashkin',
      duration: "3'25",
      synopsis: 'Un oiseau décide de chasser les grillons, mais sa traversée sera plus compliquée que prévu.',
      image: 'https://ganache.studio/media/festival/2024/films/NA.jpg',
    },
    {
      title: 'NOUS LES SINGES',
      director: 'Clarence Larrivoire',
      duration: "19'",
      synopsis:
        "Dimitri et Pierrot partent faire de l'accrobranche. En mal d'amour, ils aimeraient devenir de véritables aventuriers pour gagner le cœur des femmes, mais leur baudrier trop serré à l'entrejambe leur impose un inconfort qui va les conduire à remettre tout leur mode de vie en question.",
      image: 'https://ganache.studio/media/festival/2024/films/NLS.jpg',
    },
    {
      title: 'PARENTS',
      director: 'Coline Béal',
      duration: "16'",
      synopsis:
        'Des parents sondent le passé pour tenter de comprendre la journée qui changea à jamais leur vie et celle de leur fille.',
      image: 'https://ganache.studio/media/festival/2024/films/PARENTS.jpeg',
    },
    {
      title: "RIEN N'EST GRAVE",
      director: 'Bastien Achard',
      duration: "13'",
      synopsis:
        "Alex, 25 ans, jeune femme nostalgique, retrouve Léo, son premier amour, le temps d'une soirée. Cinq ans se sont écoulés depuis leur séparation.",
      image: 'https://ganache.studio/media/festival/2024/films/RNEG.jpg',
    },
    {
      title: 'TOUTES LES DEUX',
      director: 'Clara Lemaire Anspach',
      duration: "20'",
      synopsis:
        "Alma le sait. Si sa mère persiste à ne pas vouloir prendre le nouveau traitement qu'on lui propose, elle mourra. Elle n'a donc qu'une idée en tête : la faire changer d'avis alors qu'elles roulent toutes deux vers la Drôme.",
      image: 'https://ganache.studio/media/festival/2024/films/TLD.jpg',
    },
  ],

  parrain: {
    gender: 'male',
    title: ['Alex Lutz,', 'parrain du festival'],
    description:
      'Alex Lutz est le parrain de la seconde édition du Ganache Festival. Acteur, auteur, réalisateur, metteur en scène, humoriste, romancier, son parcours complet et fédérateur nous inspire. Nous sommes fiers de compter sur son regard pour accompagner notre événement.',
    affiche: 'https://ganache.studio/media/festival/2024/affiche_parrain.jpeg',
    teaser: 'https://player.vimeo.com/video/938149440?h=2631b72169&title=0&byline=0&portrait=0',
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
    {
      name: 'Aurélien',
      image: 'https://ganache.studio/media/festival/staffs/aurelien.jpg',
    },
  ],

  partners: [
    {
      name: "L'Éloge",
      image: 'https://ganache.studio/media/festival/partenaires/E.png',
      url: 'https://www.instagram.com/l_eloge_/',
    },
    {
      name: 'Le Grand Action',
      image: 'https://ganache.studio/media/festival/partenaires/GA.jpg',
      url: 'https://www.legrandaction.com/',
    },
    {
      name: 'MF',
      image: 'https://ganache.studio/media/festival/partenaires/MF.png',
    },
    {
      name: 'Movin Motion',
      image: 'https://ganache.studio/media/festival/partenaires/MM.png',
      url: 'https://www.movinmotion.com/',
    },
    {
      name: 'Paume',
      image: 'https://ganache.studio/media/festival/partenaires/P.png',
      url: 'https://paume.paris',
    },
    {
      name: 'Périscope',
      image: 'https://ganache.studio/media/festival/partenaires/PR.png',
      url: 'https://www.instagram.com/filmsduperiscope/',
    },
    {
      name: 'Pleine Image',
      image: 'https://ganache.studio/media/festival/partenaires/PI.png',
      url: 'https://www.pleineimage-loc.com/',
    },
    {
      name: 'Roi René',
      image: 'https://ganache.studio/media/festival/partenaires/RR.png',
      url: 'https://www.the-social-club.com/destinations/roi-rene/',
    },
  ],
} satisfies FestivalData;
