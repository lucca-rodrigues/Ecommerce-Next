import Head from "next/head";
import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const Container = styled.footer`
  display: table;
  width: 100%;
  background-color: #e0e0e0;
  color: ${Colors.default};
  padding: 20px 50px;
  // margin-top: 100px;
`;
