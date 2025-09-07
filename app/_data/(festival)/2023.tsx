import { FestivalData } from './types';

export const festival2023Data = {
  affiche: 'https://ganache.studio/media/festival/2023/affiche_festival.jpg',
  teaser: 'https://player.vimeo.com/video/814648790?h=be5eba5b39&title=0&byline=0&portrait=0',

  photos: [
    'https://ganache.studio/media/festival/2023/photos/1.jpg',
    'https://ganache.studio/media/festival/2023/photos/2.jpg',
    'https://ganache.studio/media/festival/2023/photos/3.jpg',
    'https://ganache.studio/media/festival/2023/photos/4.jpg',
    'https://ganache.studio/media/festival/2023/photos/5.jpg',
    'https://ganache.studio/media/festival/2023/photos/6.jpg',
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
      title: '2ème ÉDITION',
      href: '/ganache-festival-2024',
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
      title: 'VENDREDI 21 AVRIL',
      steps: [
        {
          title: '18H - Ouverture du festival',
        },
        {
          title: '18H30 - Séance 1',
          films: [
            {
              title: 'LES VACANCES',
              text: "d'Emmanuelle Bercot - 18'",
            },
            {
              title: 'QUAND ON AIME IL FAUT PARTIR',
              text: "de Joseph Rozé & Pablo Cotten - 24'",
            },
            {
              title: 'FLOWER IN A SHELL',
              text: "de Floriane De Gracia & Alexis Braun - 9'",
            },
            {
              title: 'SUCCULENTE',
              text: "d'Eliott Margueron - 15'",
            },
            {
              title: 'AVANT-GARDE',
              text: "de Maxime Azzopardi et Adrien Guedra-Degeorges - 15'",
            },
          ],
        },
        {
          title: '21H00 - Séance 2',
          films: [
            {
              title: 'JEANNE DINDE',
              text: "de Pauline Ouvrard - 22'",
            },
            {
              title: "T'ES EN VOIE D'EXTINCTION",
              text: "de Julien Crampon - 5'",
            },
            {
              title: 'CARLA',
              text: "de Kamel Guemra - 20'",
            },
            {
              title: 'LE CADDIE',
              text: "de Nicolas Rimaud - 16'",
            },
            {
              title: 'SUPER NOVA',
              text: "de Juliette Saint-Sardos - 16'",
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
      title: 'SAMEDI 22 AVRIL',
      steps: [
        {
          title: '18H30 - Séance 3',
          films: [
            {
              title: 'LES GRANDES VACANCES',
              text: "de Valentine Cadic - 26'",
            },
            {
              title: 'VRAI GARS',
              text: "de Jean-Baptiste Durand - 18'",
            },
            {
              title: 'PEMA',
              text: "de Victoria Neto - 19'",
            },
            {
              title: 'DOUBLE JE',
              text: "d'Antonin Chalon - 23'",
            },
          ],
        },
        {
          title: '21H00 - Séance 4',
          films: [
            {
              title: 'RAPIDE',
              text: "de Paul Rigoux - 25'",
            },
            {
              title: 'LA CANICULE',
              text: "de Tyliann Tondeur-Grozdanovitch - 13'",
            },
            {
              title: 'VILLE ÉTERNELLE',
              text: "de Garance Kim - 20'",
            },
            {
              title: 'HYPERNORMALITY',
              text: "de Jordan Illel Cardoso - 15'",
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
      title: 'AVANT-GARDE',
      director: 'Maxime Azzopardi & Adrien Guedra-Degeorges',
      duration: "15'",
      synopsis:
        "Frontière franco-allemande. Felix Linneman, un galeriste berlinois, se rend en France pour une exposition. Il transporte avec lui la sculpture phare de sa collection. Face à l'objet, le douanier français hésite : s'agit-il vraiment d'une œuvre d'art ?",
      image: 'https://ganache.studio/media/festival/2023/films/AG.jpg',
    },
    {
      title: 'CARLA',
      director: 'Kamel Guemra',
      duration: "20'",
      synopsis:
        "Carla tente de fuir son compagnon François, visiblement violent. Mais celui-ci la rattrape et la force à rentrer chez eux. Jalil, un chauffeur privé, les attend. D'abord hésitant, puis en proie au doute, Jalil se demande comment il peut aider la jeune femme.",
      image: 'https://ganache.studio/media/festival/2023/films/CAR.jpeg',
    },
    {
      title: 'DOUBLE JE',
      director: 'Antonin Chalon',
      duration: "23'",
      synopsis:
        "Liam, un jeune acteur, arrive dans une troupe de théâtre avec une admiration folle pour sa future partenaire de scène Eléa. Pourtant, sous l'œil anxiogène du metteur en scène, Liam se perd rapidement entre la pièce et sa réalité, ses souvenirs et la fiction se confondant.",
      image: 'https://ganache.studio/media/festival/2023/films/DJ.jpg',
    },
    {
      title: 'FLOWER IN A SHELL',
      director: 'Floriane De Gracia & Alexis Braun',
      duration: "9'",
      synopsis:
        "Étrange animal que la femme, cette créature si délicate qui fait penser à une fleur. Observons de plus près le phénomène d'éclosion qui la porte au monde. Voici un individu encore dans sa coquille. Bientôt la jeune femme va sortir et entamer la mue qui lui donnera sa forme adulte.",
      image: 'https://ganache.studio/media/festival/2023/films/FIS.jpeg',
    },
    {
      title: 'HYPERNORMALITY',
      director: 'Jordan Illel Cardoso',
      duration: "15'",
      synopsis:
        "Hypernormality est une exploration poétique de l'amour familial au sein d'une planète inhospitalière, conçue comme une réflexion sur les problèmes actuels auxquels sont confrontés les humains sur Terre. Dans un monde plein de contradictions, le court métrage aborde une multitude de thèmes existentiels à travers un prisme tendre et parfois satirique.",
      image: 'https://ganache.studio/media/festival/2023/films/HN.jpeg',
    },
    {
      title: 'JEANNE DINDE',
      director: 'Pauline Ouvrard',
      duration: "22'",
      synopsis:
        "À 13 ans, Jeanne est restée une enfant. Sa seule amie, une dinde qui vit dans son jardin et lui parle dans sa tête, lui martèle que grandir, c'est se trahir. Mais au collège, Jeanne est troublée par Laurène, qui lui inspire des envies de changement. La dinde va tout faire pour s'y opposer. Quitte à ce que ça fasse mal.",
      image: 'https://ganache.studio/media/festival/2023/films/JD.jpeg',
    },
    {
      title: 'LA CANICULE',
      director: 'Tyliann Tondeur-Grozdanovitch',
      duration: "13'",
      synopsis:
        "Coupé du monde, Ferdinand vit avec sa famille dans un petit village de campagne. Depuis la mort de sa mère, Ferdinand est plongé dans un profond silence. Un jour d'été, il décide de tout arrêter.",
      image: 'https://ganache.studio/media/festival/2023/films/CAN.jpeg',
    },
    {
      title: 'LE CADDIE',
      director: 'Nicolas Rimaud',
      duration: "16'",
      synopsis:
        'William fait ses courses au supermarché. Rien de plus banal, excepté que les produits de son caddie ne cessent de disparaître…',
      image: 'https://ganache.studio/media/festival/2023/films/LC.jpeg',
    },
    {
      title: 'LES GRANDES VACANCES',
      director: 'Valentine Cadic',
      duration: "26'",
      synopsis:
        "Blandine passe ses vacances seule dans un petit camping au pied des montagnes. Elle est rapidement envahie par le bruit, la foule et la pluie qu'elle cherchait à fuir le temps d'un été. Au bord du lac, Blandine rencontre Helio un jeune journaliste local.",
      image: 'https://ganache.studio/media/festival/2023/films/LGV.jpeg',
    },
    {
      title: 'LES VACANCES',
      director: 'Emmanuelle Bercot',
      duration: "18'",
      synopsis:
        "À la venue des vacances, Anne n'a pas assez d'argent pour emmener sa fille, Mélody, passer quelques jours loin de la petite ville de province où elles vivent. Elle se heurte à l'incompréhension de sa fille et va tout faire pour trouver la somme nécessaire.",
      image: 'https://ganache.studio/media/festival/2023/films/LV.png',
    },
    {
      title: 'PEMA',
      director: 'Victoria Neto',
      duration: "19'",
      synopsis:
        "Murphy, jeune fille noire d'origine congolaise, souffre de dépression. Du haut de ses 20 ans, elle ne trouve pas la force d'affronter sa mère et de lui avouer son mal-être. Face à une famille particulièrement religieuse et attachée aux apparences, Murphy n'a d'autre choix pour survivre que de se cacher dans son lit.",
      image: 'https://ganache.studio/media/festival/2023/films/PEMA.jpg',
    },
    {
      title: 'QUAND ON AIME, IL FAUT PARTIR',
      director: 'Joseph Rozé & Pablo Cotten',
      duration: "24'",
      synopsis:
        "Lucien, la vingtaine, vit son dernier jour de tournage dans la chaleur de l'été. C'est sa première expérience sur un plateau de cinéma, et lorsque Adèle, à qui il donne la réplique dans le film, lui propose de l'embrasser pendant une scène, la confusion l'envahit. Comment ne pas se perdre entre le jeu et la réalité ?",
      image: 'https://ganache.studio/media/festival/2023/films/QOAIFP.jpg',
    },
    {
      title: 'RAPIDE',
      director: 'Paul Rigoux',
      duration: "25'",
      synopsis:
        "Jean est un « lent », il construit sa vie autour de ses angoisses, et se considère inadapté à la vie en société. Il vit en colocation avec Alex, qui lui, est un « rapide ». Passionné par l'aérodynamisme et l'eurodance, Alex vit vite, se pose le moins de questions possible. Un matin, il reçoit chez eux une amie « rapide », Lou, alors que Jean avait lui aussi prévu de recevoir une amie « lente », Caroline.",
      image: 'https://ganache.studio/media/festival/2023/films/RAP.jpeg',
    },
    {
      title: 'SUCCULENTE',
      director: 'Eliott Margueron',
      duration: "15'",
      synopsis:
        "Guillaume, la trentaine, vit seul dans une tour HLM. Il passe ses journées à rêver et à imaginer sa vie sans jamais oser la vivre, jusqu'au jour où Abel et Jeanne, un jeune couple, emménagent au-dessus de chez lui. Il commence à projeter sur eux sa propre existence et s'engage alors un trio amoureux fantasmé par Guillaume, rendu possible par la promiscuité des grandes villes et exacerbé par la solitude du jeune homme. Au moment de goûter à cette nouvelle réalité, le fantasme se révèle bien plus important.",
      image: 'https://ganache.studio/media/festival/2023/films/SUC.jpg',
    },
    {
      title: 'SUPER NOVA',
      director: 'Juliette Saint-Sardos',
      duration: "16'",
      synopsis:
        "Sasha traverse Marseille des hauteurs de son immeuble jusqu'au port. La ville est belle, vivante, ensoleillée, bétonnée. La marche de Sasha est un enchevêtrement d'oeillades, de silences empesés et de bourrasques citadines. Arrivée sur la jetée du MUCEM, elle attend quelqu'un qui ne vient pas...",
      image: 'https://ganache.studio/media/festival/2023/films/SN.jpg',
    },
    {
      title: "T'ES EN VOIE D'EXTINCTION",
      director: 'Julien Crampon',
      duration: "5'",
      synopsis: "Deux amis prennent le temps d'observer une dernière fois le monde.",
      image: 'https://ganache.studio/media/festival/2023/films/TEVDE.jpeg',
    },
    {
      title: 'VILLE ÉTERNELLE',
      director: 'Garance Kim',
      duration: "20'",
      synopsis:
        "Jour férié, au milieu du 77 : Lili attend un bus pour aller à l'aéroport. Elle croise Thibault, ancien camarade de collège dont elle n'a aucun souvenir. Le bus ne passe pas et elle décide d'y aller à pied. Thibault l'accompagne malgré elle. Ils vont alors se \"re-rencontrer\", et se lier.",
      image: 'https://ganache.studio/media/festival/2023/films/VE.jpeg',
    },
    {
      title: 'VRAI GARS',
      director: 'Jean-Baptiste Durand',
      duration: "18'",
      synopsis:
        "Sami et Julie, la vingtaine, vivent en couple dans un petit village du sud de la France. Ce soir-là, ils s'apprêtent à tourner le clip du nouveau morceau de Sami, mais les choses s'annoncent plus compliquées que prévu...",
      image: 'https://ganache.studio/media/festival/2023/films/VG.jpeg',
    },
  ],

  parrain: {
    gender: 'female',
    title: ['Emmanuelle Bercot,', 'marraine du festival'],
    description:
      "Nous sommes heureux d'annoncer qu'Emmanuelle Bercot est la marraine de la première édition du Ganache Festival ! Réalisatrice, comédienne et scénariste exigeante, Emmanuelle Bercot a été révélée en 1997 en remportant le prix du jury à Cannes pour son court métrage Les Vacances, que nous projetterons en ouverture du festival. Nous sommes fiers de compter sur son regard expérimenté et bienveillant pour accompagner cet événement.",
    affiche: 'https://ganache.studio/media/festival/2023/affiche_parrain.jpg',
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
