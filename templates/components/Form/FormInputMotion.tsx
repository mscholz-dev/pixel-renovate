import React, { FC } from "react";
import { motion } from "framer-motion";

// interfaces
import { IFormInputMotion } from "@/utils/interfaces";

// classes
import FramerMotion from "@/utils/FramerMotion";

const FormInputMotion: FC<IFormInputMotion> = ({
  children,
  delay,
}) => {
  return (
    <motion.div
      // motion
      initial={{
        opacity: 0,
        x: -100,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      viewport={FramerMotion.viewportOne}
      transition={{
        ...FramerMotion.transitionEaseInOut(0.5),
        delay: delay / 4,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FormInputMotion;
