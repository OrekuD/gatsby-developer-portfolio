import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 400px;
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(motion.div)`
  transform: rotate(90deg);
  width: 120px;
  height: 100px;
  margin-top: 20px;
  display: flex;
  align-items: center;

  p {
    font-size: 18px;
    font-family: "JosefinR";
  }
`;

export const Icons = styled(motion.div)`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
`;

export const VerticalLine = styled.div`
  height: 100px;
  width: 2px;
  background-color: ${({ theme: { text } }) => text};
  margin: 0;
`;

export const Icon = styled(motion.a)``;
