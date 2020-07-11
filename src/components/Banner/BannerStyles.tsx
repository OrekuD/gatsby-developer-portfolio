import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  height: 300px;
  width: 40%;
  color: ${({ theme: { text } }) => text};
`;

export const Title = styled(motion.p)`
  font-family: "JosefinR";
  margin: 20px 0;
  font-size: 22px;
`;

export const Subtitle = styled(motion.h6)`
  font-family: "JosefinT";
  margin: 20px 0;
  font-size: 18px;
  line-height: 22px;
`;

export const Button = styled(motion.div)`
  background-color: ${({ theme: { secondary } }) => secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  margin-top: 30px;
  cursor: pointer;

  p {
    margin-left: 10px;
    margin-right: 0;
    font-family: "JosefinR";
    font-size: 16px;
    color: #ffffff;
  }
  svg {
    z-index: 10;
    margin-right: -20px;
  }
`;
