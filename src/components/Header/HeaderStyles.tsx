import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled(motion.h6)`
  font-size: 22px;
  font-family: "JosefinR";
`;

export const Item = styled(motion.p)`
  margin-right: 30px;
  font-size: 18px;
  font-family: "JosefinR";
  position: relative;

  &::after {
    content: "";
    position: absolute;
    margin-top: 4px;
    display: block;
    width: 0;
    right: 0;
    height: 3px;
    background-color: ${({ theme: { secondary } }) => secondary};
    transition: 0.4s ease;
  }

  &:hover {
    &::after {
      width: 100%;
      left: 0;
    }
  }
`;

export const ThemeButton = styled(motion.button)`
  background-color: ${({ theme: { text } }) => text};
  color: ${({ theme: { main } }) => main};
  padding: 10px 10px;
`;
