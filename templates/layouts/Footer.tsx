import React, { FC } from "react";
import IconInstagram from "@/public/icons/instagram.svg";
import IconGithub from "@/public/icons/github.svg";
import IconDiscord from "@/public/icons/discord.svg";
import IconYoutube from "@/public/icons/youtube.svg";
import IconFacebook from "@/public/icons/facebook.svg";
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
      icon: <IconYoutube />,
      url: "https://www.youtube.com/@PixelRenovate",
      title: "Chaîne Youtube de Pixel Renovate",
    },
    {
      id: 2,
      icon: <IconFacebook />,
      url: "https://www.facebook.com/people/Pixel-Renovate/pfbid0mW6hjwwHMNGEwdAWwyHrZqrDqRAAkJbkGmA9WTHdYnjHKGJz1CeUdxqFTKPdWKHql/",
      title: "Facebook de Pixel Renovate",
    },
    {
      id: 3,
      icon: <IconDiscord />,
      url: "https://discord.gg/KGABHSDG",
      title: "Discord de Pixel Renovate",
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
            2023 Pixel Renovate.{" "}
            <Link
              href="/mentions-legales"
              className="footer-legal-notice"
            >
              Mentions légales
            </Link>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
