import Head from "next/head";
import styled from "styled-components";
import { Colors } from "../../styles/colors.js";

export const Container = styled.div`
  width: 50px;
  height: 50px;
  // background-color: ${(props) => props.color ?? Colors.grey};
  color: ${Colors.green};
  border: 1px solid ${Colors.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin: 10px 10px 10px 0px;
`;
