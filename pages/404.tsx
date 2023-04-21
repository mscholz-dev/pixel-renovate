import React, {
  FC,
  useRef,
  useEffect,
} from "react";
import Page from "@/templates/layouts/Page";
import DataMeta from "@/utils/data/meta.json";
import dynamic from "next/dynamic";
import Link from "next/link";
const WebGlBackground = dynamic(
  () =>
    import(
      "@/templates/components/WebGlBackground"
    ),
  { ssr: false },
);

const NotFound: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleFullHeight = () => {
    if (!sectionRef.current) return;

    const footer =
      document.getElementById("footer");

    if (!footer) return;

    sectionRef.current.style.minHeight = `calc(100vh - ${footer.offsetHeight}px)`;
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
      title="Page non trouvée"
      description={DataMeta.meta404}
      noBackgroundAnim
    >
      <section
        ref={sectionRef}
        className="not-found-section"
      >
        <WebGlBackground />

        <article className="not-found">
          <h2 className="not-found-title">
            Cette page n&apos;existe pas ou plus.
          </h2>

          <p className="not-found-text">
            Malgré une équipe acharnée partie à sa
            recherche, la page que vous recherchez
            reste introuvable...
          </p>

          <Link
            href="/"
            className="not-found-btn"
          >
            Retourner à la page d&apos;accueil
          </Link>
        </article>
      </section>
    </Page>
  );
};

export default NotFound;
