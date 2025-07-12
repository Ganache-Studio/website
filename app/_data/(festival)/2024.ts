import { FestivalData } from '../../_types/festival-data.types';

export const festival2024Data: FestivalData = {
  year: '2024',
  edition: '2ème',
  description: `La seconde édition du Ganache Festival s'est tenue les 19 et 20 avril 2024 à Paris. Une fois de plus, la grande salle du Grand Action était comble tout le week-end. La sélection, paritaire et particulièrement éclectique, a rencontré un public divers et festif qui a volontiers prolongé ces deux soirées autour d'un – ou plusieurs – verres. Ganache Studio remercie du fond du cœur les spectateur·ice·s, les artistes venu·e·s présenter leurs films, les partenaires pour leur généreux soutien, et notre parrain Alex Lutz pour son implication sincère. À l'année prochaine !`,

  presentation: {
    posterUrl:
      'https://ganache.studio/images/festival/2024/affiche_festival.jpeg',
    teaserUrl:
      'https://player.vimeo.com/video/931124635?h=89588603ba&title=0&byline=0&portrait=0',
  },

  photos: [
    'https://ganache.studio/images/festival/2024/photos/1.jpeg',
    'https://ganache.studio/images/festival/2024/photos/2.jpeg',
    'https://ganache.studio/images/festival/2024/photos/3.jpeg',
    'https://ganache.studio/images/festival/2024/photos/4.jpeg',
    'https://ganache.studio/images/festival/2024/photos/5.jpeg',
    'https://ganache.studio/images/festival/2024/photos/6.jpeg',
    'https://ganache.studio/images/festival/2024/photos/7.jpeg',
    'https://ganache.studio/images/festival/2024/photos/8.jpeg',
  ],

  programme: [
    {
      day: 1,
      text: 'VENDREDI 19 AVRIL',
      steps: [
        {
          text: '18H - Ouverture du festival',
        },
        {
          text: "19H - Séance 1 - Animée par l'Éloge",
          films: [
            {
              html: "<i>LORRAINE</i> de Milena Beurer-Doenst - 12'",
            },
            {
              html: "<i>GWENDOLINE</i> de Joaquim Bayle - 22'",
            },
            {
              html: "<i>AMÉDÉE</i> de Fabian Jestin - 20'",
            },
            {
              html: "<i>L'AMÉRICAIN</i> de Maxime Renard - 23'",
            },
          ],
        },
        {
          text: '21H30 - Séance 2 - Animée par Alex Lutz',
          films: [
            {
              html: "<i>BABY BLUE</i> de Carla Audebaud & Aurore Levy - 20'",
            },
            {
              html: "<i>NATURE ATTACK</i> d'Erik Semashkin - 3'25",
            },
            {
              html: "<i>PARENTS</i> de Coline Béal - 16'",
            },
            {
              html: "<i>EN AVANT, EN ARRIÈRE</i> d'Aurore Engel - 18'",
            },
          ],
        },
        {
          text: '23H00 - Soirée',
        },
      ],
    },
    {
      day: 2,
      text: 'SAMEDI 20 AVRIL',
      steps: [
        {
          text: "19H - Séance 3 - Animée par l'équipe du Ganache Festival",
          films: [
            {
              html: "<i>MINUIT SUR MSN</i> d'Élise Levy - 22'",
            },
            {
              html: "<i>TOUTES LES DEUX</i> de Clara Lemaire Anspach - 20'",
            },
            {
              html: "<i>BÂTIMENT Y</i> de Noé Balthazard - 18'",
            },
            {
              html: "<i>LA DERNIÈRE VALLÉE</i> d'Étienne Mommessin - 23'",
            },
          ],
        },
        {
          text: "21H30 - Séance 4 - Animée par l'équipe du Ganache Festival",
          films: [
            {
              html: "<i>ANDY ET CHARLIE</i> de Livia Lattanzio - 21'",
            },
            {
              html: "<i>NOUS LES SINGES</i> de Clarence Larrivoire - 19'",
            },
            {
              html: "<i>LONELY PEOPLE ENVY LONELY PEOPLE</i> de Melchior Leroux - 6'",
            },
            {
              html: "<i>RIEN N'EST GRAVE</i> de Bastien Achard - 13'",
            },
          ],
        },
        {
          text: '23H00 - Soirée',
        },
      ],
    },
  ],

  films: [
    {
      title: 'AMÉDÉE',
      director: 'Fabian Jestin',
      duration: "20'",
      synopsis:
        "En 1952, Amédée, le parrain du grand-père du cinéaste, s'est donné la mort en se jetant dans la Seine. Personne ne connaît la raison de cet acte tragique. Son histoire nous parvient par bribes, par fragments de souvenirs.",
      imageUrl: 'https://ganache.studio/images/festival/2024/films/AMDE.jpg',
    },
    {
      title: 'ANDY ET CHARLIE',
      director: 'Livia Lattanzio',
      duration: "21'",
      synopsis:
        "Andy et Charlie se produisent sur scène dans des numéros érotiques. L'été, loin du cabaret, les deux jeunes femmes s'interrogent frontalement et inventent leurs itinéraires.",
      imageUrl: 'https://ganache.studio/images/festival/2024/films/A&C.jpg',
    },
    {
      title: 'BABY BLUE',
      director: 'Carla Audebaud & Aurore Levy',
      duration: "20'",
      synopsis:
        "Aurore et Carla sont proches depuis l'enfance, des amies inséparables. Mais depuis quelques mois, le duo s'est transformé en trio, Carla est devenue maman. L'amitié forte et exclusive des filles résistera-t-elle ?",
      imageUrl: 'https://ganache.studio/images/festival/2024/films/BB.jpg',
    },
    {
      title: 'BÂTIMENT Y',
      director: 'Noé Balthazard',
      duration: "18'",
      synopsis: "Un agent d'entretien erre seul dans un immense bâtiment vide.",
      imageUrl: 'https://ganache.studio/images/festival/2024/films/BY.jpg',
    },
    {
      title: 'EN AVANT, EN ARRIÈRE',
      director: 'Aurore Engel',
      duration: "18'",
      synopsis:
        "Basile vient de se faire quitter après avoir trompé Diane avec Zoé … pour reconquérir son ex-copine, une seule solution selon lui : que ce soit Zoé qui aille faire comprendre à Diane qu'entre eux, ce n'était qu'un coup d'un soir.",
      imageUrl: 'https://ganache.studio/images/festival/2024/films/EAEA.png',
    },
    {
      title: 'GWENDOLINE',
      director: 'Joaquim Bayle',
      duration: "22'",
      synopsis:
        "Errant sur leur vélo tandem et armés de leur désespoir, Micka et Pierre, jeune duo d'un groupe de post-punk, recherchent désespérément leur public.",
      imageUrl:
        'https://ganache.studio/images/festival/2024/films/GWENDOLINE.jpg',
    },
    {
      title: "L'AMÉRICAIN",
      director: 'Maxime Renard',
      duration: "23'",
      synopsis:
        "Pour tromper l'ennui et attirer l'attention, Malik annonce à trois jeunes de son quartier qu'il va partir aux USA. Il ment, mais la nouvelle fait rapidement le tour du quartier et Malik devient un symbole d'espoir et de fierté pour tout le monde.",
      imageUrl:
        'https://ganache.studio/images/festival/2024/films/AMERICAIN.jpg',
    },
    {
      title: 'LA DERNIÈRE VALLÉE',
      director: 'Étienne Mommessin',
      duration: "23'",
      synopsis:
        "Alors que Abdou traverse avec difficulté́ les Alpes en quête de liberté, il croise la route d'un vieil homme qui vit seul, reclus dans la forêt. Une rencontre éphémère qui laissera une trace chez les deux hommes.",
      imageUrl: 'https://ganache.studio/images/festival/2024/films/LDV.jpg',
    },
    {
      title: 'LONELY PEOPLE ENVY LONELY PEOPLE',
      director: 'Melchior Leroux',
      duration: "6'",
      synopsis:
        'De la genèse de la Terre sont nées les premières âmes. Seules, elles cherchent à tout prix à former un tout.',
      imageUrl: 'https://ganache.studio/images/festival/2024/films/LPELP.jpg',
    },
    {
      title: 'LORRAINE',
      director: 'Milena Beurer-Doenst',
      duration: "12'",
      synopsis:
        "Lorraine, une jeune mannequin de vingt-trois ans, rend visite à sa mère dans sa maison d'enfance. Durant son séjour, elle va s'avouer la vraie raison de sa venue.",
      imageUrl:
        'https://ganache.studio/images/festival/2024/films/LORRAINE.jpeg',
    },
    {
      title: 'MINUIT SUR MSN',
      director: 'Élise Levy',
      duration: "22'",
      synopsis:
        "2008, le début de l'été, la fin de la cinquième. La nuit, Laure parle secrètement à Alix sur msn. Mais le jour, dans leur collège de filles, elle l'évite - comme tout le monde. Quand Laure invite Alix à venir chez elle après les cours, quelque chose change entre elles.",
      imageUrl: 'https://ganache.studio/images/festival/2024/films/MINUIT.jpg',
    },
    {
      title: 'NATURE ATTACK',
      director: 'Erik Semashkin',
      duration: "3'25",
      synopsis:
        'Un oiseau décide de chasser les grillons, mais sa traversée sera plus compliquée que prévu.',
      imageUrl: 'https://ganache.studio/images/festival/2024/films/NA.jpg',
    },
    {
      title: 'NOUS LES SINGES',
      director: 'Clarence Larrivoire',
      duration: "19'",
      synopsis:
        "Dimitri et Pierrot partent faire de l'accrobranche. En mal d'amour, ils aimeraient devenir de véritables aventuriers pour gagner le cœur des femmes, mais leur baudrier trop serré à l'entrejambe leur impose un inconfort qui va les conduire à remettre tout leur mode de vie en question.",
      imageUrl: 'https://ganache.studio/images/festival/2024/films/NLS.jpg',
    },
    {
      title: 'PARENTS',
      director: 'Coline Béal',
      duration: "16'",
      synopsis:
        'Des parents sondent le passé pour tenter de comprendre la journée qui changea à jamais leur vie et celle de leur fille.',
      imageUrl:
        'https://ganache.studio/images/festival/2024/films/PARENTS.jpeg',
    },
    {
      title: "RIEN N'EST GRAVE",
      director: 'Bastien Achard',
      duration: "13'",
      synopsis:
        "Alex, 25 ans, jeune femme nostalgique, retrouve Léo, son premier amour, le temps d'une soirée. Cinq ans se sont écoulés depuis leur séparation.",
      imageUrl: 'https://ganache.studio/images/festival/2024/films/RNEG.jpg',
    },
    {
      title: 'TOUTES LES DEUX',
      director: 'Clara Lemaire Anspach',
      duration: "20'",
      synopsis:
        "Alma le sait. Si sa mère persiste à ne pas vouloir prendre le nouveau traitement qu'on lui propose, elle mourra. Elle n'a donc qu'une idée en tête : la faire changer d'avis alors qu'elles roulent toutes deux vers la Drôme.",
      imageUrl: 'https://ganache.studio/images/festival/2024/films/TLD.jpg',
    },
  ],

  parrain: {
    gender: 'male',
    title: ['Alex Lutz,', 'parrain du festival'],
    description:
      'Alex Lutz est le parrain de la seconde édition du Ganache Festival. Acteur, auteur, réalisateur, metteur en scène, humoriste, romancier, son parcours complet et fédérateur nous inspire. Nous sommes fiers de compter sur son regard pour accompagner notre événement.',
    posterUrl:
      'https://ganache.studio/images/festival/2024/affiche_parrain.jpeg',
    videoUrl:
      'https://player.vimeo.com/video/938149440?h=2631b72169&title=0&byline=0&portrait=0',
  },

  team: [
    {
      name: 'Adrio',
      imageUrl: 'https://ganache.studio/images/festival/staffs/adrio.jpeg',
    },
    {
      name: 'Benjamin',
      imageUrl: 'https://ganache.studio/images/festival/staffs/benjamin.jpg',
    },
    {
      name: 'Mathilde',
      imageUrl: 'https://ganache.studio/images/festival/staffs/mathilde.jpg',
    },
    {
      name: 'Gabriel',
      imageUrl: 'https://ganache.studio/images/festival/staffs/gabriel.jpg',
    },
    {
      name: 'Lily',
      imageUrl: 'https://ganache.studio/images/festival/staffs/lily.jpg',
    },
    {
      name: 'Aurélien',
      imageUrl: 'https://ganache.studio/images/festival/staffs/aurelien.jpg',
    },
  ],

  partners: [
    {
      name: "L'Éloge",
      imageUrl: 'https://ganache.studio/images/festival/partenaires/E.png',
      url: 'https://www.instagram.com/l_eloge_/',
    },
    {
      name: 'Le Grand Action',
      imageUrl: 'https://ganache.studio/images/festival/partenaires/GA.jpg',
      url: 'https://www.legrandaction.com/',
    },
    {
      name: 'MF',
      imageUrl: 'https://ganache.studio/images/festival/partenaires/MF.png',
    },
    {
      name: 'Movin Motion',
      imageUrl: 'https://ganache.studio/images/festival/partenaires/MM.png',
      url: 'https://www.movinmotion.com/',
    },
    {
      name: 'Paume',
      imageUrl: 'https://ganache.studio/images/festival/partenaires/P.png',
      url: 'https://paume.paris',
    },
    {
      name: 'Périscope',
      imageUrl: 'https://ganache.studio/images/festival/partenaires/PR.png',
      url: 'https://www.instagram.com/filmsduperiscope/',
    },
    {
      name: 'Pleine Image',
      imageUrl: 'https://ganache.studio/images/festival/partenaires/PI.png',
      url: 'https://www.pleineimage-loc.com/',
    },
    {
      name: 'Roi René',
      imageUrl: 'https://ganache.studio/images/festival/partenaires/RR.png',
      url: 'https://www.the-social-club.com/destinations/roi-rene/',
    },
  ],
};
