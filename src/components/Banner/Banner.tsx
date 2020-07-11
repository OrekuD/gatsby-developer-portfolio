import React from "react";
import { Container, Title, Subtitle } from "./BannerStyles";
import { aboutMe, skillSet } from "../../data/about";

const container = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
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
    transition: { duration: 0.8 }
  }
};
const Banner: React.FC = () => {
  return (
    <Container variants={container} initial="initial" animate="animate">
      <Title variants={variant}>Hi I'm David,</Title>
      <Subtitle variants={variant}>{aboutMe}</Subtitle>
      <Subtitle variants={variant}>{skillSet}</Subtitle>
    </Container>
  );
};

export default Banner;
