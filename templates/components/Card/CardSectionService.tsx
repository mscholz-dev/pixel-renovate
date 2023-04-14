import React, {
  FC,
  useRef,
  useEffect,
} from "react";
import CardService from "./CardService";

// interfaces
import { ICardSectionService } from "../../../utils/interfaces";

const CardSectionService: FC<
  ICardSectionService
> = ({ title, items, service, servicePath }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // set footer at the bottom of the screen if content is tiny
  const handleFullHeight = () => {
    if (!sectionRef.current) return;

    const footer =
      document.getElementById("footer");

    if (!footer) return;

    sectionRef.current.style.minHeight = `calc(100vh - 96px - ${footer.offsetHeight}px - 48px)`;
  };

  useEffect(() => {
    handleFullHeight();
    window.addEventListener(
      "resize",
      handleFullHeight,
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="card-service-section"
    >
      {title}

      <article className="card-service-article">
        {items.map(
          ({
            id,
            img,
            title,
            time,
            price,
            url,
          }) => (
            <CardService
              key={id}
              img={img}
              title={title}
              time={time}
              price={price}
              url={url}
              service={service}
              servicePath={servicePath}
            />
          ),
        )}
      </article>
    </section>
  );
};

export default CardSectionService;
