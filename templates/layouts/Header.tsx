import React, { FC, useState } from "react";
import Link from "next/link";
import IconLogo from "../../public/icons/logo.svg";
import IconBurgerMenu from "../../public/icons/burger-menu.svg";
import IconComputer from "../../public/icons/computer.svg";
import IconConsole from "../../public/icons/console.svg";
import IconMobile from "../../public/icons/mobile.svg";

// types
import { THeaderLinks } from "../../utils/types";

const Header: FC = () => {
  const [open, setOpen] =
    useState<boolean>(false);

  const handleOpen = () => setOpen(!open);

  const links: THeaderLinks = [
    {
      id: 0,
      url: "ordinateurs",
      title: "Ordinateurs",
      icon: <IconComputer />,
    },
    {
      id: 1,
      url: "consoles",
      title: "Consoles",
      icon: <IconConsole />,
    },
    {
      id: 2,
      url: "mobiles",
      title: "Mobiles",
      icon: <IconMobile />,
    },
  ];

  return (
    <header
      className={`header${
        open ? " header-open" : ""
      }`}
    >
      <div className="header-wrapper">
        <Link href="/" className="header-brand">
          <IconLogo className="header-brand-logo" />
          <h1 className="header-brand-title">
            Pixel Skill
          </h1>
        </Link>

        <div className="header-category">
          {links.map(
            ({ id, url, title, icon }) => (
              <Link
                key={id}
                href={`/${url}`}
                className="header-category-item"
              >
                <span className="header-category-item-icon">
                  {icon}
                </span>
                <span className="header-category-item-title">
                  {title}
                </span>
              </Link>
            ),
          )}
        </div>

        <IconBurgerMenu
          className="header-burger"
          onClick={handleOpen}
        />
      </div>
    </header>
  );
};

export default Header;
