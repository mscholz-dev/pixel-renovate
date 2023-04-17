import React, { FC } from "react";
import Wrapper from "@/templates/layouts/Wrapper";
import Typist from "react-text-typist";
import Link from "next/link";
import IconLogo from "@/public/icons/logo.svg";
import IconComment from "@/public/icons/comments.svg";

const Home: FC = () => {
  const sentences: string[] = [
    "Diagnostic complet de votre machine 💻",
    "Nettoyage de votre console 🎮",
    "Réparation de votre ordinateur 💻",
    "Réparation de tout type de manette 🎮",
  ];

  return (
    <Wrapper className="home">
      <div className="home-main">
        <h2 className="home-title">
          <IconLogo className="home-title-logo" />
          Pixel Renovate
        </h2>

        <div className="home-typing-container">
          <Typist
            sentences={sentences}
            defaultText={sentences[0]}
            deletingSpeed={50}
            typingSpeed={100}
            startDelay={1000}
            cursorSmooth
            className="home-typing"
          />
        </div>

        <Link
          href={{
            pathname:
              "/demande-de-prise-en-charge/[service]",
            query: { service: "" },
          }}
          className="home-link"
        >
          Demander une prise en charge
          <IconComment className="home-link-icon" />
        </Link>
      </div>
    </Wrapper>
  );
};

export default Home;
