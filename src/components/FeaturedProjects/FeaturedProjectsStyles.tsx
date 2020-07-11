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
