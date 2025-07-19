import { FestivalData } from '@/types/festival-data.types';

export const festival2025Data: FestivalData = {
  year: '2025',
  edition: '3ème',
  description: `Vous avez été nombreux·ses à vous déplacer au Grand Action pour cette troisième édition du Ganache Festival. La salle était comble pour les quatre projections, et nous tenions à vous remercier de votre enthousiasme et votre fidélité. Une fois de plus, vous nous aidez à démontrer que le cinéma est avant tout une fête. Nous remercions également les artistes venu·e·s présenter leurs films, les partenaires pour leur généreux soutien, et notre marraine Céline Sallette pour son accompagnement. Merci pour les étoiles dans les yeux, et à l'année prochaine !`,

  presentation: {
    posterUrl: 'https://ganache.studio/images/festival/2025/affiche_festival.jpeg',
    teaserUrl: 'https://player.vimeo.com/video/1070296014?title=0&byline=0&portrait=0',
  },

  photos: [
    'https://ganache.studio/images/festival/2025/photos/1.jpeg',
    'https://ganache.studio/images/festival/2025/photos/2.jpeg',
    'https://ganache.studio/images/festival/2025/photos/3.jpeg',
    'https://ganache.studio/images/festival/2025/photos/4.jpeg',
    'https://ganache.studio/images/festival/2025/photos/5.jpeg',
    'https://ganache.studio/images/festival/2025/photos/6.jpeg',
    'https://ganache.studio/images/festival/2025/photos/7.jpeg',
    'https://ganache.studio/images/festival/2025/photos/8.jpeg',
    'https://ganache.studio/images/festival/2025/photos/9.jpeg',
  ],
  programme: [
    {
      day: 1,
      text: 'VENDREDI 25 AVRIL',
      steps: [
        {
          text: '19H - Séance 1',
          films: [
            {
              html: "<i>RED FLAG</i> de Dimitri Krassoulia-Vronsky - 21'",
            },
            {
              html: "<i>LES CHIFFONNIERS</i> d'Idriss Bayou - 25'",
            },
            {
              html: "<i>CE QUI APPARTIENT À CÉSAR</i> de Violette Gitton - 18'",
            },
            {
              html: "<i>LES TALONS DE MA MÈRE</i> de Lili Cazals - 13'",
            },
          ],
        },
        {
          text: '21H30 - Séance 2',
          films: [
            {
              html: "<i>KARATÉKA</i> de Florence Fauquet - 16'",
            },
            {
              html: "<i>QUITTER PARIS</i> d'Anouk Villemin, Mathis Sonzogni et Jules Brisset - 21'",
            },
            {
              html: "<i>LES LIENS DU SANG</i> d'Hakim Atoui - 19'",
            },
            {
              html: "<i>BOUCAN</i> de Salomé Da Souza - 25'",
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
      text: 'SAMEDI 26 AVRIL',
      steps: [
        {
          text: '19H - Séance 3',
          films: [
            {
              html: "<i>SULEYMAN</i> de Mehdi et Yanis Hamnane - 26'",
            },
            {
              html: "<i>LES PETITS MONSTRES</i> de Pablo Léridon - 13'",
            },
            {
              html: "<i>AVEC ALICE</i> de Léna Dana - 8'",
            },
            {
              html: "<i>LES DERNIÈRES NEIGES</i> de Sarah Henochsberg - 28'",
            },
          ],
        },
        {
          text: '21H30 - Séance 4',
          films: [
            {
              html: "<i>BIG BOYS DON'T CRY</i> d'Arnaud Delmarle - 23'",
            },
            {
              html: "<i>LE RESTE N'A PAS D'IMPORTANCE</i> de Romain Dumont - 16'",
            },
            {
              html: "<i>LE MARIAGE FORCÉ</i> d'Aurore Engel - 20'",
            },
            {
              html: "<i>LES MYSTÉRIEUSES AVENTURES DE CLAUDE CONSEIL</i> de Marie-Lola Terver et Paul Jousselin - 24'",
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
      title: 'RED FLAG',
      director: 'Dimitri Krassoulia-Vronsky',
      duration: '21',
      imageUrl: 'https://ganache.studio/images/festival/2025/films/1_red_flag.jpeg',
      synopsis: "La plage. Tout est là pour que chacun profite. Seul l'océan n'est pas de cet avis.",
    },
    {
      title: 'LES CHIFFONNIERS',
      director: 'Idriss Bayou',
      duration: '25',
      imageUrl: 'https://ganache.studio/images/festival/2025/films/2_les_chiffonniers.jpg',
      synopsis:
        "Rym, une éducatrice accompagnée de Peppino, psychologue, déambulent dans la rue à la recherche d'une jeunesse fragile. Ils tombent sur une étrange voleuse de chariots surnommée Toupou. Rym décide de la suivre.",
    },
    {
      title: 'CE QUI APPARTIENT À CÉSAR',
      director: 'Violette Gitton',
      duration: '18',
      imageUrl: 'https://ganache.studio/images/festival/2025/films/3_ce_qui_appartient_a_cesar.jpg',
      synopsis:
        "César a douze ans lorsque sa grande sœur est victime d'une agression sexuelle. Dans les vestiaires des cours d'escrime qu'il fréquente, tout se mesure à l'aune de la violence. César voudrait prendre part à tous les combats mais n'a pas les armes.",
    },
    {
      title: 'LES TALONS DE MA MÈRE',
      director: 'Lili Cazals',
      duration: '13',
      imageUrl: 'https://ganache.studio/images/festival/2025/films/4_les_talons_de_ma_mere.jpeg',
      synopsis:
        "José a dix ans, elle approche doucement de l'adolescence. Sa mère, Gloria, jusqu'ici peu présente, décide de la retirer de son terrain de foot pour l'emmener faire les boutiques dans un centre commercial. Une première.",
    },
    {
      title: 'KARATÉKA',
      director: 'Florence Fauquet',
      duration: '16',
      imageUrl: 'https://ganache.studio/images/festival/2025/films/5_karateka.jpeg',
      synopsis:
        "Gabrielle et Alix vont s'affronter lors de la finale du championnat régional de karaté. Mais lorsque Gabrielle découvre qu'elle a ses règles alors qu'elle ne s'y attendait pas, les choses se compliquent et le combat devient inégal. Face à ce problème, les deux jeunes femmes vont alors prendre conscience qu'elles sont en réalité dans la même équipe.",
    },
    {
      title: 'QUITTER PARIS',
      director: 'Anouk Villemin, Mathis Sonzogni et Jules Brisset',
      duration: '21',
      imageUrl: 'https://ganache.studio/images/festival/2025/films/6_quitter_paris.jpg',
      synopsis:
        "Une journée à Paris. Un flirt qui déraille. Un magicien sans public. Deux manifestantes au bout du rouleau. Les un·e·s se croisent, les autres se séparent, au milieu de la foule et de la chaleur de l'été.",
    },
    {
      title: 'LES LIENS DU SANG',
      director: 'Hakim Atoui',
      duration: '19',
      imageUrl: 'https://ganache.studio/images/festival/2025/films/7_les_liens_du_sang.jpg',
      synopsis:
        "Quand Ali et Leila rendent visite à leur mère qui vient tout juste de sortir de l'hôpital, ils ont des révélations à lui faire. Sur place, ils découvrent avec stupeur qu'elle vit désormais en compagnie d'Elyo, un robot d'assistance médicale. Aux côtés de cette étrange machine, le repas va vite tourner au règlement de compte familial. Elyo, sentant que sa propriétaire est en difficulté, va s'interposer pour faire cesser l'origine des attaques, et ce quoi qu'il en coûte.",
    },
    {
      title: 'BOUCAN',
      director: 'Salomé Da Souza',
      duration: '25',
      imageUrl: 'https://ganache.studio/images/festival/2025/films/8_boucan.jpeg',
      synopsis:
        "Johannes et Gabin sont jeunes, sont cousins et sont amoureux l'un de l'autre : leur histoire se passe dans le sud de la France.",
    },
    {
      title: 'SULEYMAN',
      director: 'Mehdi et Yanis Hamnane',
      duration: '26',
      imageUrl: 'https://ganache.studio/images/festival/2025/films/9_suleyman.jpeg',
      synopsis:
        "Suleyman, un migrant sénégalais en attente de régularisation, travaille pour Kader, gérant d'un point de deal parisien qui l'exploite. Contraint de s'installer dans un des appartements vides de la cité, il y fait la rencontre d'Ibrahim, jeune guetteur de seize ans en liberté surveillée. Suleyman et Ibrahim se regardent d'abord avec méfiance. Peu à peu, ils vont se rapprocher et trouver du réconfort dans cette amitié inattendue.",
    },
    {
      title: 'LES PETITS MONSTRES',
      director: 'Pablo Léridon',
      duration: '13',
      imageUrl: 'https://ganache.studio/images/festival/2025/films/10_les_petits_monstres.jpg',
      synopsis:
        "Ce matin, Erwan, collégien malvoyant, a hâte d'arriver au collège pour déclarer sa flamme à Agathe. Mais comme tous les jours, il doit partager un van de transport scolaire avec David, un pot-de-colle en fauteuil roulant. Alors, quand David fait tout pour qu'ils n'arrivent jamais, la guerre est déclarée.",
    },
    {
      title: 'AVEC ALICE',
      director: 'Léna Dana',
      duration: '8',
      imageUrl: 'https://ganache.studio/images/festival/2025/films/11_avec_alice.jpg',
      synopsis:
        "Simon ne mange ni ne dort depuis quelques jours. Il est terrifié à l'idée que son handicap physique l'empêche d'avoir une histoire d'amour avec Alice. D'autant qu'il est très amoureux. Aujourd'hui, il se rend chez le kiné, mais cela se transforme rapidement en séance de psychanalyse.",
    },
    {
      title: 'LES DERNIÈRES NEIGES',
      director: 'Sarah Henochsberg',
      duration: '28',
      imageUrl: 'https://ganache.studio/images/festival/2025/films/12_les_dernieres_neiges.jpg',
      synopsis:
        'Marie et Simon, fraîchement séparés, décident d\'emmener leurs deux filles en vacances à la neige. Alors que la situation se tend, Sacha, du haut de ses 10 ans, va, malgré elle, gérer la fragilité de ces "dernières vacances"...',
    },
    {
      title: "BIG BOYS DON'T CRY",
      director: 'Arnaud Delmarle',
      duration: '23',
      imageUrl: 'https://ganache.studio/images/festival/2025/films/13_big_boys_dont_cry.jpeg',
      synopsis:
        "C'est l'été pour Lucas et sa bande de potes dans leur village, près de Marseille. Hicham revient après trois années d'absence et de formation militaire. Se réunissant pour organiser l'enterrement de vie de garçon d'un ami, ils enchaînent les soirées en bords de mer avec joie. Mais le retour d'Hicham ravive des émotions à fleur de peau chez ces hommes que l'été avait desséchés.",
    },
    {
      title: "LE RESTE N'A PAS D'IMPORTANCE",
      director: 'Romain Dumont',
      duration: '16',
      imageUrl: 'https://ganache.studio/images/festival/2025/films/14_le_reste_n_a_pas_d_importance.jpg',
      synopsis:
        "Sur la rue Clignancourt, un lampadaire s'éteint. La morosité et la médiocratie l'emportent. Dans cette nouvelle obscurité, un cinéaste doit redécouvrir son humanité. Mais surtout, un homme doit continuer à faire son cinéma. Le reste n'a pas d'importance.",
    },
    {
      title: 'LE MARIAGE FORCÉ',
      director: 'Aurore Engel',
      duration: '20',
      imageUrl: 'https://ganache.studio/images/festival/2025/films/15_le_mariage_force.jpg',
      synopsis:
        "Pauline, jeune prof idéaliste, se met en tête de monter Le Mariage forcé de Molière avec sa classe. Lors d'un cours, elle croit comprendre que Lili, l'une de ses élèves, souffre de sa relation avec son copain Joshua. Espérant que la fiction l'aide à s'émanciper dans la réalité, Pauline lui donne le rôle principal féminin de la pièce.",
    },
    {
      title: 'LES MYSTÉRIEUSES AVENTURES DE CLAUDE CONSEIL',
      director: 'Marie-Lola Terver et Paul Jousselin',
      duration: '24',
      imageUrl:
        'https://ganache.studio/images/festival/2025/films/16_les_mysterieuses_aventures_de_claude_conseil.jpeg',
      synopsis:
        "Claude Conseil vit une retraite paisible avec son mari dans une maison au milieu des bois. Elle occupe son temps à écouter et enregistrer les oiseaux. Un soir de printemps, d'incessants et énigmatiques appels viennent rompre le calme de la forêt.",
    },
  ],

  parrain: {
    gender: 'female',
    title: ['Céline Sallette,', 'marraine du festival'],
    description:
      'Céline Sallette est la marraine de la troisième édition du Ganache Festival. Actrice au cinéma et au théâtre, réalisatrice, elle est une artiste singulière, audacieuse et engagée. Admiratif·ve·s de son parcours, nous sommes particulièrement heureux·ses de compter sur son soutien.',
    posterUrl: 'https://ganache.studio/images/festival/2025/affiche_parrain.jpg',
    videoUrl: 'https://player.vimeo.com/video/1079325432?h=4c07e55ae8&title=0&byline=0&portrait=0',
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
  ],

  partners: [
    {
      name: 'La Septième Obsession',
      imageUrl: 'https://ganache.studio/images/festival/partenaires/LSO.jpg',
      url: 'https://www.laseptiemeobsession.com/',
    },
    {
      name: 'Le Grand Action',
      imageUrl: 'https://ganache.studio/images/festival/partenaires/GA.png',
      url: 'https://www.legrandaction.com/',
    },
    {
      name: 'Pleine Image',
      imageUrl: 'https://ganache.studio/images/festival/partenaires/PI.png',
      url: 'https://www.pleineimage-loc.com/',
    },
    {
      name: 'Messina Films',
      imageUrl: 'https://ganache.studio/images/festival/partenaires/MF.png',
      url: 'https://www.instagram.com/messina_films',
    },
    {
      name: 'Black and White',
      imageUrl: 'https://ganache.studio/images/festival/partenaires/BW.png',
      url: 'https://www.movinmotion.com/',
    },
    {
      name: 'Bref Cinéma',
      imageUrl: 'https://ganache.studio/images/festival/partenaires/BC.jpg',
      url: 'https://www.brefcinema.com/',
    },
    {
      name: 'Superposé',
      imageUrl: 'https://ganache.studio/images/festival/partenaires/SPP.png',
      url: 'https://www.instagram.com/superpose__',
    },
  ],
};
