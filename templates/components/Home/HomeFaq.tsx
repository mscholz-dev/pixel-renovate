import React, {
  FC,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Wrapper from "@/templates/layouts/Wrapper";
import IconQuestion from "@/public/icons/question.svg";
import IconClipboardQuestion from "@/public/icons/clipboard-question.svg";
import HTMLReactParser from "html-react-parser";

// data
import faqData from "@/utils/data/faq";

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
    <Wrapper className="wrapper-padding-y home-faq">
      <>
        <IconClipboardQuestion className="home-faq-clipboard-question" />

        <div className="home-faq-main">
          <h2 className="title-secondary home-faq-title">
            Questions fréquemment posées
          </h2>

          <article ref={articleRef}>
            {faqData.map(
              ({ id, title, content }) => (
                <div
                  key={id}
                  meta-id={id}
                  className={`home-faq-item${
                    currentId === id
                      ? " home-faq-item-current"
                      : ""
                  }`}
                  tabIndex={0}
                  onClick={handleQuestionClick}
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
                </div>
              ),
            )}
          </article>
        </div>
      </>
    </Wrapper>
  );
};

export default HomeFaq;
