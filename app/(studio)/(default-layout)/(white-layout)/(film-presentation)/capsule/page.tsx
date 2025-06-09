import Image from 'next/image';

import { capsulePresentationData } from '../../../../../_data/(studio)/capsule-presentation';
import { FilmPresentation } from '../_components/film-presentation';

const Introduction = () => {
  return (
    <div className="space-y-4">
      <p className="text-2xl font-bold md:text-4xl">LE PROJET CAPSULES</p>
      <p className="text-justify text-sm md:text-base">
        Débutée en même temps que l&apos;aventure Ganache Studio, Capsules est
        une suite de douze courts métrages réalisés entre 2019 et 2020. De la
        fiction au documentaire, l&apos;ensemble pioche dans des genres
        éclectiques.
      </p>
      <p className="text-justify text-sm md:text-base">
        Joyeusement expérimentale, cette démarche se veut aussi une photographie
        de la famille Ganache Studio.
      </p>
    </div>
  );
};

const Letter = () => {
  return (
    <div className="space-y-4 text-justify text-sm italic md:text-base">
      <p>Chers amis,</p>
      <p>
        Ce projet fait pour moi une connexion merveilleuse, réchauffante aux fil
        des mois et des années, des personnages, des amitiés, des vies et de la
        magie de notre studio.
      </p>
      <p>
        Accompagné par un producteur, Benjamin Gille, depuis le tout début de la
        production, et par le chef opérateur Florian Berutti, chaque film a été
        un moment d&apos;expérimentation et de partage.
      </p>
      <p>
        Spontanéité, liberté, et envie de se retrouver autour d&apos;une
        histoire, d&apos;un décor, d&apos;un instant.
      </p>
      <p>
        Ces douze moments sur les bancs/places de Charonne et Text, aux quatre
        coins de Paris, dans des intérieurs ou des paysages de l&apos;été, nous
        ont permis de nous retrouver, de nous amuser, de nous découvrir, de nous
        révéler parfois. J&apos;espère que vous prendrez autant de plaisir à les
        regarder que nous en avons eu à les faire.
      </p>
      <p>
        Prenez-en soin, ce sont des souvenirs, les nôtres, et bientôt les
        vôtres.
      </p>
      <p></p>
      <p>Avec toute mon affection,</p>
      <p className="text-right">
        <span>Aurélien Goubier-Baker</span>
      </p>
    </div>
  );
};

const Affiche = () => {
  return (
    <Image
      src="/images/capsules/affiche.png"
      alt="Affiche du projet Capsules"
      width={0}
      height={0}
      className="h-auto w-full object-contain"
    />
  );
};

export default function DocumentairePage() {
  return (
    <>
      <div className="flex min-h-[calc(100dvh-theme(height.16))] md:min-h-[calc(100dvh-theme(height.20))] lg:min-h-dvh">
        {/* Desktop */}
        <div className="hidden w-full flex-row p-32 xl:flex">
          <div className="flex flex-1 flex-col items-center justify-around px-[10%]">
            <Introduction />
            <Letter />
          </div>
          <div className="flex flex-1 items-center justify-center">
            <Affiche />
          </div>
        </div>

        {/* Little Desktop and Mobile */}
        <div className="flex w-full flex-col items-center space-y-8 p-4 lg:mt-16 xl:hidden">
          <Introduction />
          <div className="flex flex-col items-center justify-center">
            <Affiche />
          </div>
          <Letter />
        </div>
      </div>

      {capsulePresentationData.map(capsulePresentation => (
        <FilmPresentation
          key={capsulePresentation.id}
          {...capsulePresentation}
        />
      ))}
    </>
  );
}
