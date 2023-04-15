import React, { FC } from "react";
import Wrapper from "@/templates/layouts/Wrapper";
import dynamic from "next/dynamic";
const Map = dynamic(
  () => import("@/templates/components/Map"),
  { ssr: false },
);
import IconPin from "@/public/icons/pin.svg";
import Image from "next/image";
import IconWarning from "@/public/icons/warning.svg";

// types
import { THomeSchedules } from "@/utils/types";

const HomeSchedule: FC = () => {
  const currentDayNumber =
    (new Date().getDay() + 6) % 7;

  const schedules: THomeSchedules = [
    {
      id: 0,
      day: "Lundi",
      hours: "09:00 - 18:00",
    },
    {
      id: 1,
      day: "Mardi",
      hours: "09:00 - 18:00",
    },
    {
      id: 2,
      day: "Mercredi",
      hours: "09:00 - 18:00",
    },
    {
      id: 3,
      day: "Jeudi",
      hours: "09:00 - 18:00",
    },
    {
      id: 4,
      day: "Vendredi",
      hours: "09:00 - 18:00",
    },
    {
      id: 5,
      day: "Samedi",
      hours: "12:00 - 16:00",
    },
    {
      id: 6,
      day: "Dimanche",
      hours: "12:00 - 16:00",
    },
  ];

  return (
    <Wrapper className="wrapper-padding-y home-schedule">
      <div className="home-schedule-all">
        <h2 className="title-secondary home-schedule-title">
          Pixel Renovate
        </h2>

        <Image
          src="/img/logo.png"
          alt="Logo de Pixel Renovate"
          width={32}
          height={32}
          className="home-schedule-decoration-img"
        />

        <IconPin className="home-schedule-decoration-icon" />

        <div className="home-schedule-main">
          <Map />

          <article className="home-schedule-article">
            <h3 className="title-tertiary home-schedule-subtitle">
              Horaires de prise en charge
            </h3>

            <div className="home-schedule-wrapper">
              {schedules.map(
                ({ id, day, hours }) => (
                  <div
                    key={id}
                    className={`home-schedule-item${
                      currentDayNumber === id
                        ? " home-schedule-item-current"
                        : ""
                    }`}
                  >
                    <p className="home-schedule-item-day">
                      {day}
                    </p>

                    <p className="home-schedule-item-hours">
                      {hours}
                    </p>
                  </div>
                ),
              )}
            </div>
          </article>
        </div>

        <article className="home-schedule-emergency">
          <h3>
            <IconWarning className="home-schedule-emergency-icon" />
            Dépannage d&apos;urgence disponible
            24/7
          </h3>

          <p>
            Si vous êtes confronté à une urgence
            informatique, ne paniquez pas ! Pixel
            Renovate est là pour vous aider. Nous
            proposons un service de dépannage
            d&apos;urgence pour résoudre
            rapidement tous les problèmes que vous
            pourriez rencontrer avec votre
            matériel informatique.
          </p>
          <p>
            Que ce soit une panne soudaine, une
            infection virale ou une perte de
            données, notre équipe de techniciens
            qualifiés est là pour intervenir
            rapidement et efficacement. Nous
            comprenons l&apos;importance de votre
            ordinateur pour votre travail ou votre
            vie personnelle, c&apos;est pourquoi
            nous sommes déterminés à réparer votre
            matériel aussi rapidement que
            possible, tout en vous offrant un
            service de qualité.
          </p>
          <p>
            Contactez-nous dès maintenant pour
            bénéficier de notre service de
            dépannage d&apos;urgence et retrouvez
            rapidement votre ordinateur en parfait
            état de fonctionnement.
          </p>
        </article>
      </div>
    </Wrapper>
  );
};

export default HomeSchedule;
