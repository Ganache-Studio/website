import { FestivalData } from './types';

export const festival2026Data = {
  affiche: 'https://ganache.studio/media/festival/2026/affiche_festival.jpg',

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
      title: 'PARTENAIRES',
      id: 'partenaires',
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

  programme: [
    {
      day: 1,
      title: 'VENDREDI 24 AVRIL',
      steps: [
        {
          title: '19H - Séance 1',
          films: [
            {
              title: "L'ÎLE",
              text: "de Félicien Forest - 22'",
            },
            {
              title: 'LA FILLE À LA RECHERCHE DE LA CABANE ',
              text: "de Phane Montet - 30'",
            },
            {
              title: 'LE RAYON EST VERT',
              text: "de Marion Renerre - 4'",
            },
            {
              title: 'RDV',
              text: "de Jules Cottier - 24'",
            },
          ],
        },
        {
          title: '21H - Séance 2',
          films: [
            {
              title: 'MALINA',
              text: "d’Ana Blagojević - 22'",
            },
            {
              title: 'BICHE',
              text: "de Yoann Hebert - 12'",
            },
            {
              title: 'LADY ATTILA',
              text: "d’Apolline Andreys - 25'",
            },
            {
              title: 'EXSANGUINA',
              text: "de Jonas Brisé - 26'",
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
      title: 'SAMEDI 25 AVRIL',
      steps: [
        {
          title: '19H - Séance 3',
          films: [
            {
              title: 'ASSIS, PAS BOUGER !',
              text: "de Camille Dumortier - 22'",
            },
            {
              title: '20 ANS ET UN SCOOTER',
              text: "de Tanguy Malaterre - 18'",
            },
            {
              title: 'LA CONVERSATION',
              text: "de Najla Barouni et Julie Sanchez - 14'",
            },
            {
              title: 'LA DERNIÈRE NEIGE',
              text: "de Rodolphe Bouquet-Populus - 20'",
            },
          ],
        },
        {
          title: '21H - Séance 4',
          films: [
            {
              title: 'POURQUOI PARLEZ-VOUS SI BAS ?',
              text: "de Pauline Broulis et Zoé Labasse - 25'",
            },
            {
              title: 'DIEU EST TIMIDE',
              text: "de Jocelyn Charles - 15'",
            },
            {
              title: 'TOUT L’OR DU MONDE',
              text: "de Nadia Boudaoud - 17'",
            },
            {
              title: 'LA GRANDE ENVIE',
              text: "de Julien Aveque - 23'",
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
      title: "L'ÎLE",
      director: 'Félicien Forest',
      duration: '22',
      image: 'https://ganache.studio/media/festival/2026/films/1_L_ile.png',
      synopsis:
        "Dans l'espace éthéré d'une aire d’autoroute paumée, Sami, employé de la station, rêve de faire une rencontre qui l’emportera loin d'ici. Stéphane, son manager, qui a depuis longtemps sombré dans une routine ennuyeuse, tente de garder le contrôle sur lui afin de ne pas finir seul. Le quotidien de ce duo de naufragés de l’A10 est bousculé quand une voyageuse est contrainte de rester quelques heures sur l’aire en attendant un mécanicien.",
    },
    {
      title: 'LA GRANDE ENVIE',
      director: 'Julien Aveque',
      duration: '23',
      image: 'https://ganache.studio/media/festival/2026/films/2_La_grande_envie.jpg',
      synopsis:
        'Francis, 15 ans, prépare sa chambre pour une masturbation en bonne et due forme devant les photos Instagram d’une jeune fille. Alors qu’il commence tout juste sa course, il apprend la mort de son grand-père. Entre tristesse et pulsion sexuelle, Francis continue malgré tout son entreprise, mais tout va se mettre en travers de sa quête : sa mère, son voisin, et la jeune fille d’Instagram elle-même.',
    },
    {
      title: 'BICHE',
      director: 'Yoann Hebert',
      duration: '12',
      image: 'https://ganache.studio/media/festival/2026/films/3_Biche.jpg',
      synopsis:
        'Week-end entre copains.ines, lendemain de soirée. Alors que Bixente regrette d’avoir couché avec une amie hier, il se retrouve confronté à ses copains qui ne comprennent pas son manque d’enthousiasme.',
    },
    {
      title: 'DIEU EST TIMIDE',
      director: 'Jocelyn Charles',
      duration: '15',
      image: 'https://ganache.studio/media/festival/2026/films/4_Dieu_est_timide.jpg',
      synopsis:
        "Lors d'un voyage en train, Ariel et Paul s'amusent à dessiner leurs plus grandes peurs lorsque Gilda, une étrange passagère, s'invite dans leurs confidences. Son expérience de la peur ne semble néanmoins pas aussi innocente que leurs dessins.",
    },
    {
      title: 'LA DERNIÈRE NEIGE',
      director: 'Rodolphe Bouquet-Populus',
      duration: '20',
      image: 'https://ganache.studio/media/festival/2026/films/5_La_dernière_neige.jpg',
      synopsis:
        'Dans une station de ski où la neige manque, Isabelle et Guillaume se retrouvent pris au piège sur un télésiège.',
    },
    {
      title: 'RDV',
      director: 'Jules Cottier',
      duration: '24',
      image: 'https://ganache.studio/media/festival/2026/films/6_RDV.png',
      synopsis:
        "C’est la pagaille au Tutti Frutti, où Gaby et Ali s’écharpent derrière le comptoir. Gaby ignore que l’amoureux-mystère avec qui elle échange des messages enflammés n’est autre son affreux collègue. Victime de ses passions contradictoires, elle s'interroge : qu’est-ce qui, chez ce benêt insupportable, a bien pu la charmer ?",
    },
    {
      title: 'EXSANGUINA',
      director: 'Jonas Brisé',
      duration: '26',
      image: 'https://ganache.studio/media/festival/2026/films/7_Exsanguina.jpg',
      synopsis:
        'Laura, 22 ans, est invitée à Paris pour rencontrer son influenceuse préférée, Isïa. Caméra à la main, elle filme chaque instant de son week-end dans le but d’en faire son premier vlog. Mais derrière les paillettes et les stories Instagram se cache une réalité bien plus glaçante. Ce qui devait être la rencontre de son idole, se transforme peu à peu en une descente aux enfers.',
    },
    {
      title: 'ASSIS, PAS BOUGER !',
      director: 'Camille Dumortier',
      duration: '22',
      image: 'https://ganache.studio/media/festival/2026/films/8_Assis_pas_bouger.jpg',
      synopsis:
        'Zoé, 7 ans, s’ennuie pendant les vacances d’été. Sa chienne, Gouache n’en fait qu’à sa tête, tandis que sa mère passe tout son temps à boucler l’écriture de son dernier roman autobiographique. Heureusement que Betty, leur voisine est là pour passer le temps !',
    },
    {
      title: 'LE RAYON EST VERT',
      director: 'Marion Renerre',
      duration: '4',
      image: 'https://ganache.studio/media/festival/2026/films/9_Le_rayon_est_vert.png',
      synopsis:
        "Alors qu'elle est avec son amie Yass, Mia se remémore ce moment où elle a dansé avec Léo pendant la fête de son quartier. Quelques secondes suffisent pour qu'ils fassent corps, ensemble, avec la musique.",
    },
    {
      title: 'LA CONVERSATION',
      director: 'Najla Barouni et Julie Sanchez',
      duration: '14',
      image: 'https://ganache.studio/media/festival/2026/films/10_La_conversation.jpg',
      synopsis:
        "Lola, 83 ans, vit seule. De sa propre initiative, elle dialogue avec ChatGPT, qu'elle a baptisé « Carmen », et lui livre des pensées qu'elle n'ose plus confier à ses enfants pour ne pas les inquiéter.",
    },
    {
      title: "TOUT L'OR DU MONDE",
      director: 'Nadia Boudaoud',
      duration: '17',
      image: 'https://ganache.studio/media/festival/2026/films/11_Tout_lor_du_monde.jpg',
      synopsis:
        'Manu, 39 ans, est amoureux. Ce soir, il invite - enfin ! - sa copine à la maison. Il s’apprête à ouvrir la porte, mais le verrou est bloqué de l’intérieur.',
    },
    {
      title: 'POURQUOI PARLEZ-VOUS SI BAS ?',
      director: 'Pauline Broulis et Zoe Labasse',
      duration: '2(',
      image: 'https://ganache.studio/media/festival/2026/films/12_Pourquoi_parlez-vous_si_bas.jpg',
      synopsis:
        'Été 1583. Obsédé par l’idée d’avoir un héritier, un riche marchand fait vivre un enfer à sa jeune épouse, Isabelle. Charlotte, sa femme de chambre, décide d’agir. Dans l’ombre de la grande maison, les domestiques s’organisent en secret.',
    },
    {
      title: 'LADY ATTILA',
      director: 'Apolline Andreys',
      duration: '25',
      image: 'https://ganache.studio/media/festival/2026/films/13_Lady_Attila.jpg',
      synopsis:
        'Agathe aime les tracteurs, et le rock ! Elle travaille dans le garage agricole familial avec son père et son grand frère. Alors qu’elle découvre l’existence d’un concours de Airguitar qui a lieu prochainement, elle décide de s’y inscrire, mais son frère ne voit pas les choses de cette manière...',
    },
    {
      title: 'LA FILLE À LA RECHERCHE DE LA CABANE',
      director: 'Phane Montet',
      duration: '30',
      image: 'https://ganache.studio/media/festival/2026/films/14_La_fille_à_la_recherche_de_la_cabane.jpg',
      synopsis:
        "En 2011, l’artiste de rue Bilal Berreni se rend dans l'extrême nord de la Suède et part vivre en ermite dans une cabane en bois. Il y dessine « Le Carnet de la cabane ». Dix ans après sa mort, je pars sur ses traces, à la recherche de sa cabane et du monde qu'il a dépeint. Peut-être aussi de lui.",
    },
    {
      title: '20 ANS ET UN SCOOTER',
      director: 'Tanguy Malaterre',
      duration: '18',
      image: 'https://ganache.studio/media/festival/2026/films/15_20_ans_et_un_scooter.jpg',
      synopsis:
        'Ce film retrace, sur une journée, le parcours d’un jeune homme qui fête son anniversaire comme il peut, en achetant un scooter d’occasion qui devrait être à la casse plutôt que sur la route.',
    },
    {
      title: 'MALINA',
      director: 'Ana Blagojević',
      duration: '22',
      image: 'https://ganache.studio/media/festival/2026/films/16_Malina.jpg',
      synopsis:
        'Dans un petit village de Serbie, Zora et Dragomir sont sur le point de célébrer le plus beau jour de leur vie. Mais Zora fait une fausse couche le matin de son mariage. Pour ne pas gâcher la fête, elle décide de garder le secret pour elle.',
    },
  ],

  parrain: {
    gender: 'male',
    title: ['Dali Benssalah,', 'parrain du festival'],
    description:
      'Acteur au cinéma et au théâtre, réalisateur, sportif de haut niveau, Dali est un artiste pluriel que ses goûts ont autant porté vers le cinéma d’auteur que les grandes productions internationales. Nous sommes comblé·e·s de compter sur son regard humain, bienveillant et affûté pour accompagner cette édition.',
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
