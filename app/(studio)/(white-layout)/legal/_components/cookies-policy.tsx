import Link from 'next/link';

const LastUpdate = () => {
  return (
    <p>
      DERNIÈRE MISE À JOUR LE <b>10 NOVEMBRE 2021</b>
    </p>
  );
};

const CookiesPolicyIntro = () => {
  return (
    <p>
      Nous utilisons des cookies pour analyser le trafic sur le présent site. Continuez à lire pour en savoir plus sur
      ce que sont les cookies et comment nous les utilisons.
    </p>
  );
};

const WhatAreTheCookies = () => {
  return (
    <div className="space-y-3">
      <h4 className="text-lg font-semibold">Que sont les cookies ?</h4>
      <p>
        Les cookies sont des fichiers stockés sur votre ordinateur ou téléphone utilisés pour faire fonctionner les
        sites internet et/ou pour collecter des informations sur votre navigation.
      </p>
      <p>
        Un cookie possède des caractéristiques de fonctionnement différentes selon leur durée de vie et leur domaine.
      </p>
      <p>
        Selon sa durée de vie, un cookie est soit un cookie de session (supprimé lorsque vous fermez votre navigateur),
        soit un cookie persistant (il demeure sur votre appareil pour une durée prédéfinie).
      </p>
      <p>
        Selon son domaine, un cookie peut être un cookie de premier niveau (déposé par la page visitée et partageant le
        même domaine) ou un cookie tiers (provient d&apos;un domaine différent de celui de la page visitée; cela peut
        arriver lorsque la page visitée contient un objet situé hors de son domaine).
      </p>
      <p>Les cookies sont généralement classés selon leur finalité :</p>
      <ul className="list-disc pl-4">
        <li>
          Les cookies nécessaires au fonctionnement du site permettant la navigation ou l&apos;utilisation des services
          et fonctionnalités du site (identifiant de session, authentification, sécurité, lecteurs de contenus
          multimédias, préférences, mémorisation du panier, etc.);
        </li>
        <li>
          Les cookies d&apos;analyse statistique collectant de l&apos;information sur l&apos;utilisation du site par les
          visiteurs (quelles sont les pages les plus fréquentées, pendant combien de temps, etc.) et permettant
          d&apos;améliorer son fonctionnement;
        </li>
        <li>
          Les cookies publicitaires utilisés pour comprendre vos habitudes de navigation et vos activités et pouvant
          être utilisés afin d&apos;établir votre profil de consommation et par la suite vous proposer des contenus
          publicitaires adaptés;
        </li>
        <li>
          Les cookies des réseaux sociaux utilisés pour suivre les membres et les non-membres des réseaux sociaux à des
          fins d&apos;analyse marketing et de développement produits.
        </li>
      </ul>
    </div>
  );
};

const TD = ({ children }: { children: React.ReactNode }) => {
  return <td className="border border-gray-400 p-1">{children}</td>;
};

const TH = ({ children }: { children: React.ReactNode }) => {
  return <th className="border border-gray-400 p-1 font-semibold">{children}</th>;
};

const HowCookiesAreUsed = () => {
  return (
    <div className="space-y-3">
      <h4 className="text-lg font-semibold">Comment utilisons-nous les cookies ?</h4>
      <p>
        Nos partenaires et nous utilisons des cookies pour faire fonctionner notre site et analyser son trafic. En voici
        la liste :
      </p>
      <table className="w-full table-auto border-collapse border border-gray-400 text-left">
        <thead>
          <tr>
            <TH>Nom du cookie</TH>
            <TH>Fournisseur</TH>
            <TH>Description</TH>
            <TH>Finalité</TH>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TD>_ga</TD>
            <TD>Google Universal Analytics</TD>
            <TD>Mesure d&apos;audience</TD>
            <TD>Statistiques</TD>
          </tr>
          <tr>
            <TD>_gat</TD>
            <TD>Google Universal Analytics</TD>
            <TD>Mesure d&apos;audience</TD>
            <TD>Statistiques</TD>
          </tr>
          <tr>
            <TD>_gid</TD>
            <TD>Google Universal Analytics</TD>
            <TD>Stockage et mise à jour d&apos;une valeur unique pour chaque page visitée</TD>
            <TD>Statistiques</TD>
          </tr>

          <tr>
            <TD>player</TD>
            <TD>Vimeo</TD>
            <TD>Intégration du lecteur</TD>
            <TD>Lecture de vidéos</TD>
          </tr>
          <tr>
            <TD>vuid</TD>
            <TD>Vimeo</TD>
            <TD>Enregistrement de l&apos;historique des vidéos regardées</TD>
            <TD>Statistiques</TD>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="space-y-3">
      <h4 className="text-lg font-semibold">Nous contacter</h4>
      <p>
        Si vous avez la moindre question sur la manière dont nous utilisons les cookies, vous pouvez nous contacter :
      </p>
      <ul className="list-disc pl-4">
        <li>
          par voie électronique :{' '}
          <Link href="mailto:hello@ganache.studio" className="text-green-600">
            hello@ganache.studio
          </Link>
        </li>
        <li>par voie postale : Ganache Studio - 10 rue Saint Joseph 75002 Paris</li>
      </ul>
    </div>
  );
};

export const CookiesPolicy = () => {
  return (
    <div className="space-y-5 text-xs">
      <h3 className="scroll-mt-16 text-center text-xl font-bold md:scroll-mt-20 lg:scroll-mt-0" id="cookies-policy">
        Politique de cookies
      </h3>
      <LastUpdate />
      <CookiesPolicyIntro />
      <WhatAreTheCookies />
      <HowCookiesAreUsed />
      <ContactUs />
    </div>
  );
};
