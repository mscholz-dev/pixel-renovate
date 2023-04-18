import React, {
  FC,
  useRef,
  useEffect,
} from "react";
import Page from "@/templates/layouts/Page";
import DataMeta from "@/utils/data/meta.json";

const MentionsLegales: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleFullHeight = () => {
    if (!sectionRef.current) return;

    const footer =
      document.getElementById("footer");

    if (!footer) return;

    sectionRef.current.style.minHeight = `calc(100vh - ${footer.offsetHeight}px - 96px)`;
  };

  useEffect(() => {
    handleFullHeight();
    window.addEventListener(
      "resize",
      handleFullHeight,
    );
  }, []);

  return (
    <Page
      title="Mentions légales"
      description={DataMeta.description}
      padding
    >
      <section
        ref={sectionRef}
        className="legal-notice"
      >
        <article>
          <h1>Mentions légales</h1>

          <h2>Pixel Renovate</h2>

          <ul>
            <li>
              Type d&apos;entreprise : À
              renseigner
            </li>
            <li>Siège social : À renseigner</li>
            <li>SIRET : À renseigner</li>
            <li>Responsable : Morgan SCHOLZ</li>
            <li>
              Contact :{" "}
              <a href="mailto:pixelrenovate@gmail.com">
                pixelrenovate@gmail.com
              </a>
            </li>
          </ul>

          <h2>Hébergement</h2>

          <ul>
            <li>VERCEL</li>
            <li>Vercel Inc.</li>
            <li>340 S Lemon Ave #4133</li>
            <li>Walnut, CA 91789</li>
            <li>
              <a
                href="https://vercel.com"
                target="_blank"
              >
                https://vercel.com
              </a>
            </li>
          </ul>
        </article>
      </section>
    </Page>
  );
};

export default MentionsLegales;
