import React, {
  FC,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import IconQuestion from "@/public/icons/question.svg";
import IconClipboardQuestion from "@/public/icons/clipboard-question.svg";
import HTMLReactParser from "html-react-parser";
import { motion } from "framer-motion";

// data
import faqData from "@/utils/data/faq";

// classes
import FramerMotion from "@/utils/FramerMotion";

const HomeFaq: FC = () => {
  const articleRef = useRef<HTMLDivElement>(null);

  const [currentId, setCurrentId] = useState<
    number | null
  >(null);

  const handleQuestionClick = (
    e: MouseEvent<HTMLDivElement>,
  ): void => {
    if (!articleRef.current) return;

    for (const element of articleRef.current
      .children) {
      const containerHeight =
        element.children[2].clientHeight;

      if (containerHeight !== 0) {
        (
          element.children[2] as HTMLDivElement
        ).style.height = "0px";
      }
    }

    const containerHeight = (
      e.target as HTMLDivElement
    ).children[2].clientHeight;

    if (containerHeight !== 0) {
      (
        (e.target as HTMLDivElement)
          .children[2] as HTMLDivElement
      ).style.height = "0px";

      setCurrentId(null);

      return;
    }

    const textHeight = (
      e.target as HTMLDivElement
    ).children[2].children[0].clientHeight;

    (
      (e.target as HTMLDivElement)
        .children[2] as HTMLDivElement
    ).style.height = `${textHeight}px`;

    setCurrentId(
      parseInt(
        (e.target as HTMLDivElement).attributes[
          "meta-id" as keyof object
        ].value || "",
      ) || 0,
    );

    return;
  };

  const handleResize = () => {
    if (!articleRef.current) return;

    for (const element of articleRef.current
      .children) {
      const containerHeight =
        element.children[2].clientHeight;

      if (containerHeight !== 0) {
        const textHeight =
          element.children[2].children[0]
            .clientHeight;

        (
          element.children[2] as HTMLDivElement
        ).style.height = `${textHeight}px`;
        return;
      }
    }
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      handleResize,
    );
  }, []);

  return (
    <section className="wrapper-padding-y home-faq">
      <motion.span
        className="home-faq-clipboard-question"
        // motion
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={FramerMotion.transitionEaseInOut(
          0.5,
        )}
      >
        <IconClipboardQuestion />
      </motion.span>

      <div className="home-faq-main">
        <motion.h2
          className="title-secondary home-faq-title"
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
          Questions fréquemment posées
        </motion.h2>

        <article ref={articleRef}>
          {faqData.map(
            ({ id, title, content }) => (
              <motion.div
                key={id}
                meta-id={id}
                className={`home-faq-item${
                  currentId === id
                    ? " home-faq-item-current"
                    : ""
                }`}
                tabIndex={0}
                onClick={handleQuestionClick}
                // motion
                initial={{
                  opacity: 0,
                  x: id % 2 === 0 ? -300 : 300,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={
                  FramerMotion.viewportOne
                }
                transition={FramerMotion.transitionEaseInOut(
                  1,
                )}
              >
                <h3 className="home-faq-item-title">
                  {title}
                </h3>

                <div className="home-faq-item-icon">
                  <IconQuestion />
                </div>

                <div className="home-faq-item-container">
                  <div>
                    {HTMLReactParser(content)}
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </article>
      </div>
    </section>
  );
};

export default HomeFaq;
