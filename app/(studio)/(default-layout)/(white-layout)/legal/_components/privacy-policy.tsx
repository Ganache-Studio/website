import Link from 'next/link';

const DataSecurity = () => {
  return (
    <div className="space-y-3">
      <h4 className="text-lg font-semibold">Sécurité des données</h4>
      <p>
        Ganache Studio met en œuvre les mesures administratives, physiques,
        techniques et organisationnelles appropriées pour protéger vos données.
      </p>
    </div>
  );
};

const LastUpdate = () => {
  return (
    <p>
      DERNIÈRE MISE À JOUR LE <b>10 NOVEMBRE 2021</b>
    </p>
  );
};

const ContactUs = () => {
  return (
    <div className="space-y-3">
      <h4 className="text-lg font-semibold">Nous contacter</h4>
      <p>
        Si vous souhaitez exercer l&apos;un de ces droits ou si vous avez la
        moindre question sur la manière dont nous traitons vos données
        personnelles, vous pouvez nous contacter :
      </p>
      <ul className="list-disc pl-4">
        <li>
          par voie électronique :{' '}
          <Link href="mailto:hello@ganache.studio" className="text-green-600">
            hello@ganache.studio
          </Link>
        </li>
        <li>
          par voie postale : Ganache Studio - 10 rue Saint Joseph 75002 Paris
        </li>
      </ul>
      <p>
        Si vous estimez, après nous avoir contactés, que vos droits sur vos
        données ne sont pas respectés, vous pouvez adresser une réclamation
        (plainte) à la{' '}
        <Link href="https://www.cnil.fr/" className="text-blue-600">
          CNIL
        </Link>
        .
      </p>
    </div>
  );
};

const YourRights = () => {
  return (
    <div className="space-y-3">
      <h4 className="text-lg font-semibold">Vos droits</h4>
      <p>
        Vous disposez de droits sur vos données personnelles qui sont traitées
        par Ganache Studio.
      </p>
      <p>Ainsi, vous avez droit :</p>
      <ul className="list-disc pl-4">
        <li>
          <b>de retirer votre consentement à tout moment</b> si vous avez déjà
          donné votre consentement à un traitement de vos données personnelles;
        </li>
        <li>
          <b>d&apos;accéder à vos données</b>. Vous avez le droit de savoir
          quelles données sont traitées et d&apos;en obtenir une copie;
        </li>
        <li>
          <b>d&apos;obtenir la rectification de vos données</b> si elles sont
          erronées ou incomplètes;
        </li>
        <li>
          <b>de limiter le traitement de vos données</b>. Dans ce cas, Ganache
          Studio traitera ces données uniquement pour les stocker. Vous avez le
          droit d&apos;obtenir la limitation du traitement des données détenues
          par Ganache Studio si :
          <ul className="list-disc pl-4">
            <li>
              vous contestez l&apos;exactitude des informations (exercice du
              droit de rectification) concomitamment à votre demande de
              limitation;
            </li>
            <li>
              le traitement est illicite et vous vous opposez à leur effacement
              et exigez à la place la limitation de l&apos;utilisation des
              données;
            </li>
            <li>
              vous vous êtes opposé au traitement (exercice du droit
              d&apos;opposition) et vous exercez votre droit à la limitation
              pendant la vérification portant sur le point de savoir si les
              motifs légitimes poursuivis par le responsable du traitement
              prévalent sur ceux de la personne concernée;
            </li>
            <li>
              ou Ganache Studio n&apos;a plus besoin des données à caractère
              personnel aux fins du traitement mais celles-ci vous sont encore
              nécessaires pour la constatation, l&apos;exercice ou la défense de
              droits en justice;
            </li>
          </ul>
        </li>
        <li>
          <b>de faire effacer vos données personnelles</b>. Vous avez le droit
          d&apos;obtenir l&apos;effacement de vos données détenues par Ganache
          Studio si :
          <ul className="list-disc pl-4">
            <li>
              ces données ne sont plus nécessaires au regard des finalités pour
              lesquelles elles ont été collectées ou sont traitées d&apos;une
              autre manière;
            </li>
            <li>
              vous avez retiré votre consentement sur lequel se fondait le
              traitement et il n&apos;existe pas d&apos;autres fondements
              juridiques à ce traitement;
            </li>
            <li>
              vous vous opposez ou êtes opposé au traitement de ces données et
              il n&apos;existe pas de motif légitime impérieux pour le
              traitement;
            </li>
            <li>
              les données ont fait l&apos;objet d&apos;un traitement illicite;
            </li>
            <li>
              les données doivent être effacées pour respecter une obligation
              légale prévue par le droit de l&apos;UE ou de l&apos;État-membre
              auquel Ganache Studio est soumise;
            </li>
            <li>ou les données concernent un enfant de moins de 16 ans ;</li>
          </ul>
        </li>
        <li>
          <b>à la portabilité de vos données</b>. Vous avez le droit de
          récupérer vos données dans un format compréhensible par machine pour
          ensuite les stocker vous-même ou les transférer à un tiers. Cette
          disposition s&apos;applique, sous réserve que les données soient
          traitées par des moyens automatisés et que le traitement repose sur
          votre consentement, sur un contrat auquel vous êtes partie ou sur des
          obligations précontractuelles;
        </li>
        <li>
          <b>
            de déposer plainte auprès de l&apos;Autorité de contrôle compétente
          </b>{' '}
          en matière de données personnelles.
        </li>
      </ul>
    </div>
  );
};

const TreatmentActivity = () => {
  return (
    <div className="space-y-3">
      <h4 className="text-lg font-semibold">
        Les activités de traitement de Ganache Studio
      </h4>

      <p>
        Ganache Studio est responsable des traitements de données personnelles
        effectués sur le présent site. Actuellement, il est procédé à une
        activité de traitement.
      </p>

      <h5 className="text-md font-semibold">
        Le formulaire d&apos;inscription à la newsletter
      </h5>

      <p>
        Ganache Studio utilise votre prénom, votre nom et votre adresse email
        pour vous envoyer sa newsletter.
      </p>
      <p>
        La base légale de ce traitement de données personnelles est votre
        consentement.
      </p>
      <p>
        La communication des données susmentionnées est obligatoire pour que
        Ganache Studio puisse vous envoyer sa newsletter.
      </p>
      <p>
        Ces données sont conservées jusqu&apos;au retrait de votre consentement
        ou 3 ans à compter de notre dernière interaction avec vous (droit à
        l&apos;oubli).
      </p>
      <p>
        Ganache Studio utilise la solution de newsletter{' '}
        <Link href="https://mailchimp.com/" className="text-orange-500">
          Mailchimp
        </Link>
        , et s&apos;est assuré de la conformité avec le RGPD des traitements
        réalisés par ce sous-traitant.
      </p>
    </div>
  );
};

const PrivacyPolicyIntro = () => {
  return (
    <div className="space-y-3">
      <p>
        Nous détaillons ci-après la Politique de Confidentialité du présent
        site, édité par Ganache Studio, société de production de films, afin de
        vous informer des traitements de données personnelles effectués via le
        site.
      </p>
      <p>
        Nous traitons vos données personnelles lorsque vous vous inscrivez à
        notre newsletter (lettre d&apos;information).
      </p>
      <p>
        Notre site utilise par ailleurs des cookies ; vous pouvez trouver notre
        Politique des Cookies en cliquant{' '}
        <Link href="#cookies-policy" className="text-pink-600">
          ici
        </Link>
        .
      </p>
      <p>
        La version de la Politique de Confidentialité en vigueur est celle qui
        figure sur le site au moment où vous vous y connectez.
      </p>
      <p>
        Ganache Studio se réserve la possibilité de l&apos;adapter ou de la
        modifier à tout moment et sans préavis. Il vous est donc recommandé de
        consulter cette page fréquemment, en vous référant à la date de la
        dernière modification indiquée tout en haut.
      </p>
    </div>
  );
};

export const PrivacyPolicy = () => {
  return (
    <div className="space-y-5 text-xs">
      <h3 className="text-center text-xl font-bold">
        POLITIQUE DE CONFIDENTIALITÉ
      </h3>
      <LastUpdate />
      <PrivacyPolicyIntro />
      <TreatmentActivity />
      <DataSecurity />
      <YourRights />
      <ContactUs />
    </div>
  );
};
