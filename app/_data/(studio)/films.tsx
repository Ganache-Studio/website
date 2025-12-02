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
      presentationItems: ['Théo Vincent', 'Agence : Fullmoun', 'Film de marque'],
      description: 'Film de marque',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Théo Vincent</p>
            <p>Étalonnage de Guillaume Chanaud</p>
            <p>Finishing par Les Films du Périscope</p>
            <p>Musique de Benjamin Cholet</p>
            <p>Agence : Fullmoun</p>
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
      presentationItems: ['Andreas Pappamikail', 'Film de marque'],
      description: 'Film de marque',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Narré par Yuki Yagi, Creative Director de vowels</p>
            <p>Réalisé par Andreas Pappamikail</p>
            <p>
              Photographie de Joséphine Drouin-Viallard • Étalonnage de Grégoire Lesturgie • Montage de Démétria
              Demathieu • Sound design de Raudie McLeod
            </p>
          </div>
        </div>
      ),

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
      presentationItems: ['Aurélien Grellier-Beker', 'Agence : Publicis Conseil', 'Campagne social media'],
      description: 'Campagne social media',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Aurélien Grellier-Beker</p>
            <p>Post-production par Cousin Bizarre</p>
            <p>Agence : Publicis Conseil</p>
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
      presentationItems: ['Rémy Cayuela', 'Agence : Le Nouveau Bélier', 'Campagne TV & Digital'],
      description: 'Campagne TV & Digital',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Rémy Cayuela</p>
            <p>Photographie de Jeff Bierman</p>
            <p>Étalonnage d&apos;Inês Loura</p>
            <p>Finishing par Les Films du Périscope</p>
            <p>Agence : Le Nouveau Bélier</p>
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
      presentationItems: ['Andreas Pappamikail', 'Campagne social media'],
      description: 'Campagne social media',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Direction artistique par Andreas Pappamikail</p>
            <p>Photographie de Julien Saez</p>
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
      presentationItems: ['Julien Thiverny', 'Agence : Josiane', 'Campagne TV & Digital'],
      description: 'Campagne TV & Digital',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Julien Thiverny</p>
            <p>Étalonnage de Marine Surblé</p>
            <p>Finishing par Les Films du Périscope</p>
            <p>Agence : Josiane</p>
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
      presentationItems: ['Théo Vincent', 'Agence : Josiane', 'Campagne TV & Digital'],
      description: 'Campagne TV & Digital',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Théo Vincent</p>
            <p>Photographie de Florian Solin</p>
            <p>VFX par Paume Paris</p>
            <p>Étalonnage de Marine Surblé</p>
            <p>Finishing par Les Films du Périscope</p>
            <p>Agence : Josiane</p>
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
      presentationItems: ['Aurélien Grellier-Beker', 'Campagne social media'],
      description: 'Campagne social media',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Aurélien Grellier-Beker</p>
            <p>Direction artistique par Andreas Pappamikail</p>
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
      presentationItems: ['Julien Thiverny', 'Agence : Josiane', 'Campagne social media'],
      description: 'Campagne social media',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Julien Thiverny</p>
            <p>Motion par Rove</p>
            <p>Agence : Josiane</p>
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
      presentationItems: ['Andreas Pappamikail', 'Campagne social media'],
      description: 'Campagne social media',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Andreas Pappamikail</p>
          </div>
        </div>
      ),

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
      presentationItems: ['Aurélien Grellier-Beker', 'Film Corporate'],
      description: 'Film Corporate',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Aurélien Grellier-Beker</p>
          </div>
        </div>
      ),

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
      presentationItems: ['Louise Chauvet', 'Court métrage'],
      description:
        "Nine passe quelques jours à Béhuard, le minuscule village de sa grand-mère. Alors qu'elle prévoyait de s'isoler pour préparer le concours d'entrée aux Beaux-Arts, elle fait la connaissance d'Aurore, une jeune femme de son âge qui s’apprête à entrer au couvent.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <p>Un film de Louise Chauvet • Produit par Benjamin Gilet</p>
          <p>
            Photographie de Naomi Amarger • Son de Raphaël Bigaud • Montage de Laura Parade • Musique de Clément
            Ferrigno
          </p>
          <p>Avec Marie Narbonne et Aisleen McLafferty</p>
          <p>Avec le soutien de la région Pays de la Loire et du CNC, sélectionné au « Lab » du Moulin d’Andé</p>
          <p>
            Distribué par{' '}
            <a href="http://www.manifest.pictures/" target="_blank" rel="noopener noreferrer">
              <u>Manifest</u>
            </a>
          </p>
          <div>
            <h2 className="text-lg font-bold">Festivals</h2>
            <ul className="ml-2">
              <li>- Prix du Public au Festival Que du Feu</li>
              <li>- Festival du Film de Cabourg</li>
              <li>- Festival du Court Métrage d&apos;Auch</li>
            </ul>
          </div>
          <Image
            src="https://ganache.studio/media/films/fiction/les-tremblements/affiche.png"
            alt="Affiche Les Tremblements"
            width={0}
            height={0}
            className="h-auto w-full"
          />
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/fiction/les-tremblements/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/fiction/les-tremblements/video-poster.jpg',

      // VIMEO URL
      vimeoUrl:
        'https://player.vimeo.com/video/1082853088?h=29246e2413&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

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
      presentationItems: ['Théo Vincent-Suzzoni', 'Court métrage'],
      description:
        "Stan, étudiant en cinéma, retourne le temps d'un week-end chez son père. Il prétexte un exercice de bruitage pour demander de l'aide à ce dernier, cloîtré dans une dépression mutique.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <p>Un film de Théo Vincent-Suzzoni • Produit par Benjamin Gilet</p>
          <p>Photographie de Margot Besson</p>
          <p>Avec Stanislas Perrin et John Arnold</p>
          <p>
            Distribué par{' '}
            <a href="http://www.manifest.pictures/" target="_blank" rel="noopener noreferrer">
              <u>Manifest</u>
            </a>
          </p>
          <div>
            <h2 className="text-lg font-bold">Festivals</h2>
            <ul className="ml-2">
              <li>- Grand Prix du Festival Européen du Film Court de Brest</li>
              <li>
                - Prix du Meilleur Scénario et du Meilleur Film au Marseille International Film Festival by Cineverse
              </li>
              <li>- Festival du Film Francophone d’Angoulême</li>
              <li>- Festival Tous Courts d’Aix-en-Provence</li>
              <li>- Festival du Court Métrage d’Auch</li>
              <li>- Festival Paris Courts devant</li>
            </ul>
          </div>
          <Image
            src="https://ganache.studio/media/films/fiction/son-seul/affiche.png"
            alt="Affiche Son Seul"
            width={0}
            height={0}
            className="h-auto w-full"
          />
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/fiction/son-seul/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/fiction/son-seul/video-poster.jpg',

      // VIMEO URL
      vimeoUrl:
        'https://player.vimeo.com/video/1081797012?h=84b9e26933&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',

      pageMetadata: {
        title: '',
        description: '',
        keywords: [],
        canonicalUrl: '',
      },
    },
    {
      id: 'la-prehistoire',
      title: [{ text: 'LA PRÉHISTOIRE' }],
      presentationItems: ['Max Lesage', 'Court métrage'],
      description:
        'Théo a huit ans et ne rêve que de Préhistoire. En randonnée dans les Vosges avec son père et son grand frère, il apprend l’existence d’une mystérieuse grotte datant de l’âge de pierre. Entre son père qui le surprotège, les humeurs adolescentes de son frère, et la rencontre étouffante d’une autre famille, il se fait de plus en plus dur d’avoir des rêves d’enfant.',

      ComponentDescription: () => (
        <div className="space-y-4">
          <p>Un film de Max Lesage • Produit par Benjamin Gilet</p>
          <p>Avec Paul Jeanson, Enzo Bonnet, Nathan Haggege et Amélie Prévot</p>
          <p>
            Avec le soutien du CNC, de la Procirep-Angoa, de la région Grand-Est, du département des Vosges, de la ville
            de Mulhouse et de Vosges TV
          </p>
          <p>En production</p>
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
      presentationItems: ['Louis Faury', 'Court métrage'],
      description:
        'C’est la sécheresse. Olivia et son père doivent rationner l’eau du troupeau de chèvres. Mais l’arrivée soudaine de citadins, fuyant les fortes chaleurs de la ville, accélère la pénurie au village. Olivia fait la rencontre de Fanny, une adolescente de son âge, avec qui elle va tout faire pour retrouver de l’eau.',

      ComponentDescription: () => (
        <div className="space-y-4">
          <p>Un film de Louis Faury • Produit par Benjamin Gilet</p>
          <p>Meilleur scénario au Festival Rêves de Court en 2024</p>
          <p>Avec le soutien de la région Sud, de la Corse et de la Procirep-Angoa</p>
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
      presentationItems: ['Gabriel Washer', 'Court métrage'],
      description:
        'Félix et Clément sont écrivains. En tout cas, ils essayent... Un soir, Clément demande à Félix de l’accompagner aux urgences psychiatriques. Il va mal depuis trop longtemps et voudrait être pris en charge. En chemin, ils rencontrent Émilie en la sauvant d’une agression. Spontanée, terre à terre, elle bouscule les « poètes maudits ». Débute une amitié d’une nuit.',

      ComponentDescription: () => (
        <div className="space-y-4">
          <p>Un film de Gabriel Washer • Produit par Benjamin Gilet</p>
          <p>Avec Gabriel Washer, Mathieu Perotto, Manon Rey et Maxime Boutéraon</p>
          <p>Avec le soutien de la Bourse Première Fois de l&apos;Adami et de la Procirep-Angoa</p>
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
      presentationItems: ['Lily Papamiltiadès', 'Court métrage'],
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
      presentationItems: ['Margot Roussel', 'Court métrage'],
      description:
        "Lors du premier été après le décès de leur père, Max, 12 ans, vit mal le basculement dans l'adolescence de sa sœur, Léa. Elle sent qu'elle lui échappe, alors que lui-même se voit changer et refuse de grandir. L'arrivée de son meilleur ami Théo complique les choses.",
      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Un film de Margot Roussel • Produit par Benjamin Gilet</p>
            <p>Avec Elliot Chazal, Angelina Skrabo et Marwan Zeghoudi</p>
            <p>Photographie de Julien Saez</p>
          </div>
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
      presentationItems: ['Max Lesage', 'Court métrage'],
      description:
        "Titou est clippeur. Oscar est rappeur. Du moins, c'est ainsi qu'ils se sont auto-proclamés. Au beau milieu de l'été, Titou embarque son ami pour tourner un clip digne du rap game, en Bretagne, chez sa défunte grand-mère.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Un film de Max Lesage • Produit par Benjamin Gilet</p>
            <p>Photographie de Mathias Godron • Son de Philippe Farnole</p>
            <p>Avec Maxime Crescini, Oscar Lesage et Ella Pellegrini</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Festivals</h2>
            <ul className="ml-2">
              <li>- Festival de Cabourg</li>
              <li>- Festival de Brest (prix Brefcinéma)</li>
              <li>- Festival Paris Courts Devant</li>
              <li>- Festival du Film Jeune de Lyon</li>
              <li>- Festival Eurydice de Fécamp</li>
              <li>- Festival du Film de l’Ouest (prix spécial du jury)</li>
              <li>- Festival Lisula CineMusica</li>
            </ul>
          </div>
          <p>Acheté par OCS et UniversCiné</p>
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
      presentationItems: ['Aurélien Grellier-Beker', 'Court métrage'],
      description: 'Sous un soleil de plomb, un jeune couple se lance dans un jeu qui va les transformer.',
      ComponentDescription: () => (
        <div className="space-y-4">
          <p>Un film d&apos;Aurélien Grellier-Beker • Produit par Benjamin Gilet </p>
          <p> Photographie de Florian Solin • Son de Paul Kusnierek </p>
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
      presentationItems: ['Aurélien Grellier-Beker', 'Court métrage'],
      description:
        "Aujourd'hui, Joël présente son spectacle de fin d'année. À quelques heures de la représentation, la pression monte.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Un film d&apos;Aurélien Grellier-Beker • Produit par Benjamin Gilet</p>
            <p>
              Photographie de Florian Solin • Son de Paul Kusnierek • Assistant à la mise en scène : Stanislas Perrin •
              Mixage son de Matthieu Fraticelli • Graphisme de Nicholas Bochatay • Régie par Guillaume Joseph-Gabriel
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

      // VIDEO
      video: 'https://ganache.studio/media/films/fiction/capsules-novembre/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/fiction/capsules-novembre/picture.png',

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
      presentationItems: ['Hélène Delage', 'Court métrage'],
      description:
        'Voilà deux ans que sa sœur a disparu. Deux ans que Noémie mène sa propre enquête et envisage de dépasser les frontières du vraisemblable.',
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
      presentationItems: ['Aurélien Grellier-Beker', 'Court métrage'],
      description: 'Aujourd\'hui, Joël donne son premier "cours d\'appréhension de la matière rire".',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Un film d&apos;Aurélien Grellier-Beker • Produit par Benjamin Gilet</p>
            <p>Photographie de Florian Solin • Son de Paul Kusnierek</p>
          </div>
          <p>Avec Augustin Bouchacourt, Lucie Brunet, Teddy Chawa, Sylvain Debry, Edouard Eftimakis et Manon Rey</p>
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
      presentationItems: ['Aurélien Grellier-Beker', 'Court métrage'],
      description: "Un matin, Gabriel, 24 ans, se réveille avec l'âme d'un vieil homme au crépuscule de sa vie.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Aurélien Grellier-Beker • Scénario de Gabriel Washer • Produit par Benjamin Gilet</p>
            <p>Photographie de Florian Solin • Son de Paul Kusnierek</p>
          </div>
          <p>Avec Gabriel Washer, Suzanne de Baecque, Adrien Rouyard, Théo Salemkour et David Clavel</p>
          <div className="space-y-1">
            <div>
              <h2 className="text-lg font-bold">Festivals</h2>
              <ul className="ml-2">
                <li>- Prix de la Meilleure Fiction au Festival du Film Court en Armagnac</li>
                <li>- Festival International du Film Court d’Angoulême (FIFCA)</li>
              </ul>
            </div>
          </div>

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
      pictures: ['https://ganache.studio/media/films/fiction/capsules-juin/picture.jpg'],

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
      presentationItems: ['Aurélien Grellier-Beker', 'Court métrage'],
      description:
        'Un jeune homme demande son chemin à une jeune femme dans une rue parisienne. Ils échangent brièvement en marchant dans la même direction.',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Aurélien Grellier-Beker • Écrit par Gabriel Washer • Produit par Benjamin Gilet</p>
            <p>Photographie de Florian Solin</p>
          </div>
          <p>
            Avec Gabriel Washer, Valentine Catzéflis, Dali Benssalah, Augustin Bouchacourt, Ilian Bergala, Théo
            Salemkour, Benjamin Voisin, Suzanne Rault-Balet, Harrison Arrevalo et David Clavel
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
      presentationItems: ['Benjamin Gilet & Julien Thiverny', 'Court métrage documentaire'],
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
          <div>
            <h2 className="text-lg font-bold">Festivals</h2>
            <ul className="ml-2">
              <li>- Festival Que du Feu à Lyon</li>
              <li>- FIFCA à Angoulême</li>
            </ul>
          </div>
        </div>
      ),

      // VIDEO
      video: 'https://ganache.studio/media/films/documentaire/mortel/video.mp4',
      videoPoster: 'https://ganache.studio/media/films/documentaire/mortel/picture.png',

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
      presentationItems: ['Max Lesage', 'Court métrage documentaire'],
      description:
        "Deux ans après l'échec de son propre concert, Max repère Maxime et lui propose un défi : en l'espace d'une semaine, il doit composer une chanson et donner son premier concert. Derrière sa caméra, Max participe activement à la préparation de l'aspirant musicien, révélant peu à peu ses propres désirs artistiques inassouvis.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Un film de Max Lesage • Produit par Benjamin Gilet</p>
            <p>Avec Maxime Crescini</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Festivals</h2>
            <ul className="ml-2">
              <li>- Prix du Jury Jeune au Festival du film de l’Est</li>
            </ul>
          </div>
          <Image
            src="https://ganache.studio/media/films/documentaire/max-et-sa-guitare/affiche.jpg"
            alt="Affiche Max et sa guitare"
            width={0}
            height={0}
            className="h-auto w-full"
          />
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
      presentationItems: ['Thibault Pastierik', 'Documentaire 52 min'],
      description: '',

      ComponentDescription: () => (
        <div className="space-y-4">
          <p>Un film écrit par Thibault Pastierik et Emilio Frignati • Produit par Benjamin Gilet</p>
          <p>
            Soutenu par la Bourse <i>Brouillon d&apos;un Rêve</i> de la SCAM
          </p>
          <p>En développement</p>
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
      id: 'capsules-fevrier',
      title: [{ text: 'CAPSULES' }, { text: 'FÉVRIER', italic: true }],
      presentationItems: ['Aurélien Grellier-Beker', 'Court métrage documentaire'],
      description: "Yolande passe une journée en compagnie de son petit-fils alors que ses souvenirs s'évaporent.",

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Un film d&apos;Aurélien Grellier-Beker • Produit par Benjamin Gilet</p>
            <p>Étalonnage de Florian Solin</p>
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
      presentationItems: ['Aurélien Grellier-Beker', 'Clip'],
      description: '',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Aurélien Grellier-Beker • Produit par Benjamin Gilet</p>
            <p>Avec Eugène Marcuse, Victoria, Arthur, Eugénie, Armand, Justine, Lélio, Morgane, Florent et Raphaël</p>
            <p>
              Ecrit par Aurélien Grellier-Beker et Augustin Bouchacourt • Mise en scène par Célia Pyamootoo et Stanislas
              Perrin • Photographie de Florian Solin • Steadicam ∙ Valentin Clarke • Image d’Eric Poupounot et Julien
              Georgy • Lumière par Thomas Bayle et Julie Joumier • Machinerie par Sacha Benichou • Son de Paul Kusnierek
              • Décors du Collectif Nymphe – Julie Znosko, Louise de Hollogne, Guillaume Leroy, Emma Bienfait • Costumes
              par Florian Gauthiero • Maquillage par Micka Arasco et Laura Colas • Régie par Manon Rey et Justine
              Rousseau • Coordination cascades par Florian Beaumont • Effets spéciaux par Paume – Bissane Kim •
              Étalonnage de Florian Solin • Mixage son de Matthieu Fraticelli
            </p>
          </div>
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
      presentationItems: ['Théo Vincent', 'Clip'],
      description: '',

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
      presentationItems: ['Oscar & Max Lesage', 'Clip'],
      description: '',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Oscar et Max Lesage • Produit par Benjamin Gilet</p>
            <p>Photographie de Kévin Dubert • Montage d&apos;Aurélien Grellier-Beker</p>
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
      presentationItems: ['Aurélien Grellier-Beker', 'Clip'],
      description: '',

      ComponentDescription: () => (
        <div className="space-y-4">
          <div className="space-y-1">
            <p>Réalisé par Aurélien Grellier-Beker • Produit par Benjamin Gilet</p>
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
      presentationItems: ['Aurélien Grellier-Beker', 'Clip'],
      description: '',

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
