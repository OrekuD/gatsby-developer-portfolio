import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled(motion.h6)`
  color: ${({ theme }) => theme.text};
  font-size: 22px;
  font-family: "JosefinR";
`;

export const Item = styled(motion.p)`
  margin-right: 30px;
  font-size: 18px;
  font-family: "JosefinR";
`;

export const ThemeButton = styled(motion.button)`
  background-color: ${({ theme: { text } }) => text};
  color: ${({ theme: { main } }) => main};
  padding: 10px 10px;
`;
