import React, { FC } from "react";
import IconInstagram from "@/public/icons/instagram.svg";
import IconGithhub from "@/public/icons/github.svg";
import IconYoutube from "@/public/icons/youtube.svg";
import IconLinkedin from "@/public/icons/linkedin.svg";
import IconLogo from "@/public/icons/logo.svg";
import IconCopyright from "@/public/icons/copyright.svg";

// types
import { TFooterSocialLinks } from "@/utils/types";
import Link from "next/link";

const Footer: FC = () => {
  const socialLinks: TFooterSocialLinks = [
    {
      // TODO:
      id: 0,
      icon: <IconInstagram />,
      url: "https://google.com",
      title: "Instagram de Pixel Renovate",
    },
    {
      id: 1,
      icon: <IconLinkedin />,
      url: "https://www.linkedin.com/in/morgan-scholz",
      title: "Linkedin de Morgan Scholz",
    },
    {
      id: 2,
      icon: <IconGithhub />,
      url: "https://github.com/mscholz-dev",
      title: "Github de Morgan Scholz",
    },
    {
      id: 3,
      icon: <IconYoutube />,
      url: "https://www.youtube.com/channel/UCt8pZeMk5xBHr0P_5r6FRBg",
      title: "Chaîne Youtube de Morgan Scholz",
    },
  ];

  return (
    <footer id="footer" className="footer">
      <div className="footer-main">
        <div className="footer-social-link">
          {socialLinks.map(
            ({ id, icon, url, title }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                title={title}
                className="footer-social-link-item"
              >
                {icon}
              </a>
            ),
          )}
        </div>

        <Link href="/" className="footer-brand">
          <IconLogo className="footer-brand-logo" />
          <h2 className="footer-brand-title">
            Pixel Renovate
          </h2>
        </Link>

        <div className="footer-copyright">
          <IconCopyright className="footer-copyright-icon" />
          <p className="footer-copyright-text">
            2023 Pixel Renovate. Tous droits
            réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
