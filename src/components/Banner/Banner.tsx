import React, { useContext, useState } from "react";
import { Container, Title, Subtitle, Button } from "./BannerStyles";
import { aboutMe, skillSet } from "../../data/about";
import { Context } from "../../context/context";
import { motion } from "framer-motion";
import { light } from "../../constants/Colors";

const container = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0,
      when: "beforeChildren",
      staggerChildren: 0.4
    }
  }
};

const variant = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, type: "tween" }
  }
};

const Banner: React.FC = () => {
  const { darkTheme } = useContext(Context);
  const [hovered, setHovered] = useState(false);
  return (
    <Container variants={container} initial="initial" animate="animate">
      <Title variants={variant}>Hi, I'm David</Title>
      <Subtitle variants={variant}>{aboutMe}</Subtitle>
      <Subtitle variants={variant}>{skillSet}</Subtitle>

      <Button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        variants={variant}
      >
        <p> Contact me </p>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 32 32"
          animate={{
            x: hovered ? 7 : 0
          }}
          transition={{
            duration: 0.6,
            ease: [0.6, 0.05, -0.01, 0.9]
          }}
        >
          <path
            d="M21.188 9.28l-1.407 1.44L24.063 15H4v2h20.063l-4.282 4.28l1.407 1.44l6-6l.72-.72l-.72-.72l-6-6z"
            fill={darkTheme ? "#ffffff" : light.text}
          />
          <rect x="0" y="0" width="32" height="32" fill="rgba(0, 0, 0, 0)" />
        </motion.svg>
      </Button>
    </Container>
  );
};

export default Banner;
