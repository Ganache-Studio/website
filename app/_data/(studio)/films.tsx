import Image from 'next/image';

import { PageMetadata } from '../default-metadata';

export type FilmTitle = {
  text: string;
  italic?: boolean;
};

export type FilmSubtitle = {
  text: string;
  italic?: boolean;
};

export type FilmItem = {
  id: string;
  title: FilmTitle[];
  date?: string;
  presentationItems: string[];
  description: string;

  ComponentDescription?: () => React.ReactNode;

  video?: string;
  videoPoster?: string;
  picture?: string;

  pictures?: string[];
  vimeoUrl?: string;

  pageMetadata: PageMetadata;
};

export const filmsTypes = {
  pub: 'film-pub',
  fiction: 'film-fiction',
  documentaire: 'film-documentaire',
  musique: 'film-musique',
} as const;

export const isFilmType = (filmType: string): filmType is FilmType => {
  return Object.values(filmsTypes).includes(filmType as FilmType);
};

export type FilmType = (typeof filmsTypes)[keyof typeof filmsTypes];

export const films: Record<FilmType, FilmItem[]> = {
  'film-pub': [
    {
      id: 'food-society',
      title: [{ text: 'FOOD SOCIETY' }],
      presentationItems: ['Théo Vincent', 'Agence Fullmoun', 'Film de marque'],
      description:
        "Film de marque pour Food Society, produit par Théo Vincent pour l'agence Fullmoun. Format horizontal.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Théo Vincent</p>
            <p>Étalonnage de Guillaume Chanaud</p>
            <p>Finishing par Les Films du Périscope • Musique de Benjamin Cholet</p>
          </div>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/pub/food-society/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/pub/food-society/video-poster.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/809031020?h=1e6e37278d&title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'vowels',
      title: [{ text: 'VOWELS' }],
      presentationItems: ['Andreas Pappamikail', 'Film de marque', 'Production indépendante'],
      description: 'Film de marque pour Vowels, produit par Andreas Pappamikail. Format horizontal.',

      ComponentDescription: () => <div className="space-y-4"></div>,

      // VIDEO
      video: 'https://ganache.studio/media/films/pub/vowels/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/pub/vowels/video-poster.jpg',

      // PICTURE
      picture: 'https://ganache.studio/media/films/pub/vowels/picture.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/1057439487?title=0&byline=0&portrait=0',

      // PICTURES
      pictures: ['https://ganache.studio/media/films/pub/vowels/picture.jpg'],

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'heineken',
      title: [{ text: 'HEINEKEN' }, { text: 'SILVER', italic: true }],
      presentationItems: ['Aurélien Grellier-Beker', 'Agence Publicis Conseil', 'Campagne social media'],
      description: '',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Aurélien Grellier-Beker</p>
            <p>Post-production par Cousin Bizarre</p>
          </div>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/pub/heineken/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/pub/heineken/video-poster.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/707739875?h=bbdbbf164f&title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'florajet',
      title: [{ text: 'FLORAJET' }],
      presentationItems: ['Rémy Cayuela', 'Agence Le Nouveau Bélier', 'Film TV'],
      description:
        "Film TV pour Florajet, produit par Rémy Cayuela pour l'agence Le Nouveau Bélier. Format horizontal.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Rémy Cayuela</p>
            <p>Photographie de Jeff Bierman</p>
            <p>Étalonnage d&apos;Inês Loura</p>
            <p>Finishing par Les Films du Périscope</p>
          </div>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/pub/florajet/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/pub/florajet/video-poster.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/833260644?h=59fc5138f5&title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'lgn',
      title: [{ text: 'LGN LOUIS GABRIEL NOUCHI' }],
      presentationItems: ['Andreas Pappamikail', 'Campagne social media', 'Production indépendante'],
      description:
        'Campagne social media pour LGN Louis Gabriel Nouchi, produite par Andreas Pappamikail. Format horizontal.',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Direction artistique par Andreas Pappamikail</p>
            <p>Photographie de Julien Saez</p>
            <p>Musique de Osnat</p>
          </div>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/pub/lgn/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/pub/lgn/video-poster.jpg',

      // PICTURE
      picture: 'https://ganache.studio/media/films/pub/lgn/picture.png',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/970564462?title=0&byline=0&portrait=0',

      // PICTURES
      pictures: ['https://ganache.studio/media/films/pub/lgn/picture.png'],

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'prince-de-bretagne',
      title: [{ text: 'PRINCE DE BRETAGNE' }],
      presentationItems: ['Julien Thiverny', 'Agence Josiane', 'Film TV'],
      description:
        "Film TV pour Prince de Bretagne, produit par Julien Thiverny pour l'agence Josiane. Format horizontal.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Julien Thiverny</p>
            <p>Étalonnage de Marine Surblé</p>
            <p>Finishing par Les Films du Périscope</p>
          </div>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/pub/prince-de-bretagne/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/pub/prince-de-bretagne/video-poster.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/717927697?h=1262268991&title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'saint-gobain',
      title: [{ text: 'SAINT GOBAIN' }],
      presentationItems: ['Théo Vincent', 'Agence Josiane', 'Film TV'],
      description: "Film TV pour Saint Gobain, produit par Théo Vincent pour l'agence Josiane. Format horizontal.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Théo Vincent</p>
            <p>Photographie de Florian Solin</p>
            <p>VFX par Paume Paris</p>
            <p>Étalonnage de Marine Surblé</p>
            <p>Finishing par Les Films du Périscope</p>
          </div>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/pub/saint-gobain/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/pub/saint-gobain/video-poster.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/737931861?h=ae743b9c61&title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'maison-margiela',
      title: [{ text: 'MAISON MARGIELA' }],
      presentationItems: ['Aurélien Grellier-Beker', 'Campagne social media', 'Production indépendante'],
      description:
        'Campagne social media pour Maison Margiela, produite par Aurélien Grellier-Beker. Format horizontal.',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Direction artistique par Andreas Pappamikail</p>
            <p>Edits d&apos;Aurélien Grellier-Beker</p>
          </div>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/pub/maison-margiela/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/pub/maison-margiela/video-poster.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/576917131?h=f4e9b7c41b&title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'ornikar',
      title: [{ text: 'ORNIKAR' }],
      presentationItems: ['Julien Thiverny', 'Agence Josiane', 'Campagne social media'],
      description:
        "Campagne social media pour Ornikar, produite par Julien Thiverny pour l'agence Josiane. Format horizontal.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Julien Thiverny</p>
            <p>Motion par Rove</p>
          </div>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/pub/ornikar/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/pub/ornikar/video-poster.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/835818764?h=d36a9a470e&title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'lgn-2',
      title: [{ text: 'LGN LOUIS GABRIEL NOUCHI' }],
      presentationItems: ['Andreas Pappamikail', 'Campagne social media', 'Production indépendante'],
      description:
        'Campagne social media pour LGN Louis Gabriel Nouchi, produite par Andreas Pappamikail. Format vertical.',

      ComponentDescription: () => <div className="space-y-4"></div>,

      // VIDEO
      video: 'https://ganache.studio/media/films/pub/lgn-2/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/pub/lgn-2/video-poster.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/884433759?h=4cfe06afed&title=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'racine-avocats',
      title: [{ text: 'RACINE AVOCATS' }],
      presentationItems: ['Aurélien Grellier-Beker', 'Film Corporate', 'Production indépendante'],
      description: 'Film Corporate pour Racine Avocats, produit par Aurélien Grellier-Beker. Format carré.',

      ComponentDescription: () => <div className="space-y-4"></div>,

      // VIDEO
      video: 'https://ganache.studio/media/films/pub/racine-avocats/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/pub/racine-avocats/video-poster.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/746829188?h=4a709ee1ff&title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
  ],

  'film-fiction': [
    {
      id: 'les-tremblements',
      title: [{ text: 'LES TREMBLEMENTS' }],
      presentationItems: ['Louise Chauvet'],
      description:
        "À la fin de l'été, Nine passe quelques jours à Béhuard, le minuscule village de sa grand-mère. Alors qu'elle prévoyait de s'isoler pour peindre et préparer le concours d'entrée aux Beaux-Arts, elle fait la rencontre d'Aurore, une jeune religieuse de son âge.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <p>Un film de Louise Chauvet • Produit par Benjamin Gilet</p>
          <p>
            Avec le soutien de la région Pays de la Loire et du CNC, sélectionné au « Lab » du Moulin d’Andé en avril
            2024
          </p>
          <p>Avec Marie Narbonne et Aisleen McLafferty</p>
          <p>En production</p>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/fiction/les-tremblements/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/fiction/les-tremblements/video-poster.jpg',

      // PICTURES
      pictures: ['https://ganache.studio/media/films/fiction/les-tremblements/picture.png'],

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'son-seul',
      title: [{ text: 'SON SEUL' }],
      presentationItems: ['Théo Vincent-Suzzoni'],
      description:
        "Stan, étudiant en cinéma, retourne le temps d'un week-end chez son père. Il prétexte un exercice de bruitage pour demander de l'aide à ce dernier, cloîtré dans une dépression mutique.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <p>Un film de Théo Vincent-Suzzoni • Produit par Benjamin Gilet</p>
          <p>Avec Stanislas Perrin et John Arnold</p>
          <p>En production</p>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/fiction/son-seul/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/fiction/son-seul/video-poster.jpg',

      // PICTURES
      pictures: ['https://ganache.studio/media/films/fiction/son-seul/picture.jpg'],

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'la-prehistoire',
      title: [{ text: 'LA PREHISTOIRE' }],
      presentationItems: ['Max Lesage'],
      description:
        "Théo a six ans et ne rêve que de Préhistoire. En randonnée dans les Vosges avec des amis de la famille, il s'imagine être un Homme des cavernes. Le problème c'est que son père le protège de tout et que son frère l'embête sans arrêt.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <p>Un film de Max Lesage • Produit par Benjamin Gilet</p>
          <p>Avec le soutien de la région Grand Est et du département des Vosges</p>
          <p>Avec Éric Judor et Jean-Benoît Ugeux</p>
          <p>En développement</p>
        </div>
      ),

      // PICTURE
      picture: 'https://ganache.studio/media/films/fiction/la-prehistoire/picture.jpeg',

      // PICTURES
      pictures: ['https://ganache.studio/media/films/fiction/la-prehistoire/picture.jpeg'],

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'le-silence-des-hirondelles',
      title: [{ text: 'LE SILENCE DES HIRONDELLES' }],
      presentationItems: ['Louis Faury'],
      description:
        "Cela fait des semaines que plus une goutte ne coule aux robinets du mas où vivent Olivia et son père. Toutes les nuits, l'adolescente de 14 ans doit compter chaque litre d'eau de la dernière citerne pour remplir les abreuvoirs d'une chèvrerie, où suffoque un petit troupeau de chèvres. Mais l'arrivée soudaine de citadins, fuyant les fortes chaleurs de la ville, accélère la pénurie d'eau. Olivia va rapidement devoir choisir entre son amitié naissante avec Fanny, une citadine de son âge, et la survie du troupeau paternel.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <p>Un film de Louis Faury • Produit par Benjamin Gilet</p>
          <p>Meilleur scénario au Festival Rêves de Court en 2024</p>
          <p>En développement</p>
        </div>
      ),

      // PICTURE
      picture: 'https://ganache.studio/media/films/fiction/le-silence-des-hirondelles/picture.jpg',

      // PICTURES
      pictures: ['https://ganache.studio/media/films/fiction/le-silence-des-hirondelles/picture.jpg'],

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'les-poetes-maudits',
      title: [{ text: 'LES POÈTES MAUDITS' }],
      presentationItems: ['Gabriel Washer'],
      description:
        "Félix et Clément sont écrivains. En tout cas, ils essayent... Un soir, Clément demande à Félix de l'accompagner aux urgences psychiatriques. Il va mal depuis trop longtemps et voudrait être pris en charge. En chemin, ils rencontrent Émilie en la sauvant d'une agression. Impulsive, terre-à-terre, elle bouscule les « poètes maudits ». Débute une amitié d'une nuit.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <p>Un film de Gabriel Washer • Produit par Benjamin Gilet</p>
          <p>Avec Gabriel Washer, Manon Rey, Maxime Boutéraon et Mathieu Perotto</p>
          <p>Avec le soutien de la Bourse Première Fois de l&apos;Adami</p>
          <p>En développement</p>
        </div>
      ),

      // PICTURE
      picture: 'https://ganache.studio/media/films/fiction/les-poetes-maudits/picture.jpg',

      // PICTURES
      pictures: ['https://ganache.studio/media/films/fiction/les-poetes-maudits/picture.jpg'],

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'au-pays-des-mortels',
      title: [{ text: 'AU PAYS DES MORTELS' }],
      presentationItems: ['Lily Papamiltiadès'],
      description:
        "Victor a 30 ans et est victime d'un bug administratif : il a été déclaré mort par erreur. Il tente en vain de régler ce problème alors qu'il est mannequin sur un shooting photo. Isolé dans sa loge et empêtré dans un costume de Minotaure qu'on lui demande de porter, Victor sent comme une angoisse.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <p>Un film de Lily Papamiltiadès • Produit par Benjamin Gilet</p>
          <p>Avec Oscar Lesage et Mathilde Weil</p>
          <p>En développement</p>
        </div>
      ),

      // PICTURE
      picture: 'https://ganache.studio/media/films/fiction/au-pays-des-mortels/picture.jpg',

      // PICTURES
      pictures: ['https://ganache.studio/media/films/fiction/au-pays-des-mortels/picture.jpg'],

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'max-entre-deux',
      title: [{ text: 'MAX ENTRE DEUX' }],
      presentationItems: ['Margot Roussel'],
      description:
        "Lors du premier été après le décès de leur père, Max, 12 ans, vit mal le basculement dans l'adolescence de sa soeur, Léa. Elle sent qu'elle lui échappe, alors que lui-même se voit changer et refuse de grandir. L'arrivée de son meilleur ami Théo complique les choses.",
      date: '2023',
      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Un film de Margot Roussel • Produit par Benjamin Gilet</p>
            <p>Photographie de Julien Saez</p>
          </div>
          <p>Avec Elliot Chazal, Angelina Skrabo et Marwan Zeghoudi</p>
          <p>Avec le soutien de la Région Île-de-France</p>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/fiction/max-entre-deux/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/fiction/max-entre-deux/video-poster.jpg',

      // PICTURES
      pictures: ['https://ganache.studio/media/films/fiction/max-entre-deux/picture.png'],

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'titou',
      title: [{ text: 'TITOU' }],
      presentationItems: ['Max Lesage'],
      description:
        "Titou est clippeur. Oscar est rappeur. Du moins, c'est ainsi qu'ils se sont auto-proclamés. Au beau milieu de l'été, Titou embarque son ami pour tourner un clip digne du rap game, en Bretagne, chez sa défunte grand-mère.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Un film de Max Lesage • Produit par Benjamin Gilet</p>
            <p>Photographie de Mathias Godron • Son de Philippe Farnole</p>
          </div>
          <p>Avec Maxime Crescini, Oscar Lesage et Ella Pellegrini</p>
          <Image
            src="https://ganache.studio/media/films/fiction/titou/affiche.jpg"
            alt="Affiche Titou"
            width={0}
            height={0}
            className="h-auto w-full"
          />
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/fiction/titou/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/fiction/titou/video-poster.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/659465434?title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'capsules-decembre',
      title: [{ text: 'CAPSULES' }, { text: 'DÉCEMBRE', italic: true }],
      presentationItems: ['Aurélien Grellier-Beker'],
      description: 'Sous un soleil de plomb, un jeune couple se lance dans un jeu qui va les transformer.',
      date: '2021',
      ComponentDescription: () => (
        <div className="space-y-4">
          <p>
            Un film d&apos;Aurélien Grellier-Beker • Produit par Benjamin Gilet • Photographie de Florian Solin • Son de
            Paul Kusnierek
          </p>
          <p>Avec Pauline Briand, Benjamin Voisin et Eugène Marcuse</p>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/fiction/capsules-decembre/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/fiction/capsules-decembre/video-poster.jpg',

      // PICTURES
      pictures: ['https://ganache.studio/media/films/fiction/capsules-decembre/picture.png'],

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'capsules-novembre',
      title: [{ text: 'CAPSULES' }, { text: 'NOVEMBRE', italic: true }],
      presentationItems: ['Aurélien Grellier-Beker'],
      description:
        "Aujourd'hui, Joël présente son spectacle de fin d'année. À quelques heures de la représentation, la pression monte.",
      date: '2021',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>
              Un film d&apos;Aurélien Grellier-Beker • Produit par Benjamin Gilet et Gabriel Washer • Photographie de
              Florian Solin • Son de Paul Kusnierek
            </p>
            <p>
              Avec Augustin Bouchacourt, Stanislas Perrin, Éric Verdin, Lucie Brunet, Sylvain Debry, Édouard Eftimakis
              et Manon Rey
            </p>
          </div>
          <Image
            src="https://ganache.studio/media/films/fiction/capsules-novembre/affiche.jpg"
            alt="Affiche Capsules Novembre"
            width={0}
            height={0}
            className="h-auto w-full"
          />
        </div>
      ),

      // PICTURE
      picture: 'https://ganache.studio/media/films/fiction/capsules-novembre/picture.png',

      // PICTURES
      pictures: ['https://ganache.studio/media/films/fiction/capsules-novembre/picture.png'],

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'la-troisieme-nuit',
      title: [{ text: 'LA TROISIÈME NUIT' }],
      presentationItems: ['Hélène Delage'],
      description:
        'Voilà deux ans que sa sœur a disparu. Deux ans que Noémie mène sa propre enquête et envisage de dépasser les frontières du vraisemblable.',
      date: '2021',
      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Un film d&apos;Hélène Delage • Co-produit par Ganache Studio</p>
            <p>Photographie de Laurence Heintz</p>
          </div>
          <p>Avec Noémie Schmidt</p>
          <Image
            src="https://ganache.studio/media/films/fiction/la-troisieme-nuit/affiche.jpg"
            alt="Affiche La Troisième Nuit"
            width={0}
            height={0}
            className="h-auto w-full"
          />
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/fiction/la-troisieme-nuit/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/fiction/la-troisieme-nuit/video-poster.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/544546262?title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'capsules-septembre',
      title: [{ text: 'CAPSULES' }, { text: 'SEPTEMBRE', italic: true }],
      presentationItems: ['Aurélien Grellier-Beker'],
      description: 'Aujourd\'hui, Joël donne son premier "cours d\'appréhension de la matière rire".',
      date: '2020',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Un film d&apos;Aurélien Grellier-Beker • Produit par Benjamin Gilet</p>
            <p>Photographie de Florian Solin • Son de Paul Kusnierek</p>
          </div>
          <p>Avec Augustin Bouchacourt, Lucie Brunet, Teddy Chawa, Sylvain Debry, Édouard Eftimakis et Manon Rey</p>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/fiction/capsules-septembre/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/fiction/capsules-septembre/video-poster.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/426943646?title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'capsules-juin',
      title: [{ text: 'CAPSULES' }, { text: 'JUIN', italic: true }],
      presentationItems: ['Aurélien Grellier-Beker'],
      description: "Un matin, Gabriel, 24 ans, se réveille avec l'âme d'un vieil homme au crépuscule de sa vie.",
      date: '2020',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Un film d&apos;Aurélien Grellier-Beker • Produit par Benjamin Gilet</p>
            <p>Photographie de Florian Solin • Son de Paul Kusnierek</p>
          </div>
          <p>Avec Gabriel Washer, Suzanne de Baecque, Adrien Rouyard, Théo Salemkour, et David Clavel</p>
          <Image
            src="https://ganache.studio/media/films/fiction/capsules-juin/affiche.png"
            alt="Affiche Capsules Juin"
            width={0}
            height={0}
            className="h-auto w-full"
          />
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/fiction/capsules-juin/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/fiction/capsules-juin/video-poster.jpg',

      // PICTURES
      pictures: [
        'https://ganache.studio/media/films/fiction/la-troisieme-nuit/affiche.jpg',
        'https://ganache.studio/media/films/fiction/capsules-juin/picture.jpg',
      ],

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'capsules-avril',
      title: [{ text: 'CAPSULES' }, { text: 'AVRIL', italic: true }],
      presentationItems: ['Aurélien Grellier-Beker'],
      description: '« Des êtres comme des nuages de fumée ».',
      date: '2020',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Un film d&apos;Aurélien Grellier-Beker • Produit par Benjamin Gilet</p>
            <p>Photographie de Florian Solin</p>
          </div>
          <p>Avec Maxime Gleizes</p>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/fiction/capsules-avril/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/fiction/capsules-avril/video-poster.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/394498915?title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'chute-libre-1',
      title: [{ text: 'CHUTE LIBRE' }, { text: 'PREMIÈRE PARTIE', italic: true }],
      presentationItems: ['Aurélien Grellier-Beker'],
      description:
        "Un jeune homme demande son chemin à une jeune femme dans une rue parisienne. Ils échangent brièvement en marchant dans la même direction. Chute libre - Première partie est le premier volet d'une trilogie relatant leur histoire d'amour.",
      date: '2019',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Un film d&apos;Aurélien Grellier-Beker • Scénario de Gabriel Washer • Produit par Benjamin Gilet</p>
            <p>Photographie de Florian Solin</p>
          </div>
          <p>
            Avec Gabriel Washer, Valentine Catzéflis, Dali Benssalah, Augustin Bouchacourt, Ilian Bergala, Théo
            Salemkour, Benjamin Voisin, Suzanne Rault-Balet, Harrison Arevalo et David Clavel <br />
          </p>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/fiction/chute-libre-1/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/fiction/chute-libre-1/picture.png',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/362586135?title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
  ],

  'film-documentaire': [
    {
      id: 'mortel',
      title: [{ text: 'MORTEL' }],
      presentationItems: [
        'Benjamin Gilet & Julien Thiverny',
        'Festival du Film Émergent de Lyon',
        'Mention du Jury Angoulême',
        'Co-production Belgique',
      ],
      description:
        "Lidvine est conseillère funéraire le jour et biker la nuit. Le temps d'un portrait, elle raconte les coulisses d'une vie à la croisée des morts et des vivants.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <p>Créé et produit par Benjamin Gilet • Réalisé par Julien Thiverny</p>
          <p>
            Distribué par{' '}
            <a href="http://www.manifest.pictures/" target="_blank" rel="noopener noreferrer">
              <u>Manifest</u>
            </a>
          </p>
        </div>
      ),

      // PICTURE
      picture: 'https://ganache.studio/media/films/documentaire/mortel/picture.png',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/887722450?title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'max-et-sa-guitare',
      title: [{ text: 'MAX ET SA GUITARE' }],
      presentationItems: ['Max Lesage', 'En production', 'Documentaire musical', 'Avec Maxime Crescini'],
      description:
        "Deux ans après l'échec de son propre concert, Max repère Maxime et lui propose un défi : en l'espace d'une semaine, il doit composer une chanson et donner son premier concert. Derrière sa caméra, Max participe activement à la préparation de l'aspirant musicien, révélant peu à peu ses propres désirs artistiques inassouvis.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Un film de Max Lesage • Produit par Benjamin Gilet</p>
            <p>Avec Maxime Crescini</p>
          </div>
          <p>En production</p>
        </div>
      ),

      video: 'https://ganache.studio/media/films/documentaire/max-et-sa-guitare/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/documentaire/max-et-sa-guitare/video-poster.jpg',

      // PICTURES
      pictures: ['https://ganache.studio/media/films/documentaire/max-et-sa-guitare/picture.jpg'],

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'rodrigo',
      title: [{ text: 'RODRIGO PEÑA, CAPITANO' }],
      presentationItems: ['Thibault Pastierik', 'En développement', "Bourse Brouillon d'un Rêve", 'SCAM'],
      description:
        "Documentaire sur Rodrigo Peña, capitano, réalisé par Thibault Pastierik. En développement, soutenu par la Bourse Brouillon d'un Rêve de la SCAM.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <p>
            Un documentaire de Thibault Pastierik • Écrit par Thibault Pastierik et Emilio Frignati • Produit par
            Benjamin Gilet
          </p>
          <p>En développement</p>
          <p>
            Soutenu par la Bourse <i>Brouillon d&apos;un Rêve</i> de la SCAM
          </p>
        </div>
      ),

      // PICTURE
      picture: 'https://ganache.studio/media/films/documentaire/rodrigo/picture.jpg',

      // PICTURES
      pictures: ['https://ganache.studio/media/films/documentaire/rodrigo/picture.jpg'],

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'capsules-aout',
      title: [{ text: 'CAPSULE' }, { text: 'AOÛT', italic: true }],
      presentationItems: ['Aurélien Grellier-Beker', '2020', 'Étalonnage Florian Solin', 'Mixage Matthieu Fraticelli'],
      date: '2020',
      description: 'Après une nuit tourmentée, Yolande apprend une heureuse nouvelle de la bouche de son petit-fils.',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Un film d&apos;Aurélien Grellier-Beker • Produit par Benjamin Gilet</p>
            <p>Étalonnage de Florian Solin • Mixage de Matthieu Fraticelli</p>
          </div>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/documentaire/capsules-aout/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/documentaire/capsules-aout/video-poster.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/456740100?title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'capsules-fevrier',
      title: [{ text: 'CAPSULE' }, { text: 'FÉVRIER', italic: true }],
      presentationItems: ['Aurélien Grellier-Beker', '2020', 'Lyon Young Film Festival', 'Étalonnage Florian Solin'],
      date: '2020',
      description: "Yolande passe une journée en compagnie de son petit-fils alors que ses souvenirs s'évaporent.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Un film d&apos;Aurélien Grellier-Beker</p>
            <p>Produit par Benjamin Gilet • Étalonnage de Florian Solin</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Festivals</h2>
            <ul className="ml-2">
              <li>- Lyon Young Film Festival</li>
            </ul>
          </div>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/documentaire/capsules-fevrier/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/documentaire/capsules-fevrier/video-poster.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/394411387?title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
  ],

  'film-musique': [
    {
      id: 'napkey-land',
      title: [{ text: 'NAPKEY' }, { text: 'LAND', italic: true }],
      presentationItems: [
        'Aurélien Grellier-Beker',
        'Clipped Festival Australia',
        'Top 5 Finalists',
        'Avec Eugène Marcuse',
      ],
      description:
        'Clip musical pour Napkey, réalisé par Aurélien Grellier-Beker avec Eugène Marcuse. Sélectionné au Clipped Festival (Australia) - Top 5 International Finalists.',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Aurélien Grellier-Beker • Produit par Benjamin Gilet</p>
            <p>Photographie de Florian Solin</p>
          </div>
          <p>Avec Eugène Marcuse</p>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/musique/napkey-land/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/musique/napkey-land/video-poster.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/467370202?title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'birdwish-heart-of-clay',
      title: [{ text: 'BIRDWISH' }, { text: 'HEART OF CLAY', italic: true }],
      presentationItems: ['Théo Vincent', 'Avec Simon Rérolle', 'Avec Lara Levy', 'Production Mathilde Hauser'],
      description: 'Clip musical pour Birdwish, réalisé par Théo Vincent avec Simon Rérolle et Lara Levy.',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Théo Vincent • Produit par Benjamin Gilet et Mathilde Hauser</p>
          </div>
          <p>Avec Simon Rérolle et Lara Levy</p>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/musique/birdwish-heart-of-clay/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/musique/birdwish-heart-of-clay/video-poster.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/1062072432?title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'oscar-lesage-action',
      title: [{ text: 'OSCAR LESAGE' }, { text: 'ACTION', italic: true }],
      presentationItems: [
        'Oscar Lesage',
        'Photographie Kévin Dubert',
        'Montage Aurélien Grellier-Beker',
        'Avec Ike Zacsongo-Joseph',
      ],
      description:
        'Clip musical pour Oscar Lesage, réalisé par Oscar et Max Lesage avec Oscar Lesage, Ike Zacsongo-Joseph et Jules Benchetrit.',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Oscar et Max Lesage</p>
            <p>Produit par Benjamin Gilet</p>
            <p>Photographie de Kévin Dubert</p>
            <p>Montage d&apos;Aurélien Grellier-Beker</p>
          </div>
          <p>Avec Oscar Lesage, Ike Zacsongo-Joseph et Jules Benchetrit</p>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/musique/oscar-lesage-action/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/musique/oscar-lesage-action/video-poster.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/840748829?title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'suzanne-fowke-live-session',
      title: [{ text: 'SUZANNE FOWKE' }, { text: 'LIVE SESSION', italic: true }],
      presentationItems: [
        'Aurélien Grellier-Beker',
        'Session live',
        'Photographie Florian Solin',
        'Production Benjamin Gilet',
      ],
      description:
        'Session live de Suzanne Fowke, réalisée par Aurélien Grellier-Beker avec la photographie de Florian Solin.',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Aurélien Grellier-Beker</p>
            <p>Produit par Benjamin Gilet</p>
            <p>Photographie de Florian Solin</p>
          </div>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/musique/suzanne-fowke-live-session/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/musique/suzanne-fowke-live-session/video-poster.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/726662080?h=67f402da2d&title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'ephese-silver-lining',
      title: [{ text: 'EPHESE' }, { text: 'SILVER LINING', italic: true }],
      presentationItems: [
        'Aurélien Grellier-Beker',
        'Avec Suzanne de Baecque',
        'Avec Augustin Bouchacourt',
        'Photographie Florian Solin',
      ],
      description:
        'Clip musical pour Ephèse, réalisé par Aurélien Grellier-Beker avec Suzanne de Baecque et Augustin Bouchacourt.',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Aurélien Grellier-Beker • Produit par Benjamin Gilet</p>
            <p>Photographie de Florian Solin</p>
          </div>
          <p>Avec Suzanne de Baecque et Augustin Bouchacourt</p>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/musique/ephese-silver-lining/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/musique/ephese-silver-lining/video-poster.jpg',

      // VIMEO URL
      vimeoUrl: 'https://player.vimeo.com/video/471434078?title=0&byline=0&portrait=0',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
  ],
};
