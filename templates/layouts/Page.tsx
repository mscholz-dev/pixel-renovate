import React, { FC } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import BackgroundAnim from "./BackgroundAnim";
import { ToastContainer } from "react-toastify";

// interfaces
import { IPage } from "../../utils/interfaces";

const Page: FC<IPage> = ({
  children,
  title,
  description,
  padding,
  className,
  noBackgroundAnim,
}) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <title>{`PIXEL RENOVATE • ${title}`}</title>
        <meta
          name="description"
          content={description}
        />
        <meta
          name="robots"
          content="index, follow"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main
        className={`main${
          padding ? " main-padding" : ""
        }${className ? ` ${className}` : ""}`}
      >
        {children}
      </main>

      {/* {!noBackgroundAnim && <BackgroundAnim />} */}

      <ToastContainer />

      <Footer />
    </>
  );
};

export default Page;
