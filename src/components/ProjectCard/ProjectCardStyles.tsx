import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 700px;
  height: 350px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row-reverse;

  ${props =>
    props.left &&
    css`
      align-self: flex-end;
      flex-direction: row;
    `}
`;

export const ProjectDetails = styled.div`
  width: 240px;
  height: 100%;
  background-color: ${({ theme: { text } }) => text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProjectImage = styled.div`
  width: 460px;
  height: 100%;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const ProjectName = styled.p`
  font-family: "JosefinR";
  font-size: 20px;
  color: ${({ theme: { main } }) => main};
`;

export const ProjectDescription = styled.p`
  font-family: "JosefinR";
  font-size: 16px;
  color: ${({ theme: { main } }) => main};
  margin-top: 15px;
`;

export const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Badge = styled.div`
  width: fit-content;
  padding: 5px 10px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { main } }) => main};
  margin-right: 10px;

  p {
    color: ${({ theme: { text } }) => text};
    text-transform: uppercase;
    font-size: 12px;
    font-family: "JosefinR";
    margin-top: 2px;
  }
`;
