import React, { FC } from "react";
import IconInstagram from "@/public/icons/instagram.svg";
import IconGithhub from "@/public/icons/github.svg";
import IconYoutube from "@/public/icons/youtube.svg";
import IconLinkedin from "@/public/icons/linkedin.svg";
import IconLogo from "@/public/icons/logo.svg";
import IconCopyright from "@/public/icons/copyright.svg";
import Link from "next/link";
import { motion } from "framer-motion";

// types
import { TFooterSocialLinks } from "@/utils/types";

// classes
import FramerMotion from "@/utils/FramerMotion";

const Footer: FC = () => {
  const socialLinks: TFooterSocialLinks = [
    {
      id: 0,
      icon: <IconInstagram />,
      url: "https://www.instagram.com/pixelrenovatepro/",
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
              <motion.a
                key={id}
                href={url}
                target="_blank"
                title={title}
                className="footer-social-link-item"
                // motion
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={
                  FramerMotion.viewportOne
                }
                transition={{
                  ...FramerMotion.transitionEaseInOut(
                    0.5,
                  ),
                  delay: id * 0.1,
                }}
              >
                {icon}
              </motion.a>
            ),
          )}
        </div>

        <motion.div
          // motion
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={FramerMotion.viewportOne}
          transition={FramerMotion.transitionEaseInOut(
            1,
          )}
        >
          <Link href="/" className="footer-brand">
            <IconLogo className="footer-brand-logo" />
            <h2 className="footer-brand-title">
              Pixel Renovate
            </h2>
          </Link>
        </motion.div>

        <motion.div
          className="footer-copyright"
          // motion
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={FramerMotion.viewportOne}
          transition={FramerMotion.transitionEaseInOut(
            1,
          )}
        >
          <IconCopyright className="footer-copyright-icon" />
          <p className="footer-copyright-text">
            2023 Pixel Renovate. Tous droits
            réservés
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
